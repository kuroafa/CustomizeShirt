import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomeButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-gray-200  ">
                Mock.io
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex -mt-10 flex-col gap-4">
              <p className="text-[13px] max-w-md font-normal text-gray-200 text-base">
                {" "}
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>
                  Unleash your imagination
                </strong>{" "}
                and define your own style.{" "}
              </p>
              <CustomeButton
                type='filled'
                title='Customize It'
                handleClick={()=> state.intro = false }
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
