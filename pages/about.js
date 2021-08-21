import Link from 'next/link';
import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About – Maggie Leigland">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hi! I’m Maggie and I'm a computer science student with the goal of
            working on aerospace software!
          </p>

          <p>
            I grew up in a very rual area of Montana, attending a two-room
            schoolhouse on a ranch and eventually a K-12 school for high school.
            I currently attend Western Governors University in their B.S.
            Computer Science program. Check out my timeline on the homepage for
            more about me!
          </p>
        </div>
      </div>
    </Container>
  );
}
