import React from "react";
import CouruselImgs from "./CoruselImgs";
import "./contentSection.css";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img4.jpg";

const SLIDES = [img1, img2, img3, img4, img5];

const ContentSection = ({ reverse = false, transitionStyle }) => {
    

    return (
        <div
            className={
                reverse
                    ? "content-section-container"
                    : "content-section-container-rev"
            }
        >
            <div className={`content-left content-clm`}>
                <h2>This is content header</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis iste quaerat beatae blanditiis consectetur quasi
                    ipsa vel corrupti aut, dolorum at dolor. Dolor
                    exercitationem officia harum, aut voluptate obcaecati animi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis iste quaerat beatae blanditiis consectetur quasi
                    ipsa vel corrupti aut, dolorum at dolor. Dolor
                    exercitationem officia harum, aut voluptate obcaecati animi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis iste quaerat beatae blanditiis consectetur quasi
                    ipsa vel corrupti aut, dolorum at dolor. Dolor
                    exercitationem officia harum, aut voluptate obcaecati animi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis iste quaerat beatae blanditiis consectetur quasi
                    ipsa vel corrupti aut, dolorum at dolor. Dolor
                    exercitationem officia harum, aut voluptate obcaecati animi.
                </p>
            </div>
            <div className="content-right content-clm">
                <CouruselImgs
                    slides={SLIDES}
                    transitionStyle={transitionStyle}
                />
            </div>
        </div>
    );
};

export default ContentSection;
