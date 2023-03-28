import '../../assets/styles/Perfil.css'
import Bootstrap from '../../assets/img/b.png'
import CMore from '../../assets/img/c.png'
import JavaScript from '../../assets/img/js.png'
import Java from '../../assets/img/j.png'
import {DataP} from "../../assets/Data/DataPerson";
import { SkillP } from '../../assets/Data/SkillPerson';

function Perfil() {
    return (
        <> 
        <div className="container_Father_Perfil">
            <div className="container_Data_Perfil" id='perfil_P'>
                <div className="p_DC" id='id_Pefil'><span>PERFIL</span></div>
                   {DataP.map((data => {
                    return <p id='description'>{data.description}</p>
                   }))}
            </div>
            <div className="container_Data_Perfil" id='date_Perfil'><div className="p_DC" id='id_Date'><span>EXPERIENCIA</span></div>
                   {DataP.map((data => {
                    return <p id='description'>{data.exp}</p>
                   }))}
            
            </div>
            <div className="container_Data_Perfil" id='skill_Perfil'><div className="p_DC" id='id_Skill'><span>HABILIDADES</span></div>
                  {SkillP.map((skill => {
                    return <div className='container_skills'>
                              <li className='skills'>{skill.sing}</li>
                              <li className='skills'>{skill.work}</li>
                              <li className='skills'>{skill.dinamic}</li>
                              <li className='skills'>{skill.pro}</li>
                           </div> 
                  }))}
            </div>
            <div className="container_Data_Perfil" id='language_Perfil'><div className="p_DC" id='id_Language'><span>EXP LENGUAJES</span></div> 
                <div className="container_Language">
                    <img src={Bootstrap} alt="Html" className='language_name' />
                    <img src={CMore} alt="Css" className='language_name' />
                    <img src={Java} alt="JavaScript" className='language_name' />
                    <img src={JavaScript} alt="Java"  className='language_name' id='javasc'/>

                </div>
             </div>
        </div>
        </>
     );
}

export default Perfil;