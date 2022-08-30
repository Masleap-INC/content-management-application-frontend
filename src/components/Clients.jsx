import NewProjectModal from "./NewProjectModal";
import Modal from "react-modal";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

Modal.setAppElement("#root");

const Clients = () => {

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
                    <h1 className="text-left text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB]">CLIENTS</h1>
                </div>

                {/* Create New Project Button */}

                { isAdmin && 
                
                
                    <div className="col-span-1 h-fit my-auto w-fit mx-auto">

                        <button
                            onClick={() => setNewProjectModalIsOpen(true)}
                            className=" px-3 py-2 border-2 border-[#9631FB] text-[#9631FB] rounded-full hover:bg-[#9631FB] hover:text-white duration-300"
                        >
                            CREATE NEW CLIENT

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
                            Placeholder="Search Clients"
                            className="px-3 bg-gray-50 w-full border-0  border-r-gray-300 border-r-2 focus:border-transparent focus:border-r-gray-300 focus:ring-0 placeholder:text-[#9631FB] "
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

            {/* Client List */}

            <div className="w-full pr-5">
                <div className="lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:space-y-0 md:space-y-0 sm:space-y-10">

                    {/* Client 1 */}

                    <div onClick={() => setProjectModalIsOpen(true)} className="w-full">

                        <div className=" p-3 rounded-xl shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] hover:scale-105 duration-200">
                            
                            {/* Client Photo */}

                            <div className="block w-fit mx-auto mb-3">
                                <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client-profile-img" className="h-32 w-32 rounded-full" />
                            </div>

                            {/* Client Details */}
                            
                            <div className="block w-full text-center pb-5 border-b-2 border-b-gray-100">

                                {/* Client Name */}

                                <div className="block">
                                    <h2 className=" text-xl font-semibold text-[#9631FB] max-w-[100%] mx-auto overflow-auto" >CLIENT NAME</h2>
                                </div>

                                {/* Client Company */}

                                <div className="block mt-2">
                                    <h2>COMPANY NAME</h2>
                                </div>

                            </div>

                            {/* Client Actions */}

                            <div className=" lg:inline-block md:inline-block sm:block sm:my-5 px-3 align-middle">
                                <button><img src="https://img.icons8.com/external-bartama-outline-32-bartama-graphic/40/D63838/external-bin-e-mail-bartama-outline-32-bartama-graphic.png" alt="delete-icon"/></button>
                            </div>


                        </div>

                    </div>


                    {/* Client 2 */}

                    <div onClick={() => setProjectModalIsOpen(true)} className="w-full">

                        <div className=" p-3 rounded-xl shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] hover:scale-105 duration-200">
                            
                            {/* Client Photo */}

                            <div className="block w-fit mx-auto mb-3">
                                <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client-profile-img" className="h-32 w-32 rounded-full" />
                            </div>

                            {/* Client Details */}
                            
                            <div className="block w-full text-center pb-5 border-b-2 border-b-gray-100">

                                {/* Client Name */}

                                <div className="block">
                                    <h2 className=" text-xl font-semibold text-[#9631FB] max-w-[100%] mx-auto overflow-auto" >CLIENT NAME</h2>
                                </div>

                                {/* Client Company */}

                                <div className="block mt-2">
                                    <h2>COMPANY NAME</h2>
                                </div>

                            </div>

                            {/* Client Actions */}

                            <div className=" lg:inline-block md:inline-block sm:block sm:my-5 px-3 align-middle">
                                <button><img src="https://img.icons8.com/external-bartama-outline-32-bartama-graphic/40/D63838/external-bin-e-mail-bartama-outline-32-bartama-graphic.png" alt="delete-icon"/></button>
                            </div>


                        </div>

                    </div>


                    {/* Client 3 */}

                    <div onClick={() => setProjectModalIsOpen(true)} className="w-full">

                        <div className=" p-3 rounded-xl shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] hover:scale-105 duration-200">
                            
                            {/* Client Photo */}

                            <div className="block w-fit mx-auto mb-3">
                                <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client-profile-img" className="h-32 w-32 rounded-full" />
                            </div>

                            {/* Client Details */}
                            
                            <div className="block w-full text-center pb-5 border-b-2 border-b-gray-100">

                                {/* Client Name */}

                                <div className="block">
                                    <h2 className=" text-xl font-semibold text-[#9631FB] max-w-[100%] mx-auto overflow-auto" >CLIENT NAME</h2>
                                </div>

                                {/* Client Company */}

                                <div className="block mt-2">
                                    <h2>COMPANY NAME</h2>
                                </div>

                            </div>

                            {/* Client Actions */}

                            <div className=" lg:inline-block md:inline-block sm:block sm:my-5 px-3 align-middle">
                                <button><img src="https://img.icons8.com/external-bartama-outline-32-bartama-graphic/40/D63838/external-bin-e-mail-bartama-outline-32-bartama-graphic.png" alt="delete-icon"/></button>
                            </div>


                        </div>

                    </div>


                    {/* Client 4 */}

                    <div onClick={() => setProjectModalIsOpen(true)} className="w-full">

                        <div className=" p-3 rounded-xl shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] hover:scale-105 duration-200">
                            
                            {/* Client Photo */}

                            <div className="block w-fit mx-auto mb-3">
                                <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client-profile-img" className="h-32 w-32 rounded-full" />
                            </div>

                            {/* Client Details */}
                            
                            <div className="block w-full text-center pb-5 border-b-2 border-b-gray-100">

                                {/* Client Name */}

                                <div className="block">
                                    <h2 className=" text-xl font-semibold text-[#9631FB] max-w-[100%] mx-auto overflow-auto" >CLIENT NAME</h2>
                                </div>

                                {/* Client Company */}

                                <div className="block mt-2">
                                    <h2>COMPANY NAME</h2>
                                </div>

                            </div>

                            {/* Client Actions */}

                            <div className=" lg:inline-block md:inline-block sm:block sm:my-5 px-3 align-middle">
                                <button><img src="https://img.icons8.com/external-bartama-outline-32-bartama-graphic/40/D63838/external-bin-e-mail-bartama-outline-32-bartama-graphic.png" alt="delete-icon"/></button>
                            </div>


                        </div>

                    </div>


                    {/* Client 5 */}

                    <div onClick={() => setProjectModalIsOpen(true)} className="w-full">

                        <div className=" p-3 rounded-xl shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] hover:scale-105 duration-200">
                            
                            {/* Client Photo */}

                            <div className="block w-fit mx-auto mb-3">
                                <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="client-profile-img" className="h-32 w-32 rounded-full" />
                            </div>

                            {/* Client Details */}
                            
                            <div className="block w-full text-center pb-5 border-b-2 border-b-gray-100">

                                {/* Client Name */}

                                <div className="block">
                                    <h2 className=" text-xl font-semibold text-[#9631FB] max-w-[100%] mx-auto overflow-auto" >CLIENT NAME</h2>
                                </div>

                                {/* Client Company */}

                                <div className="block mt-2">
                                    <h2>COMPANY NAME</h2>
                                </div>

                            </div>

                            {/* Client Actions */}

                            <div className=" lg:inline-block md:inline-block sm:block sm:my-5 px-3 align-middle">
                                <button><img src="https://img.icons8.com/external-bartama-outline-32-bartama-graphic/40/D63838/external-bin-e-mail-bartama-outline-32-bartama-graphic.png" alt="delete-icon"/></button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Clients;
