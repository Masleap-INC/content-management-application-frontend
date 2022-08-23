
import logo from "../assets/img/masleap-logo.png"


const Profile = () => {
    return (
        <div className="w-full pt-10 pb-20">
            {/* Heading */}

            <div className="block mb-20">
                <div className="pb-5 border-b-2 border-[#9631FB] w-fit">
                    <h1 className="text-left text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">PROFILE</h1>
                </div>
            </div>

            {/* Update Profile */}

            <div>
                <div className=" lg:grid lg:grid-cols-3">

                    {/* Image Update */}

                    <div className=" lg:col-span-1 w-fit mx-auto pb-20 ">

                        {/* Profile Image */}

                        <div className=" lg:block md:inline-block sm:inline-block mb-20 px-5">

                            

                            <div>

                                {/* Image */}

                                <span className="block mb-5 w-full">

                                    <img src="https://img.icons8.com/ios/150/9631FB/name--v1.png" alt="profile-img-icon" className="w-fit mx-auto"/>

                                </span>

                                {/* Update Button */}

                                <span className="w-fit">

                                    <button onClick={() => {document.getElementById('profile-photo-upload').click()}} className=" bg-transparent px-3 py-2 border-2 border-[#9631FB] text-[#9631FB] rounded-full w-fit hover:bg-[#9631FB] hover:text-white duration-300">UPDATE PROFILE PHOTO</button>

                                    <input type='file' id="profile-photo-upload" className=" hidden" />
                                </span>

                            </div>        

                        </div>


                        {/* Company Logo */}

                        <div className=" lg:block md:inline-block sm:inline-block mb-20 px-5">

                            <div>

                                {/* Logo */}

                                <span className="block mb-5">
                                    <img src={logo} alt="company-logo" className="w-[150px] h-auto mx-auto"/>
                                </span>

                                {/* Update Button */}

                                <span className="block">

                                    <button onClick={() => {document.getElementById('company-logo-upload').click()}} className=" bg-transparent px-3 py-2 border-2 border-[#9631FB] text-[#9631FB] rounded-full w-fit hover:bg-[#9631FB] hover:text-white duration-300">UPDATE COMPANY LOGO</button>

                                    <input type='file' id="company-logo-upload" className=" hidden" />

                                </span>

                            </div>        

                        </div>

                    </div>


                    {/* Profile Update Form */}

                    <div className=" lg:col-span-2 ">

                        <div className="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto ">

                            {/* Heading */}

                            <div className="mb-20">
                                <h2 className=" text-3xl text-[#9631FB] font-bold">PERSONAL INFORMATION</h2>
                            </div>

                            <form action="">

                                {/* Name Fields */}

                                <div className="block lg:grid lg:grid-cols-2 gap-10 w-full">
                                    {/* First Name */}

                                    <div>
                                        <label htmlFor="f-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                            FIRST NAME*
                                        </label>

                                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                            <input
                                                type="text"
                                                name="f-name"
                                                id="f-name"
                                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Last Name */}

                                    <div>
                                        <label htmlFor="l-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                            LAST NAME
                                        </label>

                                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                            <input
                                                type="text"
                                                name="l-name"
                                                id="l-name"
                                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Company */}

                                <label htmlFor="company" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                    COMPANY / ORGANIZATION*
                                </label>

                                <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                        required
                                    />
                                </div>

                                {/* Email */}

                                <label htmlFor="email" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                    EMAIL*
                                </label>

                                <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                        required
                                    />
                                </div>


                                {/* Old Password */}

                                <label htmlFor="old-password" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                    OLD PASSWORD*
                                </label>

                                <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                    <input
                                        type="password"
                                        name="old-password"
                                        id="old-password"
                                        className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                        required
                                    />
                                </div>


                                {/* Password */}

                                <label htmlFor="new-password" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                   NEW PASSWORD*
                                </label>

                                <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                                    <input
                                        type="password"
                                        name="new-password"
                                        id="new-password"
                                        className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                        required
                                    />
                                </div>

                                {/* Confirm Password */}

                                <label
                                    htmlFor="re-password"
                                    className="block w-full text-[#9631FB] text-left text-2xl mb-3"
                                >
                                    CONFIRM NEW PASSWORD*
                                </label>

                                <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full rounded-2xl">
                                    <input
                                        type="password"
                                        name="re-password"
                                        id="re-password"
                                        className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                        required
                                    />
                                </div>

                                {/* Update Button */}

                                <div className="mt-14">
                                    <button className="block bg-[#9631FB]  hover:bg-[#319AFB]  text-white text-xl px-3 py-2 lg:w-1/2 md:w-2/3 sm:w-2/3 rounded-2xl duration-300 mx-auto mb-10">
                                        UPDATE PROFILE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Profile;
