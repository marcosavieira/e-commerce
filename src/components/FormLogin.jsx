import { bgColors, textColors } from "../design/styledGuide/colors";
import { tipography } from "../design/styledGuide/typography";
import { BolsaCubos } from "./icons/SacolaCubos/BolsaCubos";
import { ButtonLogin } from "./ButtonLogin";

export const FormLogin = () => {
    const styleForm = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "446px",
        height: "577px",
        ...bgColors.bgForm,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "6px",
    };

    return (
        <>
            <div style={styleForm}>
                <BolsaCubos />
                <h1
                    style={{
                        ...tipography.tpPrimary,
                        ...textColors.textPrimary,
                    }}
                >
                    MarktPlace
                </h1>
                <ButtonLogin />
            </div>
        </>
    );
};
