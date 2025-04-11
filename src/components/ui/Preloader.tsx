import { motion, AnimatePresence } from "framer-motion";

type PreloaderProps = {
  loading: boolean;
};

const Preloader = ({ loading }: PreloaderProps) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            top: "-100%",
            transition: { duration: 2, ease: [0.86, 0, 0.09, 1] },
          }}
          transition={{ duration: 1 }}
        >
          <div className="loading-text text-4xl font-bold tracking-widest">
            {"LOADING".split("").map((char, index) => (
              <span key={index} className="mx-1">
                {char}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
