"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "./../../assets/image/banner/banner.jpeg";
import banner3 from "./../../assets/image/banner/banner-2.jpg";
import banner4 from "./../../assets/image/banner/Social_Media_Food_01.jpg";
import Image from "next/image";
import "./banner.scss";
const Banner = () => {
  let slideStyle = {
    autoPlay: true,
    showThumbs: false,
  };
  return (
    <section className="section section-banner">
      <Carousel {...slideStyle}>
        <div className="bg-[#FEC200]">
          <Image src={banner1} alt=".." />
        </div>
        <div className="bg-[#871618]">
          <Image src={banner4} alt=".." />
        </div>
        <div className="bg-[#740003]">
          <Image src={banner3} alt=".." />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
