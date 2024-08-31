"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sidebar as ImportedSidebar, SidebarBody as ImportedSidebarBody, SidebarLink as ImportedSidebarLink } from '@/components/ui/sidebar'; 
import { IconHome, IconDashboard, IconUser, IconSettings, IconLogout } from "@tabler/icons-react"; 
import { MdWarningAmber } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import Header from '@/components/Header';

const Sidebar = ImportedSidebar;
const SidebarBody = ImportedSidebarBody;
const SidebarLink = ImportedSidebarLink;

const Logo = () => (
  <Link
    href="#"
    className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative z-20"
  >
    <Image
      src={logo}
      alt="Logo"
      width={40}
      height={40}
      className="rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0"
    />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-white whitespace-pre"
    >
      <h2>LOL Academy</h2>
    </motion.span>
  </Link>
);

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className="flex flex-col h-screen md:flex-row"
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <Sidebar
        open={isSidebarOpen}
        setOpen={setIsSidebarOpen}
      >
        <SidebarBody className="justify-between gap-10 bg-header-custom text-white">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo />
            <div className="mt-8 flex flex-col gap-2">
              <SidebarLink link={{ label: "Home", href: "/", icon: <IconHome className="text-white h-5 w-5" /> }} />
              <SidebarLink link={{ label: "Dashboard", href: "/dashboard", icon: <IconDashboard className="text-white h-5 w-5" /> }} />
              <SidebarLink link={{ label: "Profile", href: "/profile", icon: <IconUser className="text-white h-5 w-5" /> }} />
              <SidebarLink link={{ label: "Settings", href: "/settings", icon: <IconSettings className="text-white h-5 w-5" /> }} />
              <SidebarLink link={{ label: "Logout", href: "/logout", icon: <IconLogout className="text-white h-5 w-5" /> }} />
              <SidebarLink link={{ label: "Feedbacks", href: "/feedbacks", icon: <MdWarningAmber className="text-white h-5 w-5" /> }} />
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="flex-grow z-10">
        <Header />
      </main>
    </div>
  );
}
