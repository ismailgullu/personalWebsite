import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-opensans font-semibold text-4xl mb-5 text-cyan-100">
          TESTIMONIALS
        </p>
        <LineGradient width="w-1/3" className="max-md:hidden" />
        <p className="mt-10 text-lg font-bold">
          Here's What People are Saying About My Work!
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] min-h-fit flex flex-col p-16 mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl">“</p>
          <p className="text-center text-xl">
            Ismail played a pivotal role in revamping our website. His
            proficiency in frameworks like React and Next js allowed us to
            deliver a seamless and intuitive user experience. Ismail's attention
            to detail and problem-solving skills ensured the website was both
            visually appealing and highly functional. His collaboration and
            commitment to meeting our project goals made him an invaluable asset
            to us.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] min-h-fit flex flex-col p-16 mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl">“</p>
          <p className="text-center text-xl">
            Ismail exceeded our expectations with his work on our corporate
            website. He expertise in UI/UX design and front-end technologies
            brought our vision to life. He seamlessly integrated interactive
            elements, optimized page load speeds, and ensured cross-browser
            compatibility. His dedication and creativity truly transformed our
            online presence, and we couldn't be happier with the outcome.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] min-h-fit flex flex-col p-16 mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-opensans text-6xl">“</p>
          <p className="text-center text-xl">
            Working with Ismail was a game-changer for our e-commerce website.
            His mastery of HTML, CSS, and JavaScript helped us achieve a modern
            and user-friendly interface that boosted our conversion rates. His
            attention to responsive design ensured our site looked impeccable
            across all devices. We're extremely satisfied with the results and
            would gladly work with Ismail again.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
