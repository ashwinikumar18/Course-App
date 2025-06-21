import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  const [courses, setCourses] = useState([]);

  // Function to get data from server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.dismiss();
        toast.success("Courses loaded successfully");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  // Load courses on component mount
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  // Handler to delete course by ID
  const updateCourseById = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
    toast.success("Course deleted successfully");
  };

  return (
    <div>
      <h1>All courses</h1>
      <p>List of courses:</p>

      {courses.length > 0 ? (
        courses.map((item) => (
          <Course key={item.id} course={item} update={updateCourseById} />
        ))
      ) : (
        "No courses"
      )}
    </div>
  );
};

export default AllCourses;



// import React, {useState, useEffect, use} from "react";
// import Course from "./Course";
// import base_url from "../api/bootapi";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AllCourses = () => {
// useEffect(() => {
//     // alert("All courses component loaded");
//     document.title = "All Courses";
// }, []);

// //function to call server
// const getAllCoursesFromServer = () => {
//     axios.get(`${base_url}/courses`).then(
//          (response) => {
//         console.log(response.data);
//         toast.dismiss();
//         toast.success("Courses loaded successfully");
//         setCourses(response.data);
//     },
//         (error) => {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     );
// };
// //calling loading course the function
// useEffect(() => {
//     getAllCoursesFromServer();  
// }
// , []);

//     const [courses, setCourses] = useState([
//     //    {title:"Springboot Course", description:"Learn Springboot from scratch"},
//     //    {title:"Angular Course", description:"Learn Angular from scratch"},
//     //    {title:"Java Course", description:"Learn Java from scratch"},
//     //    {title:"React Course", description:"Learn React from scratch"},
//     //    {title:"Cybersecurity Course", description:"Learn Cybersecurity from scratch"}
//     ]);

//     const updateCourseById=(id) => {
//         setCourses(courses.filter((c) => c.id !== id));
//         toast.success("Course deleted successfully");
//     }
//     return(
//         <div>
//             <h1>All courses</h1>
//             <p>List of courses:</p>

//             {courses.length > 0 ? courses.map((item) => 
//                 <Course key={item.id} course={item} update={updateCourses} />
//             ))
//             : "No courses"}
//         </div>
//     )
// };

// export default AllCourses;