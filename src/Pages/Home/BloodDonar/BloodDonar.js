import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const BloodDonar = () => {
	useTitle('Donation')
const {user} = useContext(AuthContext);

     const url = `http://localHost/reservation?email=${user?.email}`;
      
       const { data: donation = [] } = useQuery({
            queryKey: ['reservation', user?.email],
            queryFn: async () => {
                const res = await fetch(url, {
                   
                })
                const data = await res.json();
                return data;
            }

       })
     console.log(donation);
    return (
        <div>
           <section className=" bg-teal-50 w-9/12 mx-auto mt-8 rounded-2xl shadow-lg  text-teal-600">

	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-2xl font-bold leading-none sm:text-4xl" > Urgent Need
			for <span className='text-red-500'>Blood</span>  Donors
				senectus erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12"> Come to give blood Jan 5 - Jan 10 to get an exclusive Doctors planet long - sleeved T - shirt,
			    while supplies last.
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/donation" className="px-8 py-3 text-lg font-semibold rounded  bg-teal-400  text-gray-900">Make an Appointment</Link>
				
			</div>
		</div>
		<div className="flex items-center rounded-lg justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/wwFhjXz/blood-donation-main.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
<section className="p-4 lg:p-8 w-9/12 mx-auto shadow-lg  bg-teal-50  mt-8 text-teal-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/JvZ3FSC/istockphoto-587229722-612x612.jpg" alt="" className="h-80 bg-teal-200 aspect-video rounded-lg" />
			<div className="flex flex-col ml-4 justify-center flex-1 p-6   bg-slate-200">
				
				<h3 className="text-3xl font-bold">Platelet Donation</h3>
				<p className="my-6   text-gray-400">Platelets are tiny cells in your blood that form clots and stop bleeding. Platelets are most often used by cancer patients and others facing life-threatening illnesses and injuries.

In a platelet donation, an apheresis machine collects your platelets along with some plasma, returning your red cells and most of the plasma back to you. A single donation of platelets can yield several transfusable units, whereas it takes about five whole blood donations to make up a single transfusable unit of platelets.

Platelets are collected at Red Cross donation centers only, and are not collected at blood drives.</p>
				<p className='text-md fw-bold '>Who it helps:</p><span className="text-sm    text-gray-900"> Platelets are a vital element of cancer treatments and organ transplant procedures, as well as other surgical procedures.</span>
              <p className='text-md fw-bold '>Time it takes: </p><span className="text-sm    text-gray-900">About 2.5-3 hours</span>
                <p className='text-md fw-bold '></p>Ideal blood types:<span className="text-sm    text-gray-900">Platelet Donation</span>
                <Link to="/donation" type="button" className="self-start">A positive, A negative, B positive, O positive, AB positive and AB negative</Link>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/c3rpPD9/kaylee-1-abc-aa-200423-hp-Main-16x9-1600.jpg" alt="" className="h-80   bg-teal-200 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 ml-4  bg-slate-200">
				
				<h3 className="text-3xl font-bold">Plasma Donation</h3>
				<p className="my-6   text-gray-400">During an AB Elite donation, you give plasma, a part of your blood used to treat patients in emergency situations. AB plasma can be given to anyone regardless of their blood type. Plasma is collected through an automated process that separates plasma from other blood components, then safely and comfortably returns your red blood cells and platelets to you. AB Elite maximizes your donation and takes just a few minutes longer than donating blood.

Plasma is collected at select Red Cross donation centers.</p>
				<p className='text-md fw-bold '>Who it helps: </p><span className="text-sm    text-gray-900">AB Plasma is used in emergency and trauma situations to help stop bleeding. </span>
              <p className='text-md fw-bold '>Time it takes:</p><span className="text-sm    text-gray-900">About 1 hour and 15 minutes</span>
              
                <p className='text-md fw-bold '>Ideal blood types:</p><span className="text-sm    text-gray-900">AB positive, AB negative</span>
                <Link to="/donation" type="button" className="self-start">Make Appointment</Link>
			</div>
		</div>
		{/* <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80   bg-teal-200 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6   bg-slate-200">
				
				<h3 className="text-3xl font-bold">Platelet Donation</h3>
				<p className="my-6   text-gray-400">Platelets are tiny cells in your blood that form clots and stop bleeding. Platelets are most often used by cancer patients and others facing life-threatening illnesses and injuries.

In a platelet donation, an apheresis machine collects your platelets along with some plasma, returning your red cells and most of the plasma back to you. A single donation of platelets can yield several transfusable units, whereas it takes about five whole blood donations to make up a single transfusable unit of platelets.

Platelets are collected at Red Cross donation centers only, and are not collected at blood drives.</p>
				<p className='text-md fw-bold '></p><span className="text-sm    text-gray-900">Platelet Donation</span>
              <p className='text-md fw-bold '></p><span className="text-sm    text-gray-900">Platelet Donation</span>
                <p className='text-md fw-bold '></p><span className="text-sm    text-gray-900">Platelet Donation</span>
                <Link to="/donation" type="button" className="self-start">Make Appointment</Link>
			</div>
		</div> */}


	</div>
</section>
        </div>
    );
};

export default BloodDonar;