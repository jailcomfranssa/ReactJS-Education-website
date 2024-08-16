import BannerPng from '../../assets/education.png';
import { GrUserExpert } from 'react-icons/gr';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaBookReader } from 'react-icons/fa';
import { FadeUp } from '../Hero/hero';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/**Banner Img */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x:0}}
            viewport={{ once: true}}
            transition={{ duration: 0.5, ease: "easeInOut"}}
            src={BannerPng}
            alt="banner"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/**Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12"></div>
          <motion.h2
          initial={{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale:1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className='text-3xl md:text-4xl font-bold !leading-snug mb-10'>The world Leading Online learning Platform
          </motion.h2>
          <div className='flex flex-col gap-6'>
            <motion.div
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
            className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
              <FaBookReader className='text-2xl'/>
              <p className='text-lg'>10,000+ Courses</p>
            </motion.div>
            <motion.div
            variants={FadeUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
            className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
              <GrUserExpert className='text-2xl'/>
              <p className='text-lg'>Expert Instruction</p>
            </motion.div>
            <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
            className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
              <MdOutlineAccessTime className='text-2xl'/>
              <p className='text-lg'>Lifetime Access</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

//46:00
