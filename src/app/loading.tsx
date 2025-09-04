import { LoaderCircleIcon } from "lucide-react";

const Loading: React.FC = () => (
  <div className="flex items-center justify-center flex-1 h-full">
    <div className="flex flex-col items-center justify-center gap-2.5 h-full">
      <LoaderCircleIcon className="animate-spin" size="2.5rem" />
      <p className="animate-pulse">&nbsp;&nbsp;Loading...</p>
    </div>
  </div>
);

export default Loading;
