import axios from "axios";
import React from "react";
import base_url from "../api/bootapi"; 
import{toast} from "react-toastify";
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Container,
    Button,
} from "reactstrap";

const Course = ({ course, update }) => {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course deleted successfully", Response.data);
                update(id); // Call the update function to remove the course from the list
               
            },
            (error) => {
                toast.error("Error deleting course", error);
                alert("Something went wrong while deleting the course; server problem");
            }
        )
    };
    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger"onClick={() =>{
                        deleteCourse(course.id);
                        alert("Course deleted successfully");
                    }}>Delete</Button>
                    <Button color="warning ms-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;

// import React from "react";
// import {
//     Card,
//     CardBody,
//     CardTitle,
//     CardSubtitle,
//     CardText,
//     CardFooter,
//     Button,
//     Container,
// } from "reactstrap";

// const Course = () => {
//     return (
//         <Card>
//             <CardBody className="text-center">
//                 <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
//                 <CardText>{course.description}</CardText>
//             <Container className="text-center">
//                 <Button color="danger">Delete</Button>
//                 <Button color="warning ml-3">Update</Button>
//             </Container>
//             </CardBody>
//         </Card>
//     );
// };
// export default Course;