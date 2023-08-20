"use client"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <nav>
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

      <div className={isOpen ? "block" : "hidden"}>
        <div className="space-y-1 px-2 pb-3 pt-2 w-[200px]">
          <Avatar className="mb-3">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Reports
          </a>
        </div>
      </div>
    </nav>
  )
}
