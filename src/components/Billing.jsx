import { apple, bill, google } from '../assets'
import styles, {layout} from   '../style';


const Billing = () =>
  (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img className='w-[100%] h-[100%] z=[5] relative' src={bill} alt="" />
        <div className='absolute h-[50%] w-[50%] z-[3] top-0 -left-1/2 rounded-full white__gradient '></div>
        <div className='absolute h-[50%] w-[50%] z-[0] bottom-0 -left-1/2 rounded-full pink__gradient '></div>
      </div>
      <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
          <p className={`${styles.paragraph} max-w-[475px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img  className="w-[128px] h-[42px] object-contain pointer-cursor mr-5" src={apple} alt="" />  
        <img  className="w-[128px] h-[42px] object-contain pointer-cursor" src={google} alt="" /> 
      </div>
      </div>     
           
    </section>
  )

export default Billing