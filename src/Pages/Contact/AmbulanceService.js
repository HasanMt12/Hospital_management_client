import React from "react";
import "./AmbulanceService.css";
import fb from "../../assets/About/Icons/facebook.png";
import youtube from "../../assets/About/Icons/youtube.png";
import insta from "../../assets/About/Icons/instagram.png";
import line from "../../assets/About/Icons/line.png";
import twitter from "../../assets/About/Icons/twitter.png";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const AmbulanceService = () => {
  useTitle('Ambulance Service')
  return (
    <section>
      <div className="ambulanceServiceCover">
        <h1 className=" text-gray-300 lg:text-6xl sm:text-4xl font-bold flex justify-center items-center h-full">
          Ambulance Service
        </h1>
        {/* <img
           className=" h-96 w-full hover:grayscale-0  grayscale  object-cover"
           src={logo}
           alt=""
         /> */}
      </div>
      <div className="w-5/6 mx-auto mt-20 mb-52  space-y-5 text-slate-500">
        <div className="border border-teal-500 rounded px-8 py-16">
          <p className="text-xl font-medium  text-teal-600">
            To refer a patient to our facility please contact us:
          </p>

          <a
            href="tel:+880 15100000"
            className="text-lg font-medium text-teal-700"
          >
            Telephone: +015500000
          </a>

          <p>E - mail address: DoctorPlanet@example.com</p>
        </div>

        <hr />
        {/* <p className="text-lg font-medium text-teal-700">Mission</p> */}

        <p>
          Owing to the current COVID-19 situation, foreigners are not allowed to
          enter the Kingdom Of Bangladesh freely as before. However, some of our
          patients are in need of transfer into Bangladesh for treatment,
          despite the restrictions under Ministry of PHero Affairs (MPA).
        </p>
        <img
          className="w-full h-96 object-cover"
          src="https://i.ibb.co/SV6z8FM/view-from-inside-ambulance-uniformed-emergency-services-workers-caring-patient-stretcher-during-coro.jpg"
          alt=""
        />
        <hr />
        <p>
          Owing to the current COVID-19 situation, foreigners are not allowed to
          enter the Kingdom Of Bangladesh freely as before. However, some of our
          patients are in need of transfer into Bangladesh for treatment,
          despite the restrictions under Ministry of PHero Affairs (MPA).
        </p>
        <img
          className="w-full h-96 object-cover"
          src="https://i.ibb.co/dm2GWGb/side-british-ambulance.jpg"
          alt=""
        />
        <hr />
        <p>
          We have successfully facilitated the process for the incoming patient
          who has indication to be treated urgently, the whole process takes 1 –
          2 weeks. However, the MFA mandated that only 1 – 2 companions
          (attendants) are allowed if the permission is granted. The quarantine
          for the attendant can be managed in the hospital, either in the same
          ward room with the patient or at BI Residence on the 9th floor of the
          hospital building.
        </p>

        <p>We believe that:</p>
        <ol>
          <li>1. Safety shall never be compromised</li>
          <li>2. All errors are preventable.</li>
          <li>
            3. Nothing is more important to Doctors planet than the safety of
            our patients and our staff.
          </li>
        </ol>
      </div>
      <div className="flex items-center justify-center gap-6 my-5 mt-10">
        <Link>
          <img className="w-8 h-8" src={fb} alt="fb" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={twitter} alt="twitter" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={youtube} alt="youtube" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={insta} alt="insta" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={line} alt="line" />
        </Link>
      </div>
    </section>
  );
};

export default AmbulanceService;
