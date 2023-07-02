
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive, isPending }) =>
            isActive
                ? "text-bandYellow"
                : "text-white hover:text-bandYellow"

        }
    >
        {children}
    </NavLink>
    );
};

export default ActiveLink;