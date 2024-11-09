'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

ScrollTrigger.normalizeScroll(false);

ScrollTrigger.addEventListener('refresh', function () {
  if (document.body.getAttribute('style') === '') {
    document.body.removeAttribute('style');
  }
});

gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

gsap.defaults({
  duration: 1,
  ease: 'power2.inOut',
});

export { gsap, ScrollTrigger, useGSAP };
