import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import floatPic from "../assets/img/floatPic.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { scroller } from "react-scroll";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Developer", "Designer", "Enthusiast"];
  const [text, setText] = useState("");
  const [delta, SetDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      SetDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      SetDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      SetDelta(500);
    }
  };

  const connectButton = () => {
    scroller.scrollTo("connect", {});
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Space</span>
              <h1>
                {`Hi! I'm Victor,`}{" "}
                <span
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "Developer", "Designer", "Enthusiast" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                <yellowtext> I'm Victor Oloyede, </yellowtext> A hard-working
                and self-sufficient learner, actively bridging the gap between
                Development, Design, and Creativity. My creative philosophy is{" "}
                <yellowtext> Beautiful, yet Practical </yellowtext>and I like to
                exhibit this as I influence the people around me, while I draw
                inspiration from them. Have a look through my{" "}
                <yellowtext> Fully Responsive </yellowtext> portfolio and find
                that my work speaks for itself!
              </p>

              <button onClick={connectButton}>
                <yellowtext> Let’s Connect </yellowtext>{" "}
                <buttontext>
                  {" "}
                  <ArrowRightCircle size={25} />{" "}
                </buttontext>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={floatPic} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
