import surprising from "../assets/surprising.png";

function MyWorks() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <p>my works</p>
                <img src={surprising} alt="myworks_surprising" className="object-contain" />
            </div>
        </>
    );
}

export default MyWorks;
