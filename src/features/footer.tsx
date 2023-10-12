export default function FooterSection() {
    return (
        <footer className="p-5 bg-[#1E1E1E]">
            <div className="flex justify-center md:justify-end cursor-pointer">
                <img className="bg-white rounded-full" src="images/logo/logo.png" width="250" alt="" />
            </div>

            <div className="flex flex-col justify-center md:flex-row items-center md:justify-between mt-8">
                <div className="md:ml-10">
                    <h2 className="font-medium text-2xl md:text-4xl text-[#fff]">Newsletter & Special Promo</h2>
                    <ul className="mt-10">
                        <li className="bg-none flex flex-row">
                            <input type="text" placeholder="Enter your email here" className="input input-ghost w-full max-w-xs rounded-md rounded-r-none border-none bg-white" />
                            <button className="btn border-none rounded-md rounded-l-none font-bold text-2xl text-white hover:bg-[#65AEF2] bg-blue-700">Subscribe</button>
                        </li>
                    </ul>
                </div>

                {/* right side */}
                <div className="flex flex-row justify-end gap-16">
                    <ul className="leading-10">
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">About us</a></li>
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">Contact</a></li>
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">Location</a></li>
                    </ul>
                    <ul className="leading-10">
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">FAQ</a></li>
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">Term of use</a></li>
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">Privacy policy</a></li>
                    </ul>
                    <ul className="leading-10">
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">Services & facilities</a></li>
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">Careers</a></li>
                        <li><a className="font-medium text-sm md:text-lg text-[#FFF]" href="">How to book</a></li>
                    </ul>
                </div>
            </div>
            <center className="font-normal text-base text-white mt-10">© Copyright Booking Hotels. All right reserved.</center>
        </footer>
    )
}