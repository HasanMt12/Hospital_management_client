import React from "react";
import useTitle from "../../hooks/useTitle";

const MedicalTourism = () => {
  useTitle('Medical Tourism')
  return (
    <div>
      <div>
		{/* Hero */}
        <section
          className="page-banner mt-20 hover:grayscale-0 grayscale  "
          style={{
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('https://i.ibb.co/hDQ6cHQ/high-angle-passport-tickets-arrangement.jpg')`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('https://i.ibb.co/R7XjH4c/medical-banner-with-doctor-wearing-coat.jpg')`,
            height: "450px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "/fff",
            fontSize: "3rem",
            marginTop: "20px",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="page-banner__wrapper">
            {/* <p className="page-banner__headline">About</p> */}
          </div>
        </section>
{/* Title-1  */}
        <section className="mx-auto w-10/12 my-16">
          <div>
            <h2 className="text-4xl font-semibold text-teal-700 text-center">
              Medication Tourism at Doctor's Planet Hospital
            </h2>
            <hr className="font-bold mb-2 mt-2 mx-auto border-y-2 border-gray-300 w-8/12"/>
            <p className="my-3">
            Compare Medical Tourism is an online platform that was started in 2022 in Bangladesh. We are an organization that aid and guide the international patient industry. We work with a large number of healthcare providers across the world to help connect people in need to their ideal clinic or hospital. Our aim is to make medical tourism as transparent and economical as possible. Doctor's Planet Tourism provides affordable healthcare and medical tourism services including plastic surgery and weight loss surgery in Mexico. The expert surgeons in our network have helped thousands of patients lose weight and transform their lives. They can also help you achieve long-term weight loss results.We are an assistance company that acts on behalf of patients in order to find the most appropriate medical treatment center abroad. Medabroad organize all your travel and be with you when you are in Turkey. Shortly, we manage your medical travel end to end.
            </p>
          </div>
        </section>
		{/*  News*/}
        <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
	<section className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
		<div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
			<div className="flex flex-col space-y-8 md:space-y-12">
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
					<p className="text-xs dark:text-gray-400">47 minutes ago by
						<a rel="noopener noreferrer" href="/" className="hover:underline dark:text-violet-400 mx-1">Mugdha Medical College Hospital</a>
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
					<p className="text-xs dark:text-gray-400">2 hours ago by
						<a rel="noopener noreferrer" href="/" className="hover:underline dark:text-violet-400 mx-1">Khulna Medical College Hospital</a>
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 dark:text-gray-400">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full dark:bg-violet-400"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
					<p className="text-xs dark:text-gray-400">4 hours ago by
						<a rel="noopener noreferrer" href="/" className="hover:underline dark:text-violet-400 mx-1">Dhaka Medical College Hospital</a>
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full space-y-2">
				<div className="flex w-full h-1 bg-opacity-10 dark:bg-violet-400">
					<div className="w-1/2 h-full dark:bg-violet-400"></div>
				</div>
				<a rel="noopener noreferrer" href="/" className="flex items-center justify-between w-full">
					{/* <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span> */}
					<svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent dark:text-violet-400">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>
		<div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('https://i.ibb.co/hDQ6cHQ/high-angle-passport-tickets-arrangement.jpg')`, height: "470px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "/fff",
            fontSize: "3rem",
            marginTop: "20px",
            backgroundBlendMode: "multiply",}}>
			<span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 dark:border-violet-400 dark:text-gray-100">Dhaka, Bangladesh</span>
			<a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-200 to-gray-100" href='/'>
				<span className="flex items-center mb-1 space-x-2 text-gray-700">
					<span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-red-600">
						<span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping dark:bg-violet-400"></span>
					</span>
					<span className="text-sm font-bold">Live</span>
				</span>
				<h1 rel="noopener noreferrer" href="/" className="font-serif text-2xl font-semibold group-hover:underline text-gray-900">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
			</a>
		</div>
		<div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
			<div className="mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400">
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400" fdprocessedid="x3wmx">Latest</button>
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400" fdprocessedid="njp4qfj">Popular</button>
			</div>
			<div className="flex flex-col divide-y divide-gray-700">
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
						<p className="mt-auto text-xs dark:text-gray-400">5 minutes ago
							<a rel="noopener noreferrer" href="/" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
						<p className="mt-auto text-xs dark:text-gray-400">14 minutes ago
							<a href="/" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
						<p className="mt-auto text-xs dark:text-gray-400">22 minutes ago
							<a rel="noopener noreferrer" href="/" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="/" className="font-serif hover:underline">Suspendisse potenti.</a>
						<p className="mt-auto text-xs dark:text-gray-400">37 minutes ago
							<a rel="noopener noreferrer" href="/" className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</section>
{/* Quality */}
<section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
			<h3 className="text-5xl font-bold leading-none sm:text-4xl text-teal-600">Featured Medical Centers</h3>
			<p className="max-w-2xl dark:text-gray-400">Discover now the Most Searched and Clicked Medical Centers.</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipOoZPSx1Dxm4awqEq7aS4m8SDiR16NEpWAxFhry=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">
Khulna Medical College</h4>
					<p className="text-sm dark:text-gray-400">Khulna</p>
				
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipO3crx0Pag6o_rjxlFJx1zXIbwN-bkxSwpJxHje=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">
Sher-e-Bangla Medical College </h4>
					<p className="text-sm dark:text-gray-400">Barisal</p>
				
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipMP0yf9tKkypvWDH4m4ivT2Y1P05cSVZjMAagk=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Comilla Medical College Hospital</h4>
					<p className="text-sm dark:text-gray-400">Comilla</p>
					
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipN8Kd7jH8n_ab7gZg5atSh_rl4_-59XwMTgZOie=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Bangladesh Medical College Hospital</h4>
					<p className="text-sm dark:text-gray-400">Dhaka</p>
					
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipN7QvuLtZLwJm6-XqzLrXMI520OaQOXhvqLaEvx=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold"> Mymensingh Medical College Hospital</h4>
					<p className="text-sm dark:text-gray-400">Mymensingh</p>
					
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipM969Q0ziAfcvdBlGQVifI1li5lnN-ZWbnYrTxS=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Shaheed Suhrawardy Medical College Hospital</h4>
					<p className="text-sm dark:text-gray-400">Dhaka</p>
					
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96  mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipN_1FxMxt58UUgWr_pUbiQWuHHiNR7avpOVLGUv=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Sir Salimullah Medical College & Hospital</h4>
					<p className="text-sm dark:text-gray-400">Dhaka</p>
					
				</div>
			</div>
			<div className="space-y-4">
				<img alt="" className="object-cover  h-56 w-96 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://lh3.googleusercontent.com/p/AF1QipNXPkAqCVct-ABNK893V_NlglsKNoCI-ntnUVUV=s1360-w1360-h1020" />
				<div className="flex flex-col items-center">
					<h4 className="text-xl font-semibold">Rajshahi Medical College Hospital</h4>
					<p className="text-sm dark:text-gray-400">Rajshahi</p>
					
				</div>
			</div>
		</div>
	</div>
</section>
{/* New tourist place */}
<section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <div class="text-center">
      <h2 class="text-5xl font-bold text-teal-600 sm:text-3xl text-center">
      Featured Destinations
      </h2>

      <p class="max-w-md mx-auto mt-4 text-gray-500 text-base text-center">
      Discover now the most Searched and Clicked Destinations.
      </p>
    </div>

    <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <a href="#" class="relative block group">
          <img
            src="https://www.health-tourism.com/_resources/Photos/Countries/003_002_000099.Jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-2xl font-medium text-white">India</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              44 Medical Centers
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="relative block group">
          <img
            src="https://www.health-tourism.com/_resources/Photos/Countries/003_003_000205.Jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-2xl font-medium text-white">Thailand</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
           52 Medical Centers
            </span>
          </div>
        </a>
      </li>
      <li>
        <a href="#" class="relative block group">
          <img
            src="https://www.health-tourism.com/_resources/Photos/Countries/003_002_000187.Jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-2xl font-medium text-white">Singapore</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
           9 Medical Centers
            </span>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="relative block group">
          <img
            src="https://a.cdn-hotels.com/gdcs/production144/d1579/2e0afb81-72eb-4e20-8853-3c98c7643135.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-2xl font-medium text-white">Mexico</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              57 Medical Centers
            </span>
          </div>
        </a>
      </li>
	  <li>
        <a href="#" class="relative block group">
          <img
            src="https://www.health-tourism.com/_resources/Photos/Countries/003_002_000098.Jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-2xl font-medium text-white">Israel</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
           9 Medical Centers
            </span>
          </div>
        </a>
      </li>
	  <li>
        <a href="#" class="relative block group">
          <img
            src="https://www.health-tourism.com/_resources/Photos/Countries/003_002_000064.Jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-2xl font-medium text-white">Spain</h3>

            <span
              class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
           52 Medical Centers
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>



{/* Table */}
<section className="my-14 mx-auto w-10/12">
<h2 className="text-4xl font-semibold text-teal-700 text-center mb-8">
Medication Tour to Buy Authentic, Safe & Affordable <br />
<span className="mt-5">Prescription Medicine</span>
<hr className="font-bold mb-2 mt-3  border-y-2 border-gray-300 w-7/12 text-center mx-auto"/>
            </h2>
	
 


<div class="overflow-hidden overflow-x-auto rounded-lg border border-teal-700  w-1/2 mx-auto ">
  <table class="min-w-full divide-y divide-teal-700 text-sm">
    <thead class="bg-teal-500 text-white">
      <tr>
        
        <th
          class="whitespace-nowrap px-4 py-2  font-medium  text-white text-center"
        >
       Drug
        </th>
        
        <th
          class="whitespace-nowrap px-4 py-2 font-medium  text-white text-center"
        >
          Savings
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-300 text-center">
      <tr>
     
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Hep C
        </td>
		<td class="whitespace-nowrap px-4 py-2 text-gray-700">93%</td>
      </tr>

      <tr>
        
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
		Multiple Sclerosis
        </td>
		<td class="whitespace-nowrap px-4 py-2 text-gray-700">67%</td>
   
      </tr>

      <tr>
       
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
		Rheumatoid Arthritis
        </td>
		<td class="whitespace-nowrap px-4 py-2 text-gray-700">77%</td>
      </tr>
      <tr>
       
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
		Osteoporosis
        </td>
		<td class="whitespace-nowrap px-4 py-2 text-gray-700">85%</td>
      </tr>
    </tbody>
  </table>
</div>

</section>
{/* Plan Your Trip */}
<section className="mx-auto w-10/12 my-16">
<h2 className="text-4xl font-semibold text-teal-700 text-center mb-8">
Plan Your Trip
<hr className="font-bold mb-2 mt-3  border-y-2 border-gray-300 w-72 text-center mx-auto"/>
            </h2>
	<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-auto py-12">
		<div className="w-40 h-64">
			<img src="https://img.freepik.com/free-icon/hotel_318-848015.jpg?size=338&ext=jpg&uid=R88124030&ga=GA1.1.1112733996.1656679358&semt=sph" alt="" />
		<div className="text-center">
		<p className="lg:pt-4 text-teal-400">DAY-1</p>
			<p className="lg:pt-2 ">Arrival in Bangladesh</p>
		</div>
		</div>
		<div className="w-40 h-64 ">
			<img src="https://img.freepik.com/free-icon/doctor_318-342604.jpg?size=338&ext=jpg&uid=R88124030&ga=GA1.1.1112733996.1656679358&semt=ais" alt="" />
			<div className="text-center">
		<p className="lg:pt-4 text-teal-400">DAY-2</p>
			<p className="lg:pt-2 ">Consult Doctor</p>
		</div>
		</div>
		<div className="w-40 h-64">
			<img src="https://cdn-icons-png.flaticon.com/512/822/822147.png?w=740&t=st=1672410366~exp=1672410966~hmac=edf72307e68eb0d92e479b3cb44399aab16b063aab71b5ef3d142f696ec22a1a" alt="" />
			<div className="text-center">
		<p className="lg:pt-4 text-teal-400">DAY-3</p>
			<p className="lg:pt-2 ">Receive Medication & Depart</p>
		</div>
		</div>
		
	</div>
</section>
{/* World Map */}
<section className="my-20 w-10/12 mx-auto">
<div className="bg-slate-200 p-5 my-8">
<h2 className="text-4xl font-semibold text-teal-700 text-center mb-8">
Medication Tourism Facts
<hr className="font-bold mb-2 mt-3  border-y-2 border-gray-300 w-72 text-center mx-auto"/>
            </h2>
			<p className="mb-4">Medication tourism is the act of traveling to another country for prescrtiption drugs at a lower price or to gain access to medication that is not yet currently available in their home country.</p>
</div>
	<div>
		<img src="https://i.ibb.co/2376jxf/Screenshot-2022-12-30-233404.png" className="w-8/12 mx-auto h-full" alt="" />
	</div>
</section>
      </div>
    </div>
  );
};

export default MedicalTourism;
