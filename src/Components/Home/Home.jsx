/* eslint-disable react/jsx-key */
import { useState } from "react";
import { useEffect } from "react";
import { BiDollar } from "react-icons/bi";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectrdCourse, setSelectedCourse] = useState([]);
  const [allTotal, setAllTotal] = useState(0);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);

  useEffect(() => {
    fetch("./Action.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelectrActor = (course) => {
    const ifExest = selectrdCourse.find((item) => item.id === course.id);
    let creditTime = course.credit_time;
    let price = course.price;
    if (ifExest) {
      return toast("This Allready Selected");
    } else {
      selectrdCourse.forEach((item) => {
        (price += item.price), (creditTime += item.credit_time);
      });
      const remaining = 20 - creditTime;
      if (creditTime > 20) {
        return toast("AllReady Too Much Selected");
      } else {
        setCredit(creditTime);
        setRemaining(remaining);
        setAllTotal(price);
        setSelectedCourse([...selectrdCourse, course]);
      }
    }
  };
  return (
    <div className="bg-[#F3F3F3] w-full">
      <h1 id="home-title" className="  w-full text-4xl pt-5 pb-5 text-center">
        Course Registration
      </h1>
      <div className=" flex flex-col md:gap-4 md:flex-row justify-around   ">
        <div className="  grid grid-cols-1  gap-5 flex-col md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className=" bg-white p-5 rounded-[10px] w-full md:w-[250px] lg:w-[312px] gap-5 "
            >
              <figure>
                <img className="w-full" src={course.thumbnail} alt="" />
              </figure>
              <h2 id="card-name" className="text-center pt-4 ">
                {course.course_title}
              </h2>
              <h2 className="text-center text-gray-500 pt-3">
                <small>{course.course_detail}</small>
              </h2>

              <div className="flex pt-4 pb-3 justify-evenly">
                <BiDollar></BiDollar>
                <p className="text-center"> Price :{course.price}</p>
                <span>
                  <img src="/src/Frame.jpg" alt="" />
                </span>
                <p>Credit :{course.credit_time}hr</p>
              </div>
              <div onClick={() => handleSelectrActor(course)} className="">
                <button  className=" h-[40px] rounded-[8px] w-full bg-[#2F80ED] text-white">
                  Select
                </button>
                <ToastContainer/>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Cart
            remaining={remaining}
            credit={credit}
            allTotal={allTotal}
            selectrdCourse={selectrdCourse}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
