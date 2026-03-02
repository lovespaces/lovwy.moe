import AboutMe from "./components/aboutme";
import MyWorks from "./components/myworks";
import Name from "./components/name";
import Socials from "./components/socials";

function Page() {
    return (
        <>
            <div className="text-white font-ubuntu min-h-svh w-full bg-gray-900 grid grid-cols-4 p-4 pb-0">
                <Name />
                <AboutMe />
                <Socials />
                <MyWorks />
            </div>
        </>
    );
}

export default Page;
