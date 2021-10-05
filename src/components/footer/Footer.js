import React from "react";

import style from "./style.module.css";

function Footer() {
  return (
    <>
      <body>
        <footer className={style["footer1"]}>
          <div className={style["back"]}>
            <div className={style["contact"]}>
              <div className={style["box"]}>
                <div className={style["bar"]}>
                  <h2>Contact</h2>
                </div>

                <h2> </h2>
              </div>

              <div className={style["paragraph"]}>
                <div className={style["weight"]}>
                  <p>J.K. institue of Applied Physics and Techonology, </p>
                  <p>University of Allahabad</p>
                </div>

                <p>Senate House Campus</p>
                <p>0532-2461083</p>
              </div>

              <div className={style["address"]}>
                <div className={style["box"]}>
                  <div className={style["bar"]}>
                    <h2>Address</h2>
                  </div>

                  <h2> </h2>
                </div>
                <div className={style["paragraph"]}>
                  <div className={style["weight"]}>
                    <p>University Road ,old katra,</p>
                    <p>Prayagraj, Uttar Pradesh-</p>
                  </div>
                  <p>211001</p>
                </div>
              </div>
            </div>

            <div className={style["quick"]}>
              <div className={style["box"]}>
                <div className={style["bar"]}>
                  <h2>Quick</h2>
                </div>

                <h2>Links</h2>
              </div>

              <div className={style["paragraph"]}>
                <p>Directory</p>
                <p>NEP 2020</p>
                <p>Sankalpana</p>
                <p>Tender</p>
                <p>Academic Calender</p>
                <p>Download Forms</p>
              </div>
            </div>

            <div className={style["quick1"]}>
              <div className={style["box"]}>
                <div className={style["bar"]}>
                  <h2>Quick</h2>
                </div>

                <h2>Links</h2>
              </div>

              <div className={style["paragraph"]}>
                <p>Pay Fees</p>
                <p>Admit card</p>
                <p>CCASH</p>
                <p>Student Feedback Form</p>
                <p>Holidays</p>
              </div>
            </div>

            <div className={style["quick2"]}>
              <div className={style["box"]}>
                <div className={style["bar"]}>
                  <h2>Quick</h2>
                </div>

                <h2>Links</h2>
              </div>

              <div className={style["paragraph"]}>
                <p>Annunal report</p>
                <p>Contact Us</p>
                <p>Web Mail</p>
              </div>
            </div>
          </div>
        </footer>
        <footer>
          <div className={style["copy"]}>
            <div className={style["reserved"]}>
              <p id={style["A"]}>&copy; 2020-21 All Rights Reserved.</p>
              <p>J.K. institue of Applied Physics and Techonology</p>
            </div>
            <div className={style["logo"]}>
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="fb-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/twitter--v1.png"
                alt="twitter-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linked-icon"
              />
              <img
                src="https://img.icons8.com/color/48/000000/youtube-play.png"
                alt="youtube-icon"
              />
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Footer;
