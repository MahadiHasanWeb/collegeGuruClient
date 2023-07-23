
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive
                ? "font-medium hover:text-blue-500 underline text-blue-600" : "font-medium hover:text-blue-500"
            }
        > {children}</NavLink>
    );
};

export default ActiveLink;