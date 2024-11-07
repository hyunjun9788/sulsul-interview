import { Challenge } from '@/widgets/landing/Challenge';
import { Overview } from '@/widgets/landing/Overview';
import { Review } from '@/widgets/landing/Review';
import { Title } from '@/widgets/landing/Title';

export default async function Home() {
  return (
    <main>
      <Title />
      <Overview />
      <Challenge />
      <Review />
    </main>
  );
}
