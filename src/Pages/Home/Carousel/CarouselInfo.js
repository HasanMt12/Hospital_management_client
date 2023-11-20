import connect from "../../../assets/HomeCarousel/doctorConnect.jpg";
import doctors from "../../../assets/HomeCarousel/doctors.jpg";
import ambulance from "../../../assets/HomeCarousel/diabetics.jpg";
import pregnancy from "../../../assets/HomeCarousel/pregnancy.jpg";
import blood from "../../../assets/HomeCarousel/blood.jpeg";
import volunter from "../../../assets/HomeCarousel/volunter.jpg";
import { Link } from "react-router-dom";
export const CarouselInfo = [

  
  {
    img: doctors,
    imgClass: "animate__animated animate__slideInRight",
    id: 1,
    title1:"Feel better about",
    title2:" finding a healthcare ",
    details1:"Feel better about",
    details2:"finding a healthcare",
    buttonText1:"Profile for Every",
    buttonText2:"Doctor in World",
    link: "doctors",
    linkTitel:"contact a doctor"
  },
  {
    img: connect,
    imgClass: "animate__animated animate__slideInUp",
    id: 2,
    title1:"consult with a doctor",
    title2:"anytime, anywhere.",
    details1:"Connect with a doctor securely",
    details2:"through HIPAA-compliant video calls.",
    buttonText1:"Ask A Doctor Online",
    link: "contact",
    linkTitel:"contact us first"
  },
  {
    img: ambulance,
    imgClass: "animate__animated animate__fadeInLeft",
    id: 3,
    title1:"24/7 Ambulance Service ",
    details1:"in times like today, your health is very important,",
    details2:"so we are ready to help you with your health consultation.",
    buttonText1:"Book Ambulance",
    link:"ambulanceService",
    linkTitel:"book an ambulance"
  },
  {
    img: blood,
    imgClass: "animate__animated animate__rotateInDownLeft",
    id: 4,
    title1:" Every Blood Doner is a Hero",
    details1:"A blood donor is equal to a lifesaver. Saving a life won't cost you anything.",
    details2:"Go ahead and donate blood Be the reason for someone’s heartbeat.",
    buttonText1:"Be a Doner",
    link:"bloodDonar",
    linkTitel:"donate blood"
  },
  {
    img: volunter,
    imgClass: "animate__animated animate__fadeInLeft",
    id: 4,
    title1:"Volunteers doesn't have necessarily have the time,",
    title1:"They just have the heart",
    details1:"As you grow older, you will discover that you have two hands",
    details2:"one for helping yourself, the other for helping others.",
    buttonText1:"Volunteer ",
    link:"about",
    linkTitel:"Check our Goal"
  },

];
