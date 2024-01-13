import React from "react";
import "./title.scss";
export default function Title() {
  return (
    <section className="section section-title">
      <div className="l-container">
        <marquee
          direction="left"
          behavior="slide"
          scrollamount="12"
          className="hidden xl:block"
        >
          <h2 className="flex items-center">
            <span className="hight-light">Đặt Bàn</span>&nbsp;dễ dàng tại chuỗi
            nhà hàng&nbsp;<span className="text-yl">XIÊN KHÈ</span>
          </h2>
          <h3>
            Đặt bàn trực tuyến tại tất cả chi nhánh
            <span className="text-yl">Xiên Khè</span>. Đảm bảo chất lượng dịch
            vụ, món ngon và địa điểm ưng ý cho mọi thực khách.
          </h3>
        </marquee>
        <div className="xl:hidden">
          <h2 className="flex flex-wrap items-center">
            <span className="hight-light ">Đặt Bàn</span>
            &nbsp;dễ dàng tại&nbsp;
            <span className="text-yl">XIÊN KHÈ</span>
          </h2>
          <h3>
            Đặt bàn trực tuyến tại tất cả chi nhánh
            <span className="text-yl">Xiên Khè</span>. Đảm bảo chất lượng dịch
            vụ, món ngon và địa điểm ưng ý cho mọi thực khách.
          </h3>
        </div>
      </div>
    </section>
  );
}
