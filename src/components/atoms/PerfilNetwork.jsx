import '../../assets/styles/PerfilNetwork.css';
import Network from './Network';
import TikTok from "../../assets/img/tikk.webp";
import Instagram from "../../assets/img/Instagram.png";
import Gmail from "../../assets/img/Gmail.png";
import Phone from "../../assets/img/Phone.png";
import Facebook from "../../assets/img/facebook.webp";

function PerfilNetwork() {
    return ( 
        <>
        <div className="container_Perfil_Network">
            <div className="perfil_Network"><span>DATOS</span></div>
            <div className="container_Network">
                <img src={Phone} alt="Numero de Telefono" id='id_Phone'/>
                <img src={Instagram} alt="Instagram" id='id_Instagram'/>
                <img src={Gmail} alt="Gmail" id='id_Gmail'/>
                <img src={TikTok} alt="GitHub" id='id_GitHub'/>
                <img src={Facebook} alt="Twitter" id='id_Facebook'/>
            </div>
            <div className="networks">
                <Network/>
            </div>
            </div>
        </>
     );
}

export default PerfilNetwork;