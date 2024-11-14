import { Navbar as NextUINavbar, NavbarContent, NavbarBrand } from "@nextui-org/navbar";
import NextLink from "next/link";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar className="bg-transparent backdrop-saturate-100" maxWidth="xl" position="sticky" isBlurred={false}>
      <NavbarContent className="basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 w-full">
          <NextLink className="flex justify-center md:justify-start items-center gap-1" href="/">
            <Logo className="size-16 md:size-[104px] text-foreground" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
