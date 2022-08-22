

const ClientLogin = () => {

    return (

        <div className="bg-white px-5 py-20 rounded-2xl shadow-2xl">

            {/* Heading */}

            <div className="mb-14">

                <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">LOGIN</h1>

            </div>

            {/* Login Form */}

            <div>

                <form action="">

                    {/* Email */}

                    <label htmlFor="email" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">EMAIL*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10 rounded-2xl">
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>


                    {/* Password */}

                    <label htmlFor="password" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">PASSWORD*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto rounded-2xl">
                        <input type="password" name="password" id="password" placeholder="*********" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>

                    {/* Login Button */}

                    <div className="mt-14">
                        <button className="block bg-[#9631FB]  hover:bg-[#319AFB]  text-white text-2xl px-5 py-3 w-1/2 rounded-2xl duration-300 mx-auto mb-10">LOGIN</button>
                    </div>


                    {/* Forgot Password */}

                    <div className="mt-10">

                        <button className="text-[#9631FB] text-xl hover:underline text-center">FORGOT PASSWORD ?</button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default ClientLogin;