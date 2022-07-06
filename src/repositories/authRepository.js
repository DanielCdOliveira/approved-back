import connection from "../config/db.js";

async function registerUser(name, email, password) {
  return connection.query(
    `
      INSERT INTO users
      (name,email,password)
      VALUES ($1,$2,$3)    
      `,
    [name, email, password]
  );
}
async function verifyUser(email) {
  return connection.query(
    `
    SELECT * FROM users
    WHERE email = $1
    `,
    [email]
  );
}
async function createSession(userId) {
  return connection.query(
    `
INSERT INTO sessions
("userId") 
VALUES ($1)
RETURNING id
`,
    [userId]
  );
}

const authRepository = {
  verifyUser,
  createSession,
  registerUser,
};

export default authRepository;