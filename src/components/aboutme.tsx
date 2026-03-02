import normal from "../assets/normal.png";

function AboutMe() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <p>about me</p>
                <img src={normal} alt="normal_aboutme" className="object-contain" />
            </div>
        </>
    );
}
export default AboutMe;
