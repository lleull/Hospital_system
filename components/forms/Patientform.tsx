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
export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
} const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const Patientform = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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

                <CustomFormField name="Leul" iconsAlt="user" label="name" iconSrc={Usericon} placeholder="Jhon Doe" fieldType={FormFieldType.INPUT} control={form.control} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default Patientform