import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * 0.001 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const cardsRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9E9E7] to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-7xl mx-auto">
        <AnimatedText
          text="Get in Touch"
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 text-center font-serif"
          delay={100}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            ref={mapRef}
            className="lg:col-span-1 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDItrFLoQuLqdBl2_qMqCuvo3JchtTdKKc&q=19.12994,72.88258"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10"
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "phone", "company"].map((field) => (
                <motion.div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 capitalize mb-2"
                  >
                    {field}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    value={formState[field]}
                    onChange={handleChange}
                    autoComplete="off"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    placeholder={`Enter your ${field}`}
                  />
                </motion.div>
              ))}

              <motion.div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                  placeholder="Tell us what you're looking for..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={` flex items-center justify-center px-6 py-4 rounded-lg text-white font-medium transition-all duration-200 ${
                  isSubmitting
                    ? "bg-indigo-400"
                    : "bg-black hover:bg-indigo-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
        >
          {[
            { icon: Mail, title: "Email Us", info: "itsmedezino@gmail.com" },
            { icon: Phone, title: "Call Us", info: "+91 7041872737" },
            { icon: MapPin, title: "Visit Us", info: "Thane, Mumbai" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300"
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
