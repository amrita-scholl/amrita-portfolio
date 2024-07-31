import React from "react";
import work from "../Data/Work.json";
import "./Work.css";

const Work = () => {
  console.log(work);
  return (
    <>
      <div id="work">
        <div className="container">
          <div className="row">
            <div className="col-sm-11 offset-sm-1 ">
              <h2 data-aos="fade-down">Work</h2>
              <br />
              <div className="scrollable-div">
              {work.map((items) => (
                <div className="workblock " key={items.id}>
                  <div className="row">
                    <div className="col-sm-5">
                      <h5 data-aos="fade-right">{items.year}</h5>
                    </div>
                    <div className="col-sm-7">
                      <div className="educationright" data-aos="fade-left">
                        <h5>{items.companyname}</h5>
                        <h6 className="position">
                          <i>{items.position}</i>
                        </h6>
                        <h6>{items.desc}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
