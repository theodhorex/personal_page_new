import { MotionPlugin } from '@vueuse/motion'


export const animation = {
  fadeIn: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 200,
    duration: 960
  },
  fadeInDown: {
    initial: { y: -60, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    delay: 200,
    duration: 960
  },
  fadeInUp: {
    initial: { y: 60, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    delay: 200,
    duration: 960
  }

}

export { MotionPlugin }