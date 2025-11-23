import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, playstoreIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, someOfMyWork } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, linkType }) => {
  const icon = linkType === "playstore" ? playstoreIcon : github;

  return (
    <motion.div
      variants={fadeIn("up", "spring")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-[360px] min-w-0"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
          perspective: 1000,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[230px] sm:h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={icon}
                  alt="link icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div className="mt-2 text-secondary text-[14px]">
            {description.split(". ").map((sentence, idx, arr) => (
              <p key={idx} className="mb-2">
                {sentence.trim()}
                {idx !== arr.length - 1 && "."}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText}`}>Featured</p>
        <h2 className={`${styles.sectionHeadText}`}>Professional Work</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Selected professional projects showcasing my expertise in Android development, 
        system integration, and user-focused product design.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-7">
        {someOfMyWork.map((project, index) => (
          <ProjectCard
            key={`mywork-${index}`}
            {...project}
            linkType="playstore"
          />
        ))}
      </div>

      <div className="my-20" />

      <motion.div variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText}`}>My personal</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Transforming ideas into Android apps that blend functionality, design, and seamless user experience.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            {...project}
            linkType="github"
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
