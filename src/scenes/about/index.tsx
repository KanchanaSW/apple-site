import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion"
import AboutGraphic from '@/assets/iMac 2021 - Purple.png'
import HText from '@/shared/HText';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage }: Props) => {

  return (
    <section id="about" className="mx-auto w-5/6 pt-24 pb-32 md:h-full">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <div className="z-10 mt-10 justify-between gap-8 md:flex">         

          <motion.div
            className="mt-16 basis-2/5 md:mt-0 flex flex-col justify-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='relative'>
              <div className='bg-gray-200 p-14 rounded-xl'>
                <img
                  className="w-full"
                  alt="contact-us-page-graphic"
                  src={AboutGraphic}
                />
              </div>
            </div>

          </motion.div>

          <motion.div
            className="mt-10 basis-3/5 md:mt-0 bg-gray-950 p-24 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <HText>
              <span className='text-4xl text-white'>About us</span>
            </HText>
            <p className='mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam optio hic necessitatibus atque alias sed voluptates quasi, tempora repellat omnis enim veritatis explicabo ea illo adipisci libero possimus voluptatibus.</p>
            <p className='mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam optio hic necessitatibus atque alias sed voluptates quasi, tempora repellat omnis enim veritatis explicabo ea illo adipisci libero possimus voluptatibus.</p>
            <p className='mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nam optio hic necessitatibus atque alias sed voluptates quasi, tempora repellat omnis enim veritatis explicabo ea illo adipisci libero possimus voluptatibus.</p>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About