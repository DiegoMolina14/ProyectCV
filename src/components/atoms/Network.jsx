import '../../assets/styles/Network.css'
import { NetP } from '../../assets/Data/NetworkPerson';


function Network() {
    return ( 
        <>
            <div className="container_Net">
                {NetP.map((net => {
                    return <p className='span_Networks' id='phone'><span className='span_Network'>Num. Tel</span><br />{net.phone}</p>
                }))}

                {NetP.map((net => {
                    return <p className='span_Networks' id='instagram'><span className='span_Network'>Instagram</span><br />{net.instagrm}</p> 
                }))}            
                
                {NetP.map((net => {
                    return <p className='span_Networks' id='gmail'><span className='span_Network'>Gmail</span><br />{net.gmail} </p>
                }))}

                {NetP.map((net => {
                    return  <p className='span_Networks' id='github'><span className='span_Network'>Tik Tok</span> <br />{net.tiktok}</p>
                }))}

                {NetP.map((net => {
                    return <p className='span_Networks' id='twitter'><span className='span_Network'>Facebook</span> <br />{net.facebook}</p>
                }))}
            </div>

              
        </>
     );
}

export default Network;