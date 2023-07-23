import { useContext, useState } from 'react';
import { AuthContext } from '../AuthenticationPart/AuthProvider';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch()
    }

    return (
        <nav className="sticky inset-0 z-10 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4  shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex gap-2 md:gap-3 items-center">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo or website name */}
                    <Link to='/' className="text-blue-500 font-semibold text-xl md:text-3xl">
                        College Guru
                    </Link>


                    {/* Mobile menu button (hamburger icon) */}
                    <button
                        className="lg:hidden  hover:text-blue-500 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Menu items */}
                    <div className={`hidden lg:flex space-x-6 lg:space-x-8 items-center`}>
                        <ActiveLink
                            to='/'
                            className=" font-medium hover:text-blue-500"
                        >
                            Home
                        </ActiveLink>
                        <ActiveLink
                            to='Colleges'
                            className=" font-medium hover:text-blue-500"
                        >
                            Colleges
                        </ActiveLink>
                        <ActiveLink
                            to='Admission'
                            className=" font-medium hover:text-blue-500"
                        >
                            Admission
                        </ActiveLink>
                        <ActiveLink
                            to='MyCollege'
                            className=" font-medium hover:text-blue-500"
                        >
                            My College
                        </ActiveLink>

                        <form>
                            <div className="relative">
                                <input type="search" id="default-search" name="search" placeholder="Search" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                <button
                                    type="submit"
                                    className="text-white absolute right-1 bottom-[3px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>


                    </div>
                </div>

                {user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li className="cursor-pointer text-[17px] my-3 font-medium hover:text-blue-500">Profile</li>
                        <li onClick={handleLogOut} className="cursor-pointer text-[17px]  font-medium hover:text-blue-500">Logout</li>
                    </ul>
                </div> : <Link to='/login' className="button button-primary me-8">Login</Link>}
            </div>

            {/* Mobile menu items */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="mt-4 flex flex-col space-y-2">
                    <ActiveLink
                        to='/'
                        className=" font-medium hover:text-blue-500"
                    >
                        Home
                    </ActiveLink>
                    <ActiveLink
                        to='Colleges'
                        className=" font-medium hover:text-blue-500"
                    >
                        Colleges
                    </ActiveLink>
                    <ActiveLink
                        to='Admission'
                        className=" font-medium hover:text-blue-500"
                    >
                        Admission
                    </ActiveLink>
                    <ActiveLink
                        to='MyCollege'
                        className=" font-medium hover:text-blue-500"
                    >
                        My College
                    </ActiveLink>

                    <form>
                        <div className="relative">
                            <input type="search" id="default-search" name="search" placeholder="Search" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            <button
                                type="submit"
                                className="text-white absolute right-1 bottom-[3px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
