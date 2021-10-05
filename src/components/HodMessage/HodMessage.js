import React from "react";

import style from "./message.module.css";
import hod_image from "./HEAD.JPG";

function HodMessage() {
  return (
    <>
      <body className={style.body}>
        <main className={style.container}>
          <div id={style["welcome"]}>
            <h1>WELCOME MESSAGE FROM HEAD OF THE DEPARTMENT</h1>
          </div>
          <div className={style.contaier1}>
            <div className={style.photo}>
              <img src={hod_image} alt="" />
              <div className={style.name}>
                <h2>PROF. R.S. YADAV</h2>
                <h3>HEAD OF DEPARTMENT (H.O.D)</h3>
              </div>
            </div>
            <div className={style.message}>
              <p>
                {" "}
                Welcome to the Department of Electronics and Communication,
                better known, J. K. Institute of Applied Physics and Technology
                at the University of Allahabad. J. K. Institute of Applied
                Physics and Technology stands as one of the most prestigious
                education centers of our country. It is a Department of
                Electronics and Communication, located in the Muir College
                Campus (Science Faculty) of the University of Allahabad-which is
                one of the four oldest universities in India. Foundation stone
                of the J.K. Institute was laid by Late Pt. Jawaharlal Nehru on
                January 14, 1949, and it was formally inaugurated by him on
                April 4, 1956. It was named as J.K. Institute as J.K. charitable
                Trust contributed for the construction of the complete building
                structure. It is a pioneer Department in the country for
                teaching and research in the discipline of Electronics and
                Communication. The people who initially associated in growing up
                of the department were Prof. Krishnaji and the first head of the
                Department and well-known figure Prof. S. N. Ghosh – followed by
                Prof. M.S. Bisht, Prof K.D. Dikshit, and Prof V. Malviya and
                their colleagues. The Department conducts courses in the fields
                of Electronics & Communication and Computer Science. These
                courses have been designed to meet the current challenging
                demands of the nation. The Computer Science discipline was
                started in the year 1986 through the DRDO project on the ‘Man
                Power development in the area of Computer Science’.
                <div>
                  <p> </p>
                  <p></p>
                </div>
                Many alumni are associated with computer and communication
                establishments such as Philips, Alcatel, IBM, TCS, HAL, ITI,
                DoT, Railways, Tech Mahindra, Bell Telephone, ST
                Microelectronics, IAP, MT.
              </p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default HodMessage;
