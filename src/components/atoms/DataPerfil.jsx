import '../../assets/styles/DataPerfil.css'
import Perfil from './Perfil';
import PerfilNetwork from './PerfilNetwork';

function DataPerfil() {
    return ( 
        <>
        <div className="container_Perfil" id='container_Perfil_A'>
            <Perfil/>
        </div>
        <div className="container_Perfil" id='container_Perfil_B'>
            <PerfilNetwork/>
        </div>
        <div className="circleDising"></div>
        </>
     );
}

export default DataPerfil;