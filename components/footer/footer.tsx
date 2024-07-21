import { MountainIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-background mb-1 rounded-2xl p-6 md:py-12 w-full">
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
  );
};

export default Footer;
