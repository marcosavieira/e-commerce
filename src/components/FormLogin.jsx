import { bgColors, textColors } from "../design/styledGuide/colors";
import { headline, market, typography } from "../design/styledGuide/typography";
import { BolsaCubos } from "./icons/SacolaCubos/BolsaCubos";
import { ButtonLogin } from "./ButtonLogin";
import { useForm } from "react-hook-form";
import style from "../Pages/SignIn/style.module.css";

export const FormLogin = () => {
    const {
        register,
        handleSubmit,
        watch,
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
                    <span style={{ ...headline.h6 }}>Boas-Vindas!</span>
                    <span style={{ ...typography.tpCaption }}>
                        Use seu e-mail e senha para acessar a conta
                    </span>
                </div>
                <form
                    className={style.containerForm}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={style.formInputs}>
                        <label
                            style={{ ...typography.tpBodySemiBold }}
                            htmlFor="E-mail"
                        >
                            E-mail
                        </label>
                        <input
                            style={{ ...typography.tpBodyRegular }}
                            placeholder="exemplo@email.com"
                            {...register("email")}
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
                    <div className={style.divButton}>
                        <ButtonLogin />
                    </div>
                </form>
                <span style={{ ...typography.tpBodyRegular }}>
                    Não possui conta?
                    <a
                        href="#"
                        style={{
                            ...textColors.priceColor,
                            ...typography.tpBodyRegular,
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        {" "}
                        Cadastrar
                    </a>
                </span>
            </div>
        </>
    );
};
