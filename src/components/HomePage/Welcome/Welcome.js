'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imgQuan1 from './../../../assets/image/chiNhanhQ1.png';
import imgQuanKoozi from './../../../assets/image/chiNhanhKoozi.jpeg';
import imgQuanFelix from './../../../assets/image/chiNhanhFelix.jpeg';
import imgQuanGoVap from './../../../assets/image/chiNhanhGoVap.jpeg';
import imgQuanBliss from './../../../assets/image/chiNhanhBliss.jpeg';
import imgQuanStress from './../../../assets/image/chiNhanhStress.png';
import imgQuan777 from './../../../assets/image/chiNhanh777.png';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import './welcome.scss';
import { branchServ } from '@/services/branchServ';

const dataBranch = [
  {
    img: imgQuan1,
    name: 'Xiên khè Q1',
    address: '117 Trần Khắc Chân, Phường Tân Đinh, Q1',
    phone: '0933 309 117',
  },
  {
    img: imgQuanKoozi,
    name: 'Xiên Khè Koozi',
    address: '782 Trường Sa, Phường 14, Quận 3.',
    phone: '0933 309 117',
  },
  {
    img: imgQuanBliss,
    name: 'Xiên Khè Bliss',
    address: '801 Hoàng Sa, Phường 9, Quận 3.',
    phone: '0933 309 117',
  },
  {
    img: imgQuanGoVap,
    name: 'Xiên Khè Gò Vấp',
    address: '1&2 Lê Đức Thọ, Phường 7, Gò Vấp.',
    phone: '0933 309 117',
  },
  {
    img: imgQuanStress,
    name: 'Xiên Khè Street',
    address: '30 Phạm Ngũ Lão, Phường 4, Gò Vấp.',
    phone: '0933 309 117',
  },
  {
    img: imgQuan777,
    name: 'Xiên Khè 777',
    address: '347 Lê Văn Thọ, Phường 9, Gò Vấp.',
    phone: '0933 309 117',
  },
  {
    img: imgQuanFelix,
    name: 'Xiên Khè Felix',
    address: '1A Phổ Quang, Phường 2, Tân Bình.',
    phone: '0933 309 117',
  },
];

const Welcome = () => {
  const [branchs, setBranchs] = useState([]);
  useEffect(() => {
    branchServ
      .getAllBranch()
      .then((res) => {
        console.log(res);
        setBranchs(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="section section-welcome">
      <div className="l-container bg-black xl:bg-[none]">
        <div className="bg-black xl:px-16 ">
          <div className="welcome_title text-center space-y-3">
            <h2 className="uppercase text-[#dcdcdc]">tất cả chi nhánh</h2>
            <h4 className="text-[#dcdcdc] pb-7">
              Hãy để chúng tôi phục vụ bạn 1 bữa ăn ngon - đẹp mắt nhất tại:
            </h4>
          </div>
          <div className="welcome_content grid grid-cols-2 xl:grid-cols-3  gap-2 md:gap-6 mt-5">
            {branchs.map((item, index) => (
              <div
                className="welcome_item py-5 px-1 lg:p-5 rounded-md bg-yellow-theme"
                key={index}
              >
                <div className="image_branch">
                  <img
                    style={{ height: '200px' }}
                    src={item.imgUrl}
                    alt="..."
                  />
                </div>
                <div className="text mt-3 text-center">
                  <h5 className="font-bold text-lg md:text-2xl ">
                    {item.name}
                  </h5>
                  <p className="address font-light text-brown-theme italic flex items-center gap-2 justify-center">
                    <IoLocationOutline />
                    {item.address}
                  </p>
                  <p className="font-light text-bl">
                    <a
                      href="tel:0933 309 117"
                      className="flex items-center gap-2 justify-center"
                    >
                      <IoCallOutline />
                      {item.phoneNumber}
                    </a>
                  </p>
                </div>
                <div className="flex justify-center">
                  <a class=" bg-rd p-2 mt-2 rounded" href="/dat-ban">
                    Đặt bàn ngay
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
