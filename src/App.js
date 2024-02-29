import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    border: "#D0D5DD",
    firstRow: [
      {
        smallCircle: {
          bg: "#86CB3C",
          border: "6px solid #fff",
        },
        viewPoint: {
          title: "Academic viewpoints",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },

        infoContainer: {
          info: "Academic & grey literature systemic review ",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },
        header: {
          heading: "Published  ",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },
      },
      {
        smallCircle: {
          bg: "#528BFF",
          border: "6px solid #fff",
        },

        viewPoint: {
          title: "Professional viewpoints ",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },

        infoContainer: {
          info: "Key informant, expert, stakeholder interviews ",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },
        header: {
          heading: "Unpublished ",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },
      },
    ],
    centerContent: {
      title: "Gather information",
      titleColor: "#fff",
      border: "7px solid #FFF",
      bg: "linear-gradient(103deg, #86CB3C 0%, #528BFF 100%)",
    },
    lastRow: [
      {
        smallCircle: {
          bg: "#86CB3C",
          border: "6px solid #fff",
        },
        viewPoint: {
          title: "Organizational viewpoints",
          color: "#000",
          bg: "#fff",
          border: "1px solid #D0D5DD",
        },

        infoContainer: {
          info: "Comprehensive web search",
          color: "#000",
          bg: "#fff",
        },

        approach: {
          label: "Passive approach:  ",
          labelColor: "#000",
          info: "Collect existing knowledge",
          infoColor: "#000",

          bg: "#F2F4F7",
          containerBg: "#fff",
        },
      },
      {
        smallCircle: {
          bg: "#528BFF",
          border: "6px solid #fff",
        },
        viewPoint: {
          title: "Lay viewpoints",
          color: "#000",
          bg: "#fff",
        },

        infoContainer: {
          info: "Community consultations through engagement",
          color: "#000",
          bg: "#fff",
        },

        approach: {
          label: "Active approach: ",
          labelColor: "#000",
          info: "Generate new knowledge",
          infoColor: "#000",
          bg: "#F2F4F7",
          containerBg: "#fff",
        },
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
