import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi"; 
import { toast } from "react-toastify";

const AddCourse = () => {
  useEffect(() => {
    document.title = "Add Course || Learn Today";
  }, []);

  const [course, setCourse] = useState({});

  // Form handler function
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course); // Call the function to post data to server
    e.preventDefault();
  };

  // Function to post data to server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/course`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added successfully");
        setCourse({id: "", title:"", description:""}); // Clear the form after successful submission
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Add Course details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => setCourse({ ...course, id: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            name="title"
            id="title"
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 180 }}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button 
            type="reset" 
            color="warning ms-2" 
             onClick={() => setCourse({id: "", title:"", description:""})}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;


// import React, { Fragment, useEffect, useState } from "react";
// import { Button, Container, Form, FormGroup, Input } from "reactstrap";

// import axios from "axios";
// import base_url from "../api/bootapi"; 
// import { toast } from "react-toastify";
// const AddCourse = () => {
//   useEffect(() => {
//     document.title = "Add Course || Learn Today";
//   }, []);

//   const [course, setCourse] = useState({});

//   // Form handler function
//   const handleForm = (e) => {
//     console.log(course);
//     postDataToServer(course); // Call the function to post data to server
//    e.preventDefault();
//   };

//   //creating func to post data on server
// const postDataToServer = (data) => {
// axios.post(`${base_url}/course `, data).then(
//   (response) => {
//     console.log(response);
//     console.log("success");
//     toast.success("Course added successfully");
//   },
//   (error) => {
//     console.log(error);
//     console.log("error");
//     toast.error("Something went wrong");
//   }
// )
// }


//   return (
//     <Fragment>
//       <h1 className="text-center my-3">Add Course details</h1>
//       {/* Use only Reactstrap Form with onSubmit */}
//       <Form onSubmit={handleForm}>
//         <FormGroup>
//           <label htmlFor="userId">Course Id</label>
//           <Input
//             type="text"
//             placeholder="Enter here"
//             name="userId"
//             id="userId"
//             onChange={(e) => setCourse({ ...course, id: e.target.value })}
//           />
//         </FormGroup>

//         <FormGroup>
//           <label htmlFor="title">Course Title</label>
//           <Input
//             type="text"
//             placeholder="Enter title here"
//             name="title"
//             id="title"
//             onChange={(e) => setCourse({ ...course, title: e.target.value })}
//           />
//         </FormGroup>

//         <FormGroup>
//           <label htmlFor="description">Course Description</label>
//           <Input
//             type="textarea"
//             placeholder="Enter description here"
//             id="description"
//             style={{ height: 180 }}
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//         </FormGroup>

//         <Container className="text-center">
//           <Button type="submit" color="success">
//             Add Course
//           </Button>
//           {/* <Button className="ms-2" color="danger" type="reset"> */}
//           <Button 
//           type="reset" 
//           color="warning ml-2" 
//           onClick={(e) => setCourse({});
//         }}
//         >
//             Clear
//           </Button>
//         </Container>
//       </Form>
//     </Fragment>
//   );
// };

// export default AddCourse;


// // import React, { Fragment, useEffect, useState} from "react";
// // import { Button, Container, Form, FormGroup, Input } from "reactstrap";

// // const AddCourse = () => {
// //     useEffect(() => {
// //           document.title = "Add Course || Learn Today";
// //       }, []);

// //       const [course, setCourse] = useState({});
// // //form handler  function
// //     const handleForm = (e) => {
        
// //         console.log(course);
// //         e.preventDefault();
// //     };

// //     //creating function to post data on server

// //     return (
// //         <Fragment>
// //             <h1 className="text-center my-3">Add Course details</h1>
// //             <form onSubmit={handleForm}>
// //             <Form>
// //                 <FormGroup>
// //                     {/* <label for="userId">Course Id</label> */}
// //                     <label htmlFor="userId">Course Id</label>
// //                     <Input type="text" 
// //                     placeholder="Enter here" 
// //                     name="userId" 
// //                     id="userId" 
// //                     onChange={(e) => {setCourse({...course, id: e.target.value});
// //                  }}
// //                     />
// //                 </FormGroup>

// //                 <FormGroup>
// //                     {/* <label for="title">Course Title</label> */}
// //                     <label htmlFor="title">Course Title</label>
// //                     <Input type="text" 
// //                     placeholder="Enter title here" 
// //                     name="title" 
// //                     id="title"
// //                     onChange={(e) =>{ setCourse({...course, title: e.target.value}); 
// //                     }}
// //                      />
// //                 </FormGroup>

// //                 <FormGroup>
// //                     {/* <label for="description">Course Description</label> */}
// //                     <label htmlFor="description">Course Description</label>
// //                     <Input type="textarea" 
// //                     placeholder="Enter description here" 
// //                     id="description" 
// //                     style={{height:180}}
// //                     onChange={(e) => {setCourse({...course, description: e.target.value});
// //                      } }
// //                     />
// //                 </FormGroup>

// //                 <Container className="text-center">
// //                     <Button type="submit" color="success">Add Course</Button>
// //                     <Button className="ms-2" color="danger">Clear</Button>
// //                 </Container>
// //             </Form>
// //         </Fragment>
// //     );
// // };

// // export default AddCourse;