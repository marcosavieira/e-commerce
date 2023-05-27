import { textColors } from "../colors";
export const typography = {
    tpPrimary: {
        fontFamily: ("Public Sans", "sans-serif"),
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "600",
    },
    tpSubtitle: {
        fontFamily: ("Public Sans", "sans-serif"),
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "500",
    },
    tpBodyRegular: {
        fontFamily: ("Public Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
    },
    tpBodySemiBold: {
        fontFamily: ("Public Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px",
    },
    tpButtons: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
    },
    tpCaption: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
    },
};

export const headline = {
    h1: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "56px",
        ...textColors.textPrimary,
    },
    h2: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "48px",
        ...textColors.textPrimary,
    },
    h3: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "40px",
        ...textColors.textPrimary,
    },
    h4: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "32px",
        ...textColors.textPrimary,
    },

    h4SemiBold: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "32px",
        ...textColors.textPrimary,
    },

    h5: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "24px",
        ...textColors.textPrimary,
    },
    h6: {
        fontFamily: ("Public-Sans", "sans-serif"),
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "20px",
        ...textColors.textPrimary,
    },
};

export const market = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "27px",
    color: "#252531",
};
