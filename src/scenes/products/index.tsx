import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion"
import Ipad from '@/assets/iPad 2022.png'
import IpadAir from '@/assets/iPad Air (2022).png'
import Iphone from '@/assets/iPhone 14.png'
import IMac from '@/assets/iMac.png'
import HText from '@/shared/HText';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Products = ({ setSelectedPage }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px")

  return (
    <section id="products" className="mx-auto w-5/6 pt-24 pb-32 md:h-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Products)}
      >
        <div className='text-center pb-16'>
        <HText>
          <span className='text-4xl'>Latest Products</span>
        </HText>
        </div>

        {isAboveSmallScreens &&
            <motion.div
              className="mt-10 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className='mt-10 flex items-center justify-between gap-11'>
                <div className='flex flex-col'>
                  <img src={Ipad} alt="icon-1" width={300} height={450} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>
                <div className='flex flex-col'>
                  <img src={Iphone} alt="icon-1" width={300} height={450} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>
                <div className='flex flex-col'>
                  <img src={IpadAir} alt="icon-1" width={300} height={450} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>
                <div className='flex flex-col'>
                  <img src={IMac} alt="icon-1" width={300} height={450} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>

              </div>
            </motion.div>
          }


        </motion.div>
        {!isAboveSmallScreens &&
          <div
            className='className="mt-10 md:mt-0"'
          >
            <div className='mt-10 flex flex-col gap-5'>
              <div className='flex flex-col justify-center items-center'>
              <img src={Ipad} alt="icon-1" width={300} height={450} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <img src={Iphone} alt="icon-1" width={300} height={450} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <img src={IpadAir} alt="icon-1" width={300} height={450} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <img src={IMac} alt="icon-1" width={300} height={450} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>

            </div>
          </div>
        }
    </section>
  )
}

export default Products