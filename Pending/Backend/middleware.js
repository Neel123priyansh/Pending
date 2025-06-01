import { Schema } from "mongoose";

const validate = (schema) => async(req, res, next) => {
    try {
        const parseBody = await schema.parsAsync(req.body)
        req.body = parseBody;
        next()
    } catch (err) {
        console.log(err)
        const message = err.errors ? err.errors[0].message : "Invalid Request Data";
        console.log(message)
        res.status(400).json({msg : message})
    }
}
export default validate