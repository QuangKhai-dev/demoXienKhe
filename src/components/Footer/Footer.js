import React from "react";
import { GrFacebook, GrPhone, GrInstagram, GrYoutube } from "react-icons/gr";
import { PiTiktokLogoBold } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="section section-footer">
      <div className="l-container">
        <div className="grid grid-cols-6 lg:grid-cols-5">
          {/* Address */}
          <div className=" col-span-6 lg:col-span-2">
            <h5 className="mb-3 uppercase">Hệ thống Xiên Khè</h5>
            <ul className="list-disc list-inside">
              <li>
                <a href="#">
                  Xiên Khè Q1 - 117 Trần Khắc Chân, Phường Tân Đinh, Q1
                </a>
              </li>
              <li>
                <a href="#">
                  Xiên Khè Koozi - 782 Trường Sa, Phường 14, Quận 3
                </a>
              </li>
              <li>
                <a href="#">Xiên Khè Bliss - 801 Hoàng Sa, Phường 9, Quận 3</a>
              </li>
              <li>
                <a href="#">
                  Xiên Khè Gò Vấp - 1&2 Lê Đức Thọ, Phường 7, Gò Vấp
                </a>
              </li>
              <li>
                <a href="#">
                  Xiên Khè Street - 30 Phạm Ngũ Lão, Phường 4, Gò Vấp
                </a>
              </li>
              <li>
                <a href="#">Xiên Khè 777 - 347 Lê Văn Thọ, Phường 9, Gò Vấp</a>
              </li>
              <li>
                <a href="#">
                  Xiên Khè Felix - 1A Phổ Quang, Phường 2, Tân Bình
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="col-span-4 lg:col-span-2 mt-5 lg:mt-0">
            <h5 className="mb-3">CÔNG TY TNHH XIÊN KHÈ NƯỚNG & LẨU</h5>
            <ul>
              <li className="list-social-media">
                <a
                  href="https://www.facebook.com/xienkhequan199Duong9A.KDCTrungSon"
                  className="fb-social"
                >
                  <GrFacebook />
                </a>
                <a
                  href="https://www.facebook.com/xienkhequan199Duong9A.KDCTrungSon"
                  className="inst-social"
                >
                  <GrInstagram />
                </a>
                <a
                  href="https://www.facebook.com/xienkhequan199Duong9A.KDCTrungSon"
                  className="inst-youtube"
                >
                  <GrYoutube />
                </a>
              </li>
              <li>
                <a className="flex gap-3 items-center" href="tel:1900277217">
                  <GrPhone /> 1900 277 217
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 items-center"
                  href="https://www.xienkhe.com/"
                >
                  <IoEarthOutline /> https://www.xienkhe.com/
                </a>
              </li>
              <li>
                <p>MST: 0313210693</p>
              </li>
            </ul>
          </div>

          {/* List link */}
          <div className="col-span-2 lg:col-span-1 mt-5 lg:mt-0">
            <h5>SITE MAP</h5>
            <ul>
              <li>
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="/ve-chung-toi">Về chúng tôi</a>
              </li>
              <li>
                <a href="/thuc-don">Menu</a>
              </li>
              <li>
                <a href="/tin-tuc">Khuyến mãi</a>
              </li>
              <li>
                <a href="/thuc-don">Menu</a>
              </li>
              <li>
                <a href="/dat-ban">Đặt bàn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
