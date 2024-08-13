
import Image from 'next/image'
import React from 'react'
import Logos from "@/assets/icons/logo-icon.svg"
import Patientform from '@/components/forms/Patientform'
import Link from 'next/link'
import onBoarding from "/assets/images/register-img.png"
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/action/patient.actions'


// import { LogIn } from 'lucide-react'
const Register = async ({ params: { userId } }: any) => {
    const user = await getUser(userId)
    return (
        <div className="flex min-h-screen h-screen ">

            {/* Todo Otp Verfiifcation */}
            <section className="remove-scrollbar container my-auto ">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src={Logos}
                        height={1000}
                        width={1000}
                        alt="logo"
                        className="mb-12  w-fit"
                    />
                    {/* <Patientform /> */}
                    <RegisterForm />
                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">

                            © 2016 Care Pulse, All Right reserved
                        </p>
                        <Link href="/?admin=true" className="text-green-500">

                        </Link>

                    </div>
                </div>

            </section>

            <Image
                src={onBoarding}
                height={1000}
                width={1000}
                alt="logo"
                className="side-img max-w-[390px]]"
            />

        </div>
    )
}

export default Register