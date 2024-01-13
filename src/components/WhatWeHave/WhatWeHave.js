import React from 'react';
import mon1 from './../../assets/image/menu/mon1.png';
import mon2 from './../../assets/image/menu/mon2.jpeg';
import mon3 from './../../assets/image/menu/mon3.jpeg';
import mon4 from './../../assets/image/menu/mon4.png';
import mon5 from './../../assets/image/menu/mon5.jpeg';
import mon6 from './../../assets/image/menu/mon6.png';
import mon7 from './../../assets/image/menu/mon7.jpeg';
import mon8 from './../../assets/image/menu/mon8.png';
import mon9 from './../../assets/image/menu/mon9.png';
import mon10 from './../../assets/image/menu/mon10.jpeg';
import mon11 from './../../assets/image/menu/mon11.png';
import mon12 from './../../assets/image/menu/mon12.jpeg';
import mon13 from './../../assets/image/menu/mon13.png';
import mon14 from './../../assets/image/menu/mon14.png';
import mon15 from './../../assets/image/menu/mon15.png';
import mon16 from './../../assets/image/menu/mon16.jpeg';
import Image from 'next/image';

const arrImg = [
  { className: 'row-span-2 col-span-3', img: mon1 },
  { className: 'h-[300px]', img: mon2 },
  { className: 'h-[300px]', img: mon3 },
  { className: 'h-[300px]', img: mon4 },
  { className: 'h-[300px]', img: mon5 },
  { className: 'col-span-2 row-span-2', img: mon6 },
  { className: '', img: mon7 },
  { className: 'h-[300px]', img: mon8 },
  { className: 'h-[300px]', img: mon9 },
  { className: 'h-[300px]', img: mon10 },
  { className: 'h-[300px]', img: mon11 },
  { className: 'h-[300px]', img: mon12 },
  { className: 'h-[300px]', img: mon13 },
  { className: 'h-[300px]', img: mon14 },
  { className: 'h-[300px]', img: mon15 },
  { className: 'h-[300px]', img: mon16 },
];

export const WhatWeHave = () => {
  return (
    <section className="what_we_have paddingYSection bg-brown-theme text-white w-full px-10">
      <div className="title">
        <h2 className="text-2xl font-bold">Các món chúng tôi có</h2>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {arrImg.map((item, index) => (
          <div
            className={`relative border border-white ${item.className}`}
            key={index}
          >
            <Image fill src={item.img} />
          </div>
        ))}
        <div></div>
      </div>
    </section>
  );
};
