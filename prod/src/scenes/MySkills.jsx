import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 pt-16">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-opensans max-md:text-center font-semibold text-cyan-100 text-4xl mb-5">
            MY SKILLS
          </p>
          <LineGradient width="w-1/3" className="max-md:hidden" />
          <p className="mt-10 mb-7">
            I've been working as a front-end developer for several years now.
            I've started my career at Garanti BBVA. I've established strong
            discipline and developed myself on corporate software. In the mean
            time I've enrolled for university with full scholarship on English
            language teaching. With the help of the time which I've spent at
            University I've improved my language. Nowadays I work for GGM Gastro
            GmbH, which is the leader in Europe in the field of industrial
            kitchen. I care for the e-commerce website of the company.
          </p>
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between my-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In addition to corporate experiences such as banking sector,
            industrial kitchen, agencies, I have also expanded my portfolio with
            many freelance jobs for people and institutions from many different
            fields.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            There is no limit for me! I improve my skills and stay updated by
            following current and future changes. With the help of various
            channels such as medium, github and udemy and many more, it is now
            more effective and easy to follow up with the latest for me. In
            addition to virtual classes I also join to seminars related to my
            field.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            As a frontend developer, analytical thinking is an essential
            skillset that I rely on every day. It enables me to approach complex
            problems by breaking them down into smaller, more manageable
            components. By thoroughly understanding user interfaces, I can
            ensure seamless functionality and optimal usability across various
            devices and platforms. Analytical thinking empowers me to examine
            user requirements, identify potential obstacles, and devise
            innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
