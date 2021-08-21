import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Introduced to Programming">
        My boyfriend began to teach me what programming was and I vividly
        remember him showing me how you can code in the browser and make any
        website do whatever you want it to by editing elements in the DOM (i had
        no idea what that was at the time 😁)
      </Step>
      <Step title="First Laptop 💻">
        After being amazed by programming, I caught the bug and knew I needed to
        puruse it. I purchased my first laptop and this was the key start of my
        passion for tech, as it enabled me to actually write code!
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="First Time Betting On Myself 🎲">
        Decided to drop out of University to pursue martial arts full time. I
        realized I would regret not doing it later in life and I wasn't sure
        what career to pursue at this point.
      </Step>
      <Step title="Thailand 🥋">
        After training hard for months, I made another leap and moved to
        Thailand to train and compete professionally in Muay Thai throughout
        Chiang Mai, Phuket, and Bangkok.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Discovering Myself 🔍">
        I didn't feel like any major at my college was suiting me and I couldn't
        decide what I wanted do for a career. I began training martial arts in
        my free time going to Muay Thai and boxing classes.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Graduated High School">
        Graduated from Power, Montana with my graduating class of 15. I was an
        avid tennis player.
      </Step>
      <Step title="Started College">
        Attended University of Montana in Missoula, Montana where I began
        studying sociology and eventually wildlife biology.
      </Step>
    </ul>
    <Divider />
    <Year>2004</Year>
    <ul>
      <Step title="Grew Up On A Ranch 🐴">
        I grew up on a ranch outside of Missoula, Montana and went to a two room
        schoolhouse with my brothers and other kids that lived on the ranch.
      </Step>
    </ul>
    <Divider />
    <Year>1996</Year>
    <ul>
      <Step title="Born" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Started WGU 🎊">
          Finally got to start school! I loved my first semester and took some
          great courses such as Software I (Java), Scripting & Programming
          (C++), Calculus I, Probability & Statistics, and Discrete Math I.
        </Step>
        <Step title="2nd Semester">
          After enjoying my first semester, I started back up again and took the
          following classes: Software II (Advanced Java), Data Structures &
          Algorithms I, Data Management (SQL), CompTIA Project+ certification,
          and ITIL 4 certification.
        </Step>
        <Divider />
        <Year>2019</Year>
        <ul>
          <Step title="Second Time Betting On Myself">
            After falling in love with programming and spending countless nights
            learning, reading textbooks, and working on projects, I finally
            decided to stop training Muay Thai and quit all of my service jobs
            to go back to school and study computer science so I could
            eventually be a software engineer and write code for a career.
          </Step>
          <Step title="Preparing for College Round 2">
            I decided that I wanted to attend Western Governors University's
            Computer Science program as I had been having a lot of success and
            enjoyed self-teaching myself concepts online, and the program
            offered great coursework with the ability for me to work hard and
            accelerate.
          </Step>
          <Step title="Honing My Skills 🔨">
            I wanted to make sure I would succeed at school, so I spent a couple
            months studying math through Khan Academy working my all the way
            through Calculus I & II to prepare for the program.
          </Step>
        </ul>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
