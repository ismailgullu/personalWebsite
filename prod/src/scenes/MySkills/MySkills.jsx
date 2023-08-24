import { useTranslation } from "react-i18next";
import LineGradient from "../../components/LineGradient";
import { motion } from "framer-motion";

const MySkills = () => {
  const { i18n } = useTranslation();
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
            {i18n.t("myskills")}
          </p>
          <LineGradient width="w-1/3" className="max-md:hidden" />
          <p className="mt-10 mb-7">{i18n.t("mySkillsParagraph")}</p>
        </motion.div>
      </div>

      <div className="md:flex md:justify-between my-16 gap-32">
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
                {i18n.t("Experience")}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">{i18n.t("experienceParagraph")}</p>
        </motion.div>

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
                {i18n.t("Innovative")}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">{i18n.t("innovativeParagraph")}</p>
        </motion.div>
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
                {i18n.t("Analysis")}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">{i18n.t("imaginativeParagraph")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
