import ProjectCard from "@/components/projects/ProjectCard";

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-3/4 py-10">
        <h2 className="sm:text-6xl text-5xl lg:text-7xl sm:text-left text-center">
          Projects
        </h2>
        <p className="mt-10 text-center sm:text-left">
          A collection of projects I have worked on.
        </p>

        <section className="grid gap-x-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            imageSource="/projects/aicamera/aicamera9.jpeg"
            imageAltText="Picture outside of house, overlooking a main road, with AI object detections drawn on the frame"
            projectTitle="AI Camera"
            projectDescription={`
            An AI-powered object detection application for the Raspberry Pi 5, enhanced with a Hailo AI HAT+ to process video frames in real-time.
          `}
            gitHubLink="https://github.com/isaacclark1/ai-camera-cpp"
            linkHref="/projects/ai-camera"
          />

          <ProjectCard
            imageSource="/projects/camera/camera1.jpeg"
            imageAltText="Picture outside of house, looking out onto a main road."
            projectTitle="Raspberry Pi Camera"
            projectDescription={`
            A camera application that streams image frames from a C++ Server running on a Raspberry Pi 5 to clients.
          `}
            gitHubLink="https://github.com/isaacclark1/camera-cpp"
            linkHref="/projects/camera"
          />
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
