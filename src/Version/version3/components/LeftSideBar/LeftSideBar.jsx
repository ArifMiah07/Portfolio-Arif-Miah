
import profileImg from '../../../../../public/assets/profile-removebg-preview.png'
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';


const LeftSideBar = () => {
    return (
    <div className=" bg-[#60A15680] lg:p-5 ">
                <div className="bg-red-500 w-[40px] md:w-[120px] lg:w-full border border-green-500 ">
                    <img className="" src={profileImg} alt="" />
                </div>
                <div className="flex items-center justify-evenly mt-2">
                    <div className="w-4 h-4 bg-red-100 rounded-full ">
    
                    </div>
                    <div className="w-4 h-4 bg-red-100 rounded-full ">
    
                    </div>
                    <div className="w-4 h-4 bg-red-100 rounded-full ">
    
                    </div>
                    <div className="w-4 h-4 bg-red-100 rounded-full ">
    
                    </div>
                </div>
                {/* divider */}
                <div className="w-full h-1 bg-red-700">
    
                </div>
                <div>
                    {/* nav */}
                    <div className='bg-red-300 p-5'> 
                        <ul>
                            <li>
                                <Link to={'/v3/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/v3/about'}>About</Link>
                            </li>
                            <li>
                                <Link to={'/v3/skills'}>Skills</Link>
                            </li>
                            <li>
                                <Link to={'/v3/projects'}>Projects</Link>
                            </li>
                            <li>
                                <Link to={'/v3/blogs'}>Blogs</Link>
                            </li>
                            <li>
                                <Link to={'/v3/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {/* link */}
                    <div className='bg-red-200 p-5'>
                        <FaGithub></FaGithub>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
            </div>
    );
};

export default LeftSideBar;