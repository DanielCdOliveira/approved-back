import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/authRepository.js";
dotenv.config();

export async function signUp(req, res) {
  const user = req.body;
  try {
    const SALT = 10;
    const passwordHash = bcrypt.hashSync(user.password, SALT);
    await authRepository.registerUser(user.name, user.email, passwordHash);
    return res.sendStatus(201);
  } catch (error) {
    if (error.code === "23505") return res.status(409).send(error.detail);
    return res.status(500).send(error);
  }
}

export async function signIn(req, res) {
  try {
    const user = (await authRepository.verifyUser(req.body.email)).rows[0];
    if (!user) return res.sendStatus(401);

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const key = process.env.JWT_SECRET;
      const expiresAt = { expiresIn: 60 * 60 * 24 };

      const sessionId = (
        await authRepository.createSession(user.id)
      ).rows[0].id;
      const token = jwt.sign({ sessionId, userId: user.id }, key, expiresAt);
      return res
        .status(200)
        .send({ token, userId: user.id, name: user.name });
    }
    return res.sendStatus(401);
  } catch (error) {
    return res.sendStatus(500);
  }
}