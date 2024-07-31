import React from "react";
import services from "../Data/Education.json";
import "./Education.css";

const Education = () => {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#internship">
                  Internship
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#certifications">
                  Certifications
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {services.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <div className="row" key={i}>
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">
                          {item.coursename} - {item.courseyear}
                        </h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.institute} </h5>
                          <h6 data-aos="fade-left"> {item.grade}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="internship">
                <div className="educationblock">
                  <div className="row">
                    <div className="col-sm-4">
                      <h5 data-aos="fade-right">April, 2024 - June, 2024</h5>
                    </div>
                    <div className="col-sm-8">
                      <div className="educationright" data-aos="fade-left">
                        <h5>CellStrat AI Lab</h5>
                        <h6>Project - Imagine View KB Miner</h6>
                        <br></br>
                        <h6>
                          - Python, RAG , GenAI, AWS
                          <br></br>
                          <br />
                          - Implemented solution to upload PDF’s and CSV’s and using RAG (using Lang &nbsp;&nbsp;chain, OpenAI,) 
                            &nbsp;and deployed on AWS services like lambdas, lambda layers, for &nbsp;&nbsp;vectorization used up stash 
                            &nbsp;and able to chat interactively with files even with the &nbsp;&nbsp;larger file until 50 mb. 
                          <br />
                          <br></br>
                          - Worked on OCR Feature, analyzed all possible frameworks available and got to 
                            &nbsp;&nbsp;work on solution which can work with handwritten images well enough. 
                          <br />
                          <br></br>
                          - Identified text2sql feature which can be converted as a framework to be 
                            &nbsp;&nbsp;architected so that no matter what is the data source, user’s queries will be 
                            &nbsp;&nbsp;converted to SQL’s fetch data and chat history will be stored and users can filter 
                            &nbsp;&nbsp;the data, this will be a whole set up on AWS and OpenAI
                          <br />
                          <br></br>
                          - Worked with chalice API and cdk deployment on AWS for all features.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="certifications">
                <div className="educationblock">
                  <div className="row">

                    <div className="col-sm-8">
                      <div className="educationright" data-aos="fade-left">
                        <h5>Professional Certifications</h5>
                        <br></br>
                        <h6>
                          - AWS Certified Solutions Architect Associate   <br></br> &nbsp;&nbsp;(Issued in Dec,2023 Expires in Dec,2026)
                          <br></br>
                          <br />
                          - Databricks Certified Data Engineer Associate <br></br> &nbsp;&nbsp;(Issued in Mar,2023 Expires in Mar,2025)
                          <br />
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
