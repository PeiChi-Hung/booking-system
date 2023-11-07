"use client"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <nav className="relative flex flex-wrap justify-between items-center lg:h-16 z-10">
      <div className="block lg:hidden">
        <button
          onClick={() => setisOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-2 lg:text-lg lg:flex lg:items-center lg:gap-x-14 leading-relaxed">
          <ul>Orders</ul>
          <ul>Reports</ul>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex flex-row items-center space-x-3">
            <div className="hidden lg:flex lg:flex-col">
              <span className="items-center">abc@gmail.com</span>
              <span className="items-center text-xs">Agent Name</span>
            </div>
            <Avatar className="top-0 right-0 h-7 w-7 md:w-10 md:h-10">
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuItem>
            <Link href="/" className="w-full">
              Sign Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
