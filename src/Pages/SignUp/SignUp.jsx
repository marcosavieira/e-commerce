import { FormSignUp } from "../../components/UserSignUp/FormSignUp";
import { containerForms } from "../../design/styledGuide/Containers";
export const SignUp = () => {
    return (
        <div style={{ ...containerForms }}>
            <FormSignUp />
        </div>
    );
};
