"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

type RotateWordsProps = {
  text?: string
  words: string[]
  className?: string        // style untuk words
  textClassName?: string    // style untuk text biasa
}

export function RotateWords({
  text = "",
  words = ["Word 1", "Word 2", "Word 3"],
  className = "",
  textClassName = "",
}: RotateWordsProps) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="flex items-center justify-start gap-1.5">
      {text && <span className={textClassName}>{text}</span>}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`inline-block ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )  
}
