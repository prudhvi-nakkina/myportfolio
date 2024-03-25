import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
const Banner = () => {
  const [text2] = useTypewriter({
    words: ["Full Stack Developer.", "Software Engineer."],
    loop: 3,
    typeSpeed: 20
  });
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Prudhvi Nakkina.
        <span className="text-textDark mt-2 lgl:mt-4">
          I am a <span>{text2}</span>
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I&apos;m a highly motivated and results-oriented software engineer with a strong passion for crafting innovative solutions. My journey began at Infosys, where I honed my skills in full-stack development, contributing to projects that boosted customer engagement and user acquisition. Currently pursuing my Master&apos;s in Information Systems, I&apos;m constantly expanding my knowledge base in areas like cloud computing, container orchestration, and modern frameworks.
      </motion.p>
      <a href="https://github.com/prudhvi-nakkina" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
