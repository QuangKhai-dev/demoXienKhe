import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  IoTimeOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoPersonOutline,
  IoMailOutline,
  IoRestaurantOutline,
} from 'react-icons/io5';
import * as Yup from 'yup';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import './modalBooking.scss';
import { useFormik } from 'formik';
import { orderTableServ } from '@/services/orderTableServ';

let times = [
  {
    value: 1,
    label: '11:00',
  },
  {
    value: 2,
    label: '11:15',
  },
  {
    value: 3,
    label: '11:30',
  },
  {
    value: 4,
    label: '11:45',
  },
  {
    value: 5,
    label: '12:00',
  },
  {
    value: 6,
    label: '12:15',
  },
  {
    value: 7,
    label: '12:30',
  },
  {
    value: 8,
    label: '12:45',
  },
  {
    value: 9,
    label: '13:00',
  },
  {
    value: 10,
    label: '13:15',
  },
  {
    value: 11,
    label: '13:30',
  },
  {
    value: 12,
    label: '13:45',
  },
  {
    value: 14,
    label: '14:00',
  },
  {
    value: 15,
    label: '14:15',
  },
  {
    value: 16,
    label: '14:30',
  },
  {
    value: 17,
    label: '14:45',
  },
  {
    value: 18,
    label: '15:00',
  },
  {
    value: 19,
    label: '15:15',
  },
  {
    value: 20,
    label: '15:30',
  },
  {
    value: 21,
    label: '14:45',
  },
  {
    value: 22,
    label: '15:00',
  },
  {
    value: 23,
    label: '15:15',
  },
  {
    value: 24,
    label: '15:30',
  },
  {
    value: 25,
    label: '15:45',
  },
  {
    value: 26,
    label: '16:00',
  },
  {
    value: 27,
    label: '16:15',
  },
  {
    value: 28,
    label: '16:30',
  },
  {
    value: 29,
    label: '16:45',
  },
  {
    value: 30,
    label: '17:00',
  },
  {
    value: 31,
    label: '17:15',
  },
  {
    value: 32,
    label: '17:30',
  },
  {
    value: 33,
    label: '16:45',
  },
  {
    value: 34,
    label: '17:00',
  },
  {
    value: 35,
    label: '17:15',
  },
  {
    value: 36,
    label: '17:30',
  },
  {
    value: 37,
    label: '17:45',
  },
  {
    value: 38,
    label: '18:00',
  },
  {
    value: 39,
    label: '18:15',
  },
  {
    value: 40,
    label: '18:30',
  },
  {
    value: 41,
    label: '18:45',
  },
  {
    value: 42,
    label: '19:00',
  },
  {
    value: 43,
    label: '19:15',
  },
  {
    value: 44,
    label: '19:30',
  },
  {
    value: 45,
    label: '19:45',
  },
  {
    value: 46,
    label: '20:00',
  },
  {
    value: 47,
    label: '20:15',
  },
  {
    value: 48,
    label: '20:30',
  },
  {
    value: 49,
    label: '20:45',
  },
  {
    value: 50,
    label: '21:00',
  },
  {
    value: 51,
    label: '21:15',
  },
  {
    value: 52,
    label: '21:30',
  },
  {
    value: 53,
    label: '21:45',
  },
  {
    value: 54,
    label: '22:00',
  },
];
let people = [];
for (let i = 1; i <= 50; i++) {
  people.push({
    label: `${i} người`,
    value: i,
  });
}

