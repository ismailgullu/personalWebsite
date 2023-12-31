import LineGradient from "../../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const { i18n } = useTranslation();
  return (
    <section id="contact" className="contact pt-10 pb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end max-md:justify-center w-full"
      >
        <div>
          <p className="font-opensans font-semibold text-4xl">
            <span className="text-cyan-200">
              {i18n.language === "tr"
                ? i18n.t("contact me").replace(/i/g, "İ").toUpperCase()
                : i18n.t("contact me").toUpperCase()}
            </span>{" "}
            {i18n.language !== "tr" && (
              <span className="italic">{i18n.t("TO GET STARTED")}</span>
            )}
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" className="max-md:hidden" />
          </div>
        </div>
      </motion.div>
      <div className="md:flex md:justify-between md:items-center gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex flex-col items-center justify-center text-2xl font-mono max-md:flex-row max-md:flex-wrap max-md:gap-3"
        >
          <p className="bg-white shadow-xl text-black rounded-3xl p-3 max-w-min hover:text-white hover:bg-transparent duration-300 transition-all">
            {i18n.t("dont")}
          </p>
          <br />
          <p className="bg-white shadow-xl text-black rounded-3xl p-3 max-w-min hover:text-white hover:bg-transparent duration-300 transition-all">
            {i18n.t("hesitate")}
          </p>
          <br />
          <p className="bg-white shadow-xl text-black rounded-3xl p-3 max-w-min hover:text-white hover:bg-transparent duration-300 transition-all">
            {i18n.t("to")}
          </p>
          <br />
          {i18n.language !== "tr" && (
            <>
              <p className="bg-white shadow-xl text-black rounded-3xl p-3 max-w-min hover:text-white hover:bg-transparent duration-300 transition-all">
                {i18n.t("contact")}
              </p>
              <br />
            </>
          )}
          <p className="bg-white shadow-xl text-black rounded-3xl p-3 max-w-min hover:text-white hover:bg-transparent duration-300 transition-all">
            {i18n.t("me")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            action="https://formsubmit.co/igullu2001@gmail.com"
            method="POST"
          >
            <input
              className="w-full bg-white rounded-md text-black font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder={i18n.t("name")}
              {...register("name", {
                required: true,
                maxLength: 100,
                minLength: 3,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
                {errors.name.type === "minLength" && "Min length is 3 char."}
              </p>
            )}

            <input
              className="w-full bg-white rounded-md font-semibold text-black placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder={i18n.t("email")}
              {...register("email", {
                required: true,
                // pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-white rounded-md text-black font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder={i18n.t("message")}
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 bg-cyan-200 font-extrabold text-deep-blue mt-5 hover:bg-black hover:text-white transition duration-500"
              type="submit"
            >
              {i18n.t("sendme")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
