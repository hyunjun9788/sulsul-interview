import { Challenge } from '@/widgets/landing/Challenge';
import { Overview } from '@/widgets/landing/Overview';
import { Title } from '@/widgets/landing/Title';

export default async function Home() {
  return (
    <main>
      <Title />
      <Overview />
      <Challenge />
    </main>
  );
}
