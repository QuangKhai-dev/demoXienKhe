import React from "react";
import verticalBanner from "../../../../assets/image/banner/banner-vertical.png";
import Image from "next/image";
import "./miniBanner.scss";

export default function MiniBanner() {
  return (
    <div className="min-w-[90px] md:min-w-[150px] xl:min-w-[200px] miniBanner h-max">
      <Image src={verticalBanner} alt="banner vertical" />
    </div>
  );
}
