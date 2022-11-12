const RouteItem = ({ active }) => {
  return (
    <button className={`route-item ${active ? "active" : ""}`}>
      <div className="route-index">01</div>
      Nguyễn Tất Thành (Chung Cư Hòa Hiệp Nam) - Cầu Rồng - Công Viên Biển Đông
    </button>
  );
};

export default RouteItem;
