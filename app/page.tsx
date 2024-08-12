import Image from "next/image";
import { Button } from "@/components/ui/button"
import Logos from "/assets/icons/logo-full.svg"
import onBoarding from "/assets/images/onboarding-img.png"

import Patientform from "@/components/forms/Patientform";
import { Link } from "lucide-react";
export default function Home() {
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
            className="mb-12 h-10 w-fit"
          />
          <Patientform />
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
        className="mb-12 h-10 pb-5 pt-5 w-fit side-img max-w-[50%] rounded-l"
      />

    </div>
  );
}

{/* <h1 className="text-3xl underline">Careplus</h1>
<Button>Click Me</Button> */}