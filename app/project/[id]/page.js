import { person } from "@/app/data";
import Image from "next/image";

const AppDetails = ({ params }) => {

  const appItem = person.projects.find((app) => app.id === Number(params?.id));

  return (
    <div className="bg-[#f2f5f9]">
      <div className="w-ful h-screen 2xl:w-4/5 xl:w-[90%] md:w-[95%] mx-auto p-5">
        <div className="app-details-header flex items-start sm:items-center justify-between my-3">
          <div className="logo-text flex items-start sm:items-center gap-x-2">
            <div className="logo w-1/4 sm:w-auto">
              <Image
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                src={appItem?.icon}
                alt={appItem?.name}
              />
            </div>
            <div className="text w-3/4 sm:w-auto">
              <div className="text text-xl sm:text-2xl line-clamp-2 font-semibold capitalize">
                {appItem?.name}
              </div>
              <div className="flex items-center gap-x-1 text-xs sm:text-sm mt-2.5">
                <div className="text flex items-center gap-x-1 text-xs border border-black rounded-3xl text-black capitalize px-3 py-1">
                  <span className="hidden sm:block">
                    {appItem?.platform === "android" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    )}
                  </span>
                  {appItem?.platform}
                </div>
              </div>
            </div>
          </div>
          <div className="button w-1/4 sm:w-auto">
            <a
              className={`block px-3 py-4 leading-[0] ${
                appItem?.platform === "android"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-orange-500 hover:bg-orange-600"
              } text-sm font-medium text-center text-white rounded focus:ring-0 focus:outline-none capitalize`}
              href={appItem?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {appItem?.platform === "android" ? (
                <span className="flex items-center gap-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">download</span>
                </span>
              ) : (
                <span className="flex items-center gap-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <span className="hidden sm:inline-block">browse</span>
                </span>
              )}
            </a>
          </div>
        </div>
        <div className="content">
          <div className="description section">
            <div className="text text-lg sm:text-xl font-semibold capitalize">
              description
            </div>
            <div className="text-sm text-slate-400 mt-3">
              {appItem?.description?.charAt(0).toUpperCase() +
                appItem?.description?.slice(1).toLowerCase()}
            </div>
          </div>
          <h1 className="mt-10 text-5xl">This page is under construction</h1>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
