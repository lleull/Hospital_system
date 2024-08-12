"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import CustomFormField from "../ui/customFormField"
import Usericon from "/assets/icons/user.svg"
import Emailicon from "/assets/icons/email.svg"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import UserFormValidation from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}
// const formSchema = z.object({
//     name: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
// })
const router = useRouter()

const Patientform = () => {
    // 1. Define your form.
    const [isLoading, setisLoading] = useState(false)
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: ""
        },
    })

    // 2. Define a submit handler.
    async function onSubmit({ name, phone, email }: z.infer<typeof UserFormValidation>) {
        setisLoading(true)


        try {
            // const userdata = { name, phone, email }
            // const user = await createUser(userdata)
            // if (user) router.push(`/patients/${user.$id}/register`)



        } catch (e) {
            console.log("e", e)

        }
        setisLoading(false)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">
                        Hi, There👋
                    </h1>
                    <p className="text-dark-700">Schedule your first appointment.</p>
                </section>

                <CustomFormField
                    name="name"
                    iconsAlt="user"
                    label="Full name"
                    iconSrc={Usericon}
                    placeholder="Gebereal Hiru"
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                />
                <CustomFormField
                    name="email"
                    iconsAlt="Email"
                    label="Email"
                    iconSrc={Emailicon}
                    placeholder="Geberea@gmail.com"
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                />
                <CustomFormField
                    name="phone"
                    label="Phone"
                    placeholder="+(251) 965787899"
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                />
                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default Patientform