'use client'
import { motion, useAnimation, } from "framer-motion";
import { useRef } from "react";

interface Props{
  children: React.ReactNode;
  variant?: string;
  transitionDuration?: number;
  className?: string;
}

export function RevealOnScroll({children, variant, transitionDuration, className}:Props){
  let variantType = {}

  switch (variant) {
    case 'slide-up':
      variantType = {
        hidden:{ opacity:0, y: 75},
        visible:{ opacity:1, y: 0},
      }
    break;
    case 'slide-down':
      variantType = {
        hidden:{ opacity:0, y: -75},
        visible:{ opacity:1, y: 0},
      }
    break;
    case 'slide-right':
      variantType = {
        hidden:{ opacity:0, x: -75},
        visible:{ opacity:1, x: 0},
      }
    break;
    case 'slide-left':
      variantType = {
        hidden:{ opacity:0, x: 75},
        visible:{ opacity:1, x: 0},
      }
    break;
    case 'fade-in':
      variantType = {
        hidden:{ opacity:0,},
        visible:{ opacity:1,},
      }
    break;
    default:
      variantType = {
        hidden:{ opacity:0, y: 75},
        visible:{ opacity:1, y: 0},
      }
    break;
  }


  return(
      <motion.div
        variants={variantType}
        whileInView='visible'
        initial='hidden'
        viewport={{once: true}}
        transition={{duration: transitionDuration ?? 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
  )
}

export function GreenFadeTransition(){
  const slideControls = useAnimation();

  return(
      <motion.div
        variants={{
          hidden: {left:0},
          visible: {left: '100%'},
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 1, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'green',
          zIndex: 20,
        }}
        />
  )
}