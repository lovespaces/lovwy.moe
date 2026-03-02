import sleeping from "../assets/sleeping.png";

function Socials() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <p>socials</p>
                <img src={sleeping} alt="socials_sleeping" className="object-contain" />
            </div>
        </>
    );
}

export default Socials;
