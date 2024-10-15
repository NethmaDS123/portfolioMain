"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hello! I'm a final-year{" "}
        <span className="font-medium">Computer Science</span> student at the{" "}
        <span className="font-medium">University of Westminster in London</span>
        , and I'm originally from <span className="font-medium">Sri Lanka</span>
        . Over the past <span className="font-medium">three years</span>, I've
        been immersed in coding, building projects, and{" "}
        <span className="font-medium">leading teams</span>. I'm an ambitious
        software developer eager to join an established company where I can work
        with the latest technologies on challenging and diverse projects.
        Confident and naturally curious, I strive to improve my skills every
        single day.
      </p>
    </motion.section>
  );
}
