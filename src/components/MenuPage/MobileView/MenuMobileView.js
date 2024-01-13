import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
export default function MenuMobileView({ menu }) {
  let [listMenu, setListMenu] = useState([]);
  let renderItemMenu = (food) => {
    return (
      <div className="foodItem p-2 bg-[whitesmoke] text-black rounded">
        <p className="img">
          <img src={food.img} className="aspect-square	" />
        </p>
        <p className="title line-clamp-1 font-medium ">{food.name}</p>
        <p className="discription line-clamp-3 italic text-[gray] text-[13px]">
          {food.discription}
        </p>
        <p className="price font-medium text-red-700">
          {food.price.toLocaleString()}
        </p>
      </div>
    );
  };
  let renderDistrictMenu = () => {
    return listMenu.map((item) => {
      return (
        <div className="menuType text-white my-2">
          {/* title */}
          <h4 className="title py-1 w-full text-center bg-[#FEC002] border-none rounded text-black ">
            {item.type}
          </h4>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {item.list.map((item) => renderItemMenu(item))}
          </div>
        </div>
      );
    });
  };
  let onChangeDistrict = (e) => {
    let index = menu.findIndex((item) => item.district == e.target.value);
    setListMenu(menu[index].list);
  };
  return (
    <section className="section section-menu mb-10">
      <Select
        items={menu}
        label="Chọn địa điểm"
        placeholder="Chọn Xiên Khè bạn muốn đến"
        className="w-full"
        onChange={onChangeDistrict}
        size="sm"
      >
        {(item) => <SelectItem key={item.district}>{item.district}</SelectItem>}
      </Select>
      {renderDistrictMenu()}
    </section>
  );
}
