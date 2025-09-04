const AboutPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-3/4 py-10">
        <h2 className="sm:text-6xl text-5xl lg:text-7xl sm:text-left text-center">
          About
        </h2>
        <p className="mt-10 text-center sm:text-left animate-slideInFromLeft">
          My name is Isaac Clark, a software engineer from Haywards Heath, West
          Sussex, England. I am a first-class honours graduate in{" "}
          <a
            href="https://www.open.ac.uk/courses/computing-it/degrees/bsc-computing-it-software-q62-soft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:underline-offset-2"
          >
            Computing and IT (Software)
          </a>{" "}
          from the Open University.
        </p>

        <p className="mt-5 text-center sm:text-left">
          Throughout my academic and personal studies, I have developed strong
          technical skills and a passion for software development, particularly
          in building efficient and scalable applications. My technical toolkit
          includes knowledge of programming languages such as JavaScript,
          TypeScript, Python and Java, as well as a deep understanding of
          software engineering principles and web technologies.
        </p>

        <p className="mt-5 text-center sm:text-left">
          In addition to my technical skills, I bring strong problem-solving
          skills, the ability to work effectively in a team, and a high level of
          self motivation.
        </p>

        <div>
          <p className="mt-5 mb-2">Key skills and interests:</p>

          <ul className="list-[square] ml-10 space-y-2">
            <li>JavaScript, TypeScript, Python, Java.</li>
            <li>
              Knowledge of software engineering principles and object-oriented
              programming.
            </li>
            <li>
              Web Frameworks/Libraries: React.js, Next.js, TailwindCSS,
              Express.js.
            </li>
            <li>Knowledge of SQL and Document databases.</li>
            <li>
              Continuously learning new technologies and improving my skills.
            </li>
            <li>
              Strong problem-solving, time-management, and organisational
              skills.
            </li>
            <li>
              Comfortable working in high-pressure environments and delivering
              results.
            </li>
            <li>Effective communication and collaboration skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
