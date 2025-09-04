import Gallery from "@/components/Gallery";
import CPPIcon from "@/components/technology_icons/CPPIcon";
import NextIcon from "@/components/technology_icons/NextIcon";
import ReactIcon from "@/components/technology_icons/ReactIcon";
import TailwindIcon from "@/components/technology_icons/TailwindIcon";
import TSIcon from "@/components/technology_icons/TSIcon";

const CameraPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-3/4 py-10 space-y-5">
        <h1 className="text-5xl sm:text-left text-center">
          Raspberry Pi Camera
        </h1>

        <p>
          This project is a camera application that streams image frames from a
          uWebSockets C++ server to clients.
        </p>

        <h2 className="text-2xl font-semibold">Technologies</h2>

        <div className="flex gap-5 justify-center flex-wrap">
          <CPPIcon />
          <ReactIcon />
          <NextIcon />
          <TSIcon />
          <TailwindIcon />
        </div>

        <Gallery
          images={[
            {
              id: 0,
              src: "/projects/camera/camera1.jpeg",
              alt: "Picture outside of house, looking out onto a main road.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CameraPage;
