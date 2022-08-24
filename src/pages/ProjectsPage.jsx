import SideBar from "../components/SideBar";
import Projects from "../components/Projects";

const ProjectsPage = () => {

    return (

        <div>

            <div className="lg:grid lg:grid-cols-5 gap-5">

                {/* Side Bar Component */}

                <div className=" col-span-1 z-50 relative">
                    <SideBar />
                </div>

                {/* Projects Component */}

                <div className=" col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-0 md:pt-20 sm:pt-20">
                    <Projects />
                </div>


            </div>

        </div>

    );


}

export default ProjectsPage;