import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Stuff for Smart Masses
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          ThinkGeek started as an idea. A simple idea to create and sell stuff
          that would appeal to the thousands of people out there who were on the
          front line and in the trenches as the Internet was forged. ThinkGeek
          started as a way to serve a market that was passionate about
          technology, from programmers, engineers, students, lovers of open
          source, to the masses that helped create the behind-the-scenes
          Internet culture.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
