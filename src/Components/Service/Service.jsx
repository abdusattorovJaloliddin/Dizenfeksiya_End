import './Service.css'
import { MdOutlineSecurity } from "react-icons/md";
import Image from './images/Group (1).png'
import Image2 from './images/obrazovaniye_s 2.png'
import Image3 from './images/Group (2).png'
import Image4 from './images/Group (3).png'

function Service() {
  return (
    <div className="service " id='Service-section'>
        <div className="container">
            <div className="service-container">
                <h3 className="service-title">Service</h3>
                <p className="service-text">Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>
                <ul className="service-list">
                    <li className="service-item">
                        <p className="service-text-title">Boshlang’ich tushunchalar</p>
                        <blockquote>nazariy bilimlar</blockquote>
                        <p className='service-dars'>16 dars</p>
                        <img src={Image} alt="" className="service-img" />
                    </li>
                    <li className="service-item">
                        <p className="service-text-title">O'rta</p>
                        <blockquote>nazariy va Amaliy bilimlar</blockquote>
                        <p className='service-dars'>23 dars</p>
                        <img src={Image3} alt="" className="service-img" />
                    </li>
                    <li className="service-item">
                        <p className="service-text-title">Yuqori</p>
                        <blockquote>Amaliy bilimlar</blockquote>
                        <p className='service-dars'>16 dars</p>
                        <img src={Image4} alt="" className="service-img" />
                    </li>
                </ul>
                <div className="service-bottom">
                    <div className="service-left">
                        <img className='service-left-img' src={Image2}alt="" />
                    </div>
                    <div className="service-right">
                    <MdOutlineSecurity className='service-right-icon' />
                    <p className="service-right-text">Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</p>
                    <button className='service-right-button'>Bog'lanish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service