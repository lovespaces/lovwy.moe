import surprising from "../assets/surprising.png";

function MyWorks() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <p>my works</p>
                <p className="opacity-50 select-none">nothing :D</p>
                <img src={surprising} alt="myworks_surprising" className="object-contain pointer-events-none select-none" />
            </div>
        </>
    );
}

export default MyWorks;
