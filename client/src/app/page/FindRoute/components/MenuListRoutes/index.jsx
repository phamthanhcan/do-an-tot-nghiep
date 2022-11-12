import RouteItem from "../RouteItem";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

const MenuListRoutes = () => {
  return (
    <>
      <h2>DANH SÁCH TUYẾN ĐƯỜNG</h2>
      <UncontrolledAccordion defaultOpen={["1"]} flush>
        <AccordionItem>
          <AccordionHeader targetId="1">LỘ TRÌNH TỔNG THỂ</AccordionHeader>
          <AccordionBody accordionId="1">
            <RouteItem active />
            <RouteItem />
            <RouteItem />
            <RouteItem />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">TUYẾN BUÝT DU LỊCH</AccordionHeader>
          <AccordionBody accordionId="2">
            <RouteItem />
            <RouteItem />
            <RouteItem />
            <RouteItem />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">TUYẾN BUÝT LIÊN TỈNH</AccordionHeader>
          <AccordionBody accordionId="3">
            <RouteItem />
            <RouteItem />
            <RouteItem />
            <RouteItem />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">TUYẾN BUÝT TRỢ GIÁ</AccordionHeader>
          <AccordionBody accordionId="4">
            <RouteItem />
            <RouteItem />
            <RouteItem />
            <RouteItem />
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </>
  );
};

export default MenuListRoutes;
