import React from "react";
import "./Button.css"

export default function Button({ color, shape, children = "Badge" }) {

    const styles = {
        color: {},
        backgroundColor: {}
    };

    switch (color) {
        case "gray":
            styles.color = "#1F2937";
            styles.backgroundColor = "#F3F4F6";
            break;
        case "red":
            styles.color = "#991B1B";
            styles.backgroundColor = "#FEE2E2";
            break;
        case "yellow":
            styles.color = "#92400E";
            styles.backgroundColor = "#FEF3C7";
            break;
        case "green":
            styles.color = "#065F46";
            styles.backgroundColor = "#D1FAE5";
            break;
        case "blue":
            styles.color = "#1E40AF";
            styles.backgroundColor = "#DBEAFE";
            break;
        case "indigo":
            styles.color = "#3730A3";
            styles.backgroundColor = "#E0E7FF";
            break;
        case "purple":
            styles.color = "#5B21B6";
            styles.backgroundColor = "#EDE9FE";
            break;
        case "pink":
            styles.color = "#9D174D";
            styles.backgroundColor = "#FCE7F3";
            break;
    }

    return (
        <button className={`button-component ${shape}`} style={styles}>{children}</button>
    );
};