import normal from "../assets/normal.png";

function AboutMe() {
    const japanDate = new Date().toLocaleString('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
    const today = new Date(japanDate);
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    let myAge = year - 2008;
    if (month < 9 || (month == 9 && day < 6)) myAge--;

    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p>about me</p>
                    <p>2008/09/06 ({myAge} y/o)</p>
                    <p>Japanese & Filipino</p>
                    <p className="opacity-50">i only speak japanese btw</p>
                    <p className="mt-2">React, Tailwind, Hono</p>
                    <p>JS/TS, Python, Swift</p>
                    <p className="mt-2">love Music, Minecraft, </p>
                    <p>Geometry Dash</p>
                </div>
                <img src={normal} alt="normal_aboutme" className="hidden md:inline object-contain pointer-events-none select-none touch-none" />
            </div>
        </>
    );
}
export default AboutMe;
