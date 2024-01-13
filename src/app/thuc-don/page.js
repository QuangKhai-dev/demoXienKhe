'use client';
import Banner from '@/components/MenuPage/Banner/Banner';
import MenuList from '@/components/MenuPage/MenuList/MenuList';
import MenuMobileView from '@/components/MenuPage/MobileView/MenuMobileView';
import Navbar from '@/components/MenuPage/Navbar/Navbar';
import Title from '@/components/MenuPage/Title/Title';
import { branchServ } from '@/services/branchServ';
import React, { useEffect, useState } from 'react';
let menu = [
  {
    district: 'Xiên Khè Quận 1',
    list: [
      {
        type: 'Bia',
        list: [
          {
            name: 'Hoegaarden Rosée',
            price: 26000,
            img: 'https://product.hstatic.net/200000119135/product/hoegaarden-rosee_than-phan-huong-vi_7337bb283bf0489882a078288a2d20e1.jpg',
            discription:
              'Với nồng độ cồn vừa phải (3.3%) cùng hương vị dịu nhẹ, ngọt ngào từ dâu rừng kết hợp cùng các nguyên liệu hảo hạng từ lúa mì và hoa bia thơm lừng mang đến hương thơm và một chút đắng nhẹ – Hoegaarden Rosee được đánh giá là loại bia trái cây của Bỉ khá dễ chịu, dễ thưởng thức. và cũng chính là món quà tuyệt vời say đắm, chinh phục phái nữ sành bia.',
          },
          {
            name: 'Hoegaarden White',
            price: 38000,
            img: 'https://product.hstatic.net/200000119135/product/hoegaarden-white_5043fa6e59374f56b3c7c231b5e212e7_master.jpg',
            discription:
              'Với nồng độ cồn vừa phải (3.3%) cùng hương vị dịu nhẹ, ngọt ngào từ dâu rừng kết hợp cùng các nguyên liệu hảo hạng từ lúa mì và hoa bia thơm lừng mang đến hương thơm và một chút đắng nhẹ – Hoegaarden Rosee được đánh giá là loại bia trái cây của Bỉ khá dễ chịu, dễ thưởng thức. và cũng chính là món quà tuyệt vời say đắm, chinh phục phái nữ sành bia.',
          },
          {
            name: 'Hoegaarden Tháp',
            price: 417000,
            img: 'https://vn-test-11.slatic.net/p/ad79889237edd7ee618bababf53d704e.jpg',
            discription:
              'Tháp bia 3 lít. Với thiết kế đẹp giúp cho không gian nhậu trở nên sang chảnh hơn, phong cách như ở bar club. Mỗi tháp bia có 1 lõi đựng đá nhằm giúp giữ bia lạnh lâu hơn, đồng thời nước tan ra từ đá không hòa vào bia làm nhạt bia. Khách uống bia sẽ không phải đợi lâu, có thể tự rót bia khi cần.',
          },
          {
            name: 'Hoegaarden Ly',
            price: 37000,
            img: 'https://bianhapkhau.com.vn/uploads/38868973_700433726977960_8264704962378858496_n.jpg',
            discription:
              'Cấu trúc hình lục giác giúp cho khi cầm cốc, tay người chỉ chạm vào các viền của hình lục giác và hạn chế tối đa việc tiếp xúc với thành cốc. Nhờ đó bia trong cốc không bị làm nóng bởi tay người nên giữ được nhiệt độ mát lạnh dài lâu. Bia Hoegaarden là một loại bia trắng vì vậy lớp bọt khá dày và cứng. Thiết kế miệng mở rộng kéo dài từ đáy lên giúp nuôi dưỡng lớp bọt bia và giải phóng mùi hương thơm của cam, quýt, xen lẫn mùi gia vị tới thẳng tới mũi bạn khi bạn nhâm nhi ly bia.',
          },
          {
            name: 'Budweiser Ly',
            price: 37000,
            img: 'https://salt.tikicdn.com/ts/tmp/11/73/d3/19daf3b472b95d255610adfa0eb97427.jpg',
            discription:
              'Những chai bia Budweiser với vị thơm đậm đà của lúa mạch, cùng hoa bia và nước tinh khiết cùng công nghệ ủ bia bằng gỗ sồi của Budweiser đã tạo ra một hương vị bia tuyệt hảo không thể tìm thấy ở bất kì một loại bia nào khác, là sự cân bằng tuyệt đối giữa vị cay không quá nặng với vị ngọt ngào tinh tế, dịu dàng, làm người uống cảm nhận được chất lượng đỉnh cao đến trong từng hớp bia.',
          },
        ],
      },
      {
        type: 'Khai vị',
        list: [
          {
            name: 'Pate khè xúc bánh đa',
            price: 147000,
            img: 'https://nhahangmocnhien.vn/wp-content/uploads/2022/03/nam_xuc_banh_da-scaled.jpg',
            discription: 'Pate Khè độc quyền ăn kèm bánh đa mè giòn rụm.',
          },
          {
            name: 'Khai vị khè',
            price: 117000,
            img: 'https://hc.com.vn/i/ecommerce/media/ckeditor_2888992.jpg',
            discription:
              'Khoai tây chiên giòn xốc muối Hongkong và ba rọi xông khói.',
          },
          {
            name: 'Bò trùm khoai tây sốt phô mai',
            price: 197000,
            img: 'https://cungtrainghiem.com/cdn/shop/articles/Thi_t_k_khong_co_tieu_d_1_1200x1200.jpg?v=1502094909',
            discription: 'Bò Mỹ trùm khoai tây phủ sốt phô mai béo thơm.',
          },
          {
            name: 'Cơm cháy cá thác lác kho quẹt',
            price: 37000,
            img: 'https://cdn.bepcuoi.com/media/650-425-com-chay-cha-ca-cooky-bepcuoi-325.jpg',
            discription:
              'Chả cá thác lác nóng, nằm trên cơm cháy giòn, chấm kèm kho quẹt.',
          },
          {
            name: 'Đậu hũ bóng quê',
            price: 37000,
            img: 'https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/202011/original/images5428130_dau.jpg',
            discription: 'Đậu hũ non chiên giòn với chà bông và trứng bắc thảo',
          },
        ],
      },
      {
        type: 'Nộm',
        list: [
          {
            name: 'Gỏi khè',
            price: 147000,
            img: 'https://digifood.vn/blog/wp-content/uploads/2022/03/goi-gan-bo-1.jpg',
            discription: 'Gân nai, bò, cà pháo, khế, rau muống.',
          },
          {
            name: 'Gỏi hải sản bangkok',
            price: 157000,
            img: 'https://cdn.tgdd.vn/Files/2021/07/17/1368759/cach-lam-goi-khoai-mon-chien-hai-san-gion-tan-cuc-de-lam-202107170950370471.jpeg',
            discription: 'Tôm, mực, bạch tuộc, trộn với miến Thái.',
          },
          {
            name: 'salad sashimi',
            price: 227000,
            img: 'https://cdn.sgtiepthi.vn/wp-content/uploads/2020/10/T3_sashimisalad_whitewish.jpg',
            discription: 'Salad và cá sống ăn với sốt dầu giấm',
          },
          {
            name: 'Gỏi cua lột thái',
            price: 197000,
            img: 'https://cdn.tgdd.vn/2021/01/CookRecipe/GalleryStep/thanh-pham-1070.jpg',
            discription: 'Cua lột chiên giòn trộn gỏi kiểu Thái.',
          },
          {
            name: 'Gỏi bò Thái',
            price: 167000,
            img: 'https://media.suckhoecong.vn/thumb_x800x450/Images/Uploaded/Share/2016/08/12/goi-bo-chua-cay-mon-nhau-tuyet-ngon-ngay-cuoi-tuan-cho-ong-xa11470998207.png',
            discription: 'Bò nguyên tảng nướng ăn kiểu Changmai',
          },
        ],
      },
    ],
  },
  {
    district: 'Các xiên khè khác',
    list: [
      {
        type: 'Bia',
        list: [
          {
            name: 'Hoegaarden Rosée',
            price: 26000,
            img: 'https://product.hstatic.net/200000119135/product/hoegaarden-rosee_than-phan-huong-vi_7337bb283bf0489882a078288a2d20e1.jpg',
            discription:
              'Với nồng độ cồn vừa phải (3.3%) cùng hương vị dịu nhẹ, ngọt ngào từ dâu rừng kết hợp cùng các nguyên liệu hảo hạng từ lúa mì và hoa bia thơm lừng mang đến hương thơm và một chút đắng nhẹ – Hoegaarden Rosee được đánh giá là loại bia trái cây của Bỉ khá dễ chịu, dễ thưởng thức. và cũng chính là món quà tuyệt vời say đắm, chinh phục phái nữ sành bia.',
          },
          {
            name: 'Hoegaarden White',
            price: 38000,
            img: 'https://product.hstatic.net/200000119135/product/hoegaarden-white_5043fa6e59374f56b3c7c231b5e212e7_master.jpg',
            discription:
              'Với nồng độ cồn vừa phải (3.3%) cùng hương vị dịu nhẹ, ngọt ngào từ dâu rừng kết hợp cùng các nguyên liệu hảo hạng từ lúa mì và hoa bia thơm lừng mang đến hương thơm và một chút đắng nhẹ – Hoegaarden Rosee được đánh giá là loại bia trái cây của Bỉ khá dễ chịu, dễ thưởng thức. và cũng chính là món quà tuyệt vời say đắm, chinh phục phái nữ sành bia.',
          },
          {
            name: 'Hoegaarden Tháp',
            price: 417000,
            img: 'https://vn-test-11.slatic.net/p/ad79889237edd7ee618bababf53d704e.jpg',
            discription:
              'Tháp bia 3 lít. Với thiết kế đẹp giúp cho không gian nhậu trở nên sang chảnh hơn, phong cách như ở bar club. Mỗi tháp bia có 1 lõi đựng đá nhằm giúp giữ bia lạnh lâu hơn, đồng thời nước tan ra từ đá không hòa vào bia làm nhạt bia. Khách uống bia sẽ không phải đợi lâu, có thể tự rót bia khi cần.',
          },
          {
            name: 'Hoegaarden Ly',
            price: 37000,
            img: 'https://bianhapkhau.com.vn/uploads/38868973_700433726977960_8264704962378858496_n.jpg',
            discription:
              'Cấu trúc hình lục giác giúp cho khi cầm cốc, tay người chỉ chạm vào các viền của hình lục giác và hạn chế tối đa việc tiếp xúc với thành cốc. Nhờ đó bia trong cốc không bị làm nóng bởi tay người nên giữ được nhiệt độ mát lạnh dài lâu. Bia Hoegaarden là một loại bia trắng vì vậy lớp bọt khá dày và cứng. Thiết kế miệng mở rộng kéo dài từ đáy lên giúp nuôi dưỡng lớp bọt bia và giải phóng mùi hương thơm của cam, quýt, xen lẫn mùi gia vị tới thẳng tới mũi bạn khi bạn nhâm nhi ly bia.',
          },
          {
            name: 'Budweiser Ly',
            price: 37000,
            img: 'https://salt.tikicdn.com/ts/tmp/11/73/d3/19daf3b472b95d255610adfa0eb97427.jpg',
            discription:
              'Những chai bia Budweiser với vị thơm đậm đà của lúa mạch, cùng hoa bia và nước tinh khiết cùng công nghệ ủ bia bằng gỗ sồi của Budweiser đã tạo ra một hương vị bia tuyệt hảo không thể tìm thấy ở bất kì một loại bia nào khác, là sự cân bằng tuyệt đối giữa vị cay không quá nặng với vị ngọt ngào tinh tế, dịu dàng, làm người uống cảm nhận được chất lượng đỉnh cao đến trong từng hớp bia.',
          },
        ],
      },
      {
        type: 'Khai vị',
        list: [
          {
            name: 'Pate khè xúc bánh đa',
            price: 147000,
            img: 'https://nhahangmocnhien.vn/wp-content/uploads/2022/03/nam_xuc_banh_da-scaled.jpg',
            discription: 'Pate Khè độc quyền ăn kèm bánh đa mè giòn rụm.',
          },
          {
            name: 'Khai vị khè',
            price: 117000,
            img: 'https://hc.com.vn/i/ecommerce/media/ckeditor_2888992.jpg',
            discription:
              'Khoai tây chiên giòn xốc muối Hongkong và ba rọi xông khói.',
          },
          {
            name: 'Bò trùm khoai tây sốt phô mai',
            price: 197000,
            img: 'https://cungtrainghiem.com/cdn/shop/articles/Thi_t_k_khong_co_tieu_d_1_1200x1200.jpg?v=1502094909',
            discription: 'Bò Mỹ trùm khoai tây phủ sốt phô mai béo thơm.',
          },
          {
            name: 'Cơm cháy cá thác lác kho quẹt',
            price: 37000,
            img: 'https://cdn.bepcuoi.com/media/650-425-com-chay-cha-ca-cooky-bepcuoi-325.jpg',
            discription:
              'Chả cá thác lác nóng, nằm trên cơm cháy giòn, chấm kèm kho quẹt.',
          },
          {
            name: 'Đậu hũ bóng quê',
            price: 37000,
            img: 'https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/202011/original/images5428130_dau.jpg',
            discription: 'Đậu hũ non chiên giòn với chà bông và trứng bắc thảo',
          },
        ],
      },
      {
        type: 'Nộm',
        list: [
          {
            name: 'Gỏi khè',
            price: 147000,
            img: 'https://digifood.vn/blog/wp-content/uploads/2022/03/goi-gan-bo-1.jpg',
            discription: 'Gân nai, bò, cà pháo, khế, rau muống.',
          },
          {
            name: 'Gỏi hải sản bangkok',
            price: 157000,
            img: 'https://cdn.tgdd.vn/Files/2021/07/17/1368759/cach-lam-goi-khoai-mon-chien-hai-san-gion-tan-cuc-de-lam-202107170950370471.jpeg',
            discription: 'Tôm, mực, bạch tuộc, trộn với miến Thái.',
          },
          {
            name: 'salad sashimi',
            price: 227000,
            img: 'https://cdn.sgtiepthi.vn/wp-content/uploads/2020/10/T3_sashimisalad_whitewish.jpg',
            discription: 'Salad và cá sống ăn với sốt dầu giấm',
          },
          {
            name: 'Gỏi cua lột thái',
            price: 197000,
            img: 'https://cdn.tgdd.vn/2021/01/CookRecipe/GalleryStep/thanh-pham-1070.jpg',
            discription: 'Cua lột chiên giòn trộn gỏi kiểu Thái.',
          },
          {
            name: 'Gỏi bò Thái',
            price: 167000,
            img: 'https://media.suckhoecong.vn/thumb_x800x450/Images/Uploaded/Share/2016/08/12/goi-bo-chua-cay-mon-nhau-tuyet-ngon-ngay-cuoi-tuan-cho-ong-xa11470998207.png',
            discription: 'Bò nguyên tảng nướng ăn kiểu Changmai',
          },
        ],
      },
    ],
  },
];
const MenuPage = () => {
  let [list, setList] = useState([]);
  let [food, setFood] = useState([]);
  useEffect(() => {
    branchServ.getCategory().then((res) => {
      setList(res.data.response);
      setFood(res.data.response[0]);
    });
  }, []);

  return (
    <section id="menuPage" className="bg-black">
      <div className="l-container ">
        {/* Title */}
        <Title />
        {/* Tablet - Desktop View */}
        <div className="hidden md:flex mb-12 rounded overflow-hidden">
          {/* Navbar*/}
          <Navbar list={list} setFood={setFood} />
          {/* Menu List */}
          <MenuList menu={food} />
        </div>
        {/* Mobile View */}
        <div className="md:hidden">
          <MenuMobileView menu={menu} />
        </div>
      </div>
      {/* Banner */}
      <Banner />
    </section>
  );
};

export default MenuPage;
