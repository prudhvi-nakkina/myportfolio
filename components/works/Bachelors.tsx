import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Bachelors = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Bachelor of Technology in Electronics and Communication Engineering
        <span className="text-textGreen tracking-wide">@SRM University, India</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2015 - May 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
            Graduated with a 84/100 GPA
        </li>
      </ul>
    </motion.div>
  );
};

export default Bachelors;
