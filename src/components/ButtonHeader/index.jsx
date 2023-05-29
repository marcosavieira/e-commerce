import { hover } from "../../design/styledGuide/hovers";
import { bgColors, textColors } from "../../design/styledGuide/colors";
import { typography } from "../../design/styledGuide/typography";
import { useState } from "react";

export const ButtonHeader = () => {
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
        width: "185px",
        height: "48px",
        borderRadius: "24px",
        border: "none",
        cursor: "pointer",
        ...(isHover ? hover.buttonLoginHover : bgColors.bgButtons),
        ...textColors.textWhite,
        ...typography.tpBodySemiBold,
    };
    return (
        <button
            type="button"
            style={{ ...styledButton }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            $ Quero vender
        </button>
    );
};
