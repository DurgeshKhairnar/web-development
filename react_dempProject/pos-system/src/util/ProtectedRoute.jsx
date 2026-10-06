import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    console.log('Protected Route is called')
    const accessToken = document.cookie
        .split("; ")
        .find(row => row.startsWith("accessToken="));
    console.log(accessToken)
    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;