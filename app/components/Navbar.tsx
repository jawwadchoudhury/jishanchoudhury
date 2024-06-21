'use client'
import Link from 'next/link';
import Image from 'next/image';
import './css/Navbar.css'
import { Poppins, Prompt } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const prompt = Prompt({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Navbar() {

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  return (
    <div>
      <nav className="bg-[#3b3b3b] fixed w-[100vw] z-20 top-0 left-0 h-[15vh]">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <Link className='logo' href="/">
          <div className='flex'>
            <div className='w-[20%]'>
              <Image src={'/images/logos/wwtbg.png'} alt="logo" width={100} height={100}/>
            </div>
            <h3 className='title translate-y-[25%]'><p className={poppins.className}>Jishan Choudhury</p></h3>
            </div>
          </Link>
          <input type="checkbox" id="check"/>

          <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
            <li onClick={() => scrolltoHash('about')}><h1 className='link'><p className={poppins.className}>About</p></h1></li>
            <li onClick={() => scrolltoHash('services')}><h1 className='link'><p className={poppins.className}>Services</p></h1></li>
            <li onClick={() => scrolltoHash('faq')}><h1 className='link'><p className={poppins.className}>FAQ</p></h1></li>
            <li onClick={() => scrolltoHash('about')}><h1 className='link'><p className={poppins.className}>Free Resources</p></h1></li>
            <li onClick={() => scrolltoHash('contact')}><h1 className='link'><p className={poppins.className}>Contact</p></h1></li>

            <label htmlFor="check" className="close-menu"><FontAwesomeIcon icon={faXmark} /></label>
          </span>

          <label htmlFor="check" className="open-menu"><FontAwesomeIcon icon={faBars} /></label>
        </ul>
      </nav>
    </div>


  
  )
}
