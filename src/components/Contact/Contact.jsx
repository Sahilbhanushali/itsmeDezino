import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import "../Contact/Contact.scss";

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.001 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {letters.map((letter, index) => (
          <motion.span
            variants={child}
            key={index}
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#E9E9E7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <AnimatedText
          text="Get in Touch"
          className="text-4xl md:text-5xl font-bold text-black mb-12 text-center font-serif"
          delay={100}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d72.8797!3d20.3656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be83c0b37c50e91%3A0xc0b8314c37fbbd56!2sVapi%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2s!4v1674756886163!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Company Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="looking-for"
                  className="block text-sm font-medium text-gray-700"
                >
                  I am looking for
                </label>
                <textarea
                  id="looking-for"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="button"
                  style={{ "--clr": "#7808d0" }} // You can adjust the color here
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <AnimatedText
                  text="Email Us"
                  className="text-lg font-semibold text-gray-900 mb-1"
                  delay={200}
                />
                <AnimatedText
                  text="contact@example.com"
                  className="text-gray-600"
                  delay={300}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <AnimatedText
                  text="Call Us"
                  className="text-lg font-semibold text-gray-900 mb-1"
                  delay={400}
                />
                <AnimatedText
                  text="+1 (555) 000-0000"
                  className="text-gray-600"
                  delay={500}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <AnimatedText
                  text="Visit Us"
                  className="text-lg font-semibold text-gray-900 mb-1"
                  delay={600}
                />
                <AnimatedText
                  text="123 Business Street, New York, NY 10001"
                  className="text-gray-600"
                  delay={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
