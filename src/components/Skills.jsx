import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmliconblack from "../assets/img/skills/htmlblack.png";
import figmablack from "../assets/img/skills/figmablack.png";
import lighthouseblack from "../assets/img/skills/lighthouseblack.png";
import officeblack from "../assets/img/skills/officeblack.png";
import gitblack from "../assets/img/skills/gitblack.png";
import reactblack from "../assets/img/skills/reactblack.png";
import quillblack from "../assets/img/skills/quillblack.png";

export const Skills = () => {
  const responsive = {
    ultrawide: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                {" "}
                My greatest skills revolve around taking advantage of multiple
                programs in combination to create something{" "}
                <yellowtext>
                  {" "}
                  unique, visually appealing, and efficient.{" "}
                </yellowtext>{" "}
                I believe that in any type of project, the end result should
                encapsulate something{" "}
                <yellowtext> greater than the sum of its parts. </yellowtext>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={htmliconblack} alt="" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={figmablack} alt="" />
                  <h5>UI Design</h5>
                </div>
                <div className="item">
                  <img src={lighthouseblack} alt="" />
                  <h5>Search Engine/Web Optimization</h5>
                </div>
                <div className="item">
                  <img src={reactblack} alt="" />
                  <h5>Mobile/App Development</h5>
                </div>
                <div className="item">
                  <img src={gitblack} alt="" />
                  <h5>Version Control</h5>
                </div>

                <div className="item">
                  <img src={quillblack} alt="" />
                  <h5>Technical Writing</h5>
                </div>
                <div className="item">
                  <img src={officeblack} alt="" />
                  <h5>Office Suite</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
