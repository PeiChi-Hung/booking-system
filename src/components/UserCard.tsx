import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Image from "next/image"

type User =
  | {
      name?: string | null | undefined
      email?: string | null | undefined
      image?: string | null | undefined
    }
  | undefined

type Props = {
  user: User
}

export default function UserCard({ user }: Props) {
  const userImage = user?.image ? (
    <Image
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null

  return (
    <div className="flex flex-row items-center space-x-3">
      <Avatar className="top-0 right-0 h-7 w-7 md:w-10 md:h-10">
        <div className="relative aspect-square h-full w-full">{userImage}</div>
      </Avatar>
      <div className="hidden lg:flex lg:flex-col">
        <span className="items-center">{user?.name}</span>
        <span className="items-center text-xs">{user?.email}</span>
      </div>
    </div>
  )
}
