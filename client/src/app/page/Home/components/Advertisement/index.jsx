import CircleImg from "../../../../shared/components/CircleImg";
import MoneyIcon from "../../../../../assets/icons/MoneyIcon";
import SunnyIcon from "../../../../../assets/icons/SunnyIcon";
import FitnessIcon from "../../../../../assets/icons/FitnessIcon";
import { Col, Row } from "reactstrap";

const Advertisement = () => {
  return (
    <Row noGutters>
      <Col xs="6">
        <img
          src="https://image-us.24h.com.vn/upload/1-2022/images/2022-03-08/Xe-buyt-dien-chinh-thuc-lan-banh-o-TPHCM-gia-ve-cho-hoc-sinh-sinh-vien-chi-3000-dong-luot-1-1646719796-112-width2000height1313.jpg"
          alt=""
          role="presentation"
        />
      </Col>
      <Col xs="6" className="reason-choose-bus">
        <h3>VÌ SAO NÊN CHỌN XE BUÝT</h3>
        <ul className="mt-3">
          <li className="d-flex mt-5">
            <CircleImg size="lg">
              <MoneyIcon />
            </CircleImg>
            <div className="ml-5">
              <h4>TIẾT KIỆM CHI PHÍ</h4>
              <p>
                Tiết kiệm nhiều chi phí xăng, dầu, sửa chữa, bảo dưỡng, rửa xe,
                gửi xe hàng tháng khi sử dụng phương tiện cá nhân.
              </p>
            </div>
          </li>
          <li className="d-flex mt-5">
            <CircleImg size="lg">
              <FitnessIcon />
            </CircleImg>
            <div className="ml-5">
              <h4>HẠN CHẾ CĂNG THẲNG</h4>
              <p>
                Không phải tập trung điều khiển các giác quan cho việc lái xe,
                giúp cơ thể có thời gian nghỉ ngơi nhiều hơn.
              </p>
            </div>
          </li>
          <li className="d-flex mt-5">
            <CircleImg size="lg">
              <SunnyIcon />
            </CircleImg>
            <div className="ml-5">
              <h4>HẠN CHẾ TÁC ĐỘNG THỜI TIẾT</h4>
              <p>
                Tránh những tác động thời tiết từ bên ngoài như mưa, bụi, vũng
                nước bẩn vào mùa mưa hay nắng nóng vào mùa hè. ​Bạn hoàn toàn
                được bảo vệ bởi màn kính trong suốt
              </p>
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Advertisement;
