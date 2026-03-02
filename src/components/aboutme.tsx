import normal from "../assets/normal.png";

function AboutMe() {
    // seinen gappi shori !!
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p>about me</p>
                    <p>2008/09/06</p>
                    <p className="mt-2">React, Tailwind, Hono</p>
                    <p>JS/TS, Python, Swift</p>
                    <p className="mt-2">love Music, Minecraft, </p>
                    <p>Geometry Dash</p>
                </div>
                <img src={normal} alt="normal_aboutme" className="object-contain pointer-events-none select-none" />
            </div>
        </>
    );
}
export default AboutMe;
