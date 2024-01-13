"use client";
import ListRestaurant from "@/components/BookingPage/ListRestaurant/ListRestaurant";
import ModalBooking from "@/components/BookingPage/ModalBooking/ModalBooking";
import Title from "@/components/BookingPage/Title/Title";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import imgQuan1 from "./../../assets/image/chiNhanhQ1.png";
import imgQuanKoozi from "./../../assets/image/chiNhanhKoozi.jpeg";
import imgQuanFelix from "./../../assets/image/chiNhanhFelix.jpeg";
import imgQuanGoVap from "./../../assets/image/chiNhanhGoVap.jpeg";
import imgQuanBliss from "./../../assets/image/chiNhanhBliss.jpeg";
import imgQuanStress from "./../../assets/image/chiNhanhStress.png";
import imgQuan777 from "./../../assets/image/chiNhanh777.png";

const BookingPage = () => {
  const dataBranch = [
    {
      id: 1,
      img: imgQuan1,
      name: "Xiên khè Q1",
      address: "117 Trần Khắc Chân, Phường Tân Đinh, Q1",
      phone: "0933 309 117",
    },
    {
      id: 2,
      img: imgQuanKoozi,
      name: "Xiên Khè Koozi",
      address: "782 Trường Sa, Phường 14, Quận 3.",
      phone: "0933 309 117",
    },
    {
      id: 3,
      img: imgQuanBliss,
      name: "Xiên Khè Bliss",
      address: "801 Hoàng Sa, Phường 9, Quận 3.",
      phone: "0933 309 117",
    },
    {
      id: 4,
      img: imgQuanGoVap,
      name: "Xiên Khè Gò Vấp",
      address: "1&2 Lê Đức Thọ, Phường 7, Gò Vấp.",
      phone: "0933 309 117",
    },
    {
      id: 5,
      img: imgQuanStress,
      name: "Xiên Khè Street",
      address: "30 Phạm Ngũ Lão, Phường 4, Gò Vấp.",
      phone: "0933 309 117",
    },
    {
      id: 6,
      img: imgQuan777,
      name: "Xiên Khè 777",
      address: "347 Lê Văn Thọ, Phường 9, Gò Vấp.",
      phone: "0933 309 117",
    },
    {
      id: 7,
      img: imgQuanFelix,
      name: "Xiên Khè Felix",
      address: "1A Phổ Quang, Phường 2, Tân Bình.",
      phone: "0933 309 117",
    },
  ];
  const [pickedRes, setPickedRes] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section id="bookingPage">
      {/* title */}
      <Title />
      {/* List Restaurant */}
      <ListRestaurant
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
        dataBranch={dataBranch}
        setPickedRes={setPickedRes}
      />
      {/* Modal */}
      <ModalBooking
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        pickedRes={pickedRes}
      />
    </section>
  );
};

export default BookingPage;
