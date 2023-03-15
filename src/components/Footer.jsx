import styles from '../style';
import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constants'

const Footer = () =>
  (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full` }>
        <div className='flex-1 flex flex-col mr-10 justify-start'>
          <img className='w-[266px] h-[72px]' src={logo} alt="" />
          <p className={`${styles.paragraph} max-w-[312px] mt-5 text-[18px] mb-10f`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-10 mt-0'>
          {footerLinks.map ((footerLink) =>(
            <div key={footerLink.id} className='flex flex-col sm:my-0 my-5  min-w-[150px]'>
                <h4 className='font-poppins text-[18px] leading-[27px] font-medium text-white'>{footerLink.title}</h4>
                <ul>
                  {footerLink.links.map((link, index) =>
                    <li key={link.name} className={`font-poppins font-normal text-[16px] 
                    cursor-pointer leading-[24px] 
                    text-dimWhite hover:text-secondary
                    ${index===footerLink.links.length - 1 ? 'my-0' : 'my-3'}
                    `}>
                      {link.name}
                    </li>
                  )}
                </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row w-full justify-between items-center md:flex-row flex-col pt-7 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins text-[18px] leading-[27px] font-normal text-center text-dimWhite'>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((media, index) =>(
          <img 
          className={`h-[21px] w-[21px] object-contain ${index === socialMedia.length ? 'mx-0' : 'mx-3'} cursor-pointer `}
          key={media.id}
          src={media.icon} 
          alt="" />
        ))}
      </div>
    </div>
    </section>
  )

export default Footer