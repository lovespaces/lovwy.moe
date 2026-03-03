import AboutMe from "./components/aboutme";
import MyWorks from "./components/myworks";
import Name from "./components/name";
import Socials from "./components/socials";
import maid from "./assets/maid.png";

function Page() {
    return (
        <>
            <div className="overscroll-none text-white font-ubuntu min-h-dvh w-full grid grid-cols-2 md:grid-cols-4 p-4 pb-0">
                <Name />
                <AboutMe />
                <Socials />
                <MyWorks />
                <img src={maid} alt="mobile_maid" className="md:hidden object-contain pointer-events-none select-none touch-none col-span-2 self-end" />
            </div>
        </>
    );
}

export default Page;
