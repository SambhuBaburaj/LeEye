import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginUserdata } from "../API/ApiCall";
const LoginIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errmsg, setErrmsg] = useState("");

  const LoginUser = (e) => {
    e.preventDefault();

    setErrmsg("");

    const form = new FormData(e.target);
    const UserData = Object.fromEntries(form);

    LoginUserdata(UserData)
      .then((data) => {
        console.log(data.data.accessToken);
        localStorage.setItem("Userdata", data.data.accessToken);

        if (data.data.validate) {
          navigate("/home");
        } else {
          navigate("/addetails");
        }
      })
      .catch((err) => {
        setErrmsg("email/password is incorrect");
      });

    // Validate(UserData.email).then(data=>
    //   {
    //     navigate('/home')
    //   }).catch(err=>
    //     {
    //       navigate('/addetails')
    //     })
  };

  return (
    <div className="bg-gray-900">
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <p className="text-2xl flex justify-center font-bold mb-3 text-white">
            Login
          </p>
          <p className="text-red-500 font-bold flex justify-center">{errmsg}</p>

          {location.state ? (
            <p className="text-green-500 font-bold flex justify-center mb-2">
              {location.state.reg}
            </p>
          ) : (
            <></>
          )}
          <form onSubmit={LoginUser} action="">
            <input
              required
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  px-4 py-2  border-solid "
              type="text"
              placeholder="Email Address"
            />
            <input
              required
              name="password"
              className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  px-4 py-2  border-solid "
              type="password"
              placeholder="Password"
            />
            <div className="mt-4 flex justify-between font-semibold text-sm"></div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account?{" "}
            <a
              onClick={() => {
                navigate("/register");
              }}
              className="text-red-600 hover:underline hover:underline-offset-4"
              href="#!"
            >
              Register
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginIn;
