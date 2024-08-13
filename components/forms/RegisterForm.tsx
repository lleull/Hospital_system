
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
import CustomFormField, { FormFieldType } from "../ui/customFormField"
import Usericon from "/assets/icons/user.svg"
import Emailicon from "/assets/icons/email.svg"
import SubmitButton from "../ui/SubmitButton"
import { useState } from "react"
import UserFormValidation from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/action/patient.actions"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { GenderOption } from "@/constants"
import { Label } from "../ui/label"

const RegisterForm = ({ user }: any) => {
    const router = useRouter()
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

        console.log("Working1")
        try {
            const user = { name, phone, email }

            const userData = await createUser(user)

            console.log("Working2", userData)
            if (userData) router.push(`/patients/${userData.$id}/register`)



        } catch (e) {
            console.log("e", e)

        }
        setisLoading(false)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">
                        Welcome 👋
                    </h1>
                    <p className="text-dark-700">Let us know more about yourself.</p>
                </section>
                <section className=" space-y-6">
                    <div className="mb-9 space-y-1 ">
                        <p className="sub-header">Personal Information.</p>
                    </div>
                </section>

                <CustomFormField
                    name="name"
                    iconsAlt="user"
                    iconSrc={Usericon}
                    placeholder="Gebereal Hiru"
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                />
                <div className="flex flex-col gap-6 xl:flex-row">
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
                        iconsAlt="phone"
                    />

                </div>
                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        name="birthDate"
                        iconsAlt="Email"
                        label="date of birth"
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                    />
                    <CustomFormField
                        name="gender"
                        label="Gender"
                        placeholder="+(251) 965787899"
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        iconsAlt="gender"
                        renderSkeleton={(field) => (

                            <FormControl>
                                <RadioGroup className="flex h-11 gap-6 xl:justify-between" onValueChange={field.onChange} defaultValue={field.value}>
                                    {GenderOption.map((list) => {
                                        <div key={list} className="radio-group">
                                            <RadioGroupItem value={list} id={list} />
                                            <Label htmlFor={list} className="cursor-pointer">
                                                {list}
                                            </Label>

                                        </div>
                                        return list
                                    })}

                                </RadioGroup>

                            </FormControl>
                        )
                        }

                    />

                </div>

                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
                {/* <Button type="submit">Submit</Button> */}
            </form>
        </Form >
    )
}

export default RegisterForm