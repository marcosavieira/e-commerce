import { Header } from "../../components/Header";
import { bgColors } from "../../design/styledGuide/colors";
import style from "./style.module.css";

export const Home = () => {
    return (
        <div style={{ ...bgColors.bgWhite }} className={style.containerMain}>
            <Header />
            <h1>Home</h1>
        </div>
    );
};
