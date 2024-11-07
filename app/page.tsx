import { Challenge } from '@/widgets/landing/Challenge';
import { Feedback } from '@/widgets/landing/Feedback';
import { FooterMenu } from '@/widgets/landing/FooterMenu';
import { Overview } from '@/widgets/landing/Overview';
import { Question } from '@/widgets/landing/Question';
import { Review } from '@/widgets/landing/Review';
import { Title } from '@/widgets/landing/Title';

export default async function Home() {
  return (
    <main>
      <Title />
      <Overview />
      <Challenge />
      <Review />
      <Question />
      <Feedback />
      <FooterMenu />
    </main>
  );
}
