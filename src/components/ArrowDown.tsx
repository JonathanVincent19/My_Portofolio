import { motion } from "framer-motion";

export function ArrowDown() {
  return (
    <motion.div
      className="absolute bottom-0.1 left-1/2 -translate-x-1/2 text-[--color-accent] cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      onClick={() => {
        // scroll smooth ke section berikutnya
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
