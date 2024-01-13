"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  IoHomeOutline,
  IoFastFoodOutline,
  IoNewspaperOutline,
  IoIdCardOutline,
  IoCallOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import logo from "./../../assets/image/logo.jpeg";
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Thực đơn", "Đặt hàng", "Giao hàng", "Khuyến mãi"];
  const pathname = usePathname();
  return (
    <>
      <Navbar className="bg-white">
        {/* Tablet view */}
        <NavbarContent
          className="lg:hidden w-full justify-between"
          justify="between"
        >
          <NavbarBrand className="max-w-[70px]">
            <Link href="/">
              <Image src={logo} width={64} height={64} alt=".." />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
        </NavbarContent>
        {/* Tablet view */}
        <NavbarMenu className="menuMini">
          <NavbarMenuItem>
            <Link className="w-full" href="/" size="lg">
              <IoHomeOutline />
              Trang chủ
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="/thuc-don" size="lg">
              <IoFastFoodOutline />
              Thực đơn
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="/tin-tuc" size="lg">
              <IoNewspaperOutline />
              Tin tức
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="/dat-ban" size="lg">
              <IoIdCardOutline />
              Đặt bàn
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="callNow">
            <a href="tel:1900277217">
              <button className="bg-black text-[whitesmoke] px-4 py-2 md:py-4 flex items-center justify-between rounded overflow-hidden gap-[10px]">
                <IoCallOutline />
                1900 277 217
              </button>
            </a>
          </NavbarMenuItem>
        </NavbarMenu>

        {/* Menu Desktop */}
        <NavbarContent className="hidden lg:flex uppercase font-medium justify-between">
          <NavbarBrand className="max-w-[70px]">
            <Link href="/">
              <Image src={logo} width={64} height={64} alt=".." />
            </Link>
          </NavbarBrand>
          <div className="flex grow justify-evenly list-page">
            <NavbarItem className={`link ${pathname === "/" ? "active" : ""}`}>
              <Link color="foreground" href="/">
                Trang chủ
              </Link>
            </NavbarItem>
            <NavbarItem
              className={`link ${pathname === "/thuc-don" ? "active" : ""}`}
            >
              <Link color="foreground" href="/thuc-don">
                Menu
              </Link>
            </NavbarItem>
            <NavbarItem
              className={`link ${pathname === "/tin-tuc" ? "active" : ""}`}
            >
              <Link color="foreground" href="/tin-tuc">
                Tin tức
              </Link>
            </NavbarItem>
            <NavbarItem
              className={`link ${pathname === "/dat-ban" ? "active" : ""}`}
            >
              <Link color="foreground" href="/dat-ban">
                Đặt bàn
              </Link>
            </NavbarItem>
          </div>
          <NavbarItem className="callNow">
            <a href="tel:1900277217" className="callNowLeftSide">
              <IoPhonePortraitOutline />
            </a>
            <a href="tel:1900277217" className="callNowRightSide">
              <p>1900 277 217</p>
              <p>Giờ mở cửa: 11:00 - 23:59</p>
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
