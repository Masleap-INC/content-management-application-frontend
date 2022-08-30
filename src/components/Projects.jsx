import NewProjectModal from "./NewProjectModal";
import Modal from "react-modal";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

Modal.setAppElement("#root");

const Projects = () => {

    const isAdmin = true;


    const [newProjectModalIsOpen, setNewProjectModalIsOpen] = useState(false);

    const [projectModalIsOpen, setProjectModalIsOpen] = useState(false);

    return (
        <div className=" w-full pt-10 pb-20 ">
            {/* Modals */}

            <div className="">
                {/* Create New Project Modal */}

                <Modal
                    isOpen={newProjectModalIsOpen}
                    onRequestClose={() => setNewProjectModalIsOpen(false)}
                    className=" lg:ml-[25%] lg:mr-[5%] md:mx-auto sm:mx-auto lg:w-2/3 md:w-2/3 sm:w-5/6 mt-16 rounded-2xl outline-none"
                    style={{
                        overlay: {
                            backgroundColor: "rgba(60, 60, 60, 0.5)",
                            zIndex: 1000,
                        },

                        content: {
                            backgroundColor: "white",
                            border: "0",
                        },
                    }}
                >
                    <NewProjectModal isOpenNewProjectModal={setNewProjectModalIsOpen} />
                </Modal>

                {/* Project Modal */}

                <Modal
                    isOpen={projectModalIsOpen}
                    onRequestClose={() => setProjectModalIsOpen(false)}
                    className=" lg:ml-[25%] lg:mr-[5%] md:mx-auto sm:mx-auto lg:w-2/3 md:w-2/3 sm:w-5/6 mt-16 mb-16 rounded-2xl outline-none "
                    style={{
                        overlay: {
                            backgroundColor: "rgba(60, 60, 60, 0.5)",
                            zIndex: 1000,
                            overflowY: "scroll",
                        },

                        

                        content: {
                            backgroundColor: "white",
                            border: "0",
                        },
                    }}
                >
                    <ProjectModal isOpenProjectModal={setProjectModalIsOpen} isAdmin = {isAdmin} />
                </Modal>
            </div>

            {/* Heading */}

            <div className="mb-10 grid grid-cols-3 pr-5">
                {/* Heading Text */}

                <div className=" col-span-2 pb-5 border-b-2 border-[#9631FB] w-fit">
                    <h1 className="text-left text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">PROJECTS</h1>
                </div>

                {/* Create New Project Button */}

                { isAdmin && 
                
                
                    <div className="col-span-1 h-fit my-auto w-fit mx-auto">

                        <button
                            onClick={() => setNewProjectModalIsOpen(true)}
                            className=" px-3 py-2 border-2 border-[#9631FB] text-[#9631FB] rounded-full hover:bg-[#9631FB] hover:text-white duration-300"
                        >
                            CREATE NEW PROJECT

                        </button>  

                    </div>
                
                
                }


            </div>

            {/* Search Box */}

            <div className="mb-20">
                <div className="lg:w-1/3 md:w-1/2 sm:w-5/6 mx-auto grid grid-cols-4 bg-gray-50 py-2 px-3 rounded-full shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)]">
                    {/* Search Input */}

                    <div className="col-span-3">
                        <input
                            type="text"
                            placeholder="Search Projects"
                            className="px-3 bg-gray-50 w-full border-0  border-r-gray-300 border-r-2 focus:border-transparent focus:border-r-gray-300 focus:ring-0 placeholder:text-[#9631FB]"
                        />
                    </div>

                    {/* Search Button */}

                    <div className=" col-span-1">
                        <button className="  px-3 py-1">
                            <img src="https://img.icons8.com/ios-glyphs/30/9631FB/search--v1.png" alt="search-icon" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Project List */}

            <div className="w-full pr-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-flow-row gap-10">

                    {/* Project 1 */}

                    <button onClick={() => setProjectModalIsOpen(true)}>

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-4 text-left font-semibold overflow-x-hidden">PROJECT 1</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">100</span>

                                    <span className="block font-semibold">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">79</span>

                                    <span className="block font-semibold">REJECTED</span>
                                </div>
                            </div>
                        </div>

                    </button>

                    {/* Project 2 */}

                    <button onClick={() => setProjectModalIsOpen(true)}>

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 2</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">100</span>

                                    <span className="block font-semibold">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">79</span>

                                    <span className="block font-semibold">REJECTED</span>
                                </div>
                            </div>
                        </div>

                    </button>

                    {/* Project 3 */}

                    <button onClick={() => setProjectModalIsOpen(true)}>

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 3</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">
                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">100</span>

                                    <span className="block font-semibold">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">79</span>

                                    <span className="block font-semibold">REJECTED</span>
                                </div>
                            </div>
                        </div>

                    </button>

                    {/* Project 4 */}

                    <button onClick={() => setProjectModalIsOpen(true)}>

                        <div className="p-5 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white rounded-xl shadow-xl hover:scale-105 duration-200">
                            {/* Project Name */}

                            <span className="block text-2xl mb-2 text-left font-semibold overflow-x-hidden">PROJECT 4</span>

                            {/* Company Name */}

                            <span className="block text-xl pb-3 mb-5 text-left border-b-2 border-b-white">COMPANY NAME</span>

                            {/* Approved / Rejected */}

                            <div className="grid grid-cols-2 gap-3">

                                {/* Approved */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">100</span>

                                    <span className="block font-semibold">APPROVED</span>
                                </div>

                                {/* Rejected */}

                                <div className="block text-xl">
                                    <span className="block mb-2 text-2xl">79</span>

                                    <span className="block font-semibold">REJECTED</span>
                                </div>
                            </div>
                        </div>

                    </button>

                </div>
            </div>
        </div>
    );
};

export default Projects;
