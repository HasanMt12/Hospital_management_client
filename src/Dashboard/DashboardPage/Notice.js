import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Notice = () => {

      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
    // console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddStuff = (data) => {

    // get date 
    const date = new Date()

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}-${month}-${year}`;

    let hour = date.getHours()
    let minutes = date.getMinutes();
    const currentTime = `${hour}:${minutes}`

    const time = [currentTime, currentDate]
    
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
            notice: data.notice,
            time,
            blogCategory: data.blogCategory,
           
            img: imgData.data.url,
          };
          console.log(stuff);
          //   save product information to the database
          fetch("https://hospital-management-server-one.vercel.app/notice", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            
            },
            body: JSON.stringify(stuff),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.notice} is added successfully`);
              // setLoading(true)
              //   navigate("/dashboard/manageProducts");
            //   refetch()
            });
        }
      });
  };

    return (
        <div>
            <section className="p-8 shadow-xl border-x-8 border-teal-200" >
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        onSubmit={handleSubmit(handleAddStuff)}
      >
        <fieldset className="grid grid-cols-4 gap-6 p-8 rounded-md shadow-lg  bg-gray-100">
          <div className="grid grid-cols-6 gap-4 col-span-full  lg:col-span-3">
            <div className="col-span-full sm:col-span-full">
              <label htmlFor="notice" className="text-md font-semibold text-teal-800">
                Notice
              </label>
              <textarea 
                type="text" rows="4" cols="full"
                placeholder="Notice"
                {...register("notice", {
                  required: "Notice is Required",
                })}
                className="w-full border-2 pl-4 border-teal-600 rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-teal-800"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="col-span-full ">
              <label htmlFor="photo" className="text-md font-semibold text-teal-800">
                Photo
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Photo is Required",
                })}
                className="w-full border-2 border-teal-600 py-4 pl-6 rounded-md   focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-gray-90"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
          
          

            
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="select"
              className="text-md text-teal-800 font-semibold">
                Blog Category
              </label>
                      <textarea 
                type="text" rows="4" cols="full"
                placeholder="Blog category "
                {...register("blogCategory", {
                  required: "Blog is Required",
                })}
                className="w-full border-2 pl-4 border-teal-600 rounded-md py-1 focus:ring-opacity-75 focus:ring-violet-400  border-gray-700  text-teal-800"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

  
            </div>
            <div className="col-span-full mx-auto w-1/2">
              <input
                className="btn form-control p-3 text-white rounded-xl cursor-pointer bg-gray-400 font-bold w-full max-w-xs mt-4 hover:bg-gray-500"
                value="Add Notice"
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

export default Notice;