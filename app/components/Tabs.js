import { useState } from "react";

const Tabs = ({ dataList, headerStyle = "text", position = "left" }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab Headers */}
      <div className="flex justify-around bg-gray-200 p-2 rounded-lg">
        {dataList.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-lg ${
              active === tab.id ? "bg-blue-500 text-white" : "bg-gray-100"
            } focus:outline-none`}
            onClick={() => setActive(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative mt-4">
        <div
          className="transition-all duration-500 ease-in-out"
          key={active}
          style={{ transform: `translateX(${active * -100}%)` }}
        >
          {dataList.map((tab) => (
            <div
              key={tab.id}
              className="absolute w-full transition-opacity duration-500"
              style={{
                opacity: active === tab.id ? 1 : 0,
                zIndex: active === tab.id ? 10 : 0,
              }}
            >
              <div className="p-4 bg-white rounded-lg shadow-md">
                {tab.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
