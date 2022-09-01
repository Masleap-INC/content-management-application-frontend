import logo from "../assets/img/masleap-logo.png";
import ClientLogin from "../components/ClientLogin";
import { useState } from "react";
import ClientRegister from "../components/ClientRegister";
import ClientForgetPassword from "../components/ClientForgetPassword";


const ClientAuthPage = () => {


    const [hasAccount, sethasAccount] = useState(true);

    const [forgotPassword, setforgotPassword] = useState(false);

    const switchForm = () => {

        sethasAccount(!hasAccount);

        setforgotPassword(false);

    };

  return (
    <div>
      
      <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] pt-10 pb-20 min-h-screen ">
        
        {/* Company Logo */}

        <div className="mb-10">

          <img src={logo} alt="company logo" className="w-16 ml-10" />

        </div>

        {/* content */}

        <div className="lg:grid lg:grid-cols-2 w-5/6 mx-auto h-full ">

            {/* Welcome Note */}

            <div className="h-full my-auto align-middle overflow-x-hidden overflow-y-hidden lg:mt-10">

                {/* Heading */}

                <div className=" align-middle">

                    <h2 className="text-5xl text-white text-left font-semibold lg:w-2/3 lg:pb-20 md:pb-20 sm:pb-20">LOGIN / SIGN UP TO GET ACCESS TO YOUR ACCOUNT !</h2>

                    {/* Login / Register switch */}

                    <div className={"lg:w-1/2 md:w-1/2" + (hasAccount ? " translate-x-0 duration-500 after:h-full" : " -translate-x-[1000px] duration-500 h-0 ")}>

                        <h2 className="text-2xl text-white text-left font-medium mb-10">DON'T HAVE AN ACCOUNT ?</h2>

                        <button onClick={() => {switchForm()}} className="bg-transparent text-white border-2 border-white duration-300 hover:border-transparent hover:bg-white hover:text-blue-500 text-xl px-5 py-2 w-full rounded-2xl mb-10">REGISTER</button>

                    </div>


                    <div className={"lg:w-1/2 md:w-1/2 " + (hasAccount ? " -translate-x-[1000px] duration-500 h-0" : " translate-x-0 duration-500 ")}>

                        <h2 className="text-2xl text-white text-left font-medium mb-10">ALREADY HAVE AN ACCOUNT ?</h2>

                        <button onClick={() => {switchForm()}} className="bg-transparent text-white border-2 border-white duration-300 hover:border-transparent hover:bg-white hover:text-blue-500 text-xl px-5 py-2 w-full rounded-2xl mb-10">LOGIN</button>

                    </div>

                </div>


            </div>

            {/* Login / Registration */}

            <div className=" overflow-x-hidden overflow-y-hidden h-full drop-shadow-2xl">

                <div className="">

                  <div className={"w-full " + (hasAccount && !forgotPassword ? " translate-x-0 duration-500" : " translate-x-[1000px] duration-500 h-0")}>
                      <ClientLogin  passwordForgot= {setforgotPassword} />
                  </div>

                  <div className={"w-full" + (hasAccount || forgotPassword ? " translate-x-[1000px] duration-500 h-0 " : " translate-x-0 duration-500")}>
                      <ClientRegister />
                  </div>

                  <div className={"w-full" + (hasAccount && forgotPassword ? " translate-x-0 duration-500" : " translate-x-[1000px] duration-500 h-0")}>
                      <ClientForgetPassword passwordForgot= {setforgotPassword} />
                  </div>

                </div>

            </div>

        </div>
      
      </div>
    
    </div>
  );
};

export default ClientAuthPage;
