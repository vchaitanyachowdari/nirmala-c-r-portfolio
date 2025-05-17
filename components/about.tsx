// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
          <p className="mb-3">
              Dean of Placement at Bapuji Institute of Engineering & Technology in DAVANAGERE, I bring a strong educational background and <b className="font-medium">over 30 years</b> of extensive experience in the education management industry. My core skills include <b className="font-medium">lecturing</b> and <b className="font-medium">teaching</b>, underpinned by a deep understanding of cutting-edge technologies like <b className="font-medium">Artificial Intelligence, Machine Learning, and Cloud Computing</b>.
          </p>

          <p>
              Having spent <b className="font-medium">three decades at BIET</b>, my primary dedication lies in <b className="font-medium">connecting talented students with promising career opportunities</b> and fostering their professional growth.
          </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
