import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Overview } from '@/widgets/landing/Overview';
import { Title } from '@/widgets/landing/Title';

export default async function Home() {
  return (
    <main>
      <Title />
      <Overview />
    </main>
  );
}
