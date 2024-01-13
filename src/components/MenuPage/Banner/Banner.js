import React from "react";
import banner from "../../../assets/image/banner/banner-3.jpeg";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-[#FDC101]">
      <div className="l-container">
        <Image src={banner} alt="banner" className="w-full" />
      </div>
    </div>
  );
}
