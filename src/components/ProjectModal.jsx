import { useState } from "react";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ProjectModal = ({ isOpenProjectModal, isAdmin }) => {

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
    PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            },
        },
    };


    const [editProjectName, setEditProjectName] = useState(false);

    const [editClient, setEditClient] = useState(false);

    const [editProjectDescription, setEditProjectDescription] = useState(false);

    const [editComment, setEditComment] = useState(false);

    return (
        <div className="lg:p-10 md:p-10 sm:p-5 mb-16 h-full">
            {/* Close Button */}

            <div className="block -fit float-right pl-5">
                <button onClick={() => isOpenProjectModal(false)} className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold sm:text-3xl px-2 py-1 border-2 ">
                    X
                </button>
            </div>

            {/* Project Name */}

            <div className="block mb-3 w-5/6">
                {/* Project Name */}

                <div className="inline-block w-fit">
                    {!editProjectName && (
                        <h2
                            id="project-name"
                            className=" pr-3 py-2 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold"
                        >
                            PROJECT NAME
                        </h2>
                    )}

                    {/* Edit Project Name */}

                    <div>
                        {isAdmin && editProjectName && (
                            <div>
                                {/* input */}

                                <input
                                    type="text"
                                    className=" flex px-3 py-2 text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-semibold border-[#319AFB] caret-black w-full"
                                    defaultValue={"PROJECT NAME"}
                                />

                                {/* Action Buttons */}

                                <div className="block mt-3">
                                    {/* Cancel Button */}

                                    <button
                                        onClick={() => {
                                            setEditProjectName(!editProjectName);
                                        }}
                                        className=" hover:scale-105 duration-200"
                                    >
                                        <img
                                            src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/30/e61537/external-cancel-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                                            alt="save-icon"
                                        />
                                    </button>

                                    {/* Save Button */}

                                    <button className="ml-5 hover:scale-105 duration-200">
                                        <img src="https://img.icons8.com/ios/30/1ca356/save--v1.png" alt="save-icon" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {isAdmin && !editProjectName && (
                    <div className="inline-block pl-2">
                        {/* edit button */}

                        <button
                            onClick={() => {
                                setEditProjectName(!editProjectName);
                            }}
                            className="hover:scale-105 duration-200"
                        >
                            <img
                                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/30/9631FB/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
                                alt="edit-icon"
                            />
                        </button>
                    </div>
                )}
            </div>

            {/* Client */}

            <div className="block mb-5 w-5/6">
                {/* Client Name */}

                <div className="inline-block w-fit">
                    
                    <h2 id="project-name" className=" inline-block pr-3 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold">
                        CLIENT:
                    </h2>

                    {!editClient && (
                        <h2 className=" inline-block py-2 text-xl">Any IT Solution</h2>
                    )}

                    {/* Edit Client */}

                    <div>
                        {isAdmin && editClient && (
                            <div className="">
                                {/* input */}

                                <Select type="text" MenuProps={MenuProps} menuPlacement="auto" classNamePrefix="react-select" className=" single-select h-10 block px-3 py-2 text-xl border-[#319AFB] w-[100%]">
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                    <MenuItem value="Any IT Solution">Any IT Solution</MenuItem>
                                </Select>

                                {/* Action Buttons */}

                                <div className="block mt-3">
                                    {/* Cancel Button */}

                                    <button
                                        onClick={() => {
                                            setEditClient(!editClient);
                                        }}
                                        className=" hover:scale-105 duration-200"
                                    >
                                        <img
                                            src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/30/e61537/external-cancel-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                                            alt="save-icon"
                                        />
                                    </button>

                                    {/* Save Button */}

                                    <button className="ml-5 hover:scale-105 duration-200">
                                        <img src="https://img.icons8.com/ios/30/1ca356/save--v1.png" alt="save-icon" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {isAdmin && !editClient && (
                    <div className="inline-block pl-2">
                        {/* edit button */}

                        <button
                            onClick={() => {
                                setEditClient(!editClient);
                            }}
                            className="hover:scale-105 duration-200"
                        >
                            <img
                                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/30/9631FB/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
                                alt="edit-icon"
                            />
                        </button>
                    </div>
                )}
            </div>

            {/* Project Description */}

            <div className="block mb-5 w-5/6">
                <div className="inline-block w-fit">
                    <div>
                        {/* Heading  */}

                        <h2
                            id="project-name"
                            className=" pr-3 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold"
                        >
                            DESCRIPTION
                        </h2>
                    </div>
                </div>

                {isAdmin && !editProjectDescription && (
                    <div className="inline-block pl-2">
                        {/* edit button */}

                        <button
                            onClick={() => {
                                setEditProjectDescription(!editProjectDescription);
                            }}
                            className="hover:scale-105 duration-200"
                        >
                            <img
                                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/30/9631FB/external-edit-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
                                alt="edit-icon"
                            />
                        </button>
                    </div>
                    
                )}

                
                {/* Description */}

                { isAdmin && !editProjectDescription && (

                    <div className="w-full block">

                        <p className="px-3 py-2 bg-white shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] rounded-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>

                )}



                {/* Edit Project Description */}

                <div>
                    {isAdmin && editProjectDescription && (
                        <div className=" ml-3 w-full">
                            {/* input */}

                            <textarea type="text" rows={"5"} className="form-textarea block px-3 py-2 w-full border-[#319AFB]" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}></textarea>

                            {/* Action Buttons */}

                            <div className="block mt-3">
                                {/* Cancel Button */}

                                <button
                                    onClick={() => {
                                        setEditProjectDescription(!editProjectDescription);
                                    }}
                                    className=" hover:scale-105 duration-200"
                                >
                                    <img
                                        src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/30/e61537/external-cancel-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
                                        alt="save-icon"
                                    />
                                </button>

                                {/* Save Button */}

                                <button className="ml-5 hover:scale-105 duration-200">
                                    <img src="https://img.icons8.com/ios/30/1ca356/save--v1.png" alt="save-icon" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Attatchments */}

            <div className="w-5/6 mb-5">

                <div>
                    {/* Heading  */}

                    <h2
                        id="project-name"
                        className=" pr-3 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold"
                    >
                        ATTATCHMENTS
                    </h2>

                    {/* Files */}

                    <div className="py-10 pl-10 text-xl border-gray-100 border-2">No File Attatched</div>
                </div>

            </div>


            {/* Comments Area */}

            <div className="w-5/6 ">

                <div>
                    {/* Heading  */}

                    <h2
                        id="project-name"
                        className=" pr-3 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#9631FB] to-[#319AFB] font-bold"
                    >
                        COMMENTS
                    </h2>

                    {/* Write Comment */}

                    <div className="text-xl mb-10">

                        <div className=" grid grid-cols-6 p-2 shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] rounded-full w-full">
                            
                            {/* Write Comment Input Box */}

                            <div className=" col-span-5 w-full">
                                <input type="text" name="" id="" placeholder="Write Your Comment Here..."  className=" px-3 py-2 border-0 w-full focus:border-transparent focus:ring-0 placeholder:text-gray-400"/>
                            </div>

                            {/* Attatch button */}

                            <div className=" col-span-1">
                                
                                <button className="hover:scale-105 duration-200 w-full">
                                    <img src="https://img.icons8.com/ios-glyphs/35/9631FB/attach.png" alt="attatch-button-icon" className="w-fit mx-auto"/>
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* Comments */}

                    <div>

                        {/* Comment 1 */}

                        <div className="w-full mb-5">
                            {/* Heading */}

                            <div className="mb-2 overflow-x-clip">
                                {/* Profile Image */}

                                <span className="mr-2 inline-block align-middle ">
                                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="profile-img-icon" className="w-12 h-12 rounded-full"/>
                                </span>

                                {/* Name & Date */}

                                <span className=" inline-block align-middle mr-5 max-w-[50%]">

                                    {/* Name */}

                                    <h2 className="text-[#9631FB] text-xl" >Name</h2>

                                    {/* Date & Time */}

                                    <span className="block my-1 align-middle text-gray-400 text-sm w-fit">
                                        <p>August 5 at 2:00pm</p>
                                    </span>

                                </span>

                                
                            </div>

                            {/* Comment */}

                            <div className="p-2 shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] rounded-full w-full ">

                                { editComment ?( 

                                    <div className=" grid grid-cols-6 rounded-full w-full">
                            
                                            {/* Write Comment Input Box */}

                                            <div className=" col-span-5 w-full">
                                                <input type="text" name="" id="" defaultValue={"Hello there, The project has been initiated !"}  className=" bg-gray-50 rounded-full px-3 py-2 border-0 w-full focus:border-transparent focus:ring-0"/>
                                            </div>

                                            {/* Attatch button */}

                                            <div className=" col-span-1">
                                
                                                <button className="hover:scale-105 duration-200 w-full">
                                                    <img src="https://img.icons8.com/ios-glyphs/35/9631FB/attach.png" alt="attatch-button-icon" className="w-fit mx-auto"/>
                                                </button>

                                            </div>
                                        </div>

                                    )

                                      

                                    : (
                                    
                                    <p className="px-3 py-2">Hello there, The project has been initiated !</p>
                                    
                                    )
                                                         
                            
                                }

                                
                            </div>

                            {/* Actions */}

                            <div className="px-5">
                                
                                {/* Delete Button */}

                                <div className=" inline-block mr-3 mt-3">
                                    <button className="text-[#319AFB] hover:underline">Delete</button>
                                </div>

                                { editComment ? (

                                        <div className=" inline-block mt-3">

                                            {/* Save Button */}

                                            <div className=" inline-block mr-3">
                                                <button className="text-[#319AFB] hover:underline">Save</button>
                                            </div>
                                        

                                            {/* Cancel Button */}

                                            <div className=" inline-block mr-3">
                                                <button onClick={() => {setEditComment(!editComment)}} className="text-[#319AFB] hover:underline">Cancel</button>
                                            </div>

                                        </div>

                                    )
                            
                                    : (

                                        <div className="inline-block mt-3">

                                            {/* Edit Button */}

                                            <div className=" inline-block mr-3">
                                                <button onClick={() => {setEditComment(!editComment)}} className="text-[#319AFB] hover:underline">Edit</button>
                                            </div>

                                        </div>

                                    )
                                
                                }


                                <div className="inline-block mt-3">

                                    {/* Accept Button */}

                                    <div className=" inline-block mr-3">
                                        <button className="text-[#1DB95B] text-sm rounded-full border-2 border-[#1DB95B] hover:text-white hover:bg-[#1DB95B] px-3 py-1 duration-300">ACCEPT</button>
                                    </div>

                                    {/* Reject Button */}

                                    <div className=" inline-block mr-3">
                                        <button className="text-[#D63838] text-sm rounded-full border-2 border-[#D63838] hover:text-white hover:bg-[#D63838] px-3 py-1 duration-300">REJECT</button>
                                    </div>

                                </div>

                            </div>
                        </div>



                        {/* Comment 2 */}

                        <div className="w-full mb-5">
                            {/* Heading */}

                            <div className="mb-2 overflow-x-clip">
                                {/* Profile Image */}

                                <span className="mr-2 inline-block align-middle ">
                                    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="profile-img-icon" className="w-12 h-12 rounded-full"/>
                                </span>

                                {/* Name & Date */}

                                <span className=" inline-block align-middle mr-5 max-w-[50%]">

                                    {/* Name */}

                                    <h2 className="text-[#9631FB] text-xl" >Name</h2>

                                    {/* Date & Time */}

                                    <span className="block my-1 align-middle text-gray-400 text-sm w-fit">
                                        <p>August 5 at 2:00pm</p>
                                    </span>
                                    
                                </span>

                            </div>

                            {/* Comment */}

                            <div className="p-2 shadow-[0_1px_20px_1px_rgba(0,0,0,0.1)] rounded-full w-full ">

                                { editComment ?( 

                                    <div className=" grid grid-cols-6 rounded-full w-full">
                            
                                            {/* Write Comment Input Box */}

                                            <div className=" col-span-5 w-full">
                                                <input type="text" name="" id="" defaultValue={"Hello there, The project has been initiated !"}  className=" bg-gray-50 rounded-full px-3 py-2 border-0 w-full focus:border-transparent focus:ring-0"/>
                                            </div>

                                            {/* Attatch button */}

                                            <div className=" col-span-1">
                                
                                                <button className="hover:scale-105 duration-200 w-full">
                                                    <img src="https://img.icons8.com/ios-glyphs/35/9631FB/attach.png" alt="attatch-button-icon" className="w-fit mx-auto"/>
                                                </button>

                                            </div>
                                        </div>

                                    )

                                      

                                    : (
                                    
                                    <p className="px-3 py-2">Hello there, The project has been initiated !</p>
                                    
                                    )
                                                         
                            
                                }

                                
                            </div>

                            {/* Actions */}

                            <div className="px-5">
                                
                                {/* Delete Button */}

                                <div className=" inline-block mr-3 mt-3">
                                    <button className="text-[#319AFB] hover:underline">Delete</button>
                                </div>

                                { editComment ? (

                                        <div className=" inline-block mt-3">

                                            {/* Save Button */}

                                            <div className=" inline-block mr-3">
                                                <button className="text-[#319AFB] hover:underline">Save</button>
                                            </div>
                                        

                                            {/* Cancel Button */}

                                            <div className=" inline-block mr-3">
                                                <button onClick={() => {setEditComment(!editComment)}} className="text-[#319AFB] hover:underline">Cancel</button>
                                            </div>

                                        </div>

                                    )
                            
                                    : (

                                        <div className="inline-block mt-3">

                                            {/* Edit Button */}

                                            <div className=" inline-block mr-3">
                                                <button onClick={() => {setEditComment(!editComment)}} className="text-[#319AFB] hover:underline">Edit</button>
                                            </div>

                                        </div>

                                    )
                                
                                }


                                <div className="inline-block mt-3">

                                    {/* Accept Button */}

                                    <div className=" inline-block mr-3">
                                        <button className="text-[#1DB95B] text-sm rounded-full border-2 border-[#1DB95B] hover:text-white hover:bg-[#1DB95B] px-3 py-1 duration-300">ACCEPT</button>
                                    </div>

                                    {/* Reject Button */}

                                    <div className=" inline-block mr-3">
                                        <button className="text-[#D63838] text-sm rounded-full border-2 border-[#D63838] hover:text-white hover:bg-[#D63838] px-3 py-1 duration-300">REJECT</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
