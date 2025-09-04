import Gallery from "@/components/Gallery";
import CPPIcon from "@/components/technology_icons/CPPIcon";
import NextIcon from "@/components/technology_icons/NextIcon";
import ReactIcon from "@/components/technology_icons/ReactIcon";
import TailwindIcon from "@/components/technology_icons/TailwindIcon";
import TSIcon from "@/components/technology_icons/TSIcon";

const AICameraPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-3/4 py-10 space-y-5">
        <h1 className="text-5xl sm:text-left text-center">AI Camera</h1>

        <p>
          This project is an AI-powered object detection application that
          utilises a Raspberry Pi 5 and Hailo AI HAT+ to process video frames in
          real time. The app reads frames from a camera, performs detection
          inference using the Hailo APIs and draws the detections on the video
          frames. The server runs a uWebSockets-based WebSocket API to stream
          the processed frames to clients.
        </p>

        <h2 className="text-2xl font-semibold">Features</h2>

        <ul className="list-square ml-10 space-y-2">
          <li>
            🚀 <strong>Real-time object detection</strong> using the Hailo NPU.
          </li>
          <li>
            🎥 <strong>Video frame processing</strong>: drawing detections on
            video frames and streaming them via a WebSocket server.
          </li>
          <li>
            🔔 <strong>Event notifications</strong>: notifications streamed to
            clients such as &ldquo;person detected&rdquo;.
          </li>
          <li>
            🌡️ <strong>System monitoring</strong>: CPU and RAM statistics
            streamed to the client.
          </li>
          <li>
            ⚡️ <strong>Efficient multi-threading</strong>.
          </li>
          <li>
            🌍 <strong>REST API</strong> for starting/stopping camera capture
            and detection inference.
          </li>
        </ul>

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
              src: "/projects/aicamera/aicamera9.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
            {
              id: 1,
              src: "/projects/aicamera/aicamera3.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
            {
              id: 2,
              src: "/projects/aicamera/aicamera4.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
            {
              id: 3,
              src: "/projects/aicamera/aicamera5.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
            {
              id: 4,
              src: "/projects/aicamera/aicamera6.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
            {
              id: 5,
              src: "/projects/aicamera/aicamera7.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
            {
              id: 6,
              src: "/projects/aicamera/aicamera8.jpeg",
              alt: "Picture outside of house, overlooking a main road, with AI object detections drawn on the frame",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AICameraPage;
