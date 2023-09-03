import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion"
import Image from '@/assets/apple-4.jpg'
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
        <div className='text-center pb-5'>
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
              <div className='mt-10 flex items-center justify-evenly gap-5'>
                <div className='flex flex-col'>
                  <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>
                <div className='flex flex-col'>
                  <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>
                <div className='flex flex-col'>
                  <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
                  <p className='text-center py-3'>ipad</p>
                  <span className='font-bold text-center text-xl'>$999</span>
                </div>
                <div className='flex flex-col'>
                  <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
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
                <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
                <p className='text-center py-2'>ipad</p>
                <span className='font-bold text-center text-xl'>$999</span>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img src={Image} alt="icon-1" width={200} height={350} className='rounded-lg' />
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