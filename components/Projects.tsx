import { amazonImg, guestImg, springImg } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="04" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/prudhvi-nakkina/webapp-fork"
            target="_blank"
          >
            {/* <div> */}
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            {/* </div> */}
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cloud-Native E-Commerce Inventory Management System</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base text-justify p-2 md:p-6 rounded-md">
            A robust e-commerce inventory management system leveraging AWS services like EC2, S3, and RDS, along with Terraform for infrastructure automation. Integrated CI/CD pipelines for efficient deployment and utilized custom scaling techniques for optimal performance and reliability.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>AWS</li>
              <li>Node.js</li>
              <li>Terraform</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/prudhvi-nakkina/webapp-fork"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/prudhvi-nakkina/BeMyGuest"
            target="_blank"
          >
            {/* <div> */}
              <Image
                className="w-full h-full object-contain"
                src={guestImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            {/* </div> */}
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Be My Guest</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] text-justify p-2 md:p-6 rounded-md xl:-mr-16">
            A comprehensive housing platform using React.js and Node.js, empowering Lessors to list properties and manage applications, while Lessees seamlessly search, apply, and securely transact. Employed technologies like Redux for efficient state management, Auth0 for secure authentication, and MongoDB for scalable data storage, complemented by Google Maps API integration for enhanced user experience.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Redux</li>
              <li>Auth0</li>
              <li>MongoDB</li>
              <li>Google Maps API</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/prudhvi-nakkina/BeMyGuest"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/prudhvi-nakkina/spring-microservices"
            target="_blank"
          >
            {/* <div> */}
              <Image
                className="w-full h-full object-contain"
                src={springImg}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            {/* </div> */}
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Microservices Architecture for Order Processing</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] text-justify p-2 md:p-6 rounded-md">
            A microservices architecture tailored for order processing, comprising distinct services for Orders, Payments, and Products. Leveraged technologies such as Spring Boot, Docker, and Kubernetes on GCP to ensure scalability and resilience. Integrated OKTA for authorization, Resilience4j for circuit breaking, and Redis for rate limiting, while orchestrating automated build and deployment pipelines with Jenkins. Deployed Docker images to an on-premises artifact registry and managed Kubernetes clusters seamlessly with GKE & Kubectl.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>GCP</li>
              <li>Jenkins</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/prudhvi-nakkina/spring-microservices"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        <a href="https://github.com/prudhvi-nakkina" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my other projects!
        </motion.button>
      </a>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
