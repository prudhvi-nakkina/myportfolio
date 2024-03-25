import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Infosys from "./works/Infosys";
import Siri from "./works/Siri";

const Experience = () => {
  const [workInfosys, setWorkInfosys] = useState(true);
  const [workSiri, setWorkSiri] = useState(false);

  const handleInfosys = () => {
    setWorkSiri(false);
    setWorkInfosys(true);
  };

  const handleSiri = () => {
    setWorkInfosys(false);
    setWorkSiri(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleInfosys}
            className={`${
              workInfosys
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Infosys Limited
          </li>
          <li
            onClick={handleSiri}
            className={`${
              workSiri
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Siri Software
          </li>
        </ul>
        {workInfosys && <Infosys />}
        {workSiri && <Siri />}
      </div>
    </section>
  );
};

export default Experience;
