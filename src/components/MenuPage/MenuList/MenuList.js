'use client';
import React, { useEffect, useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import './menuList.scss';

export default function MenuList({ menu }) {
  const [hehe, setHehe] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    setHehe(!hehe);
  }, [menu.name]);

  useEffect(() => {
    setFilteredItems(() => {
      return menu?.foodList?.filter((item) => {
        console.log(item.name.toLowerCase().includes(search.toLowerCase()));
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search, menu.foodList]);
  console.log(filteredItems);
  return (
    <section className="section section-list-menu grow p-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Contacts"
            className="form-input py-2 ltr:pr-11 rtl:pl-11 peer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="button"
            className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary"
          >
            {/* <IconSearch className="mx-auto" /> */}
          </button>
        </div>
        {filteredItems?.map((food) => {
          return (
            <div className="foodItem">
              <p className="img">
                <img src={food.img} />
              </p>
              <p className="title line-clamp-1">{food.name}</p>
              <p className="discription line-clamp-3">{food.moTa}</p>
              <p className="price font-medium">
                {food.giaTien?.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
