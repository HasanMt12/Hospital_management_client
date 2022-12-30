import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const Times = [
    "08.00 AM - 08.30 AM",

    "08.30 AM - 09.00 AM",

    "09.00 AM - 9.30 AM",

    "09.30 AM - 10.00 AM",

    "10.00 AM - 10.30 AM",

    "10.30 AM - 11.00 AM",

    "11.00 AM - 11.30 AM",

    "11.30 AM - 12.00 AM",

    "1.00 PM - 1.30 PM",

    "1.30 PM - 2.00 PM",

    "2.00 PM - 2.30 PM",

    "2.30 PM - 3.00 PM",

    "3.00 PM - 3.30 PM",

    "3.30 PM - 4.00 PM",

    "4.00 PM - 4.30 PM",

    "4.30 PM - 5.00 PM",
  ];
  
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);
  const onSubmit = (data,e) => {
    // const Times = e.target.time.value.split(",");
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctors = {
            name: data.doctorName,
            title: data.title,
            department: data.department,
            workingDays: data.workingDays,
            degree: data.degree,
            doctorCode: data.doctorCode,
            age: data.age,
            contact: data.contact,
            address: data.address,
            img: imgData.data.url,
          };

          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctors),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.doctorName} is added successfully`);
            });
        }
      });
  };
  return (
    <div>
      <section className="p-8 shadow-xl ">
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-lg  bg-gray-200">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="doctorName" className="text-sm">
                  Doctor Name
                </label>
                <input
                  type="name"
                  placeholder="Enter Your Name"
                  {...register("doctorName", {
                    required: "Doctor Name is Required",
                  })}
                  className="w-full rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                />
                {errors.doctorName && (
                  <p className="text-red-500">{errors.doctorName.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  type="name"
                  placeholder="Title"
                  {...register("title", {
                    required: "Title is Required",
                  })}
                  className="w-full rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="department" className="text-sm">
                  Select Department
                </label>
                <select
                  {...register("department", {
                    required: true,
                  })}
                  className="select select-bordered    focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full py-1 rounded-md "
                >
                  <option value="dental" className="text-gray-900">
                    Dental
                  </option>
                  <option value="cardiology" className="text-gray-900">
                    Cardiology
                  </option>
                  <option value="neurology" className="text-gray-900">
                    Neurology
                  </option>
                  <option value="oncology" className="text-gray-900">
                    Oncology
                  </option>
                  <option value="nephrology" className="text-gray-900">
                    Nephrology
                  </option>
                  <option value="radiology" className="text-gray-900">
                    Radiology
                  </option>
                  <option value="orthopedic" className="text-gray-900">
                    Orthopedic
                  </option>

                  <option value="gynecology" className="text-gray-900">
                    Gynecology
                  </option>
                  <option value="endocrinology" className="text-gray-900">
                    Endocrinology
                  </option>
                  <option value="gastroenterology" className="text-gray-900">
                    Gastroenterology
                  </option>
                  <option value="otolaryngology" className="text-gray-900">
                    Otolaryngology
                  </option>
                </select>
                {errors.department && (
                  <p className="text-red-500">{errors.department.message}</p>
                )}
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="workingDays" className="text-sm">
                  Working Time
                </label>
                <select
                  {...register("workingDays", {
                    required: true,
                  })}
                  className="select select-bordered    focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full py-1 rounded-md "
                >
                  {Times.map((time) => (
                    <option className="text-gray-900" key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.workingDays && (
                  <p className="text-red-500">{errors.workingDays.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="degree" className="text-sm">
                  Degree
                </label>
                <input
                  type="name"
                  placeholder="Degree"
                  {...register("degree", {
                    required: " Degree is Required",
                  })}
                  className="w-full rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                />
                {errors.degree && (
                  <p className="text-red-500">{errors.degree.message}</p>
                )}
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="doctorCode" className="text-sm">
                  Doctor Code
                </label>
                <input
                  type="number"
                  placeholder="Doctor Code"
                  min="0"
                  {...register("doctorCode", {
                    required: true,
                  })}
                  className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                />
                {errors.doctorCode && (
                  <p className="text-red-500">{errors.doctorCode.message}</p>
                )}
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg  bg-gray-200">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="age" className="text-sm">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Age"
                  min="0"
                  {...register("age", {
                    required: true,
                  })}
                  className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                />
                {errors.age && (
                  <p className="text-red-500">{errors.age.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="contact" className="text-sm">
                  Contact
                </label>
                <input
                  type="contact"
                  placeholder="Contact"
                  {...register("contact", {
                    required: true,
                  })}
                  className="w-full rounded-md  py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
                />
                {errors.contact && (
                  <p className="text-red-500">{errors.contact.message}</p>
                )}
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Address" className="text-sm">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address", {
                    required: true,
                  })}
                  className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
                />
                {errors.Address && (
                  <p className="text-red-500">{errors.Address.message}</p>
                )}
              </div>

              <div className="col-span-full">
                <label htmlFor="photo" className="text-sm">
                  Photo
                </label>
                <input
                  type="file"
                  {...register("img", {
                    required: "Photo is Required",
                  })}
                  className="w-full  rounded-md   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
                />
                {errors.img && (
                  <p className="text-red-500">{errors.img.message}</p>
                )}
              </div>
              <div className="col-span-full mx-auto w-1/2">
                <input
                  className="btn form-control cursor-pointer p-3 text-white rounded-xl bg-gray-400 font-bold w-full max-w-xs mt-4 hover:bg-gray-500"
                  value="ADD DOCTOR"
                  type="submit"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddDoctor;
