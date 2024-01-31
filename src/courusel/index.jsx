import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import ContentSection from "./ContentSection";

const transitionStyle1 = {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
};

const transitionStyle2 = {
    from: { opacity: 0, transform: "scale(0)", display: "none" },
    enter: { opacity: 1, transform: "scale(1)", display: "block" },
    leave: { opacity: 0, transform: "scale(0)", display: "none" },
};

const transitionStyle3 = {
    from: {
        opacity: 0,
        transform: "perspective(900px) rotateX(180deg)",
        display: "none",
    },
    enter: {
        opacity: 1,
        transform: "perspective(900px) rotateX(0deg)",
        display: "block",
    },
    leave: {
        opacity: 0,
        transform: "perspective(900px) rotateX(180deg)",
        display: "none",
    },
};
const transitionStyle4 = {
    from: { opacity: 0, transform: "rotateZ(180deg)", display: "none" },
    enter: { opacity: 1, transform: "rotateZ(0deg)", display: "block" },
    leave: { opacity: 0, transform: "rotateZ(180deg)", display: "none" },
};

const index = () => {
    return (
        <>
            <Hero />

            <ContentSection reverse={true} transitionStyle={transitionStyle1} />
            <ContentSection transitionStyle={transitionStyle2} />
            <ContentSection reverse={true} transitionStyle={transitionStyle3} />
            <ContentSection transitionStyle={transitionStyle4} />

            <Footer />
        </>
    );
};

export default index;
