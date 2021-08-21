import Link from 'next/link';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
// import BlogPost from '../components/BlogPost';
import ProjectCard from '../components/ProjectCard';
// import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi, I’m Maggie Leigland
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a computer science undergraduate student with dreams of becoming a
          software engineer working in aerospace. Welcome to my little piece of
          the internet!
          <br />
          –&nbsp;
          {' I hope you enjoy browsing my site and '}
          <Link href="/about">
            <a>learning more about me.</a>
          </Link>
        </h2>

        <Timeline />
      </div>
    </Container>
  );
}
