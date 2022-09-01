import logo from "../assets/img/masleap-logo.png";

const ResetPasswordPage = () => {
    return (
        <div>
            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] pt-10 pb-20 min-h-screen ">
                {/* Company Logo */}

                <div className="mb-10">
                    <img src={logo} alt="company logo" className="w-16 ml-10" />
                </div>

                {/* Reset Password Form */}

                <div className=" bg-white px-5 py-20 rounded-2xl drop-shadow-2xl lg:w-1/2 md:w-5/6 sm:w-5/6 mx-auto">

                    {/* Heading */}

                    <div className="mb-14">

                        <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">RESET PASSWORD</h1>

                    </div>

                    {/* Email */}
                    
                    <div className="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10">

                        {/* Title */}

                        <h2 className="block w-full text-[#9631FB] text-left text-2xl mb-1">EMAIL:</h2>

                        {/* Value */}

                        <h2 className="bg-white py-2 text-left w-full text-xl font-semibold">example@example.com</h2>


                    </div>


                    <form action="">
                        {/* Password */}

                        <label htmlFor="password" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">
                            NEW PASSWORD*
                        </label>

                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10 rounded-2xl">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                required
                            />
                        </div>

                        {/* Confirm Password */}

                        <label htmlFor="re-password" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">
                            CONFIRM PASSWORD*
                        </label>

                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto rounded-2xl">
                            <input
                                type="password"
                                name="re-password"
                                id="re-password"
                                placeholder="*********"
                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                required
                            />
                        </div>

                        {/* Login Button */}

                        <div className="mt-14">
                            <button className="block bg-[#9631FB]  hover:bg-[#319AFB]  text-white text-2xl px-5 py-3 w-1/2 rounded-2xl duration-300 mx-auto">
                                RESET
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
