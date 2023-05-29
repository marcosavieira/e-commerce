import { bgColors } from "../../design/styledGuide/colors";
import { headline, market } from "../../design/styledGuide/typography";
import { ButtonHeader } from "../ButtonHeader";
import { BolsaCubos } from "../icons/SacolaCubos/BolsaCubos";
import { Cart } from "../icons/defaultIcons/cart";
import { Loja } from "../icons/defaultIcons/loja";
import { Profile } from "../icons/defaultIcons/profile";
import style from "./style.module.css";

export const Header = () => {
    return (
        <div style={{ ...bgColors.bgForm }} className={style.container}>
            <div className={style.headerTitle}>
                <BolsaCubos />
                <span style={{ ...market }}>Market Cubos</span>
            </div>

            <div className={style.containerNavs}>
                <div className={style.headerNavs}>
                    <Cart />
                    <span style={{ ...headline.h4Nav, cursor: "pointer" }}>
                        Meu carrinho
                    </span>
                    <Loja />
                    <span style={{ ...headline.h4Nav, cursor: "pointer" }}>
                        Meu anúncios
                    </span>
                    <Profile />
                    <span style={{ ...headline.h4Nav, cursor: "pointer" }}>
                        Usuário
                    </span>
                </div>
                <ButtonHeader />
            </div>
        </div>
    );
};
