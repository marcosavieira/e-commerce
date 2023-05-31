import { Header } from "../../components/Header";
import { bgColors } from "../../design/styledGuide/colors";
import style from "./style.module.css";
import { GetProducts } from "../../services/GetProducts";
import { useEffect, useState } from "react";

export const Home = () => {
    const [data, setData] = useState([]);
    const Products = async () => {
        try {
            const response = await GetProducts();
            setData(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        Products();
    }, []);

    return (
        <div style={{ ...bgColors.bgWhite }} className={style.containerMain}>
            <Header />
            <div className={style.containerProducts}>
                {data.map((produto) => (
                    <div className={style.listProducts} key={produto.id}>
                        <ul>
                            <li>
                                <img src={produto.picture} alt="" />
                            </li>
                            <li>{produto.description}</li>
                            <li>{produto.price}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
