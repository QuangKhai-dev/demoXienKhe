import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import './listRestaurant.scss';
import { branchServ } from '@/services/branchServ';

export default function ListRestaurant({
  isOpen,
  onOpen,
  onOpenChange,
  setPickedRes,
  dataBranch,
}) {
  const [branchs, setBranchs] = useState([]);
  let renderListRestaurants = () => {
    return branchs.map((res) => {
      return (
        <div className="res-item flex gap-1 md:gap-5" key={res.id}>
          <img src={res.imgUrl} alt={res.name} className="res-img" />
          <div className="flex justify-between flex-col py-1 pr-1 md:py-4 md:pr-4">
            {/* show info */}
            <div>
              {/* name */}
              <h5>{res.name}</h5>
              {/* address */}
              <p className="flex gap-2 items-center res-add">
                <IoLocationOutline /> {res.address}
              </p>
              {/* phone */}
              <p>
                <a
                  href="tel:0933309117"
                  className="inline-flex gap-2 items-center res-phone"
                >
                  <IoCallOutline /> {res.phoneNumber}
                </a>
              </p>
            </div>
            {/* Button choose restaurant */}
            <div>
              <button
                class="main-btn"
                onClick={() => {
                  setPickedRes(res);
                  onOpen();
                }}
              >
                Đặt bàn ngay
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

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
    <section className="section section-list-restaurant">
      <div className="l-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {renderListRestaurants()}
        </div>
      </div>
    </section>
  );
}
