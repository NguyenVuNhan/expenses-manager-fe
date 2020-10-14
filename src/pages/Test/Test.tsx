import React, { useState } from "react";
import "./Test.css";
import { WidthProvider, Responsive } from "react-grid-layout";
import Button from "@material-ui/core/Button";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface ItemType extends ReactGridLayout.Layout, ReactGridLayout.CoreProps {
  add: boolean;
}

const Test = () => {
  const [items, setItems] = useState<ItemType[]>(
    [0, 1, 2, 3, 4].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        add: i === list.length - 1,
        isResizable: true,
      };
    })
  );
  const [counter, setCounter] = useState<number>(0);
  const [breakpoints, setBreakpoints] = useState<any>();
  const [cols, setCols] = useState<any>();
  const [layout, setLayout] = useState<ReactGridLayout.Layout[]>();

  const onAddItem = () => {
    setItems([
      ...items,
      {
        i: "n" + counter,
        x: (items.length * 2) % (cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
        add: false,
        draggableHandle: ".drag",
      },
    ]);
    setCounter(counter + 1);
  };

  const onLayoutChange = (newLayout: ReactGridLayout.Layout[]) => {
    setLayout(newLayout);
  };

  const onBreakpointChange = (newBreakpoints: string, newCols: number) => {
    setBreakpoints(breakpoints);
    setCols(cols);
  };

  const onRemoveItem = (i: string) => {
    setItems(items.filter((item) => item.i !== i));
  };

  const createEl = (el: ItemType) => {
    const removeStyle: React.CSSProperties = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const i = el.i;
    return (
      <div key={i} data-grid={el} className="my-grid">
        {el.add ? (
          <Button
            className="add text"
            variant="contained"
            onClick={onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </Button>
        ) : (
          <Button variant="contained" className="text">
            {i}
          </Button>
        )}
        <span className="drag">[DRAG HERE]</span>
        <Button
          className="remove"
          variant="contained"
          style={removeStyle}
          onClick={() => onRemoveItem(i)}
        >
          x
        </Button>
      </div>
    );
  };

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout
        className="layout"
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
      >
        {items.map((item, i) => createEl(item))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default Test;
