import React, {useEffect} from "react"
import "./Main.css"
import "./Main.scss"

import img from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"

import { MdLocationPin } from "react-icons/md";
import { BsClipboard2CheckFill } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css';




const Data=[
  {
   id:1,
   imgsrc: img,
   destTitle: "Bora Bora",
   location:"New Zealand",
   grade: "CULTURAL RELAX",
   fees: "$750",
   description: 'The epitome of romamce, Bora Bora is one of thr best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'

  },

  {
    id:2,
    imgsrc: img2,
    destTitle: "Machu Picchu",
    location:"Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description: 'Huayna Picchu is a montain in peru, rising over Machu Picchu,the so-called Lost City of Incas. This place is popular among tourists as the sunrise from thr Sun Gate is simply spectacular.'
 
   },

   {
    id:3,
    imgsrc: img3,
    destTitle: "Great Barrier Reef",
    location:"Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description: "One of the most remarkable Australian natural gifts is the Great Barrier Reef.The hallmark of this place is 'Lavish' & 'beauty'.Always interestine to be in this place."
   },

   {
    id:4,
    imgsrc: img4,
    destTitle: "Cappadocia",
    location:"Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description: 'Cappadocia , a historical region in Central Anatolia, Turkey, is a mesmerizing blend of natural wonders and rich history. Known for its unique moon-like landscape, underground cities, cave churches, and the iconic fairy chimneys, Cappadocia is a destination that promises an unforgettable journey through time.'
 
   },

   {
    id:5,
    imgsrc: img5,
    destTitle: "Guanajuato",
    location:"Maxico",
    grade: "CULTURAL RELAX",
    fees: "$1150",
    description: 'A city in central Mecico.Guanajuato is known for its history of silver mining and colonial architecture.The houses in the city are very attactively painted with the most bright colors available.Always Welcome.'
 
   },

   {
    id:6,
    imgsrc: img6,
    destTitle: "Cinque Terre",
    location:"Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place.Also,if you are a foodie and love seafood,you will be exhilarated with the choice you are about to get here.Happy exploring great food!'
 
   },

   {
    id:7,
    imgsrc: img7,
    destTitle: "Angkor Wat",
    location:"Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description: 'Angkor wat represents the entire range of khmer art from the 9th to the 15th century.This temole is considered the heart and soul of Cambodia.'
 
   },

   {
    id:8,
    imgsrc: img8,
    destTitle: "Taj Mahal",
    location:"India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description: 'An immense mausoleum of white marble,built-in Agra by Mushal emperor Shan Jahan in memory of his wife Mutaz,the monument is breathtakingly beautifuk.This place is known for its luxurious stays and adventurous activities.'
   },

   {
    id:9,
    imgsrc: img9,
    destTitle: "Bali Island",
    location:"Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description: 'Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archipelage.Bali is known for its volcanic mountain,history,art & culture,food,temples and beautiful sandy beaches.'
   },
]



const Main = () => {
   //lets create a react hook to add a scroll animation.....
   useEffect(()=>{
    Aos.init({duration:2000})
  }, [])



  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" 
        className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">

        {Data &&
          Data.map(
            ({id, imgsrc, destTitle, location, grade, fees, description})  =>{
            return(
              <div key={id}
              data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle}/>
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                  <MdLocationPin className="icon"/>
                  <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1 </small></span>
                      </div>


                      <div className="price">
                        <h5>{fees}</h5>
                        </div>
                        </div>

                        <div className="desc">
                          <p>{description}</p>
                          </div>

                          <button className="btn flex">
                            DETAILS <BsClipboard2CheckFill className="icon" />
                          </button>


                  </div>
                
                  </div>
              
              
            
            )

          }
          
          ) 
        }

      </div>
    </section>
  
    
  )
}

export default Main