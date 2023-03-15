import styles from '../style';
import Button from './Button';

const CTA = () =>
  (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col box-shadow rounded-[20px] bg-black-gradient-2`}>
      <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2} text-[48px]`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[445px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )

export default CTA