import Logo from "../assets/img/masleap-logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
    const isAdmin = true;

    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);

        console.log(state);
    };

    return (
        <div>
            {/* Desktop Side Bar */}

            <div
                className={
                    "block lg:translate-x-0 bg-gradient-to-br from-[#9631FB] to-[#319AFB] text-white min-h-screen h-full z-50 relative" +
                    (state
                        ? "md:translate-x-0 sm:block sm:translate-x-0 lg:w-1/5 md:w-64 sm:w-64 lg:fixed md:fixed sm:fixed duration-300 h-full overflow-y-auto"
                        : "md:-translate-x-full sm:block sm:-translate-x-full lg:w-1/5 md:w-64 sm:w-64 lg:fixed md:fixed sm:fixed duration-300 h-full overflow-y-auto")
                }
            >
                <div className="w-5/6 mx-auto">
                    <div className="block pt-5 mb-20 w-full">
                        {/* Organization Logo */}

                        <div className="block w-fit float-left">
                            <img src={Logo} alt="" className="h-16 w-auto" />
                        </div>

                        {/* Sidebar Close Button */}

                        <div className="lg:hidden md:block sm:block  w-fit float-right">
                            <button onClick={() => toggle()}>
                                <img src="https://img.icons8.com/ios/50/ffffff/close-window.png" alt="sidebar-close-icon" className="float-right" />
                            </button>
                        </div>
                    </div>

                    {/* Profile Photo */}

                    <div className="block w-fit mx-auto mb-3">
                        <img
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                            className="h-28 w-28 rounded-full"
                        />
                    </div>

                    {/* User Name */}

                    <div className="pb-5 border-b-2 border-white">
                        <p className=" text-2xl text-center">ADMIN</p>
                    </div>

                    {/* Navigation Menu */}

                    <div className="mt-10">
                        {/* Menu */}

                        <div className="border-white">
                            <ul className="text-xl">
                                <li className="w-fit pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/">
                                        <img
                                            src="https://img.icons8.com/wired/40/ffffff/activity-feed.png"
                                            alt="activities-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        ACTIVITIES
                                    </NavLink>
                                </li>

                                <li className="w-fit pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/profile">
                                        <img
                                            src="https://img.icons8.com/ios/40/ffffff/user-male-circle.png"
                                            alt="profile-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        PROFILE
                                    </NavLink>
                                </li>

                                <li className="w-fit pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/projects">
                                        <img
                                            src="https://img.icons8.com/ios/40/ffffff/untested.png"
                                            alt="projects-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        PROJECTS
                                    </NavLink>
                                </li>

                                {isAdmin && (
                                    <div>
                                        <li className="w-fit pb-2 mb-5 hover:border-b-2 duration-100">
                                            <NavLink to="/clients">
                                                <img
                                                    src="https://img.icons8.com/ios/40/ffffff/client-management.png"
                                                    alt="clients-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                CLIENTS
                                            </NavLink>
                                        </li>

                                        <li className="w-fit pb-2 mb-5 hover:border-b-2 duration-100">
                                            <NavLink to="/team-members">
                                                <img
                                                    src="https://img.icons8.com/ios/40/ffffff/groups.png"
                                                    alt="team-member-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                TEAM MEMBERS
                                            </NavLink>
                                        </li>
                                    </div>
                                )}
                            </ul>
                        </div>

                        {/* Logout Button */}

                        <div className="mt-10 pt-5 border-t-2 border-white text-2xl">
                            <button className="pb-2 mb-5 hover:border-2 px-3 py-2 duration-100">LOGOUT</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Side Bar */}

            <div className="shadow-lg fixed lg:hidden bg-gradient-to-r from-[#9631FB] to-[#319AFB] top-0 left-0 right-0 z-40">
                <div className="w-full py-3 px-5">
                    {/* Menu Button */}

                    <div className="inline-block w-fit mr-5 float-right">
                        <button onClick={() => toggle()} className={state ? "rotate-90 duration-300" : " -rotate-90 duration-300"}>
                            <img src="https://img.icons8.com/ios-glyphs/64/ffffff/circled-menu.png" alt="menu-button" className="h-16 w-auto" />
                        </button>
                    </div>

                    {/* Company Logo */}

                    <div className="inline-block w-fit float-left">
                        <img src={Logo} alt="" className="h-16 w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
