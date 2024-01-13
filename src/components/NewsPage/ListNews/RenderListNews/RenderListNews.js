'use client';
import React, { useEffect, useState } from 'react';
import img1 from '../../../../assets/image/news-img/img1.jpg';
import img2 from '../../../../assets/image/news-img/img2.jpeg';
import img3 from '../../../../assets/image/news-img/img3.jpeg';
import img4 from '../../../../assets/image/news-img/img4.jpg';
import img5 from '../../../../assets/image/news-img/img5.jpg';
import img6 from '../../../../assets/image/news-img/img6.jpeg';
import img7 from '../../../../assets/image/news-img/img7.jpg';
import img8 from '../../../../assets/image/news-img/img8.jpg';
import img9 from '../../../../assets/image/news-img/img9.jpg';
import img10 from '../../../../assets/image/news-img/img10.jpg';
import Image from 'next/image';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import './renderListNews.scss';
import { postServ } from '@/services/postServ';
import moment from 'moment';
let news = [
  {
    img: img9,
    title: 'New Year Party - Đón giao thừa cùng Xiên Khè',
    postDate: '01.01.2023',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img6,
    title: 'MỞ CỬA XUYÊN TẾT - CÂN MỌI CUỘC VUI',
    postDate: '20.12.2023',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img2,
    title: 'MADNESS NIGHT - HALLOWEEN | 29.10.2023',
    postDate: '23.10.2023',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img3,
    title: 'Ladies Night - Chào mừng 20/10',
    postDate: '19.10.2023',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img1,
    title: 'Khoai tây đút lò - Món mới, giá chỉ 50k',
    postDate: '08.08.2023',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img4,
    title: 'Menu Giáng Sinh - Ưu đãi đặt bàn, trang trí miễn phí',
    postDate: '01.12.2022',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img5,
    title: 'Cơm rang Ấn Độ - Hạt gạo Ấn, hương vị Ấn',
    postDate: '21.09.2022',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    img: img7,
    title: 'Night Party - Free Drink',
    postDate: '09.09.2022',
    caption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function RenderListNews() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    postServ
      .getAllPost()
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderListNews = () => {
    return post.map((item) => {
      return (
        <div className="newsItem">
          <div className="flex flex-col items-center xl:flex-row gap-2">
            <img src={item.img} alt={item.title} width={250} />
            <div>
              <h3 className="title">{item.title}</h3>
              <p className="postDate">
                {moment(item.create_at).format('DD-MM-YYYY')}
              </p>
              <p className="caption flex gap-2">
                <span className="line-clamp-4 md:line-clamp-none">
                  {item.data}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="renderListNews grow px-3">{renderListNews()}</section>
  );
}
