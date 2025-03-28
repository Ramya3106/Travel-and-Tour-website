import React, {useEffect} from 'react'
import './Footer.css'
import './Footer.scss'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import 'aos/dist/aos.css';


const Footer = () => {
  //lets create a react hook to add a scroll animation.....
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])




  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src="/v2.mp4"  muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className='seaContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
            
          </div>
          <div className='inputDiv flex'>
            <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
            SEND <FiSend className='icon'/>
            </button>
          </div>

        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
              <MdOutlineTravelExplore className='logo flex' /> Travel.
              </a>
            </div>
            <div data-aos="fade-up" className='footerparagraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis atque similique iure, placeat laborum quo nemo dolor dolore, deleniti corporis sequi officiis illo perferendis ducimus. Illo adipisci ab accusamus.
            </div>
            <div data-aos="fade-up" className='footerSocials flex'>
            <AiOutlineTwitter className='icon'/>
            <BsYoutube className='icon'/>
            <RiInstagramFill className='icon'/>
            <FaTripadvisor className='icon'/>
            </div>
            

            
          </div>

          {/* Group one */}

          <div className='footerLinks grid'>
            <div data-aos="fade-up" 
            data-aos-duration="3000"
            className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCIES
              </span>

              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Services
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Insurance
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Agency
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Tourism
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Payment
              </li>


            </div>

              {/* Group two */}
            <div data-aos="fade-up" 
            data-aos-duration="4000"
            className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Bookings
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              RentCars
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              HotelWorld
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Trivago
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              TripAdvisor
              </li>


            </div>

             {/* Group three */}
             <div data-aos="fade-up"
             data-aos-duration="5000"
              className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              London
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              California
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Indonesia
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Europe
              </li>

              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/>
              Oceania
              </li>


            </div>



          </div>
          
          <div className='footerDiv flex' >
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 
              2025</small>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Footer 