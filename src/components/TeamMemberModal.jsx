

const TeamMemberModal = ({ isOpenTeamMemberModal }) => {


    return (
        <div className="lg:p-10 md:p-10 sm:p-5 mb-16 h-full">
            {/* Delete Team Member Button */}

            <div className=" inline-block mt-5">
                <button className=" px-10 py-2 bg-transparent text-red-700 border-2 border-red-700 rounded-full hover:bg-red-700 hover:text-white duration-300">
                    DELETE TEAM MEMBER
                </button>
            </div>

            {/* Close Button */}

            <div className="block -fit float-right pl-5">
                <button
                    onClick={() => isOpenTeamMemberModal(false)}
                    className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold sm:text-3xl px-2 py-1 border-2 "
                >
                    X
                </button>
            </div>

            <div className="mb-10 mt-10 w-full">
                {/* Team Member Info */}

                <div className=" block">
                    {/* Profile Image */}

                    <div className=" inline-block mr-10 align-middle lg:w-auto md:w-full sm:w-full">
                        <img
                            src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="client-profile-img"
                            className=" h-48 w-48 rounded-full mx-auto"
                        />
                    </div>

                    {/* Details */}

                    <div className=" inline-block align-middle my-5 max-w-full">
                        {/* Team Member Name */}

                        <h2
                            id="project-name"
                            className=" block mb-3 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold "
                        >
                            NAME
                        </h2>

                        {/* Team Member Email */}

                        <div>
                            {/* title */}

                            <span className="mr-3 font-semibold text-xl text-[#9631FB]">EMAIL:</span>

                            {/* value */}

                            <span className="text-xl">example@example.com</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default TeamMemberModal;
