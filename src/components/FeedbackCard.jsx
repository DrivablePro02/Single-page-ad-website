import {quotes} from '../assets'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 mr-5 sm:mr-5 mr-0 my-5 feedback-card'> 
      <img className='w-[42px] h-[27] object-contain' src={quotes} alt="" />
      <p className='font-poppins text-white font-normal text-[18px] leading-[32.4px] max-w-[290] my-10'>{content}</p>
      <div className='flex flex-row'>
        <img className='w-[48px] h-[48px] rounded-full' src={img} alt="" />
        <div className='ml-4 flex flex-col'>
          <h2 className='text-[20px] text-white font-semibold leading-[32px] font-poppins'>{name}</h2>
          <h3 className='text-[16px] text-dimWhite font-normal leading-[24px] font-poppins'>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard