import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Infosys = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-textGreen tracking-wide">@Infosys</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2019 - December 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with the C Spire onshore team for Full Stack Development of C Spire’s E-Commerce Platform. Successfully delivered 3
          development projects, and tracked & debugged 30+ complex production bugs
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded Java & Spring Boot development in a Microservices architecture. Built OAuth secured APIs using Spring Security,
          streamlined system functionality with cross-service API versioning updates, culminating in a 30% reduction in API response time
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Crafted engaging product catalogs, dashboards, and shopping flows (Angular/TypeScript/SCSS), boosting engagement by 15%, 
          Revamped checkout page with tokenized payments and intuitive design for a 6-step flow, increasing successful transactions by 25%
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leveraged JUnit for unit testing, Jenkins for CI/CD, and Git for version control, demonstrating expertise across development stages
        </li>
      </ul>
    </motion.div>
  );
};

export default Infosys;
