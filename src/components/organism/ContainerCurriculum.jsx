import Header from "../atoms/Header";
import FlexContainer from "./FlexContainer";
import '../../assets/styles/ContainerCurriculum.css'


function ContainerCurriculum() {
    return ( 
        <>
            <div className="container_Curriculum">
                <Header/>
                <FlexContainer/>
                
            </div>
        </>
     );
}

export default ContainerCurriculum;