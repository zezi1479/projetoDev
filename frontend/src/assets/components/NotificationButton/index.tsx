import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../../utils/request';
import './styles.css'

type Props = {
    saleID: number;

}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS Enviado com Sucesso !");
    })
}


function NotificationButton({saleID} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleID)}>
        <img src={icon} alt="notificar"/> 
         
     </div>
     
    )
   }
   
   export default NotificationButton