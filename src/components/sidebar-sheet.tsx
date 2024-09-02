"use client";

import { Button } from "./ui/button";
import { HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet";
import Link from "next/link";
import { IconUser } from "@tabler/icons-react";
import { MdWarningAmber } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";

const SidebarSheet = () => {
  return (
    <SheetContent side="right" className="bg-[#151619] text-white">
      <SheetHeader>
        <SheetTitle className="text-left text-white">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-gray-700 py-5">
        <h2 className="font-bold text-white">Olá, faça seu login!</h2>
        <Button size="icon" variant="ghost">
          <LogInIcon className="text-white" />
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-gray-700 py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2 text-white hover:bg-[#26272b]" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button className="justify-start gap-2 text-white hover:bg-[#26272b]" variant="ghost" asChild>
            <Link href="/academy">
              <RiGraduationCapLine size={18} />
              Academy
            </Link>
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button className="justify-start gap-2 text-white hover:bg-[#26272b]" variant="ghost" asChild>
            <Link href="/profile">
              <IconUser size={18} />
              Profile
            </Link>
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button className="justify-start gap-2 text-white hover:bg-[#26272b]" variant="ghost" asChild>
            <Link href="/feedbacks">
              <MdWarningAmber size={18} />
              Feedbacks
            </Link>
          </Button>
        </SheetClose>
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button variant="ghost" className="justify-start gap-2 text-red-600 hover:bg-[#26272b]">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
