

const NewProjectModal = () => {
    return (
        <div className="p-10 overflow-y-auto">

            {/* Close Button */}

            <div className="block -fit float-right pl-5">
                <button className="text-5xl px-2 py-1 border-2 text-[#9631FB]">X</button>
            </div>


            {/* Heading */}

            <div className="block mb-10 w-fit mx-auto">
                <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold">CREATE NEW PROJECT</h2>
            </div>

            {/* Form */}

            <div className=" lg:w-2/3 md:w-5/6 mx-auto">
                <form action="">

                    {/* Project Name */}

                    <div>
                        <label htmlFor="project-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">PROJECT NAME*</label>

                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                            <input
                                type="text"
                                name="project-name"
                                id="project-name"
                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                                required
                            />
                        </div>
                    </div>


                    {/* Project Description */}

                    <div>
                        <label htmlFor="project-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">PROJECT DESCRIPTION</label>

                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                            <textarea
                                name="project-details"
                                id="project-details"
                                rows= "5"
                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                            />

                        </div>
                    </div>



                    {/* Project Client */}

                    <div>
                        <label htmlFor="project-name" className="block w-full text-[#9631FB] text-left text-2xl mb-3">CLIENT</label>

                        <div className="bg-gradient-to-br from-[#9631FB] to-[#319AFB] p-[1px] shadow-lg w-full mb-10 rounded-2xl">
                            <select
                                name="project-client"
                                id="project-client"
                                className="bg-white px-3 py-2 placeholder:text-gray-400 w-full rounded-2xl"
                            >
                            

                                <option value="client-1">client-1</option>

                                <option value="client-2">client-2</option>

                                <option value="client-3">client-3</option>

                            </select>
                        </div>
                    </div>


                    {/* Action Buttons */}

                    <div className="grid grid-cols-2 gap-10 mb-10">

                        {/* Cancel Button */}

                        <div className=" w-fit mx-auto">
                            <button className="px-7 py-2 bg-transparent border-2 border-[#9631FB] text-[#9631FB] text-2xl rounded-full hover:bg-[#9631FB] hover:text-white duration-300">CANCEL</button>
                        </div>

                        {/* Create Button */}

                        <div className=" w-fit mx-auto">
                            <button className="px-7 py-2 bg-[#319AFB] border-2 border-[#319AFB] text-white text-2xl rounded-full hover:bg-transparent hover:text-[#319AFB] duration-300">CREATE</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProjectModal;
