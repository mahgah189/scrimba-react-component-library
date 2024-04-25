import React from "react";
import "./Banner.css";

export default function Banner({ bannerType = "neutral", children }) {

    function bannerEl() {
        let iconClass;
        let bannerHeaderText;
        if (bannerType === "success") {
            iconClass = "fa-circle-check";
            bannerHeaderText = "Congratulations!";
        } else if (bannerType === "warning") {
            iconClass = "fa-triangle-exclamation";
            bannerHeaderText = "Attention";
        } else if (bannerType === "error") {
            iconClass = "fa-circle-xmark";
            bannerHeaderText = "There is a problem with your application";
        } else if (bannerType === "neutral") {
            iconClass = "fa-circle-info";
            bannerHeaderText = "Update available";
        };

        return (
        <div className={`banner-container banner-${bannerType}`}>
            <i className={`fa-solid ${iconClass}`}></i>
            <p className="banner-header">{bannerHeaderText}</p>
            {children && <p className={"banner-body"}>{children}</p>}
        </div>
        )
    }


    return (
        <>
            {bannerEl()}
        </>
    )
};