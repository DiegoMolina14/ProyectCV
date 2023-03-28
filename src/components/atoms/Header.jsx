import Imagen1 from '../../assets/img/imagen1.jpg'
import '../../assets/styles/Header.css'
import { DataP } from '../../assets/Data/DataPerson';

function Header() {
    return ( 
       <header className="header_Principal">
            <div className="header_Second">
               {DataP.map((data => {
                  return <h1 id='name'>{data.name} <span id='lastname'>{data.lastname}</span></h1>
               }))}
               <hr />
               {DataP.map((data => {
                  return <p id='profession'>{data.profession}</p>
               }))}
               
               

            </div>
            <div className="header_Circle">
               <div className="circle_Image">
                    <img id='user_Image' src={Imagen1} alt="Imagen del Usuario" />
               </div>
            </div>
       </header>
     );
}

export default Header;