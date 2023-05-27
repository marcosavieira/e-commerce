import { hover } from "../design/styledGuide/hovers";
import { bgColors, textColors } from "../design/styledGuide/colors";
import { tipography } from "../design/styledGuide/typography";
import { useState } from "react";

export const ButtonLogin = () => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const styledButton = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "112px",
        height: "56px",
        borderRadius: "30px",
        border: "none",
        cursor: "pointer",
        ...(isHover ? hover.buttonLoginHover : bgColors.bgButtons),
        ...textColors.textWhite,
        ...tipography.tpBodySemiBold,
    };
    return (
        <button
            style={{ ...styledButton }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Fazer login
        </button>
    );
};
