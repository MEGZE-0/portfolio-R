import { motion } from "framer-motion";
import { styles } from "../styles";
import profilePic from "../assets/me.jpg";

const ProfilePic = () => {
  return (
    <div className="flex-shrink-0 ml-5">
      <img
        src={profilePic}
        alt="Profile Picture"
        className="w-40 h-40 rounded-full border-4 border-primary shadow-lg"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2189E8]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="blue-text-gradient">Reem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a third-year Information Technology student
            <br className="sm:block hidden" />
            at Sinai University (SU).
          </p>
        </div>

        <ProfilePic />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
