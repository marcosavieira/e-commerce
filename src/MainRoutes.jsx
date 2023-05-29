import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Home } from "./Pages/Home";

/* function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = localStorage.getItem("apiKey");

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
} */

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}
