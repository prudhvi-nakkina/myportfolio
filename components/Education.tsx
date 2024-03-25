import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Masters from "./works/Masters";
import Bachelors from "./works/Bachelors";


const Education = () => {
  const [eduMasters, setEduMasters] = useState(true);
  const [eduBachelors, setEduBachelors] = useState(false);

  const handleMasters = () => {
    setEduBachelors(false);
    setEduMasters(true);
  };

  const handleBachelors = () => {
    setEduMasters(false);
    setEduBachelors(true);
  };
  return (
    <section
      id="education"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Studied" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleMasters}
            className={`${
                eduMasters
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Master&apos;s
          </li>
          <li
            onClick={handleBachelors}
            className={`${
                eduBachelors
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Bachelor&apos;s
          </li>
        </ul>
        {eduMasters && <Masters />}
        {eduBachelors && <Bachelors />}
      </div>
    </section>
  );
};

export default Education;
