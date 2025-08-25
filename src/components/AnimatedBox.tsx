import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedBox: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div className="p-6">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Box
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="mt-4 p-6 bg-green-500 text-white rounded-lg shadow-lg"
          >
            Hello! I slide in/out smoothly ✨
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBox;
