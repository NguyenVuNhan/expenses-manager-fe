import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";

const Test3 = () => {
  return (
    <div className="App" style={{ background: "grey" }}>
      <GridLayout className="layout" cols={16} rowHeight={10} width={500}>
        <div
          key="b"
          data-grid={{ x: 5, y: 0, w: 3, h: 3 }}
          style={{ background: "green" }}
        >
          babb
        </div>

        <div
          key="c"
          data-grid={{ x: 8, y: 0, w: 4, h: 4 }}
          style={{
            color: "black",
            height: "auto",
            width: "auto",
            background: "purple",
            overflow: "hidden",
          }}
        >
          Hello
        </div>
      </GridLayout>
    </div>
  );
};

export default Test3;
