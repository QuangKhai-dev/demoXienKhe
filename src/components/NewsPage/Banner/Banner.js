"use client";
import React from "react";
import banner from "./../../../assets/image/banner/banner-menu.jpeg";
import banner2 from "./../../../assets/image/banner/Social_Media_Food_01.jpg";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.scss";
export default function Banner() {
  let slideStyle = {
    autoPlay: true,
    showThumbs: false,
    infinity: true,
  };
  return (
    <section className="banner">
      <Carousel {...slideStyle}>
        <div className="bg-[#FEF6D4]">
          <div className="l-container">
            <Image src={banner} alt=".." />
          </div>
        </div>
        <div className="bg-[#871618] h-full">
          <div className="l-container h-full">
            <Image src={banner2} alt=".." />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
