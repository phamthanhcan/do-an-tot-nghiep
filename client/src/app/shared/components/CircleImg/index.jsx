const CircleImg = ({ size = "sm", children }) => {
  return <div className={`circle-img ${size}`}>{children}</div>;
};

export default CircleImg;
