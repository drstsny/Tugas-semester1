
import Paxlovids from "../../assets/customer/paxlovid.png"
import Remdesivirs from "../../assets/customer/remdesivirs.png"
import Molnupiravir from "../../assets/customer/molnupiravir.png"
import Heparin from "../../assets/customer/heparin.png"
import "../style/Customer.css";


const Hero = () => {
    return (
        <section>
            <div className="container3">
                <div className="paxlovids">
                    <h3>Paxlovid</h3>
                    <img src={Paxlovids} alt="" />
                    <button>Buy</button>
                </div>
                <div className="remdesivirs">
                    <h3>Remdesivir</h3>
                    <img src={Remdesivirs} alt="" />
                    <button>Buy</button>
                </div>
                <div className="molnupiravir">
                    <h3>Molnupiravir</h3>
                    <img src={Molnupiravir} alt="" />
                    <button>Buy</button>
                </div>
                <div className="heparin">
                    <h3>Heparin</h3>
                    <img src={Heparin} alt="" />
                    <button>Buy</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;