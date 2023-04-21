import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const InputModern = ({ placeholder }) => {
  return (
    <input
      className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:hover:text-accent focus:border-accent hover:border-accent transition-all'
      type='text'
      placeholder={placeholder}
    />
  )
}

const TextAreaModern = ({ placeholder }) => {
  return (
    <textarea
      className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:hover:text-accent focus:border-accent hover:border-accent transition-all resize-none mb-12'
      type='text'
      placeholder={placeholder}
    ></textarea>
  )
}

const Contact = () => {
  return (
    <section className="section py-16 lg:section" id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 mr-20 justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch.</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 flex flex-col gap-y-4 pb-24 pr-[50px] items-center' >
            <InputModern placeholder={"Your name"} />
            <InputModern placeholder={"Your email"} />
            <TextAreaModern placeholder={"Your message"} />
            <button className='btn btn-lg'>Send message</button>
          </motion.form>

        </div>
      </div>
    </section>
  )
};

export default Contact;
