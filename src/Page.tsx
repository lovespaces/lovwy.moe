import AboutMe from "./components/aboutme";
import MyWorks from "./components/myworks";
import Name from "./components/name";
import Socials from "./components/socials";

function Page() {
    return (
        <>
            <div className="min-h-dvh fixed inset-0 -z-10 bg-linear-to-t from-gray-800 from-5% via-gray-900 via-10% to-black to-80%" />
            <div className="overscroll-none text-white font-ubuntu w-full grid grid-cols-1 md:grid-cols-4 p-4 pb-0">
                <Name />
                <AboutMe />
                <Socials />
                <MyWorks />
            </div>
        </>
    );
}

export default Page;
