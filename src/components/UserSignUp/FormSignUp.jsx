import { bgColors, textColors } from "../../design/styledGuide/colors";
import {
    headline,
    market,
    typography,
} from "../../design/styledGuide/typography";
import { BolsaCubos } from "../icons/SacolaCubos/BolsaCubos";
import { ButtonSignUp } from "./ButtonSignUp";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export const FormSignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data); //dados do form
    };

    return (
        <>
            <div
                className={style.containerLogin}
                style={{ ...bgColors.bgForm }}
            >
                <div className={style.headerForm}>
                    <BolsaCubos />
                    <span style={{ ...market }}>Market Cubos</span>
                </div>
                <div className={style.subHeaderForm}>
                    <span style={{ ...headline.h6 }}>Cadastre-se</span>
                </div>
                <form
                    className={style.containerForm}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={style.formInputs}>
                        <label
                            style={{ ...typography.tpBodySemiBold }}
                            htmlFor="loja"
                        >
                            Nome da loja
                        </label>
                        <input
                            type="text"
                            style={{ ...typography.tpBodyRegular }}
                            placeholder="Nome da sua loja"
                            {...register("loja")}
                        />
                    </div>
                    <div className={style.formInputs}>
                        <label
                            style={{ ...typography.tpBodySemiBold }}
                            htmlFor="Email"
                        >
                            E-mail
                        </label>
                        <input
                            style={{ ...typography.tpBodyRegular }}
                            type="email"
                            placeholder="seuemail@aaa.com"
                            {...register("Email", { required: true })}
                        />
                    </div>
                    <div className={style.formInputs}>
                        <label
                            style={{ ...typography.tpBodySemiBold }}
                            htmlFor="Password"
                        >
                            Senha
                        </label>
                        <input
                            style={{ ...typography.tpBodyRegular }}
                            type="password"
                            placeholder="Insira sua senha"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <p>This field is required</p>}
                    </div>
                    <div className={style.formInputs}>
                        <label
                            style={{ ...typography.tpBodySemiBold }}
                            htmlFor="Password"
                        >
                            Confirme sua senha
                        </label>
                        <input
                            style={{ ...typography.tpBodyRegular }}
                            type="password"
                            placeholder="Confirme sua senha"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <p>This field is required</p>}
                    </div>
                    <div className={style.politicAndPrivacy}>
                        <span style={{ ...typography.tpCaption }}>
                            Ao criar uma conta, você concorda com a nossa <br />
                            <a
                                style={{
                                    ...textColors.priceColor,
                                    ...typography.tpCaption,
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    marginLeft: "15px",
                                }}
                                href=""
                            >
                                Política de Privacidade{" "}
                            </a>{" "}
                            e{" "}
                            <a
                                style={{
                                    ...textColors.priceColor,
                                    ...typography.tpCaption,
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                                href=""
                            >
                                Termos de serviço
                            </a>
                        </span>
                    </div>
                    <div className={style.divButton}>
                        <ButtonSignUp />
                    </div>
                </form>
                <span style={{ ...typography.tpBodyRegular }}>
                    Já tem uma conta?
                    <Link
                        to="/sign-up"
                        style={{
                            ...textColors.priceColor,
                            ...typography.tpBodyRegular,
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        Fazer Login
                    </Link>
                </span>
            </div>
        </>
    );
};
