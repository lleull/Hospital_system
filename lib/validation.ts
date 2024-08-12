import { z } from "zod"

const UserFormValidation = z.object({
    name: z.string()
        .min(2, "Username must be at least 2 characters.")
        .max(50, "Username must be at least 2 characters."),
    
    email: z.string().email("Inavlid Email Address"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone) ,"Invalid Phone No_")
    

})

export default UserFormValidation