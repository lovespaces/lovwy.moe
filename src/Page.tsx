import AboutMe from "./components/aboutme";
import MyWorks from "./components/myworks";
import Name from "./components/name";
import Socials from "./components/socials";

function Page() {
    return (
        <>
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