export default function ModalBooking({ isOpen, onOpenChange, pickedRes }) {
  const [startDate, setStartDate] = useState(new Date());

  const {
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      branchId: '',
      setTime: '',
      setDay: '',
      amount: '',
      phoneNumber: '',
      requestUser: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      orderTableServ
        .addOrderTable({ ...values, branchId: pickedRes.id })
        .then((res) => {
          console.log(res);
          alert('Đặt bàn thành công');
        })
        .catch((err) => {
          console.log(err);
          alert('Đặt bàn thất bại, liên hệ hotline để hỗ trợ');
        });
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Vui lòng nhập họ tên'),
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email'),
      setTime: Yup.string().required('Vui lòng chọn thời gian'),
      setDay: Yup.string()
        .required('Vui lòng chọn ngày')
        .test('isDate', 'Vui lòng không chọn ngày cũ', (value) => {
          console.log(value);
          return new Date(value) > new Date();
        }),
      amount: Yup.string().required('Vui lòng chọn số lượng'),
      phoneNumber: Yup.number().required('Vui lòng nhập số điện thoại'),
    }),
  });
  return (
    <section className="section section-modal-booking">
      <Modal
        classNames={{
          backdrop:
            'bg-gradient-to-t from-[rgba(20,88,165,0.6)] to-[rgba(254,192,2,0.6)] backdrop-opacity-80',
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="max-w-2xl"
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit} id="bookingResForm">
              <ModalHeader className="flex flex-col gap-1 font-normal">
                {/* show info */}
                <div className="modal-header flex items-center">
                  <div>
                    <img
                      src={pickedRes.imgUrl}
                      width={120}
                      height={120}
                      className="rounded"
                    />
                  </div>
                  <div className="grow">
                    {/* name */}
                    <h5 className="flex gap-3 justify-center items-center">
                      <IoRestaurantOutline />
                      Đặt Bàn - {pickedRes.name} <IoRestaurantOutline />
                    </h5>
                    {/* address */}
                    <p className="flex gap-2 items-center res-add justify-center">
                      <IoLocationOutline /> {pickedRes.address}
                    </p>
                    {/* phone */}
                    <p className="text-center">
                      <a
                        href="tel:0933309117"
                        className="inline-flex gap-2 items-center res-phone"
                      >
                        <IoCallOutline /> {pickedRes.phoneNumber}
                      </a>
                    </p>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="modal-body grid grid-cols-2 gap-4">
                  {/* Ngày */}
                  <div>
                    <Input
                      type="date"
                      variant="bordered"
                      label="Chọn ngày"
                      radius="none"
                      name="setDay"
                      startContent={<IoCalendarOutline />}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.setDay}
                    />
                    {errors.setDay && touched.setDay ? (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.setDay}
                      </p>
                    ) : null}
                  </div>
                  {/* Thời gian */}
                  <div>
                    <Select
                      label="Thời gian"
                      placeholder="Chọn thời gian"
                      className="w-full"
                      variant="bordered"
                      name="setTime"
                      startContent={<IoTimeOutline />}
                      radius="none"
                      onChange={(event) => {
                        setFieldValue('setTime', event.target.value);
                      }}
                      onBlur={handleBlur}
                    >
                      {times.map((time) => (
                        <SelectItem key={time.label} value={time.label}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </Select>
                    {errors.setTime && touched.setTime ? (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.setTime}
                      </p>
                    ) : null}
                  </div>
                  {/* Số lượng */}
                  <div>
                    <Select
                      label="Số lượng người"
                      placeholder="Chọn số người"
                      className="w-full"
                      variant="bordered"
                      name="amount"
                      startContent={<IoPeopleOutline />}
                      radius="none"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {people.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                    {errors.amount && touched.amount ? (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.amount}
                      </p>
                    ) : null}
                  </div>
                  {/* Họ tên */}
                  <div>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Họ tên"
                      placeholder="Nhập họ tên"
                      name="name"
                      radius="none"
                      startContent={<IoPersonOutline />}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name ? (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    ) : null}
                  </div>
                  {/* Số điện thoại */}
                  <div>
                    <Input
                      type="number"
                      variant="bordered"
                      label="Số điện thoại"
                      name="phoneNumber"
                      placeholder="Nhập số điện thoại"
                      radius="none"
                      startContent={<IoCallOutline />}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phoneNumber}
                      </p>
                    ) : null}
                  </div>
                  {/* Email */}
                  <div>
                    <Input
                      type="email"
                      variant="bordered"
                      label="Email"
                      name="email"
                      placeholder="Nhập email"
                      radius="none"
                      startContent={<IoMailOutline />}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  {/* Ghi chú */}
                  <div className="col-span-2">
                    <Textarea
                      variant="bordered"
                      label="Ghi chú"
                      placeholder="Có trẻ em, tiệc sinh nhật,..."
                      radius="none"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setFieldValue('requestUser', e.target.value);
                      }}
                      onBlur={handleBlur}
                      value={values.requestUser}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <button onClick={onClose} className="btn-cancel">
                  Huỷ
                </button>
                <button type="submit" className="btn-submit">
                  Đặt ngay
                </button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
