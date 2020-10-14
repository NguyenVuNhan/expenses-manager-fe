import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Test2 = () => {
  const [layout, setLayout] = useState({
    lg: [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
    ],
  });

  return (
    <div>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12, md: 4 }}
        rowHeight={281}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: "yellow" }}>
          <div className="w-100 h-100">color - yellow</div>
        </div>
        <div key="b" style={{ backgroundColor: "green" }}>
          <div>color - green</div>
        </div>
        <div key="c" style={{ backgroundColor: "red" }}>
          <div>color - red</div>
        </div>
        <div key="d" style={{ backgroundColor: "blue" }}>
          <div>color - blue</div>
        </div>
        <div key="e" style={{ backgroundColor: "violet" }}>
          <div>color - violet</div>
        </div>
        <div key="f" style={{ backgroundColor: "lemonchiffon" }}>
          <div>color - lemonchiffon</div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Test2;
