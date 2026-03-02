import sleeping from "../assets/sleeping.png";

function Socials() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p>socials</p>
                    <p><a href="https://x.com/lovedspaces" target="_blank" className="underline font-bold">X</a>, <a href="https://x.com/wxxwxxwxxwx" className="underline font-bold">X (2)</a></p>
                    <p><a href="https://github.com/lovespaces" target="_blank" className="underline font-bold">GitHub</a></p>
                    <p><a href="https://last.fm/user/lovespaces" target="_blank" className="underline font-bold">last.fm</a></p>
                </div>
                <img src={sleeping} alt="socials_sleeping" className="object-contain pointer-events-none select-none" />
            </div>
        </>
    );
}

export default Socials;
