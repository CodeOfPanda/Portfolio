import Link from 'next/link';
import Timeline from '../components/Timeline';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

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

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Path Finding Algorithm"
          description="Nearest neighbors path finding algorithm implementation to calculate the shortest distance each delivery truck can take to deliver their respective packages"
          href="https://github.com/CodeOfPanda/C950_DSAII_Path_Finding_Project"
          icon="truck"
        />
        <ProjectCard
          title="Scheduling System"
          description="JavaFX CRUD GUI application that was built with Java 11 and SceneBuilder to allow users to create and interact with customer appointments, while utilizing a MySQL database to store customer data for later access and analysis"
          href="https://github.com/CodeOfPanda/Software2_Scheduling_GUI"
          icon="calendar"
        />
        <ProjectCard
          title="Inventory Management System"
          description="Java GUI application that allows a user to create, read, update, or delete inventory levels of a business's products"
          href="https://github.com/CodeOfPanda/Software1-Project"
          icon="wrench"
        />
        <ProjectCard
          title="Class Roster"
          description="Command line CRUD application built with C++ that allows the user to track a student's enrollment and personal information"
          href="https://github.com/CodeOfPanda/Class-Roster"
          icon="student"
        />
        <Timeline />
      </div>
    </Container>
  );
}
