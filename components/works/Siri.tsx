import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Siri = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Development Intern
        <span className="text-textGreen tracking-wide">@Siri Software</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        September 2023 - December 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to the development and optimization of SIRI’s internal online learning platform focused on delivering technical training
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leveraged Node.js, Express.js & Sequelize in building controllers & RESTful APIs for effective course content & user profile 
          management. Integrated a badge rewarding system tied to course set completion, resulting in an 18% increase in enrollment rate
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Elevated user engagement by 10% with a dynamic React interface, crafting personalized dashboards to highlight course progress 
          and recommend badges. Ensured a seamless user experience by optimizing the UI for responsiveness across devices
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Enhanced the platform performance by strategically handling useEffect hooks to minimize unnecessary calls and implementing 
          Memoization & Code-Splitting techniques for efficient rendering, leading to a 12% reduction in rendering times
        </li>
      </ul>
    </motion.div>
  );
};

export default Siri;
