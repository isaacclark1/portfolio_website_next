import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  imageSource: string;
  imageAltText: string;
  projectTitle: string;
  projectDescription?: string;
  websiteLink?: string;
  gitHubLink?: string;
  linkHref: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSource,
  imageAltText,
  projectTitle,
  projectDescription,
  websiteLink,
  gitHubLink,
  linkHref,
}) => {
  return (
    <div
      className="flex flex-col bg-black mt-10 rounded-xl border border-gray-800 min-h-[500px]"
      tabIndex={0}
    >
      <Image
        src={imageSource}
        alt={imageAltText}
        className="rounded-t-xl flex-none h-52 object-cover"
        height={540}
        width={960}
        priority
      />

      <div className="flex flex-col p-2.5 gap-2 flex-grow">
        <h3>{projectTitle}</h3>

        {projectDescription && (
          <p className="font-light overflow-clip max-h-60">
            {projectDescription}
          </p>
        )}

        <div className="flex items-center gap-2 text-blue-400">
          <Link href={linkHref} className="hover:underline">
            More Info
          </Link>
          <LinkIcon size="1rem" />
        </div>

        {(websiteLink || gitHubLink) && (
          <div className="flex gap-2 mt-auto">
            {websiteLink && (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="36px"
                  viewBox="0 -960 960 960"
                  width="36px"
                  fill="#fff"
                >
                  <title>Web Page Link</title>
                  <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
                </svg>
              </a>
            )}

            {gitHubLink && (
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-0.5"
              >
                <svg
                  width="30px"
                  height="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 98 96"
                >
                  <title>GitHub Icon</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="#fff"
                  />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
