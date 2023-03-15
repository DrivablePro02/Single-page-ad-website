import {clients} from '../constants'
import styles from '../style'

const Clients = () =>
  (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} w-full flex-wrap`}>
          {clients.map((client) => (
            <div className={`flex-1 ${styles.flexStart} sm:min-w-[192px] min-w-[120px] `} key={client.id}>
              <img className='sm:w-[172px] w-[100px] mb-7 object-contain' src={client.logo} alt="" />
              
            </div>
          ))}
        </div>
    </section>
  )

export default Clients