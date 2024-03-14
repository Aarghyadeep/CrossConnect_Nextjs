import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default function UserAvatar({
  name,
  image,
  className,
} : {
  name: string;
  image: string;
  className?: string;
}) {
  return (
      <Avatar className={cn('bg-white text-black', className)}>
       {image && (
        <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
        />
       )} 
    <AvatarFallback className="bg-white text-black">
      {name?.split(" ")
      .map((n) => n[0])
      .join("")}
    </AvatarFallback>
    </Avatar>
  )
}


