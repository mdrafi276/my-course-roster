/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Cart = ({ selectrdCourse, allTotal, credit, remaining }) => {
  return (
    <div className=" bg-white p-5 rounded-[10px]  w-full text-left   md:w-[250px] lg:w-[312px] gap-5">
      <h1 id="creadit-hour" className=" border-b-2   pb-5 text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h1>
      <h2 className="pt-4  " id="course-name">Course Name</h2>



      <ol className="list-decimal border-b-2 pb-4 list-inside mt-3">
        {selectrdCourse.map((course) => (
          <li key={course.id}>{course.course_title}</li>
        ))}
      </ol>
      <h2 id="total-one" className=" pt-3 pb-4  border-b-2 ">Total Credit Hour :{credit}</h2>
      <h2 id="total-two" className=" pt-3  pb-0">Total Price :{allTotal}</h2>

    </div>
  );
};

export default Cart;
