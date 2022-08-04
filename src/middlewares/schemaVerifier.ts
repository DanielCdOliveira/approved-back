import { NextFunction, Request, Response } from "express"

export default  function schemaVerifier (schema:any){
   return (req:Request, res:Response, next:NextFunction) => {
       const { error } =  schema.validate(req.body, { abortEarly: false })
       if (error) {
         return res
           .status(422)
           .send(error.details.map((detail:any) => detail.message))
       }
       next()
     }
}