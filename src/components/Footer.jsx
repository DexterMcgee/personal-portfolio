import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpCircle } from "react-bootstrap-icons";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import resume from "../Victor_Oloyede_Resume.docx";

export const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="footer">
      <Container>
        <p className="note">Thanks for Visiting!</p>
        <Row className="">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} className="arrowUp">
            <button className="toTop">
              <ArrowUpCircle size={50} onClick={toTop} />
            </button>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/VictorOloy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href={resume}>
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="mailto:victorzemail@gmail.com">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="tel:469-734-1247">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>
              {/* <foottext>
                Name may appear different on github and email. This is to
                protect online identity.
              </foottext> */}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
