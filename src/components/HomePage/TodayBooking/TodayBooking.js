import React from "react";
import "./todayBooking.scss";
import decor from "../../../assets/image/outside/beer.png";
import Image from "next/image";
import Link from "next/link";
import MenuPage from "@/app/thuc-don/page";

export default function TodayBooking() {
  let listNewFoods = [
    {
      foodName: "Còi điệp sóc bơ tỏi",
      url: "https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/so-diep-sot-chanh-day-thumbnail.png",
      price: "81000",
    },
    {
      foodName: "Cua lột rang trứng muối",
      url: "https://haithuycatering.com/image/5c16247751046d5028912172/original.jpg",
      price: "187000",
    },
    {
      foodName: "Dồi trường xào cải chua",
      url: "https://media.cooky.vn/recipe/g3/23891/s320x320/recipe-cover-r23891.jpg",
      price: "147000",
    },
    {
      foodName: "Lẩu ếch lá giang",
      url: "https://tieccaocap.vn/upload/images/L%E1%BA%A8U%20%E1%BA%BECH%202.jpg",
      price: "207000",
    },
  ];

  let renderNewFoods = () => {
    return listNewFoods.map((food) => {
      return (
        <div className="flex-col items-center md:items-start md:flex-row flex gap-8 food-item">
          {/* img */}
          <img
            src={food.url}
            width={101}
            height={70}
            className="rounded"
            alt="..."
          />
          {/* name */}
          <h5 className="foodName">{food.foodName}</h5>
          {/* price */}
          <h5 className="price text-rd">
            {Number(food.price).toLocaleString()} VNĐ
          </h5>
        </div>
      );
    });
  };

  return (
    <section className="section section-today-booking">
      <div className="bg-layer">
        <div className="l-container">
          <div className="grid grid-col-1 lg:grid-cols-2">
            {/* Món mới */}
            <div className="newFoods relative">
              <h2 className="text-center mb-3 md:mb-10 capitalize">
                <span className="text-bl">Món mới tại</span>{" "}
                <span className="text-yl">Xiên Khè</span>
              </h2>
              <div className="grid grid-cols-2 md:block">
                {renderNewFoods()}
              </div>
              <p className="mt-8">
                <a className="main-btn" href="/thuc-don">
                  Xem Thêm
                </a>
              </p>
            </div>
            {/* Booking */}
            <div className="booking mx-10">
              <h2 className="text-center mb-3 md:mb-10 capitalize text-white">
                Đặt bàn chill ngay
              </h2>
              <ul className="text-white pt-[25px] list-disc">
                <li>
                  Chúng tôi có một loạt thực đơn về các món nướng BBQ sẵn sàng
                  làm siêu lòng những vị khách sành ăn cùng menu đồ uống đa dạng
                  để tăng sự trải nghiệm các cung bậc cảm xúc khác nhau.
                </li>
                <li>
                  Ngoài phục vụ các món nướng BBQ, chúng tôi còn có thực đơn
                  dành cho những tín đồ đam mê món Nhật với set Sashimi hoành
                  tráng chiều lòng thực khách.
                </li>
                <li>
                  Chắc chắn ngoài sự ngon miệng từ món ăn, sự thoải mái thông
                  qua không gian và cách phục vụ, các nguyên liệu được chúng tôi
                  sử dụng đều tươi mới và tốt cho sức khỏe của bạn.
                </li>
              </ul>
              <h5 className="text-rd mb-3 uppercase mt-12">
                Thời gian mở cửa:
              </h5>
              <p className="text-white">Thứ 2 đến Chủ Nhật</p>
              <p className="text-white">11:00 AM - 23:59 PM</p>
              <p className="mt-8">
                <a className="main-btn" href="/dat-ban">
                  Đặt bàn ngay
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
