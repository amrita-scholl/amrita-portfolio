import React from "react";
import { Link } from "react-router-dom";
import MailIcon from "../assets/img/socialicons/email.png";
import Githubicon from "../assets/img/socialicons/github.png";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Pdf from "../assets/pdf/amrita_singh.pdf";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-3  offset-sm-1" >
            <div className="imgsec">
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/amrita-singh-0431ab1b4/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/amrita-scholl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="mailto:cloud.amrita@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              
            </div>
          </div>
          <div className="col-sm-5">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Amrita Singh</h1>
              <h2>Technologist</h2>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
