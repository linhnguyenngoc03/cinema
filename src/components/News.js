import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
export default function News() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className="about">
      <h1 className="center">News</h1>
      <Collapsible accordion>
        <CollapsibleItem style={{ color : theme.color }} expanded={false} header="What's New?" icon={<Icon>new_releases</Icon>} node="div">
          <Caption placement="left">
          <h5 style={{ marginTop : '0', color : 'red' }}>NEW!!! BỘ SƯU TẬP DORAEMON: GỐI DORAEMON VÀ THÚ BÔNG DORAEMON</h5>
          <div style={{ columnCount : '2' }}>
          <img src="	https://www.cgv.vn/media/wysiwyg/2023/052023/Doraemon_2023_NO_1.png" />
            <p>
              1. Thời gian: Mở bán tại rạp từ ngày 26.05.2023.
              <br/> <br/>
              2. Khám phá ngay các sản phẩm trong BST Doraemon: <br/>
              - Thiết kế đặc biệt dành cho Phim Điện Ảnh Doraemon: Nobita và Vùng đất lý tưởng trên bầu trời. <br/>
              - Có các mẫu sản phẩm: <br/>
              + Gối Doraemon: có đường kính 30cm. <br/>
              + Thú bông Doraemon: có 02 kích thước là size S (có chiều cao 23cm) và size M (có chiều cao 33cm).
              <br/> <br/>
              3. Lưu ý: <br/>
              - Sưu tầm sớm vì số lượng cực kỳ có hạn tại rạp.<br/>
              - Sản phẩm Gối Doraemon có mặt tại các rạp thuộc tỉnh: TP Hồ Chí Minh, Hà Nội, Đà Nẵng, Hải Phòng, Đồng Nai, Cần Thơ, Bình Dương. <br/>
              - Sản phẩmThú bông Doraemon size S có mặt tại các rạp thuộc tỉnh: Bình Định, Đà Nẵng, Dak Lak, Hà Tĩnh, Khánh Hòa, Kon Tum, Nghệ An, Phú Yên, Quảng Ngãi, Hưng Yên, Lạng Sơn, Phú Thọ, Quảng Ninh, Sơn La, Thái Nguyên, Yên Bái, Vũng Tàu, Cần Thơ, Hậu Giang, Kiên Giang, Sóc Trăng, Tây Ninh, Tiền Giang, Trà Vinh, Vĩnh Long, Đồng Tháp. <br/>
              - Sản phẩm Thú bông Doraemon size M có mặt tại các rạp thuộc tỉnh: TP Hồ Chí Minh, Hà Nội, Hải Phòng, Bình Dương, Đồng Nai.
            </p>
          </div>
          </Caption>
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}