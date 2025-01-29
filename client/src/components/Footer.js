// import "../App.css";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";

// function Footer() {
//   return (
//     <Navbar className="custom-footer">
//       <Container className="container-footer">
//         <footer className="footer">
//           <span className="project-collaborators">Project Collaborators:</span>

//           <span className="footer-text">@Copyright Global Beacon Network</span>
//         </footer>
//       </Container>
//     </Navbar>
//   );
// }

// export default Footer;

import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Navbar className="custom-footer">
      <Container className="container-footer d-flex justify-content-between">
        <span className="project-collaborators">Project Collaborators:</span>
        <span className="footer-text">© Copyright Global Beacon Network</span>
      </Container>
    </Navbar>
  );
}

export default Footer;
