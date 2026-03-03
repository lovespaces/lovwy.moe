import normal from "../assets/normal.png";

function Skills() {
    return (
        <>
            <div className="flex flex-col justify-between h-[30lvh] md:h-full">
                <p>skills</p>
                <div className="flex-1 flex flex-col justify-center">
                    <p>React, Tailwind, Hono</p>
                    <p>JS/TS, Python, Swift</p>
                    <p className="mt-2">実用英語検定2級</p>
                    <p>FE 合格</p>
                </div>
                <img src={normal} alt="normal_aboutme" className="hidden md:inline object-contain pointer-events-none select-none touch-none" />
            </div>
        </>
    );
}
export default Skills;
