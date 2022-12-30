import React from "react";
import insurance from "../../assets/insurance/insurance.jpg";
import img1 from "../../assets/insurance/company/1.png";
import img2 from "../../assets/insurance/company/2.png";
import img3 from "../../assets/insurance/company/3.png";
import img4 from "../../assets/insurance/company/4.png";
import img5 from "../../assets/insurance/company/5.jpg";
import img6 from "../../assets/insurance/company/6.png";
import img7 from "../../assets/insurance/company/7.png";
import { Link } from "react-router-dom";
import "./insuranceOffice.css";

const InsuranceWeAccept = () => {
  const insuranceOffice = [
    {
      name: "Sonali life insurence limited",
      img: img1,
    },
    {
      name: "MetLife Bangladesh (American Life Insurance Company Ltd).",
      img: img2,
    },
    {
      name: "Prime Islami Life Insurance Co. Ltd.",
      img: img3,
    },
    {
      name: "Asia Insurance Ltd.",
      img: img4,
    },
    {
      name: "Guardian Life Insurance Ltd.",
      img: img5,
    },
    {
      name: "Sawdesh Life Insurance Co. Ltd.",
      img: img6,
    },
    {
      name: " Islami Insurance Bangladesh Ltd.",
      img: img7,
    },
  ];
  return (
    <section className="mb-32">
      <div className=" cover">
        <h1 className=" text-teal-600 flex justify-center items-center h-full  lg:text-6xl sm:text-4xl font-bold hover:skew-y-3 uppercase">
          Insurance
        </h1>
      </div>
      <div className="space-y-4 w-4/6 mx-auto">
        <details
          className="group border-l-4  border-teal-600  p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between cursor-pointer ">
            <h2 className="text-lg font-medium text-gray-900 uppercase">
              INSURANCE: WHAT DO WE ACCEPT?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="">
            {insuranceOffice.map((office) => (
              <div className="flex justify-between my-5">
                <p className="font-bold text-teal-700">{office.name}</p>
                <img
                  src={office.img}
                  className="w-20 h-20 object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </details>
        <details className="group border-l-4 border-teal-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 uppercase">
              international visitors (intentional, accidental,complication
              insurance)
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div>
            <p className="my-4 leading-relaxed text-gray-700 text-lg">
              International visitors are looking for insurance covarage which
              can fit into 3 categories
            </p>
            <ul>
              <li>
                <span className="font-bold">
                  "Intentional" Medical Travel Procedures:
                </span>
                Travelling for the explicit purpose of doung a procedure
                overseas
              </li>
              <li>
                <span className="font-bold">
                  "Accidental" Medical Travel Coverage:
                </span>
                While on travel, you have an accident and need medical coverage
              </li>
              <li>
                <span className="font-bold">"Complication Insurance: </span>
                Insurance in case of a complication resulting from a procedure.
              </li>
            </ul>
          </div>
        </details>

        <details className="group border-l-4 border-teal-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 uppercase">
              "Intentional" Medical Travel Patients
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div>
            <p>
              There are almost no known insurance companies that support
              "intentional international medical travel". This has nothing to do
              with Bumrungrad International policies – this is entirely the
              choice of the insurance companies. In theory, Bumrungrad can
              support any insurance, as the patient needs to pay first and be
              reimbursed by the insurance company after the procedure. So the
              question is not if we accept the insurance, it is if the insurance
              company will reimburse you for the procedure. This is an important
              distinction to understand.
            </p>
          </div>
        </details>

        <details className="group border-l-4 border-teal-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 uppercase">
              “Accidental” Medical Travel Coverage
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div>
            <p className="my-4 leading-relaxed text-gray-700">
              Many medical insurance policies support “accidental” medical
              treatment. For example, if you come to Thailand for business or
              holiday and have an accident while in the country, many policies
              will cover your treatment at Bumrungrad International. Please
              check with your insurance company for additional details before
              you travel.
            </p>
            <p className="my-4 leading-relaxed text-gray-700 ">
              As with the intentional medical travel coverage, this has nothing
              to do with Bumrungrad International policy – you need to check
              with your insurance company for additional details.{" "}
            </p>
            <p className="my-4 leading-relaxed text-gray-700 ">
              For accidental medical coverage, if your insurance company works
              with a medical assistance company that we have a contract with
              (e.g. International SOS, Mondial, etc.) then we can most likely
              work through them for direct billing.
            </p>
            <p className="my-4 leading-relaxed text-gray-700 ">
              You can see a list of the :
            </p>
            <ul>
              <li className="text-teal-700 underline">
                <Link>
                  Insurance companies we have direct billing contracts with
                </Link>
              </li>
              <li className="text-teal-700 underline">
                <Link>Medical assistance companies we have contracts with</Link>
              </li>
            </ul>
          </div>
        </details>
        <details className="group border-l-4 border-teal-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-gray-900 uppercase">
              Complication Insurance
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div>
            <p className="my-4 leading-relaxed text-gray-700">
              This is insurance which will cover you in case of an unknown or
              unexpected complication which happens from an intentional
              procedure, elective or otherwise. For example, if you are normal
              and healthy and choose to have a plastic surgery procedure done,
              if there complications because of the surgery, you may be able to
              purchase (before the procedure is done) insurance which can handle
              this. However, as another example, if you have diabetes and have
              an elective surgery performed, and there are complications from
              the surgery but due to diabetes, the insurance will most likely
              not cover the cost of the complications.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default InsuranceWeAccept;
