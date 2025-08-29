import React from "react"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Icon */}
        <motion.div
          className="flex h-16 w-16 items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.0, ease: "linear" }}
        >
            {/*<ShoppingBag className="h-8 w-8 text-white" />*/}
            <img
                src="/logo2.png"   // preloader image
                alt="Brand Logo"
                className="h-12 w-12 object-contain"
            />
        </motion.div>

        {/* Text */}
        <p className="text-lg font-medium text-neutral-700">Loading your shop…</p>

        {/* Progress Bar */}
        <div className="h-2 w-40 overflow-hidden rounded-full bg-neutral-200">
          <motion.div
            className="h-full w-1/3 rounded-full bg-accent from-emerald-500 to-teal-400"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "120%"] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Loader
