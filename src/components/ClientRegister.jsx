

const ClientRegister = () => {

    return (

        <div className="bg-white px-5 py-20 rounded-2xl shadow-2xl h-full">

            {/* Heading */}

            <div className="mb-14">

                <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">CREATE ACCOUNT</h1>

            </div>

            {/* Registration Form */}

            <div>

                <form action="">

                    {/* Name Fields */}

                    <div className="block lg:grid lg:grid-cols-2 gap-10 lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">

                        {/* First Name */}

                        <div>

                            <label htmlFor="f-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">FIRST NAME*</label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                <input type="text" name="f-name" id="f-name" placeholder="First Name" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                            </div>

                        </div>



                        {/* Last Name */}

                        <div>

                            <label htmlFor="l-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">LAST NAME</label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                <input type="text" name="l-name" id="l-name" placeholder="Last Name" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" />
                            </div>

                        </div>

                    </div>


                    {/* Company */}

                    <label htmlFor="company" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">COMPANY / ORGANIZATION*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10 rounded-2xl">
                        <input type="text" name="company" id="company" placeholder="ex: xyz It Solutions" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>


                    {/* Email */}

                    <label htmlFor="email" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">EMAIL*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10 rounded-2xl">
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>


                    {/* Password */}

                    <label htmlFor="password" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">PASSWORD*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10 rounded-2xl">
                        <input type="password" name="password" id="password" placeholder="*********" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>


                    {/* Confirm Password */}

                    <label htmlFor="re-password" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">CONFIRM PASSWORD*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto rounded-2xl">
                        <input type="password" name="re-password" id="re-password" placeholder="*********" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>

                    {/* Register Button */}

                    <div className="mt-14">
                        <button className="block bg-[#9631FB]  hover:bg-[#319AFB]  text-white text-2xl px-5 py-3 w-1/2 rounded-2xl duration-300 mx-auto mb-10">Register</button>
                    </div>

                </form>

            </div>

        </div>

    );

}

export default ClientRegister;