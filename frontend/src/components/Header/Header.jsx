import {useEffect, useRef} from 'react'
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-ico.png'
import { NavLink, Link } from 'react-router-dom';
import {BiMenu} from "react-icons/bi";
const navLinks = [
    {
    path:'/home',
    display:'Home' 
    },
    {
    path:'/courses',
    display:'Courses'
    },
    {
    path:'/categories',
    display:'Categories'
    },
    {
    path:'/contact',
    display:'Contact'
    },
]

const Header = () => {

  const headerRef = useRef(null)
  const menuef = useRef(null) 

  const handleStickyHeader = () =>{
    window.addEventListener('scroll', () =>{
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = ()=> menuef.current.classList.toggle('show__menu')

    return (
      <header className="header flex items-center" ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* ======== AtlasDev Logo ========= */}
            <div>
              <img src={logo} alt="" width="150px" className='logo'/>
            </div>
            {/* ======== Menu ============= */}
            <div className="navigation" ref={menuef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {" "}
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*NavBar Right*/}
            <div className="flex items-center gap-4">
              <div className='hidden' >
                <Link to="/">
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img src={userImg} className="w-full rounded-full" alt="" />
                  </figure>
                </Link>
              </div>
              <Link to="/login">
                <button
                  className=" bg-primaryColor py-2 px-6 text-white font-[800] h-[44px] flex items-center
                        justify-center animate-fade animate-delay-300 rounded-[50px]  hover:bg-irisBlueColor transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  mr-10">
                  Login
                </button>
              </Link>

              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className='w-6 h-6 cursor-pointer'/>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header
