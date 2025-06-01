import { z } from "zod";

const signSchema = z.object({
    username: z.string({required_error: "Name is required"}).trim().min(3, {message : "Name must be atleast 3 character"}).max(255, {message: "Name not must be 233 character"}),
    email: z.string({required_error: "Email is required"}).trim().min(3, {message: "Email must be atleast 3 character"}).max(255, {message: "Email not must be 233 character"}),
    phone: z.string({required_error: "Phone is required"}).trim().min(10, {message: "Phone must be atleast 3 character"}).max(20, {message: "Phone not must be 233 character"}),
    password: z.string({required_error: "Paswword is required"}).min(7, {message: "Phone must be atleast 3 character"}).max(1024, {message: "Phone not must be 233 character"}),
})  

export default signSchema