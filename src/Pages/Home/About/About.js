import React from "react";
import doctor from "../../../assets/About/doctor.png";
import inquiry from "../../../assets/About/add.png";
import right from "../../../assets/About/caret-right-white.png";
import book from "../../../assets/About/chart.png";
import planet from "../../../assets/About/pin.png";
import emergency from "../../../assets/About/emergency.png";
import phone from "../../../assets/About/phone.png";
import mail from "../../../assets/About/mail.png";
import fb from "../../../assets/About/Icons/facebook.png";
import youtube from "../../../assets/About/Icons/youtube.png";
import insta from "../../../assets/About/Icons/instagram.png";
import line from "../../../assets/About/Icons/line.png";
import twitter from "../../../assets/About/Icons/twitter.png";

import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
const About = () => {
  useTitle('About')
  return (
    <div className="my-8 mx-10">
      <nav aria-label="Breadcrumb my-10">
        <ol
          role="list"
          className="flex items-center gap-1 text-sm text-gray-600 "
        >
          <li>
            <Link
              to="/"
              className="block transition hover:text-gray-700 hover:underline"
            >
              <span className="sr-only "> Home </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-4 text-lg hover:underline hover:text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link
              to="/about"
              className="block transition hover:underline text-base hover:text-green-600"
            >
              About Us
            </Link>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link
              to="/"
              className="block transition text-base  hover:underline hover:text-green-600"
            >
              Doctor's Planet
            </Link>
          </li>
        </ol>
      </nav>

      <div
        className="page-banner mt-20 hover:grayscale-0 grayscales  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('https://i.ibb.co/bWNVfJB/18038890-5926166.jpg')`,
          height: "350px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "3rem",
          marginTop: "20px",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="page-banner__wrapper">
          {/* <p className="page-banner__headline">About</p> */}
        </div>
      </div>
      <div className=" mb-12">
        <div className="">
          <div className=" sm:flex items-center justify-center sm:mx-auto ">
            <div className="flex items-center justify-between bg-emerald-500 w-64 h-20 ">
              <div className="mx-3">
                <img
                  className="md:w-7 md:h-9 w-5 h-7"
                  src={doctor}
                  alt="doctor"
                />
              </div>
              <div className="text-white">Find a Doctor</div>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-500 w-64 h-20 ">
              <div className="mx-3 font-extrabold">
                <img
                  className="md:w-7 md:h-9  font-extrabold"
                  src={inquiry}
                  alt="doctor"
                />
              </div>
              <Link to="/contact" className="text-white">
                Send an Inquiry
              </Link>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-amber-700 bg-opacity-60 w-64 h-20 ">
              <div className="mx-3">
                <img
                  className="md:w-7 md:h-9 w-5 h-7"
                  src={book}
                  alt="doctor"
                />
              </div>
              <div className="text-white">Book Appointment</div>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-amber-900 bg-opacity-70  w-64 h-20 ">
              <div className="mx-3">
                <img
                  className="md:w-7 md:h-9  text-white"
                  src={planet}
                  alt="doctor"
                />
              </div>
              <div className="text-white ">
                Doctor's Planet <br /> Anywhere
              </div>
              <div className="mx-3">
                <img className="w-3 h-5 " src={right} alt="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl text-green-600 mx-6">World-class Care</p>
        <div>
          <p className="mx-6 my-2">
            Founded in 1980, Doctor's Planet International Hospital has been a
            global pioneer in providing world-class healthcare services and
            international patient support for nearly four decades. Located in
            the heart of Bangkok, Thailand, a cosmopolitan megacity nicknamed
            “The City of Angels” and renowned for its culture of exceptional
            hospitality and delicious cuisine. Doctor's Planet is an
            internationally accredited, multi-specialty hospital listed on the
            Stock Exchange of Thailand since 1989. One of the largest private
            hospitals in Southeast Asia, Doctor's Planet International Hospital
            cares for over 1.1 million patients from more than 190 countries
            annually.
          </p>
        </div>
      </div>
      <div>
        <div className=" mb-5 mt-5 mx-6 border-y-2 border-gray-300 ">
          <h1 className="text-lg text-green-800 my-1">Milestones</h1>
        </div>
        <div className="mx-6">
          <li>Opened 200 bed facility: September 17, 1980</li>
          <li>Listed on the Stock Exchange of Thailand: 1989</li>
          <li>Replacement hospital building commissioned: January 1, 1997</li>
          <li>
            Opening of the Doctor's Planet International Clinic Building: May
            2008
          </li>
          <li>
            Joint Commission International accreditation: Since February 2002
          </li>
          <li>
            Global Healthcare Accreditation with Excellence: September 2017
          </li>
        </div>
        <div className=" my-12 flex justify-center items-center">
          <img
            src="https://www.bumrungrad.com/getattachment/1da40b1e-cc4c-4fd2-8022-72ee3cd57cd2/Bumrungrad_AboutUS.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div>
        <div className=" mb-5 mt-5 mx-6 border-y-2 border-gray-300 ">
          <h1 className="text-lg text-green-800 my-1">
            Quality, Safety with Measurable Results
          </h1>
        </div>
        <div className="mx-6">
          <p>
            Doctor's Planet International Hospital is the first hospital in Asia
            accredited by the US-based Joint Commission International (JCI),
            achieving accreditation five consecutive times since 2002. In 2017,
            Doctor's Planet also became the first hospital in Asia to be DNV GL
            MIR Certified for Infection Risk, and became the first non-US
            hospital to earn Global Healthcare Accreditation with Excellence
            designation from GHA, which signifies the highest international
            quality and safety standards for overseas patients traveling to
            Bumrungrad International Hospital for treatment and care. Through
            our consistent clinical standards and many international
            accreditations, Doctor's Planet has demonstrated some of the highest
            clinical success rates and lowest infection rates in the region and
            world.
          </p>
        </div>
        <div className=" my-12  flex justify-center items-center">
          <img
            className="mx-auto w-10/12"
            src="https://img.freepik.com/free-vector/gradient-medical-instagram-stories_23-2149052323.jpg?w=1380&t=st=1672411264~exp=1672411864~hmac=6776c86416dc41267bede3ba0b6d50b1d852fa8b3b100601492c50374a053344"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div>
        <div className=" mb-5 mt-5 mx-6 border-y-2 border-gray-300 ">
          <h1 className="text-lg text-green-800 my-1">
            Collaboration of Expertise
          </h1>
        </div>
        <div className="mx-6">
          <p>
            Doctor's Planet International Hospital has set up multidisciplinary
            teams of experienced medical doctors, nurses, pharmacists, physical
            therapists, nutritionists, medical technologists and other
            professional staff to integrate quality treatment, making it a
            one-stop shop healthcare destination for all types of patients and
            complex care needs. Doctor's Planet International Hospital employs
            over 1,300 medical doctors and over 4,800 support professionals. A
            majority of the doctors have earned international board
            certifications from the United States, United Kingdom, Australia,
            Japan and other advanced economies well known for high medical and
            quality standards. The seamless collaboration of expertise between
            our medical teams allows for better treatments and outcomes for
            patients across more than 70 medical subspecialties.
          </p>
        </div>
        <div className=" my-12 flex justify-center items-center">
          <img
            src="https://www.bumrungrad.com/getattachment/7aff69d7-413c-4c72-9ed0-8c10b6c7c225/Bumrungrad_specialties-2022.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div>
        <div className=" mb-5 mt-5 mx-6 border-y-2 border-gray-300 ">
          <h1 className="text-lg text-green-800 my-1">
            Innovation and Technology
          </h1>
        </div>
        <div className="mx-6">
          <p>
            Doctor's Planet International Hospital is a leader in medical
            technology and innovative patient services. Among the most recent
            advancements, Doctor's Planet has expanded the Precision Medicine
            department which offers personalized cancer treatments and the
            latest breakthrough therapies mostly from the United States and
            Europe. Another cutting-edge technology we use is CardioInsight, a
            completely non-invasive diagnostics technology for diagnosing heart
            arrhythmias and the only active center in the Asia Pacific. In order
            to remain a leader in cutting-edge technology, Doctor's Planet was
            the first IBM Watson for Oncology site in the world. IBM Watson, a
            machine-learning AI, assists physicians by analyzing patient data
            against thousands of historical cases, hundreds of medical journals
            and textbooks, the latest clinical trials, and more than 12 million
            pages of text. This innovation in technology allows doctors and
            specialists to compare their findings against big data and provide
            the most accurate treatments possible. What began as a surgical
            treatment for prostate cancer has now become the Doctor's Planet
            Robotic Surgery Center. It utilizes state-of-the-art technologies
            for robotic-assisted surgery such as MAKOplasty©, Mazor X and the da
            Vinci System to allow for more consistency, accuracy and faster
            recovery times with less invasiveness for joint, spine and cancer
            patients.
          </p>
        </div>
        <div className=" my-12 flex justify-center items-center">
          <img
            src="https://www.bumrungrad.com/getattachment/bc0795a6-60a2-4086-8839-75f37c4be67f/Bumrungrad_inovation.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div>
        <div className=" mb-5 mt-5 mx-6 border-y-2 border-gray-300 ">
          <h1 className="text-lg text-green-800 my-1">Compassionate Caring</h1>
        </div>
        <div className="mx-6">
          <p>
            Compassionate caring is one of Doctor's Planet International’s
            principle values. It has been featured by Newsweek, International
            Herald Tribune, Reader’s Digest, CBS 60 Minutes, The Financial Times
            and Inside Man on CNN. The reportage covers Bumrungrad’s quality
            treatment and medical care abroad, placing it high on the list of
            medical tourism hospital destinations. Nearly all Doctor's Planet
            doctors speak English, and the hospital employs more than 200
            interpreters to cover the language needs of patients from nearly any
            country. The patients and their families can receive end-to-end
            service from pick-up and drop-off logistics as well as hotel
            reservations on arrival through our Doctor's Planet International
            Airport Representative Office at Suvarnabhumi Airport. Convenience
            plays another vital role at Doctor's Planet and the hospital’s
            one-stop medical campus is able to provide diagnostic tests,
            specialty referrals, and treatment within days, not weeks, so
            international patients can get the care they need and return home
            sooner. Doctor's Planet International Hospital also practices a
            one-price-policy for all patients, meaning there is no difference in
            costs for local or international patients of any nationality.
            Through compassion, comfort, convenience and coordination, Doctor's
            Planet goes the extra mile to ensure that every patient is treated
            equal and with care, no matter where they are from. That’s why the
            Thai name Doctor's Planet means “care for the people.”
          </p>
        </div>
        <div className=" my-12 flex justify-center items-center">
          <img
            src="https://www.bumrungrad.com/getattachment/7a5acc93-126c-4b7e-bc8c-10eff0604d36/Bumrungrad_Caring.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1  border-y-1 gap-[1px] justify-center items-center mt-16 mb-5">
        <div className="bg-teal-500 bg-opacity-70 text-white p-5 h-48"></div>
        <div className="bg-teal-500 bg-opacity-70 text-white p-5 text-center h-48 ">
          <div className="mx-auto text-center flex items-center justify-center my-2 ">
            <img src={emergency} alt="emergency" />
          </div>
          <div className="">
            <Link className="my-1 hover:underline">1378(Thailand Only)</Link>
            <br />
            <Link className="my-1 text-base hover:underline">
              Emergencies-Appointments-Ambulance
            </Link>
            <br />
            <Link className="text-xs hover:underline">
              Available 24 hours every day
            </Link>
          </div>
        </div>
        <div className="bg-teal-500 bg-opacity-70 text-white p-5 text-center h-48">
          <div className="mx-auto text-center flex items-center justify-center my-2">
            <img src={phone} alt="phone" />
          </div>
          <div>
            <Link className="my-1 hover:underline">Call Doctor's Planet</Link>
            <br />
            <Link className="my-1 text-base hover:underline">01849204853</Link>
            <br />
            <Link className="text-xs hover:underline">
              Available 24 hours every day
            </Link>
          </div>
        </div>
        <div className="bg-teal-500 bg-opacity-70 text-white p-5 text-center h-48">
          <div className="mx-auto text-center flex items-center justify-center my-2">
            <img src={mail} alt="phone" />
          </div>
          <div>
            <Link href="#" className="my-1 mb-3 hover:underline">
              Subscribe to our Newsletter
            </Link>
            <br />
            <button className="my-4">
              <Link className="outline py-2 px-8 my-2 ">Signup Now</Link>
            </button>
          </div>
        </div>
        <div className="bg-teal-500 bg-opacity-70 text-white p-5 text-center h-48">
          <div className="mx-auto text-center flex items-center justify-center my-2">
            <img src={planet} alt="phone" />
          </div>
          <div>
            <Link className="my-1 mb-3 hover:underline">Map & Directions</Link>
            <br />
            <button className="my-4">
              <Link className="outline py-2 px-8 my-2 ">GET DIRECTIONS</Link>
            </button>
          </div>
        </div>

        <div className="bg-teal-500 bg-opacity-70 text-white p-5 h-48"></div>
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
    </div>
  );
};

export default About;
