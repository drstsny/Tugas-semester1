import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero"
import HowItHelps from "./howithelps/HowItHelps";
import Uses from "./uses/Uses";
import Trust from "./trust/Trust";
import Footer from "./footer/Footer";

function LandingPage  () {
    return (
        <main>
        <Navbar/>
        <Hero/>
        <HowItHelps/>
        <Uses/>
        <Trust/>
        <Footer/>
        </main>
    );
};

export default LandingPage;