import { gsap } from "gsap";

// Navbar Animation
export function navbarAnimation(ref) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: -75 },
    { opacity: 1, y: 0, duration: 1 }
  );
}

// Section 1 Animation
export function headingSectionOneAnimation(ref) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
}

export function subtextSectionOneAnimation(ref) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.7 }
  );
}

export function learnMoreButtonSectionOneAnimation(ref) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
}

export function imageSectionOneAnimation(ref) {
  const originalWidth = ref.offsetWidth;
  gsap.fromTo(
    ref,
    { opacity: 0 },
    { opacity: 1, duration: 3 }
  );
}

//  Section 2 Animation
export function headingSectionTwoAnimation(ref) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 1.5 }
  );
}

export function sectionTwoToolsOneAnimation(ref) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 70 },
    { opacity: 1, y: 0, duration: 1.6 }
  );
}

export function sectionTwoToolsTwoAnimation(ref, delay = 0) {
  gsap.fromTo(
    ref,
    { opacity: 0, y: 70 },
    { opacity: 1, y: 0, duration: 1.6, delay: delay }
  );
}
