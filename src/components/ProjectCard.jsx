import { Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <form action={link} target="_blank">
            <a href={link} target="blank">
              <button>
                <ArrowRight size={30} />
              </button>
            </a>
          </form>
        </div>
      </div>
    </Col>
  );
};
