import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import Ipad from '@/assets/apple-1.jpg'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveSmallScreens = useMediaQuery("(min-width:768px")

    return (
        <section
            id='home'
            className='gap-16 md:h-full md:pb-0'
        >
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
                            className=' text-center md:mx-52'
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
                                <span className="text-6xl">The best way to buy apple products</span>
                            </HText>
                        </motion.div>

                        {/* actions */}
                        <motion.div
                            className='mt-8 flex justify-center gap-8'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <ActionButton setSelectedPage={setSelectedPage}>Explore More</ActionButton>

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
                            <div className='flex flex-col'>
                                <img src={Ipad} alt="icon-1" width={200} height={350} />
                                <p className='text-center'>ipad</p>
                                <span className='font-bold text-center text-xl'>$999</span>
                            </div>
                            <div className='flex flex-col mt-16'>
                                <img src={Ipad} alt="icon-1" width={200} height={350} />
                                <p className='text-center'>ipad</p>
                                <span className='font-bold text-center text-xl'>$999</span>
                            </div>
                            <div className='flex flex-col'>
                                <img src={Ipad} alt="icon-1" width={200} height={350} />
                                <p className='text-center'>ipad</p>
                                <span className='font-bold text-center text-xl'>$999</span>
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
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Ipad} alt="icon-1" width={200} height={350} />
                                <p className='text-center'>ipad</p>
                                <span className='font-bold text-center text-xl'>$999</span>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Ipad} alt="icon-1" width={200} height={350} />
                                <p className='text-center'>ipad</p>
                                <span className='font-bold text-center text-xl'>$999</span>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Ipad} alt="icon-1" width={200} height={350} />
                                <p className='text-center'>ipad</p>
                                <span className='font-bold text-center text-xl'>$999</span>
                            </div>

                        </div>
                    </motion.div>
                }
            </div>
        </section>
    )
}

export default Home