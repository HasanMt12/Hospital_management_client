import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddStuff = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddStuff = (data) => {
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
          console.log(imgData.data.url);
          const stuff = {
            name: data.name,
            department: data.department,
            designation: data.designation,
            shift: data.shift,
            salary: data.salary,
            Address: data.Address,
            contact: data.contact,
            schedule: data.schedule,
            img: imgData.data.url,
          };
          console.log(stuff);
          //   save product information to the database
          fetch("http://localhost:5000/addStuff", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(stuff),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              // setLoading(true)
              //   navigate("/dashboard/manageProducts");
            //   refetch()
            });
        }
      });
  };

  return (
    <section className="p-8 shadow-xl ">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit(handleAddStuff)}
      >
        <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-lg  bg-gray-200">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="name"
                {...register("name", {
                  required: " Name is Required",
                })}
                className="w-full rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="designation" className="text-sm">
                Select Designation
              </label>
              <select
                {...register("designation", {
                  required: true,
                })}
                className="select select-bordered    focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full py-1 rounded-md mt-1"
              >
                <option value="nurse" className="text-gray-900">
                  Nurse
                </option>
                <option value="stuff" className="text-gray-900">
                  Stuff
                </option>
              </select>
              {errors.designation && (
                <p className="text-red-500">{errors.designation.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3 ">
              <label htmlFor="select" className="text-sm">
                Department
              </label>
              <select
                {...register("department", {
                  required: true,
                })}
                className="select select-bordered py-1   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full rounded-md mt-1"
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
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="salary" className="text-sm">
                Salary
              </label>
              <input
                type="number"
                min="0"
                {...register("salary", {
                  required: true,
                })}
                className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900"
              />
              {errors.salary && (
                <p className="text-red-500">{errors.salary.message}</p>
              )}
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-lg  bg-gray-200">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="contact" className="text-sm">
                Contact
              </label>
              <input
                type="contact"
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
                {...register("Address", {
                  required: true,
                })}
                className="w-full rounded-md py-1  focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
              />
              {errors.Address && (
                <p className="text-red-500">{errors.Address.message}</p>
              )}
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="schedule" className="text-sm">
                Schedule Time
              </label>
              <select
    
                {...register("schedule", {
                  required: true,
                })}
                className="select select-bordered py-1   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full rounded-md mt-1"
              >
                <option value="Monday to Thursday" className="text-gray-900">
                  Monday to Thursday
                </option>
                <option value=" Friday to Monday" className="text-gray-900">
                  Friday to Monday
                </option>
              </select>

              {errors.schedule && (
                <p className="text-red-500">{errors.schedule.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="shift" className="text-sm">
                Shift Time
              </label>
              <select
              
                {...register("shift", {
                  required: true,
                })}
                className="select select-bordered py-1   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-900 w-full rounded-md mt-1"
              >
                <option value="9.00 am to 5.00 pm" className="text-gray-900 ">
                  9.00 am to 5.00 pm
                </option>
                <option value=" 5.00 pm to 2.00 am" className="text-gray-900">
                  5.00 pm to 2.00 am
                </option>
                <option value="2.00 am to 9.00 am" className="text-gray-900">
                  2.00 am to 9.00 am
                </option>
              </select>

              {errors.shift && (
                <p className="text-red-500">{errors.shift.message}</p>
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
                className="btn form-control p-3 text-white rounded-xl bg-gray-400 font-bold w-full max-w-xs mt-4 hover:bg-gray-500"
                value="Add Product"
                type="submit"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddStuff;
