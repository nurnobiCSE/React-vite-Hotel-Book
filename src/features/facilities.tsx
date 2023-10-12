export default function FacilitiesSection() {
    return (
        <div className="mx-auto items-center mt-20 flex flex-col md:flex-row justify-center px-14 py-12 bg-[#F3F3F3] gap-10">
            <div className="max-w-sm hover:cursor-pointer">
            <div className="relative">
                <img src="images/facility/1.png" alt="Card Image" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p className="font-bold text-4xl text-center">Rooms</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col gap-14">
            <div className="relative">
                <img src="images/facility/2.png" alt="Card Image" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p className="font-bold text-4xl text-center">Dining</p>
                </div>
            </div>
            <div className="relative">
                <img src="images/facility/3.png" alt="Card Image" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p className="font-bold text-4xl text-center">Conferences & Meetings</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col gap-14">
            <div className="relative">
                <img src="images/facility/4.png" alt="Card Image" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p className="font-bold text-4xl text-center">Service & Facilities</p>
                </div>
            </div>
            <div className="relative">
                <img src="images/facility/5.png" alt="Card Image" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p className="font-bold text-4xl text-center">Wedding Package</p>
                </div>
            </div>
            </div>
        </div>
    )
}