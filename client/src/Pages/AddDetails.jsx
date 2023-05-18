import React, { useEffect, useState } from "react";
import { AddUserdata, Getuser } from "../API/ApiCall";
import Instance from "../API/Axios";
import { useNavigate } from "react-router-dom";

const AddDetail = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitedData = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const Formdata = Object.fromEntries(form);

    AddUserdata(Formdata).then((data) => {
      navigate("/home");
    });
  };

  useEffect(() => {
    Getuser().then((data) => {
      
      if (data.data.validation) {
        navigate("/home");
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="max-h-full border-2 border-black p-6 rounded-xl ">
        <label htmlFor="" className="text-3xl text-white flex justify-center">
          {" "}
          Add Details
        </label>

        <form onSubmit={submitedData}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              required
              type="text"
              name="email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
           
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <textarea
              required
              name="Address"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type here..."
            ></textarea>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <div>
              {/* <input className='text-white' type="file" accept="image/*" onChange={handleImageUpload} /> */}

              {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="default_size">Default size</label> */}
              <input
                required
                name="file"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="default_size"
                type="file"
              />

              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="mt-4 max-w-xs max-h-xs h-24 "
                />
              )}
            </div>
          </div>

          {/* <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div> */}

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDetail;
