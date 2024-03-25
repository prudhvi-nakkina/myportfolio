import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Masters = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Master of Science in Information Systems
        <span className="text-textGreen tracking-wide">@Northeastern University, Boston</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        January 2022 - May 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span className="text-textGreen">
          GPA:{" "}
            </span>
          3.72/4.0
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          <span className="text-textGreen">
          Relevant Coursework:{" "}
            </span>
          Program Structures & Algorithms, Object Oriented Design, Database Management,Web Development & Design, Cloud Computing
        </li>
      </ul>
    </motion.div>
  );
};

export default Masters;
