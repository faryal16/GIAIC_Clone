import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

// import "./styles.css"; // Import the CSS file

const Page = () => {
  return (
    <div className="container">
      {/* Logo Section */}
      <Link href="/">
        <Image
          alt="logo"
          src="/images/logo.png"
          className="logo"
          loading="lazy"
          decoding="async"
          width={90}
          height={100}
        />
      </Link>

      {/* Heading */}
      <div>
        <h1 className="heading-lg">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <h1 className="heading">Tuition Free Program</h1>
      </div>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <Link href="/">
          <div className="nav-link">home</div>
        </Link>
        <Link href="/apply">
          <div className="nav-link">apply</div>
        </Link>
        <Link href="/jobs">
          <div className="nav-link">jobs</div>
        </Link>
        <Link href="/result">
          <div className="nav-link">result</div>
        </Link>
        <Link href="/courses">
          <div className="nav-link">courses</div>
        </Link>

        
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu  ">
      <Sheet >
  <SheetTrigger>
    <Menu/>
  </SheetTrigger>
  <SheetContent >
  
  <div className="dropdown">
        <Link href="/">
          <div className="nav-link">home</div>
        </Link>
        <Link href="/apply">
          <div className="nav-link">apply</div>
        </Link>
        <Link href="/jobs">
          <div className="nav-link">jobs</div>
        </Link>
        <Link href="/result">
          <div className="nav-link">result</div>
        </Link>
        <Link href="/courses">
          <div className="nav-link">courses</div>
        </Link>

        
      </div>

        
      
  </SheetContent>
</Sheet>

      </div>
    </div>
  );
};

export default Page;
