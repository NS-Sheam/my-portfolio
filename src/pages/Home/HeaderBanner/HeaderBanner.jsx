
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import "./HeaderBanner.css";

const HeaderBanner = () => {
    return (
        <div className='w-screen mx-auto header-banner bg-fixed'>
            <Header />
            <Banner />
        </div>
    );
};

export default HeaderBanner;