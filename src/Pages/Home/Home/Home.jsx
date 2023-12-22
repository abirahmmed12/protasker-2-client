import About from "../About/About";
import Baner from "../Banner/Banner";
import ContactInfo from "../Contact/Contact";
import UserTypesComponent from "../UserAre/UserAre";


const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <About></About>
            <UserTypesComponent></UserTypesComponent>
            <ContactInfo></ContactInfo>

        </div>
    );
};

export default Home;