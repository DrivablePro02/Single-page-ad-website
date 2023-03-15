import {useState} from 'react'
import { close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full justify-between py-6 flex items-center navbar'>
      <img className="w-[124px] h-[32px]" src={logo} alt="" />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' } text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1  justify-end items-center'>
        <img 
        src={toggle? close :menu} 
        className='w-[28px] h-[28px] object-contain '
        onClick={() => setToggle((closed) => !closed)}
        alt="" />
        <div className= {`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }  >
            <ul className='list-none flex-col  justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' } text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )}


export default Navbar