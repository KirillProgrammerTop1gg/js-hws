import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default () => {
    const token = useSelector((state) => state.auth.token);
    const location = useLocation();
    return token ? <Outlet /> : <Navigate to={location.state?.from || "/js-hws/hw-js-53/build"} />;
}