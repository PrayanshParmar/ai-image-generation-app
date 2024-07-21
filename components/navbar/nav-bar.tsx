import Link from "next/link";
import {
  Bell,
  LogOut,
  MountainIcon,
  Search,
  ThumbsUp,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFirebaseAuth } from "@/auth/context/auth-context";
import { AvatarProvider } from "@/components/ui-components/avatar-provider";
import { ActionTooltip } from "@/components/ui-components/tooltip-provider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import NameShorter from "@/lib/name-shorter";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const firebase = useFirebaseAuth();
  const router = useRouter();

  console.log(firebase.user);
  const noAuth = [
    {
      name: "Home",
      href: "/",
      className: " hover:bg-white rounded-full hover:text-black",
    },
    {
      name: "About Us",
      href: "/",
      className: " hover:bg-white rounded-full hover:text-black ",
    },

    {
      name: "Contact",
      href: "/",
      className: " hover:bg-white rounded-full hover:text-black ",
    },
  ];

  const Auth = [
    {
      icon: <Search className="w-5 h-5" />,
      className: "hover:bg-white rounded-full hover:text-black",
      label: "Search Image",
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      className: "hover:bg-white rounded-full hover:text-black",
      label: "Like Image",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      className: "hover:bg-white rounded-full hover:text-black",
      label: "Notifications",
    },
  ];

  if (!firebase.isLoggedIn) {
    return (
      <nav className="flex items-center justify-between px-4 py-2 bg-background border-b md:px-6 rounded-2xl ">
        <ActionTooltip label="AI Image Generator" side="bottom">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
            prefetch={false}
          >
            <MountainIcon className="w-6 h-6" />
          </Link>
        </ActionTooltip>

        <div className="flex items-center gap-4">
          {noAuth.map((values, index) => {
            return (
              <Button
                tabIndex={index}
                className={values.className}
                variant="ghost"
                asChild
              >
                <Link href={values.href}>{values.name}</Link>
              </Button>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Button className=" rounded-full " variant="ghost" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>

          <Button className=" rounded-full " variant="default" asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex items-center justify-between px-4 py-2 bg-background border-b md:px-6 rounded-2xl ">
        <div className="flex items-center gap-2">
          <ActionTooltip label="AI Image Generator" side="bottom">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
              prefetch={false}
            >
              <MountainIcon className="w-6 h-6" />
            </Link>
          </ActionTooltip>

          <Button
            className=" rounded-full hover:bg-white  hover:text-black "
            variant="ghost"
            asChild
          >
            <Link href="/explore">Explore</Link>
          </Button>

          <Button
            className="rounded-full hover:bg-white  hover:text-black"
            variant="ghost"
            asChild
          >
            <Link href="/creations">Creations</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          {Auth.map((values, index) => {
            return (
              <ActionTooltip label={values.label} side="bottom">
                <Button
                  tabIndex={index}
                  size="icon"
                  variant="ghost"
                  className=" text-lg"
                >
                  {values.icon}
                </Button>
              </ActionTooltip>
            );
          })}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AvatarProvider
                src={firebase.user?.photoURL}
                name={NameShorter(firebase.user?.displayName)}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => router.push("/account")}
                className=" hover:cursor-pointer justify-between"
              >
                <span>Account</span>
                <User className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:cursor-pointer justify-between">
                <span>Notification</span>
                <Bell className="w-4 h-4" />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => firebase.signOutUser()}
                className=" hover:cursor-pointer justify-between"
              >
                <span>Sign Out</span>
                <LogOut className="w-4 h-4" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    );
  }
};

export default NavBar;
