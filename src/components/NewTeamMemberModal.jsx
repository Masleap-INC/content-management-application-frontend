

const NewTeamMemberModal = ({ isOpenNewTeamMemberModal }) => {
    

    return (
        <div className="lg:p-10 md:p-10 sm:p-5 overflow-y-auto h-full">
            {/* Close Button */}

            <div className="block -fit float-right pl-5">
                <button
                    onClick={() => isOpenNewTeamMemberModal(false)}
                    className="text-5xl sm:text-3xl px-2 py-1 border-2 text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold "
                >
                    X
                </button>
            </div>

            {/* Heading */}

            <div className="block mb-10 lg:w-fit lg:mx-auto">
                <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold">
                    CREATE NEW TEAM MEMBER
                </h2>
            </div>

            {/* Form */}

            <div className=" lg:w-2/3 md:w-5/6 mx-auto">
                <form action="">

                    {/* Team Member Name */}

                    <div className="grid lg:grid-cols-2 lg:gap-5">

                        {/* First Name */}

                        <div>
                            <label htmlFor="f-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                FIRST NAME*
                            </label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-5 rounded-2xl">
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
                                LAST NAME*
                            </label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-5 rounded-2xl">
                                <input
                                    type="text"
                                    name="f-name"
                                    id="l-name"
                                    className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                    </div>


                    {/* Email Area */}

                    <div className="grid lg:grid-cols-1 lg:gap-5">

                        {/* Email */}

                        <div>
                            <label htmlFor="email" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                EMAIL*
                            </label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-5 rounded-2xl">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                    </div>



                    {/* Passwords */}

                    <div className="grid lg:grid-cols-2 lg:gap-5">

                        {/* Password */}

                        <div>
                            <label htmlFor="pass" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                PASSWORD*
                            </label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-5 rounded-2xl">
                                <input
                                    type="password"
                                    name="pass"
                                    id="pass"
                                    className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                    required
                                />
                            </div>
                        </div>


                        {/* Confirm Password */}

                        <div>
                            <label htmlFor="re-pass" className="block w-full text-[#9631FB] text-left text-2xl mb-3">
                                CONFIRM PASSWORD*
                            </label>

                            <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-5 rounded-2xl">
                                <input
                                    type="password"
                                    name="re-pass"
                                    id="re-pass"
                                    className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}

                    <div className="block my-10 w-fit mx-auto">
                        {/* Cancel Button */}

                        <div className="inline-block mr-10">
                            <button
                                onClick={() => isOpenNewTeamMemberModal(false)}
                                className="px-7 py-2 bg-transparent border-2 border-[#9631FB] text-[#9631FB] text-2xl rounded-full hover:bg-[#9631FB] hover:text-white duration-300"
                            >
                                CANCEL
                            </button>
                        </div>

                        {/* Create Button */}

                        <div className="inline-block">
                            <button className="px-7 py-2 bg-[#319AFB] border-2 border-[#319AFB] text-white text-2xl rounded-full hover:bg-transparent hover:text-[#319AFB] duration-300">
                                CREATE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewTeamMemberModal;
