import React, { useEffect, useRef, useState } from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ firstRow, lastRow, border, centerContent }) => {
  const [viewPointContainerWidth, setViewPointContainerWidth] = useState(null);
  const viewPointContainerRef = useRef(null);
  console.log(viewPointContainerWidth);

  useEffect(() => {
    // Measure the width of the infoContainer after component has been rendered
    if (viewPointContainerRef.current) {
      const width = viewPointContainerRef.current.offsetWidth;
      setViewPointContainerWidth(width);
    }
  }, [firstRow, lastRow, border, centerContent]);

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper} style={{ "--border": border }}>
        <div className={classes.grid}>
          <div className={classes.left}>
            <div style={{ width: viewPointContainerWidth }}></div>
            <div className={classes.header}>
              <h2
                className={classes.heading}
                style={{ "--color": firstRow[0].header.headingColor }}
              >
                {firstRow[0].header.heading}
              </h2>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.header}>
              <h2
                className={classes.heading}
                style={{ "--color": firstRow[1].header.headingColor }}
              >
                {firstRow[1].header.heading}
              </h2>
            </div>
            <div style={{ width: viewPointContainerWidth }}></div>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div
            className={classes.centerContent}
            style={{
              "--color": centerContent.titleColor,
              "--bg": centerContent.bg,
              "--border": centerContent.border,
            }}
          >
            <h3
              className={classes.title}
              style={{
                "--color": centerContent.titleColor,
              }}
            >
              {centerContent.title}
            </h3>
          </div>

          <div className={classes.row1}>
            {firstRow.map(({ smallCircle, viewPoint, infoContainer }, i) => (
              <React.Fragment key={i}>
                {i === 0 && (
                  <div className={classes.left}>
                    <div
                      className={classes.viewPointContainer}
                      style={{ "--bg": viewPoint.bg }}
                      ref={viewPointContainerRef}
                    >
                      {" "}
                      <div
                        className={classes.circle}
                        style={{
                          "--bg": smallCircle.bg,
                          "--border": smallCircle.border,
                        }}
                      ></div>
                      <p
                        className={classes.viewPoint}
                        style={{ "--color": viewPoint.color }}
                      >
                        {viewPoint.title}
                      </p>
                    </div>
                    <div
                      className={[classes.infoContainer]}
                      style={{ "--bg": infoContainer.bg }}
                    >
                      <p
                        className={classes.info}
                        style={{ "--color": infoContainer.color }}
                      >
                        {infoContainer.info}
                      </p>
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className={classes.right}>
                    {" "}
                    <div
                      className={classes.infoContainer}
                      style={{ "--bg": infoContainer.bg }}
                    >
                      <p
                        className={classes.info}
                        style={{ "--color": infoContainer.color }}
                      >
                        {infoContainer.info}
                      </p>
                    </div>{" "}
                    <div
                      className={classes.viewPointContainer}
                      style={{ "--bg": viewPoint.bg }}
                    >
                      {" "}
                      <div
                        className={classes.circle}
                        style={{
                          "--bg": smallCircle.bg,
                          "--border": smallCircle.border,
                        }}
                      ></div>
                      <p
                        className={classes.viewPoint}
                        style={{ "--color": viewPoint.color }}
                      >
                        {viewPoint.title}
                      </p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={classes.row2}>
            {lastRow.map(({ smallCircle, viewPoint, infoContainer }, i) => (
              <React.Fragment key={i}>
                {i === 0 && (
                  <div className={classes.left}>
                    {" "}
                    <div
                      className={classes.viewPointContainer}
                      style={{ "--bg": viewPoint.bg }}
                    >
                      {" "}
                      <div
                        className={classes.circle}
                        style={{
                          "--bg": smallCircle.bg,
                          "--border": smallCircle.border,
                        }}
                      ></div>
                      <p
                        className={classes.viewPoint}
                        style={{ "--color": viewPoint.color }}
                      >
                        {viewPoint.title}
                      </p>
                    </div>
                    <div
                      className={classes.infoContainer}
                      style={{ "--bg": infoContainer.bg }}
                    >
                      <p
                        className={classes.info}
                        style={{ "--color": infoContainer.color }}
                      >
                        {infoContainer.info}
                      </p>
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className={classes.right}>
                    {" "}
                    <div
                      className={classes.infoContainer}
                      style={{ "--bg": infoContainer.bg }}
                    >
                      <p
                        className={classes.info}
                        style={{ "--color": infoContainer.color }}
                      >
                        {infoContainer.info}
                      </p>
                    </div>{" "}
                    <div
                      className={classes.viewPointContainer}
                      style={{ "--bg": viewPoint.bg }}
                    >
                      {" "}
                      <div
                        className={classes.circle}
                        style={{
                          "--bg": smallCircle.bg,
                          "--border": smallCircle.border,
                        }}
                      ></div>
                      <p
                        className={classes.viewPoint}
                        style={{ "--color": viewPoint.color }}
                      >
                        {viewPoint.title}
                      </p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={classes.grid}>
          <div className={classes.left}>
            <div style={{ width: viewPointContainerWidth }}></div>
            <div className={classes.approachContainer}>
              {" "}
              <div
                className={classes.approachWrapper}
                style={{ "--bg": lastRow[0].approach.bg }}
              >
                <p
                  className={classes.label}
                  style={{ "--color": lastRow[0].approach.labelColor }}
                >
                  {lastRow[0].approach.label}
                </p>{" "}
                <p
                  className={classes.info}
                  style={{ "--color": lastRow[0].approach.infoColor }}
                >
                  {lastRow[0].approach.info}
                </p>
                <div className={classes.curve}></div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.approachContainer}>
              <div
                className={classes.approachWrapper}
                style={{ "--bg": lastRow[1].approach.bg }}
              >
                <p
                  className={classes.label}
                  style={{ "--color": lastRow[1].approach.labelColor }}
                >
                  {lastRow[0].approach.label}
                </p>{" "}
                <p
                  className={classes.info}
                  style={{ "--color": lastRow[1].approach.infoColor }}
                >
                  {lastRow[1].approach.info}
                </p>
                <div className={classes.curve}></div>
              </div>
            </div>
            <div style={{ width: viewPointContainerWidth }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
