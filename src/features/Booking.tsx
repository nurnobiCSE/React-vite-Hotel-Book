import MyDatePicker from "../components/datePicker";

export default function BookingSection() {
    return (
        <div className="bg-[#E9F3F6]  w-11/12 mx-auto py-16 mt-20 rounded-xl">
            <center className="font-medium text-3xl">Book a Room</center>
            <center className="font-medium text-base text-[#5E5E5E]">Discover the perfect space for you!</center>
            <br />
            <form action="">
                <ul className="flex flex-col md:flex-row justify-center gap-16 items-center md:items-start">
                    <li>
                        <label htmlFor="" className="font-semibold text-base">Date</label> <br />
                        <MyDatePicker />
                    </li>
                    <li>
                        <label htmlFor="" className="font-bold text-xs md:text-base">Person</label> <br />
                        <div className="form-control">
                            <div className="flex flex-row  md:gap-5 items-center justify-center bg-white px-0 md:px-5  rounded-xl">
                                <svg className="w-4 md:w-6 h-4 md:h-6" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.24232 9.6C6.53148 9.55804 4.46068 7.37884 4.44234 4.8C4.48712 2.11334 6.68306 0.01884 9.24232 0C11.9556 0.1026 14.023 2.1794 14.0423 4.8C13.989 7.48878 11.8042 9.5818 9.24232 9.6ZM13.1232 10.5958C16.535 10.6356 18.2651 13.6284 18.2808 16.6211V24H14.9361L14.9361 17.5149C14.8547 17.0666 14.551 16.9146 14.2728 16.9585C14.0124 16.9997 13.7742 17.2125 13.7616 17.5149V24H4.46822V17.5149C4.39708 17.0882 4.12566 16.9242 3.8616 16.9407C3.57884 16.9585 3.30454 17.1834 3.29374 17.5149V24H0.000141525V16.6211C-0.0194585 13.4316 1.99816 10.6194 5.18288 10.5958H13.1232Z" fill="black" />
                                </svg>
                                <span className="md:font-semibold text-xs md:text-base">Adults</span>
                                <select className="select rounded-none bg-white text-lg">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                <span><svg className="w-4 md:w-6 h-4 md:h-6" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2808 10C10.2808 9.80222 10.2222 9.60888 10.1123 9.44443C10.0024 9.27998 9.84624 9.15181 9.66351 9.07612C9.48078 9.00043 9.27972 8.98063 9.08574 9.01921C8.89176 9.0578 8.71357 9.15304 8.57372 9.29289C8.43387 9.43274 8.33863 9.61093 8.30004 9.80491C8.26146 9.99889 8.28126 10.2 8.35695 10.3827C8.43263 10.5654 8.56081 10.7216 8.72526 10.8315C8.8897 10.9413 9.08305 11 9.28083 11C9.54604 11 9.8004 10.8946 9.98793 10.7071C10.1755 10.5196 10.2808 10.2652 10.2808 10ZM14.7808 14.06C14.6673 13.9935 14.5417 13.95 14.4114 13.9321C14.281 13.9142 14.1484 13.9222 14.0211 13.9556C13.8938 13.9891 13.7744 14.0473 13.6697 14.127C13.565 14.2067 13.477 14.3062 13.4108 14.42C13.2973 14.6196 13.1329 14.7856 12.9345 14.901C12.736 15.0165 12.5104 15.0773 12.2808 15.0773C12.0512 15.0773 11.8257 15.0165 11.6272 14.901C11.4287 14.7856 11.2644 14.6196 11.1508 14.42C11.0847 14.3062 10.9967 14.2067 10.892 14.127C10.7873 14.0473 10.6678 13.9891 10.5406 13.9556C10.4133 13.9222 10.2807 13.9142 10.1503 13.9321C10.0199 13.95 9.89436 13.9935 9.78083 14.06C9.55209 14.1919 9.38482 14.4089 9.3155 14.6637C9.24619 14.9185 9.28045 15.1904 9.41083 15.42C9.70087 15.9248 10.1189 16.3442 10.6228 16.6358C11.1267 16.9274 11.6986 17.081 12.2808 17.081C12.863 17.081 13.4349 16.9274 13.9388 16.6358C14.4427 16.3442 14.8608 15.9248 15.1508 15.42C15.2812 15.1904 15.3155 14.9185 15.2461 14.6637C15.1768 14.4089 15.0096 14.1919 14.7808 14.06ZM15.2808 9C15.083 9 14.8897 9.05865 14.7253 9.16853C14.5608 9.27841 14.4326 9.43459 14.3569 9.61732C14.2813 9.80004 14.2615 10.0011 14.3 10.1951C14.3386 10.3891 14.4339 10.5673 14.5737 10.7071C14.7136 10.847 14.8918 10.9422 15.0857 10.9808C15.2797 11.0194 15.4808 10.9996 15.6635 10.9239C15.8462 10.8482 16.0024 10.72 16.1123 10.5556C16.2222 10.3911 16.2808 10.1978 16.2808 10C16.2808 9.73478 16.1755 9.48043 15.9879 9.29289C15.8004 9.10536 15.546 9 15.2808 9ZM12.2808 2C10.303 2 8.36962 2.58649 6.72512 3.6853C5.08063 4.78412 3.79891 6.3459 3.04203 8.17316C2.28516 10.0004 2.08712 12.0111 2.47297 13.9509C2.85883 15.8907 3.81123 17.6725 5.20976 19.0711C6.60828 20.4696 8.39011 21.422 10.3299 21.8079C12.2697 22.1937 14.2804 21.9957 16.1077 21.2388C17.9349 20.4819 19.4967 19.2002 20.5955 17.5557C21.6943 15.9112 22.2808 13.9778 22.2808 12C22.2808 10.6868 22.0222 9.38642 21.5196 8.17316C21.0171 6.95991 20.2805 5.85752 19.3519 4.92893C18.4233 4.00035 17.3209 3.26375 16.1077 2.7612C14.8944 2.25866 13.594 2 12.2808 2ZM12.2808 20C10.4181 20.008 8.61103 19.3658 7.17114 18.1842C5.73125 17.0025 4.74885 15.3554 4.39334 13.5269C4.03784 11.6984 4.33153 9.80322 5.22376 8.16811C6.11598 6.53299 7.55082 5.26047 9.28083 4.57C9.27054 4.71315 9.27054 4.85685 9.28083 5C9.28083 5.79565 9.5969 6.55871 10.1595 7.12132C10.7221 7.68393 11.4852 8 12.2808 8C12.546 8 12.8004 7.89464 12.9879 7.70711C13.1755 7.51957 13.2808 7.26522 13.2808 7C13.2808 6.73478 13.1755 6.48043 12.9879 6.29289C12.8004 6.10536 12.546 6 12.2808 6C12.0156 6 11.7613 5.89464 11.5737 5.70711C11.3862 5.51957 11.2808 5.26522 11.2808 5C11.2808 4.73478 11.3862 4.48043 11.5737 4.29289C11.7613 4.10536 12.0156 4 12.2808 4C14.4026 4 16.4374 4.84285 17.9377 6.34315C19.438 7.84344 20.2808 9.87827 20.2808 12C20.2808 14.1217 19.438 16.1566 17.9377 17.6569C16.4374 19.1571 14.4026 20 12.2808 20Z" fill="black" />
                                </svg></span>
                                <span className="md:font-semibold text-xs md:text-base">Children</span>
                                <select className="select rounded-none bg-white text-lg">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <br />
                        <button className="btn border-none bg-blue-500 text-white rounded-lg font-bold text-2xl px-6 hover:text-blue-900">BOOK NOW</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}