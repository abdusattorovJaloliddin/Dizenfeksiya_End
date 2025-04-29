import './Main.css'
import { LuBrain } from "react-icons/lu";
import { RiMenuSearchLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";




function Main() {
  return (
    <div className="main" id='About-section'>
      <div className="container">
        <div className="main-container">
          <h2 className="main-title">Avfzalliklarimiz</h2>
          <hr />
          <ul className="main-list">
            <li className="main-item">
            <LuBrain className='main-icon' />
            <p className="main-title-text">Tezda xizmat ko’rsatish</p>
            <blockquote className='main-blockquote'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</blockquote>
            </li>
            <li className="main-item">
            <RiMenuSearchLine className='main-icon' />
            <p className="main-title-text">Tezda xizmat ko’rsatish</p>
            <blockquote className='main-blockquote'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</blockquote>
            </li>
            <li className="main-item">
            <FaHandsHelping className='main-icon' />
            <p className="main-title-text">Tezda xizmat ko’rsatish</p>
            <blockquote className='main-blockquote'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</blockquote>
            </li>
          </ul>
          <div className="main-bottom">
            <div className='main-bottom-container'>
            <h2 className="main-bottom-title">Klapa va zararli hashorot endi yo’q deb hisoblang !!!</h2>
            <blockquote className='main-bottom-blockquote'>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</blockquote>
            <button className='main-bottom-button'>Bog'lanish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main