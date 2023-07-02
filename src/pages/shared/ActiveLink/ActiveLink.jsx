
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isActive
                ? "text-bandYellow"
                : "text-white"

        }
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;