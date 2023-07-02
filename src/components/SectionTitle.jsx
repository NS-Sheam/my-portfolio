import { useContext } from 'react';
import { ThemeContext } from '../layouts/Main';

const SectionTitle = ({ heading, paragraph }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <h1 className={`${theme == "light" ? "text-bandPrimary" : "text-white"} text-xl lg:text-5xl italic font-bold mb-4`}>{heading}</h1>
            <p className={`${theme == "light" ? "text-bandSecondary" : "text-white"} text-xs lg:text-xl mb-4 w-3/4 mx-auto`}>{paragraph}</p>
        </>
    );
};

export default SectionTitle;