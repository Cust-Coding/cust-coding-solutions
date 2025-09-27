import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  const logocss = [
    { title: "logo cust coding solutions" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-screen  m-0 p-0 py-4 flex items-center justify-center z-50">
      
      <div className="menu flex items-center justify-around my-2 border-1 border-dashed rounded-xl py-4 w-[94%] md:w-[calc(100%-30%)]">
        <Link href="/" className="">
          <Image
            src={"/logoccs.svg"}
            alt={logocss[0].title}
            width={120}   
            height={50}  
            priority
          />
      </Link>

        <Nav/>
      </div>

    </header>
  );
}
