
export const fadeInFromTop = (delay: number = 0.2) => ({
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, delay },
});
