import Image from "next/image";
import { Button } from "@/components/ui/button"
import Logos from "/assets/icons/logo-full.svg"
export default function Home() {
  return (
    <div className="flex min-h-screen h-screen ">
      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[496px]">
          <Image
            src={Logos}
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
        </div>

      </section>
    </div>
  );
}

{/* <h1 className="text-3xl underline">Careplus</h1>
<Button>Click Me</Button> */}