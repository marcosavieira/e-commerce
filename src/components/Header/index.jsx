import { bgColors } from "../../design/styledGuide/colors";
import style from "./style.module.css";

export const Header = () => {
    return (
        <div style={{ ...bgColors.bgForm }} className={style.container}>
            <h1>HEADER</h1>
        </div>
    );
};
