import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

const FrequentlyQuestions = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            MÌNH BỊ MẤT GIẤY TỜ LÀM SAO ĐỂ NHẬN LẠI ĐƯỢC?
          </AccordionHeader>
          <AccordionBody accordionId="1">
            Hiện tại rất nhiều bạn gọi tới sđt đường dây nóng của DATRAMAC báo
            cáo về việc để quên tư trang cá nhân trên xe buýt. Vậy nên, để thuận
            tiện cho việc tìm kiếm và liên lạc với người thất lạc, các bạn cung
            cấp những thông tin sau:
            <ol>
              <li>Tên họ Người bị thất lạc</li>
              <li>Miêu tả cụ thể tư trang bị thất lạc</li>
              <li>
                Biển kiểm soát, số hiệu tuyến mà tư trang của bạn có thể ở trên
              </li>
              <li>Khoảng thời gian thất lạc</li>
            </ol>
            Các bạn vui lòng liên hệ với số điện thoại: 1900969677 để được hướng
            dẫn thêm.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            CHO MÌNH HỎI THỜI GIAN XE BUÝT CHẠY NHƯ THẾ NÀO?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            Xe buýt chạy liên tục trong ngày từ 5h00 sáng tới 21h00. <br />
            Tần xuất của xe là:
            <ul>
              <li>
                10 phút/chuyến: trong giờ cao điểm trong khoảng 6h30-8h30 và
                16h30-18h40
              </li>
              <li>20 phút/chuyến: trong khoảng thời gian còn lại.</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FrequentlyQuestions;
