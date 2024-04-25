import React from "react";
import doubleQuotes from "../../assets/double-quotes.svg";
import dotPattern from "../../assets/dot-pattern.svg";
import profilePicDefaultSmall from "../../assets/profile-pic.png";
import profilePicDefaultLarge from "../../assets/profile-pic-lg.png";
import defaultLogo from "../../assets/default-logo.svg";
import slash from "../../assets/slash.svg";
import "./Testimonials.css";

export default function Testimonials({ profilePic, name, title, orgIcon, children }) {

    function testimonialBodyLayout() {

        const testimonialBodyPicEl = (
            <div className="testimonial-body-pic">
                <img className="double-quotes" src={doubleQuotes} alt="An icon of double quotation marks." />
                <div className="testimonial-text-container-pic">
                    <p className="testimonial-body-text">{children}</p>
                    <div className="testimonial-source">
                        <p className="testimonial-source-name">{name}</p>
                        <p>{title}</p>
                    </div>
                </div>
             </div>
        )

        const testimonialBodyNoPicEl = (
            <div className="testimonial-body-no-pic">
                <div className="testimonial-text-container">
                    <p className="testimonial-body-text-no-pic">{children}</p>
                    <div className="testimonial-source">
                        <p className="testimonial-source-name">{name}</p>
                        <img className="slash-logo" src={slash} alt="A slash logo" />
                        <p>{title}</p>
                    </div>
                </div>
                <img className="dot-pattern" src={dotPattern} alt="A decorative pattern of dots." />
             </div>
        )

        return profilePic ? testimonialBodyPicEl : testimonialBodyNoPicEl;
    }

    const profilePicEl = (
        <div 
            className="profile-pic" 
            role="img" 
            aria-label="An image of the person that is giving this testimonial."
            style={{
                backgroundImage: `url("${profilePic}")`
            }}
        ></div>
    );

    return (
        <div className="testimonial-container">
            {profilePic && profilePicEl}
            {testimonialBodyLayout()}
        </div>
    )
};