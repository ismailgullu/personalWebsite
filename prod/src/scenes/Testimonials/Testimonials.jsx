import { useTranslation } from "react-i18next";
import LineGradient from "../../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { i18n } = useTranslation();
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
          {i18n.t("testimonials").toUpperCase()}
        </p>
        <LineGradient width="w-1/3" className="max-md:hidden" />
        <p className="mt-10 text-lg font-bold">
          {i18n.t("Here's What People are Saying About My Work!")}
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
          <p className="text-center text-xl">{i18n.t("testimonial1")}</p>
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
          <p className="text-center text-xl">{i18n.t("testimonial2")}</p>
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
          <p className="text-center text-xl">{i18n.t("testimonial3")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
