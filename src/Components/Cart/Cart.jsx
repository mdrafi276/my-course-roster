/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectrdCourse, allTotal, credit, remaining }) => {
  return (
    <div className=" bg-white p-5 rounded-[10px]  w-full text-left   md:w-[250px] lg:w-[312px] gap-5">
      <h1 id="creadit-hour" className=" border-b-2   pb-5 text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h1>
      <h2 className="pt-4  " id="course-name">Course Name</h2>



   
  );
};

export default Cart;
