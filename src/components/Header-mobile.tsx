import Image from "next/image";
import logo from '../../public/logo.png';
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import name from '../../public/name.png';
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
  return (
    <Card className="bg-header">
      <CardContent className="flex flex-grow items-center justify-between p-2">
        <Link href="/" className="flex items-center text-center">
          <Image
            src={logo} 
            alt="logo FSW Barber"
            width={70}
            height={70}
            className="inline-block"
          />
          <Image 
            src={name} 
            alt="Nome" 
            width={0} 
            height={0} 
            className="inline-block w-auto h-auto max-h-[70px] ml-[-30px] filter invert brightness-0" 
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="bg-[#1a1b1f] text-white rounded border border-[#26272b] hover:bg-[#26272b] focus:outline-none focus:ring-2 focus:ring-[#26272b] focus:ring-offset-2"
            >
              <MenuIcon size={24} />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  );
}

export default Header;
