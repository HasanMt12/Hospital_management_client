import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useNurse from "../../hooks/userNurseSecurity";

const NurseRoutes = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const [isNurse , isNurseLoading] = useNurse(user?.email);
    const location = useLocation();
    if(loading || isNurseLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isNurse) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;

};

export default NurseRoutes;