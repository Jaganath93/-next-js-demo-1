import Link from "next/link";
import NavbarCom from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Apartment } from "../components/Apartment";


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
