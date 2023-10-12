export default function NavBar() {
    return (
        <nav className=" bg-white w-56 md:w-11/12 mx-auto rounded-lg md:opacity-80">
            <div className="navbar">
                <div className="navbar-center">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Newsletter</a></li>
                            <li><a>Rooms</a></li>
                            <li><a>Services</a></li>
                            <li><a>Pricing</a></li>
                        </ul>
                    </div>
                    <a href="" className="hover:bg-white md:hidden btn-ghost normal-case text-xl"><img className="w-32 h-12 " src="images/logo/logo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden md:flex mx-auto">
                    <ul className="menu menu-horizontal gap-5">
                        <li><a className="hover:text-[#65AEF2] hover:bg-white font-normal text-2xl">Home</a></li>
                        <li><a className="hover:text-[#65AEF2] hover:bg-white font-normal text-2xl">About</a></li>
                        <li><a className="hover:text-[#65AEF2] hover:bg-white font-normal text-2xl">Newsletter</a></li>
                        <a href=""><img className="w-48 h-14 " src="images/logo/logo.png" alt="" /></a>
                        <li><a className="hover:text-[#65AEF2] hover:bg-white font-normal text-2xl">Rooms</a></li>
                        <li><a className="hover:text-[#65AEF2] hover:bg-white font-normal text-2xl">Services</a></li>
                        <li><a className="hover:text-[#65AEF2] hover:bg-white font-normal text-2xl">Pricing</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}