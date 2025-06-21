import React, { useEffect } from 'react';
import { Container, Button } from "reactstrap";

const Home = () => {
  useEffect(() => {
      document.title = "Home || Learn Today";
  }, []);
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1>Unlock Your Potential</h1>
        <p>Whether you’re just starting out or looking to deepen your expertise, my carefully designed courses blend theory, practical projects, and real-world insights to accelerate your learning journey.Each course is crafted to provide clear, actionable knowledge in key development areas like web development, programming languages, frameworks, and best practices. Expect step-by-step tutorials, hands-on coding exercises, and comprehensive resources to help you build projects that matter. By the end, you’ll have the confidence and skills to tackle real-world challenges or advance your career.</p>
        <Container>
          <Button color="primary" outline>Start Using</Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
// import React from 'react';
// import {Jumbotron, Container, Button} from "reactstrap";
// const Home=()=> {
//     return (
//         <div>
// <Jumbotron className="text-center">
//     <h1 className='display-3'>Learn code</h1>
//     <p>This is a frontend part</p>
//     <Container>
//         <Button color="primary" outline>Start</Button>
//     </Container>
// </Jumbotron>
//         </div>
//     );
// };
// export default Home;