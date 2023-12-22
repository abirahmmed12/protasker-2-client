import Extrasection from "../About/Extrasection";

import Baner from "../Banner/Banner";
import ContactInfo from "../Contact/AboutUs";
import UserTypesComponent from "../UserAre/UserAre";


const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <Extrasection></Extrasection>
            <UserTypesComponent></UserTypesComponent>
            <ContactInfo></ContactInfo>

        </div>
    );
};

export default Home;