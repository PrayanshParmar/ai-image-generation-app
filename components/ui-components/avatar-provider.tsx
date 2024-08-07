import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string | null;
  className?: string;
  name?: string | null;
}

export const AvatarProvider = ({ src, className, name }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={src ?? undefined} />
      <AvatarFallback>{name ?? undefined}</AvatarFallback>
    </Avatar>
  );
};
