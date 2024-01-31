import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import "animate.css";

import api from "../assets/img/stack/api.png";
import css from "../assets/img/stack/css.png";
import figma from "../assets/img/stack/figma.png";
import firebase from "../assets/img/stack/firebase.png";
import flare from "../assets/img/stack/flare.png";
import git from "../assets/img/stack/git.png";
import htmlicon from "../assets/img/stack/htmlicon.png";
import javascript from "../assets/img/stack/javascript.png";
import jquery from "../assets/img/stack/jquery.png";
import json from "../assets/img/stack/json.png";
import lighthouse from "../assets/img/stack/lighthouse.png";
import next from "../assets/img/stack/next.png";
import node from "../assets/img/stack/node.png";
// import office from "../assets/img/stack/office.png";
import react from "../assets/img/stack/react.png";
import scss from "../assets/img/stack/scss.png";
import shopify from "../assets/img/stack/shopify.png";
import tailwind from "../assets/img/stack/tailwind.png";
import typescript from "../assets/img/stack/typescript.png";
import vscode from "../assets/img/stack/vscode.png";
import xml from "../assets/img/stack/xml.png";

export const Projects = () => {
  const projects = [
    {
      title: "COSMOS Beauty Shop",
      description: "A sample e-commerce site for cosmetics",
      imgUrl: projImg1,
      link: "https://cosmos-topaz.vercel.app/",
    },
    {
      title: "Netflix Clone",
      description: "Front-End Netflix clone with Back-End Implementation",
      imgUrl: projImg2,
      link: "https://netflixreactv2.vercel.app/signup",
    },
    {
      title: "Shapes and Themes",
      description: "Custom shapes with theme selector and randomizer",
      imgUrl: projImg3,
      link: "https://shapes-alpha.vercel.app/",
    },
    {
      title: "SEO Simplified",
      description: "A thorough writeup of what exactly search optimization is",
      imgUrl: projImg4,
      link: "https://seo-simplified.vercel.app/",
    },

    {
      title: "Pizza Palace",
      description: "Simple sample pizza website",
      imgUrl: projImg5,
      link: "https://pizza-palace-topaz.vercel.app/",
    },
    {
      title: "Morphus Social",
      description: "Mock social media site with emphasis on customization",
      imgUrl: projImg6,
      link: "https://morphus-social.vercel.app/",
    },
  ];

  // function handleScroll(e) {
  //   if (e.target.classList.contains("on-scrollbar") === false) {
  //     e.target.classList.add("on-scrollbar");
  //   }
  // }
  // window.addEventListener("scroll", handleScroll, true);

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p className="project-text">
                Below are some of my favorite projects that illustrate my skills
                through code, composition, and design.{" "}
                <yellowtext>
                  {" "}
                  Hover for details and click the arrow below the description to
                  visit the site.{" "}
                </yellowtext>
                Be sure to
                <yellowtext> read through the Instructions tab </yellowtext> as
                some projects have a few hidden details. All projects are{" "}
                <yellowtext>fully responsive. </yellowtext> <br />
                <smalltext> **Optimized for Chrome** </smalltext>
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Favorites</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Instructions</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Techstack</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="instructions">
                      <div>
                        <h2>COSMOS Beauty Shop:</h2>
                        <p>
                          An e-commerce site designed to display beauty products
                          and showcase shop, gallery, and blog templates.
                        </p>
                      </div>
                      <div>
                        <h2>Netflix Clone:</h2>
                        <p>
                          Upon first visit,{" "}
                          <yellowtext>
                            {" "}
                            you will be prompted to sign in. Use email and
                            create a password and click Sign up now. Firebase
                            authenticaton will save your information so you can
                            sign in whenever you want.{" "}
                          </yellowtext>{" "}
                          Titles gathered from a movie database api will show
                          thumbnails;{" "}
                          <yellowtext>
                            {" "}
                            click any thumbnail to view trailer.
                          </yellowtext>{" "}
                          Click smiley face in top right corner to sign out.
                        </p>
                      </div>
                      <div>
                        <h2>Shapes and Themes:</h2>
                        <p>
                          A grid of shapes created with Sass preprocessor.{" "}
                          <yellowtext>
                            {" "}
                            Click a shape to change its theme{" "}
                          </yellowtext>{" "}
                          for a total of five themes per shape.{" "}
                          <yellowtext>
                            {" "}
                            Buttons on the bottom right allow you to change all
                            shapes to a specific theme at once.{" "}
                          </yellowtext>
                          The skull represents a theme inspired by Dia de
                          Muertos. The alien is a 'desert alien' inspired theme.
                          The honeybee is a 'beehive' inspired theme. The
                          vampire is a theme inspired by the famous Dracula
                          theme used by many applications. The first button will
                          reset them and{" "}
                          <yellowtext>
                            {" "}
                            the last button will randomize them.{" "}
                          </yellowtext>
                        </p>
                      </div>
                      <div>
                        <h2>SEO Simplified:</h2>
                        <p>
                          A thorough, articulate, yet simple essay on how to
                          properly implement{" "}
                          <yellowtext>Search Engine Optimization </yellowtext>to
                          better serve your site.{" "}
                          <yellowtext>
                            {" "}
                            Click on any number to instantly scroll to its
                            corresponding chapter.{" "}
                          </yellowtext>
                        </p>
                      </div>

                      <div>
                        <h2>Pizza Palace:</h2>
                        <p>
                          A simple mock pizza website that uses{" "}
                          <yellowtext>
                            back-end information to display menu items on the
                            front-end.{" "}
                          </yellowtext>
                        </p>
                      </div>
                      <div>
                        <h2>Morphus Social:</h2>
                        <p>
                          A concept for a social media site in which users can
                          share and gather inspiration for creative work. The
                          highlight of this is the ability to customize theme.{" "}
                          <yellowtext>
                            {" "}
                            Click on the Theme button to customize any
                            combination of font size, accent color, and
                            background color.
                          </yellowtext>
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <picturebox>
                      <div className="picturebox">
                        <div>
                          <img src={htmlicon} alt="htmlicon" />
                          <p> HTML </p>
                        </div>
                        <div>
                          <img src={css} alt="css" />
                          <p> CSS </p>
                        </div>
                        <div>
                          <img src={javascript} alt="javascript" />
                          <p> Javascript </p>
                        </div>
                        <div>
                          <img src={react} alt="react" />
                          <p> React.js </p>
                        </div>
                        <div>
                          <img src={git} alt="git" />
                          <p> Git </p>
                        </div>
                        <div>
                          <img src={node} alt="node" />
                          <p> Node.js </p>
                        </div>
                        <div>
                          <img src={lighthouse} alt="lighthouse" />
                          <p> Google Lighthouse </p>
                        </div>
                        <div>
                          <img src={shopify} alt="shopify" />
                          <p> Shopify </p>
                        </div>

                        <div>
                          <img src={firebase} alt="firebase" />
                          <p> Firebase API </p>
                        </div>
                        <div>
                          <img src={next} alt="next" />
                          <p> Next.js </p>
                        </div>

                        <div>
                          <img src={scss} alt="scss" />
                          <p> SCSS </p>
                        </div>
                        <div>
                          <img src={figma} alt="figma" />
                          <p> Figma </p>
                        </div>
                        <div>
                          <img src={flare} alt="flare" />
                          <p> Madcap Flare </p>
                        </div>

                        <div>
                          <img src={jquery} alt="jquery" />
                          <p> jQuery </p>
                        </div>
                        <div>
                          <img src={json} alt="json" />
                          <p> JSON </p>
                        </div>

                        <div>
                          <img src={api} alt="api" />
                          <p> REST API </p>
                        </div>

                        <div>
                          <img src={tailwind} alt="tailwind" />
                          <p> Tailwind CSS </p>
                        </div>
                        <div>
                          <img src={typescript} alt="typescript" />
                          <p> Typescript </p>
                        </div>

                        <div>
                          <img src={xml} alt="xml" />
                          <p> xml </p>
                        </div>
                        <div>
                          <img src={vscode} alt="vscode" />
                          <p> VSCode </p>
                        </div>
                      </div>
                    </picturebox>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
