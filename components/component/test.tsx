/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RwODt56gkkl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="flex items-center justify-between px-4 py-2 bg-background border-b md:px-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
                prefetch={false}
              >
                <MountainIcon className="w-6 h-6" />
                <span className="sr-only">AI Image Generator</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Home</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Explore
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Sign In
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Sign Up
          </Link>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <SearchIcon className="w-5 h-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Search</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <HeartIcon className="w-5 h-5" />
                    <span className="sr-only">Likes</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Likes</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <BellIcon className="w-5 h-5" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant="outline" className="h-8 px-4 text-sm">
              Create
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="w-8 h-8 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="sr-only">User Menu</span>
            </Button>
          </div>
        </nav>
      </header>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
                <Button variant="outline" className="w-full">
                  Sign In with Google
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="#" className="underline" prefetch={false}>
                  Sign Up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1 p-8 hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="AI Generated Image"
              className="rounded-lg"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="AI Generated Image"
              className="rounded-lg"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="AI Generated Image"
              className="rounded-lg"
            />
            <img
              src="/placeholder.svg"
              width={300}
              height={300}
              alt="AI Generated Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <div className="grid grid-cols-2 gap-4 p-8">
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="AI Generated Image"
            className="rounded-lg"
          />
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="AI Generated Image"
            className="rounded-lg"
          />
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="AI Generated Image"
            className="rounded-lg"
          />
          <img
            src="/placeholder.svg"
            width={300}
            height={300}
            alt="AI Generated Image"
            className="rounded-lg"
          />
        </div>
      </div>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold">AI Image Generator</span>
            </Link>
            <p className="text-muted-foreground">
              Unleash your creativity with our powerful AI image generator.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Product</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Integrations
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Team
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Support
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 text-center text-xs text-muted-foreground">
          &copy; 2024 AI Image Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
