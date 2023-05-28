import { containerForms } from "../../design/styledGuide/Containers";
import { FormLogin } from "../../components/UserLogin/FormLogin";
export const SignIn = () => {
    return (
        <>
            <div style={{ ...containerForms }}>
                <FormLogin />
            </div>
        </>
    );
};
