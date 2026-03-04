import maid from "../assets/maid.png";

function Name() {
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
            <div className="flex flex-col justify-between h-[30lvh] md:h-full">
                <p className="text-base">lovespaces</p>
                <div className="flex-1 flex flex-col justify-center">
                    <p className="mt-4">2008/09/06 ({myAge} y/o)</p>
                    <p>Japanese & Filipino</p>
                    <p className="opacity-50">i only speak japanese btw</p>
                </div>
                <img src={maid} alt="maid_name" className="hidden md:inline object-contain pointer-events-none select-none touch-none" />
            </div>
        </>
    );
}

export default Name;
