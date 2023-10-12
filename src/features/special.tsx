export default function SpecialSection() {
    return (
        <div className="px-8 mt-20">
            <a href="" className="font-medium text-[#65AEF2] text-3xl">Special Offers</a>
            <ul className="mt-5 flex flex-row justify-between ">
                <li className="font-medium text-xl md:text-6xl text-black">Best offer of the month</li>
                <li className="font-bold text-[#65AEF2] text-lg md:text-3xl"><a href="">View all</a></li>
            </ul>
            <p className="mt-10 leading-9 font-normal text-[#1E1E1E] text-xl md:text-2xl">Experience Fantastic Benefits and Obtain Better Rates When You  Make a Direct Booking on Our Official Website</p>

            {/* card */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {/* card 1 */}
                <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow shadow-slate-400">
                    <img src="images/special/1.png" alt="" />
                    <p className="font-bold text-sm text-[#5E5E5E]">Room</p>
                    <ul className="flex justify-between">
                        <li>
                            <h2 className="font-bold text-2xl text-[#1E1E1E]">Honeymoon</h2>
                        </li>
                        <li>
                            <span className="font-bold text-base flex gap-1">
                            <svg width="15" height="15" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.24232 9.6C6.53148 9.55804 4.46068 7.37884 4.44234 4.8C4.48712 2.11334 6.68306 0.01884 9.24232 0C11.9556 0.1026 14.023 2.1794 14.0423 4.8C13.989 7.48878 11.8042 9.5818 9.24232 9.6ZM13.1232 10.5958C16.535 10.6356 18.2651 13.6284 18.2808 16.6211V24H14.9361L14.9361 17.5149C14.8547 17.0666 14.551 16.9146 14.2728 16.9585C14.0124 16.9997 13.7742 17.2125 13.7616 17.5149V24H4.46822V17.5149C4.39708 17.0882 4.12566 16.9242 3.8616 16.9407C3.57884 16.9585 3.30454 17.1834 3.29374 17.5149V24H0.000141525V16.6211C-0.0194585 13.4316 1.99816 10.6194 5.18288 10.5958H13.1232Z" fill="black" />
                            </svg>
                            2
                            </span>
                        </li>
                    </ul>
                    <p className="font-normal text-sm text-[#5E5E5E]">Indulge in a Memorable One-Time Romantic Dinner for Two</p>
                    <center className="font-bold text-4xl text-[#1E1E1E]">$699 <sub className="font-normal text-base text-[#1E1E1E]">/night</sub></center>
                </div>
                {/* card 2 */}
                <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow shadow-slate-400">
                    <img src="images/special/2.png" alt="" />
                    <p className="font-bold text-sm text-[#5E5E5E]">Hall</p>
                    <ul className="flex justify-between">
                        <li>
                            <h2 className="font-bold text-2xl text-[#1E1E1E]">Meetings</h2>
                        </li>
                        <li>
                            <span className="font-bold text-base flex gap-1">
                            <svg width="15" height="15" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.24232 9.6C6.53148 9.55804 4.46068 7.37884 4.44234 4.8C4.48712 2.11334 6.68306 0.01884 9.24232 0C11.9556 0.1026 14.023 2.1794 14.0423 4.8C13.989 7.48878 11.8042 9.5818 9.24232 9.6ZM13.1232 10.5958C16.535 10.6356 18.2651 13.6284 18.2808 16.6211V24H14.9361L14.9361 17.5149C14.8547 17.0666 14.551 16.9146 14.2728 16.9585C14.0124 16.9997 13.7742 17.2125 13.7616 17.5149V24H4.46822V17.5149C4.39708 17.0882 4.12566 16.9242 3.8616 16.9407C3.57884 16.9585 3.30454 17.1834 3.29374 17.5149V24H0.000141525V16.6211C-0.0194585 13.4316 1.99816 10.6194 5.18288 10.5958H13.1232Z" fill="black" />
                            </svg>
                            30
                            </span>
                        </li>
                    </ul>
                    <p className="font-normal text-sm text-[#5E5E5E]">Experience an Exclusively Private Environment to Boost Your Productivity</p>
                    <center className="font-bold text-4xl text-[#1E1E1E]">$999 <sub className="font-normal text-base text-[#1E1E1E]">/night</sub></center>
                </div>
                {/* card 3 */}
                <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow shadow-slate-400">
                    <img src="images/special/1.png" alt="" />
                    <p className="font-bold text-sm text-[#5E5E5E]">Dining</p>
                    <ul className="flex justify-between">
                        <li>
                            <h2 className="font-bold text-2xl text-[#1E1E1E]">Romantic Dining</h2>
                        </li>
                        <li>
                            <span className="font-bold text-base flex gap-1">
                            <svg width="15" height="15" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.24232 9.6C6.53148 9.55804 4.46068 7.37884 4.44234 4.8C4.48712 2.11334 6.68306 0.01884 9.24232 0C11.9556 0.1026 14.023 2.1794 14.0423 4.8C13.989 7.48878 11.8042 9.5818 9.24232 9.6ZM13.1232 10.5958C16.535 10.6356 18.2651 13.6284 18.2808 16.6211V24H14.9361L14.9361 17.5149C14.8547 17.0666 14.551 16.9146 14.2728 16.9585C14.0124 16.9997 13.7742 17.2125 13.7616 17.5149V24H4.46822V17.5149C4.39708 17.0882 4.12566 16.9242 3.8616 16.9407C3.57884 16.9585 3.30454 17.1834 3.29374 17.5149V24H0.000141525V16.6211C-0.0194585 13.4316 1.99816 10.6194 5.18288 10.5958H13.1232Z" fill="black" />
                            </svg>
                            2
                            </span>
                        </li>
                    </ul>
                    <p className="font-normal text-sm text-[#5E5E5E]">Indulge in a Memorable One-Time Romantic Dinner for Two</p>
                    <center className="font-bold text-4xl text-[#1E1E1E]">$499 <sub className="font-normal text-base text-[#1E1E1E]">/night</sub></center>
                </div>
            </div>
<br /><br />
        </div>
    )
}