import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Image from "@/assets/apple-2.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {

  return (
    <section id="contact" className="mx-auto flex items-center pt-24 pb-32 md:h-full bg-gray-950">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-4xl text-white">Review</span> 
          </HText>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex mx-auto w-5/6">
          <motion.div
            className="mt-10 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={Image} alt="image-review" className="rounded-lg"/>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-3/5 md:mt-0 flex flex-col justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-white text-center">
              <HText>
                <span>John Nolan</span>
              </HText>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est inventore aperiam magni perferendis quisquam nam porro debitis sapiente dolor assumenda praesentium, nesciunt pariatur, delectus fugiat? Libero, exercitationem voluptates! Asperiores.</p>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;