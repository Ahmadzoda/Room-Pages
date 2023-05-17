import './App.css';
import Switcher from "./Switcher"
import './i18next';

//icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


//Pictures
import image1 from "./Pictures/light.jpg"
import image2 from "./Pictures/image4.jpg"
import left from "./Pictures/left.jpg"
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';


function App() {


  //Locales
  // const [ lng, setLng ] = useState('en')
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (language) => (
  //   i18n.changeLanguage(language)
  // );

  // const handleChange = (event) => {
  //   const { value } = event.target
  //   changeLanguage(value)
  //   setLng(value)
  // }

  return (
    <div className="App">
      <div className="container">

      <div className="mine dark:bg-black">
      <div className=" content flex justify-center">
          <div className="content-left">
            <div className="navbar flex justify-start gap-[60px] pt-[20px]">
             <div className="navbar-left flex justify-center pl-[40px]"><p className='dark:text-[black]'>Room</p></div>
             <div className="navbar-right pt-[5px]">
              <ul className='ul dark:text-[black]'>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
                <li>
                  <select  >
                <option value="en">EN</option>
                 <option value="ru">RU</option> 
                 <option value="tj">TJ</option></select>
                </li>
              </ul>
             </div>
              <div><Switcher/></div>
            </div>

          </div>

          <div className="cont pt-[325px] "><img src={left} alt="" /></div>
          <div className="content-right pr-[40px] pt-[30px]">
            <div className="content-text flex justify-center"><h1 className='dark:text-[white]'>Discover innovative ways to decorate</h1></div>
            <div className="content-title flex justify-center"><p className='dark:text-gray-400'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and funstion in briging your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p></div>

            <div className="texts flex justify-center gap-[340px] pt-[10px]">
              <div className="text-lefts flex justify-center pt-[10px]"><h1 className=' dark:text-[white]'>SHOP NOW</h1></div>
              <div className="text-image flex justify-center "><p className='dark:text-[white]'><ArrowRightAltIcon/></p></div>
            </div>


          </div>
        </div>
      </div>

        <div className="photos dark:bg-black">
        <div className="pictures flex justfy-center gap-[50px] ">
          <div className="picture flex justify-center"><img src={image2} alt="" /></div>
          <div className="picture2 pt-[40px]">
            <div className="pictures-text flex justify-center"><h1 className=' dark:text-[white]'>ABOUT OUR FURNUTURE</h1></div>
            <div className="pictures-title flex justify-center"><p className='dark:text-slate-400'>Our multifunctional collection blends design and function so suit your idvidual taste. Make each room unique, or pick a cohesive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anytjing in between. Product specialists are available to help you create your dream space.</p></div>
          </div>

          <div className="picture flex justify-center"><img src={image1} alt="" /></div>
         </div>
        </div>





      </div>
    </div>
  );
}

export default App;
