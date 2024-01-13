"use client";
import React from "react";
import Image from "next/image";
import "./deals.scss";
import banner1 from "../../../assets/image/news-img/img3.jpeg";
import banner2 from "../../../assets/image/news-img/img2.jpeg";
import banner3 from "../../../assets/image/news-img/img6.jpeg";

export default function Deals() {
  let news = [
    {
      img: banner3,
      title: "MỞ CỬA XUYÊN TẾT - CÂN MỌI CUỘC VUI",
      postDate: "20.12.2023",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: banner2,
      title: "MADNESS NIGHT - HALLOWEEN | 29.10.2023",
      postDate: "23.10.2023",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      img: banner1,
      title: "Ladies Night - Chào mừng 20/10",
      postDate: "19.10.2023",
      caption:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  // render danh sách tin tức
  let renderNews = () => {
    return news.map((item, index) => {
      return (
        <div className="news-item">
          <a href="#">
            <p className="img rounded-xl">
              <Image
                src={item.img}
                alt={item.title}
                className="w-full object-contain object-center "
              />
            </p>
            <div className="content">
              <h5 className="md:mt-5 md:mb-2 line-clamp-1 font-medium uppercase  subpixel-antialiased">
                {item.title}
              </h5>
              <p className="text-gray text-neutral-500 italic">
                {item.postDate}
              </p>
              <p className="line-clamp-3">{item.caption}</p>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <section className="section section-deals">
      <div className="l-container">
        {/* title */}
        <div className="title mb-[30px] md:mb-[50px] text-center">
          <h2>Khuyến mãi</h2>
          <h4>tại Xiên Khè</h4>
        </div>
        {/* list-news */}
        <div className="list-news">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {renderNews()}
          </div>
        </div>
        {/* button xem thêm */}
        <p className="mt-[50px] text-center ">
          <a className="main-btn h-max" href="/tin-tuc">
            Xem Tất Cả
          </a>
        </p>
      </div>
    </section>
  );
}
