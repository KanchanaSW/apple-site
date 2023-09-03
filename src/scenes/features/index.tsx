import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion"
import HText from '@/shared/HText';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Bars3Icon, ShoppingCartIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Features = ({ setSelectedPage }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px")

  return (
    <section id="features" className="gap-16 md:h-full md:pb-0">
      <div className='md:h-5/6 mt-36'>
                {/* main header  and images*/}
                <motion.div
                    className='md:flex mx-auto w-5/6 items-center justify-center '
                    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                >
                    {/* main header */}
                    <div className='z-10'>
                        {/* headings */}
                        <motion.div
                            className=' text-center md:mx-32'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <HText>
                                <span className="text-4xl">Why we are different</span>
                            </HText>
                        </motion.div>

                    </div>

                </motion.div>

                {/* products images */}

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
                            <div className='flex flex-col justify-center items-center bg-gray-300 py-24 px-10 '>
                                <ShoppingCartIcon className="h-12 w-12 text-black" />
                                <p className='text-center'>Faster delivery for home.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-gray-300 py-24 px-10'>
                               <Bars3Icon className="h-12 w-12 text-black" />
                                <p className='text-center'>Faster delivery for home.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-gray-300 py-24 px-10'>
                               <ArrowDownTrayIcon className="h-12 w-12 text-black" />
                                <p className='text-center'>Faster delivery for home.</p>
                            </div>

                        </div>
                    </motion.div>
                }

                {!isAboveSmallScreens &&
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
                        <div className='mt-10 flex flex-col gap-5'>
                            <div className='flex flex-col justify-center items-center bg-gray-300 py-24 px-10'>
                                <ShoppingCartIcon className="h-12 w-12 text-black" />
                                <p className='text-center'>Faster delivery for home.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-gray-300 py-24 px-10'>
                               <Bars3Icon className="h-12 w-12 text-black" />
                                <p className='text-center'>Faster delivery for home.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-gray-300 py-24 px-10'>
                               <ArrowDownTrayIcon className="h-12 w-12 text-black" />
                                <p className='text-center'>Faster delivery for home.</p>
                            </div>

                        </div>
                    </motion.div>
                }
            </div>
    </section>
  )
}

export default Features