import maid from "../assets/maid.png";

function Name() {
    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <p>lovespaces</p>
                <img src={maid} alt="maid_name" className="hidden md:inline object-contain pointer-events-none select-none touch-none" />
            </div>
        </>
    );
}

export default Name;
