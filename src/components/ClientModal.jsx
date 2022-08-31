

const ClientModal = ({ isOpenClientModal }) => {


    return (
        <div className="lg:p-10 md:p-10 sm:p-5 mb-16 h-full">
            {/* Delete Client Button */}

            <div className=" inline-block mt-5">
                <button className=" px-10 py-2 bg-transparent text-red-700 border-2 border-red-700 rounded-full hover:bg-red-700 hover:text-white duration-300">
                    DELETE CLIENT
                </button>
            </div>

            {/* Close Button */}

            <div className="block -fit float-right pl-5">
                <button
                    onClick={() => isOpenClientModal(false)}
                    className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold sm:text-3xl px-2 py-1 border-2 "
                >
                    X
                </button>
            </div>

            <div className="mb-20 mt-10 w-full">
                {/* Client Info */}

                <div className=" block mb-10">
                    {/* Profile Image */}

                    <div className=" inline-block mr-10 align-middle">
                        <img
                            src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt="client-profile-img"
                            className=" h-48 w-48 rounded-full"
                        />
                    </div>

                    {/* Details */}

                    <div className=" inline-block align-middle my-5 max-w-full ">
                        {/* Client Name */}

                        <h2
                            id="project-name"
                            className=" block mb-3 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold "
                        >
                            CLIENT NAME
                        </h2>

                        {/* Client Company */}

                        <div className=" block mb-3">
                            {/* title */}

                            <span className="mr-3 font-semibold text-xl text-[#9631FB]">COMPANY:</span>

                            {/* value */}

                            <span className="text-xl">Any IT Solution</span>
                        </div>

                        {/* Client Email */}

                        <div>
                            {/* title */}

                            <span className="mr-3 font-semibold text-xl text-[#9631FB]">EMAIL:</span>

                            {/* value */}

                            <span className="text-xl">example@example.com</span>
                        </div>
                    </div>
                </div>

                {/* Projects */}

                <div className="block">
                    {/* Heading */}

                    <h2
                        id="project-name"
                        className=" block mb-10 pb-2 w-fit border-b-2 border-[#9631FB] text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold "
                    >
                        PROJECTS
                    </h2>

                    {/* Projects */}

                    <div className=" grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5">

                        {/* Project-1 */}

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 2</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">100</span>

                                    <span className="block font-semibold w-fit mx-auto">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">79</span>

                                    <span className="block font-semibold w-fit mx-auto">REJECTED</span>
                                </div>
                            </div>
                        </div>


                        {/* Project-2 */}

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 2</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">100</span>

                                    <span className="block font-semibold w-fit mx-auto">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">79</span>

                                    <span className="block font-semibold w-fit mx-auto">REJECTED</span>
                                </div>
                            </div>
                        </div>


                        {/* Project-3 */}

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 2</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">100</span>

                                    <span className="block font-semibold w-fit mx-auto">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">79</span>

                                    <span className="block font-semibold w-fit mx-auto">REJECTED</span>
                                </div>
                            </div>
                        </div>


                        {/* Project-4 */}

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 2</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">100</span>

                                    <span className="block font-semibold w-fit mx-auto">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl w-fit mx-auto">79</span>

                                    <span className="block font-semibold w-fit mx-auto">REJECTED</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ClientModal;
