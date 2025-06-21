import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from './components/Home';
import Course from './components/Course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const btnHandle = () => {
    toast.error("done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<AllCourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import {Button, Container, Row, Col} from "reactstrap";
// import {ToastContainer, toast} from "react-toastify";
// import Home from './components/Home';
// import Course from './components/Course';
// import AllCourses from './components/AllCourses';
// import AddCourse from './components/AddCourse';
// import Header from './components/Header';
// import Menus from './components/Menu';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// function App() {
//   const btnHandle = () => {
//     toast.error("done", {
//       position: "top-center",
//     });
//   };
//   return (
//     <div>
// <Router>
//   <ToastContainer/>
// <Container>
//   <Header/>
//   <Row>
//     <Col md={4}>
//     <Menus/>
//     </Col>
//     <Col md={8}>
//     <Home/>
//     <Routes>
//     <Route path="/" component={Home} exact />
//     <Route path="/add-course" component={AddCourse} exact />
//     <Route path="/view-courses" component={AllCourses} exact />
//     </Routes>
//     </Col>
//   </Row>
// </Container>
// </Router>
//    </div>
//   );
// }

// export default App;
