

const ClientForgetPassword = ({ passwordForgot }) => {

    return (

        <div className="bg-white px-5 py-20 rounded-2xl shadow-2xl">

            

            {/* Heading */}

            <div className="mb-10">

                <h1 className=" mb-10 text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">FORGOT PASSWORD ?</h1>

                {/* Sub Heading */}

                <h2 className=" text-md text-[#9631FB] w-5/6 mx-auto">PLEASE ENTER THE EMAIL ADDRESS ASSOCIATED WITH YOUR ACCOUNT AND A LINK TO RESET YOUR PASSWORD WILL BE SENT TO YOUR EMAIL SHORTLY.</h2>

            </div>

            {/* Login Form */}

            <div>

                <form action="">

                    {/* Email */}

                    <label htmlFor="email" className="block lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-[#9631FB] text-left text-2xl mb-3">EMAIL*</label>

                    <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto mb-10 rounded-2xl">
                        <input type="email" name="email" id="email" placeholder="example@example.com" className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl" required/>
                    </div>


                    {/* Submit Button */}

                    <div className="mt-14">
                        <button className="block bg-[#9631FB]  hover:bg-[#319AFB]  text-white text-2xl px-5 py-3 w-1/2 rounded-2xl duration-300 mx-auto mb-10">SUBMIT</button>
                    </div>


                </form>

                {/* Back Button */}

                <div className="w-full">
                    <button onClick={() => {passwordForgot(false)}} className=" font-bold text-left text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] hover:-ml-5 duration-300">&lt; GO BACK</button>
                </div>

            </div>

        </div>

    );

}

export default ClientForgetPassword;