import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_lwhpwqt",
        "template_bn852mg",
        form.current,
        {
          publicKey: "4G2dXju0EVEoj0J8h",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="
        relative border-b border-black/10 dark:border-neutral-900 py-28
        text-neutral-900 dark:text-white
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-purple-600/20 blur-[150px] rounded-full" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mb-4"
      >
        Get In <span className="text-cyan-500 dark:text-cyan-400">Touch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-neutral-600 dark:text-neutral-400 text-lg mb-16"
      >
        I’m currently seeking new opportunities. If you have any questions or
        would like to connect, please feel free to contact me.
      </motion.p>

      {/* Contact Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* LEFT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-black/5 dark:bg-white/10 p-8 rounded-2xl
            border border-black/10 dark:border-white/20
            backdrop-blur-md shadow-xl
          "
        >
          <h2 className="text-2xl font-semibold mb-6">
            Send me a message
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="
                bg-white/70 dark:bg-transparent
                border border-black/15 dark:border-white/20
                rounded-lg px-4 py-3
                text-neutral-900 dark:text-white
                placeholder:text-neutral-500 dark:placeholder:text-neutral-400
                focus:outline-none
              "
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="
                bg-white/70 dark:bg-transparent
                border border-black/15 dark:border-white/20
                rounded-lg px-4 py-3
                text-neutral-900 dark:text-white
                placeholder:text-neutral-500 dark:placeholder:text-neutral-400
                focus:outline-none
              "
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="
                bg-white/70 dark:bg-transparent
                border border-black/15 dark:border-white/20
                rounded-lg px-4 py-3
                text-neutral-900 dark:text-white
                placeholder:text-neutral-500 dark:placeholder:text-neutral-400
                focus:outline-none resize-none
              "
            />

            {/* Button */}
            <button
              type="submit"
              className="
                mt-2 bg-cyan-500 hover:bg-cyan-600
                transition px-6 py-3 rounded-lg
                font-semibold text-white
              "
            >
              Send Message
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-sm text-green-500">
                {status}
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT: DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-black/5 dark:bg-white/10 p-8 rounded-2xl
            border border-black/10 dark:border-white/20
            backdrop-blur-md shadow-xl
          "
        >
          <h2 className="text-2xl font-semibold mb-6">
            Connect with me
          </h2>

          <div className="mb-6">
            <p className="text-neutral-700 dark:text-neutral-300">
              {CONTACT.address}
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6 text-neutral-700 dark:text-neutral-300">
            <FaPhone
              size={20}
              className="text-cyan-500 dark:text-cyan-400"
            />
            <span>{CONTACT.phoneNo}</span>
          </div>

          <div className="flex items-center gap-3 mb-6 text-neutral-700 dark:text-neutral-300">
            <FaEnvelope
              size={20}
              className="text-cyan-500 dark:text-cyan-400"
            />
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="flex gap-5 text-3xl mt-8">
            <a
              href="https://github.com/malamuru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mounika-alamuru/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
