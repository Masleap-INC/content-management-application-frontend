import logo from "../assets/img/masleap-logo.png";



const OrganizationLoginPage = () => {

    return (
        <div>

            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] py-20 h-full min-h-screen">

                {/* Company Logo */}

                <div className="mb-10">

                    <img src={logo} alt="company logo" className="w-24 mx-auto" />

                </div>

                {/* Heading */}

                <div className="mb-14">

                    <h1 className="text-5xl text-white font-semibold">LOGIN</h1>

                </div>

                {/* Login Form */}

                <div className="w-full">

                    <form action="" className="lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto">

                        {/* Email Label & Input */}

                        <label htmlFor="email" className=" block text-white text-left text-2xl mb-3">EMAIL</label>

                        <input type="email" name="email" id="email" className=" block text-xl px-3 py-2 w-full rounded-2xl outline-none mb-10"/>


                        {/* Password Label & Input */}

                        <label htmlFor="email" className=" block text-white text-left text-2xl mb-3">PASSWORD</label>

                        <input type="email" name="email" id="email" className=" block text-xl px-3 py-2 w-full rounded-2xl outline-none mb-10"/>


                        {/* Role Selection DropDown */}

                        <label htmlFor="role" className=" block text-white text-left text-2xl mb-3">SELECT ROLE</label>

                        <select name="role" id="role" className=" block text-xl px-3 py-2 w-full rounded-2xl outline-none mb-10 ">

                            <option value="admin">ADMIN</option>
                            <option value="team">TEAM MEMBER</option>

                        </select>


                        {/* Login Button */}

                        <button type="" className="block bg-[#9631FB] hover:bg-[#319AFB] text-white text-2xl px-5 py-3 w-1/2 rounded-2xl mx-auto mb-10">LOGIN</button>

                    </form>

                </div>

            </div>

        </div>
    );

}

export default OrganizationLoginPage;