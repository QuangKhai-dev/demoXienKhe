import React from "react";
import introImg from "../../../assets/image/outside/anh-gioi-thieu.jpg";
import Image from "next/image";
import "./intro.scss";

export default function Intro() {
  return (
    <seciton className="section section-intro">
      <div className="l-container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10">
          <div className="left-side">
            <p className="img">
              <Image src={introImg} alt="..." />
            </p>
          </div>
          <div className="right-side relative order-first ">
            <h1 className="text-center">
              <span className="text-yl">Xiên Khè</span>
              <br />
              <span className="uppercase">
                <span className="text-[#1458A5]">Nhậu ngon</span>{" "}
                <span className="text-[#A7141D]">mồi xịn</span>
              </span>
            </h1>
            <ul className="list-disc">
              <li>
                Không gian mở thiết kế phóng khoáng, hiện đại mang đến trải
                nghiệm thú vị cho thực khách.
              </li>
              <li>
                Phong cách nhà hàng phù hợp cho những bữa tiệc cuối tuần, họp
                mặt của gia đình và đồng nghiệp hay những cuộc nhậu "cực chill"
                cùng bạn bè.
              </li>
              <li>
                Món ăn đa dạng, được nêm nếm đậm đà, khiến bạn xuýt xoa khi nếm
                thử.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </seciton>
  );
}
