import { containerSignIn } from "../../design/styledGuide/Containers";
import { FormLogin } from "../../components/FormLogin";
export const SignIn = () => {
    return (
        <>
            <div style={{ ...containerSignIn }}>
                <FormLogin />
            </div>
        </>
    );
};
