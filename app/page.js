import Link from "next/link";
import NavbarCom from "./Navbar";
import { Slider } from "./Slider";
import { Apartment } from "./Apartment";


export default function Home() {
  return (
    // <Link href="/dashboard">Click Me</Link>
    <>
    <NavbarCom/>
    <Slider/>
    <Apartment/>
    </>
  );
}
