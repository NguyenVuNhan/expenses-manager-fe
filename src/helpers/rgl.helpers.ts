type BreakpointsType = "lg" | "md" | "sm" | "xs" | "xxs";

interface LayoutsType {
  [T: string]: { [P: string]: { x: number; y: number; w: number; h: number } };
}

export const getLayout = (
  widgets: string[],
  layouts: LayoutsType
): ReactGridLayout.Layouts => {
  return widgets.reduce((obj: any, widget: string) => {
    if (layouts[widget].lg)
      try {
        obj["lg"].push({ ...layouts[widget].lg, i: widget });
      } catch (e) {
        obj["lg"] = [{ ...layouts[widget].lg, i: widget }];
      }
    if (layouts[widget].md)
      try {
        obj["md"].push({ ...layouts[widget].md, i: widget });
      } catch (e) {
        obj["md"] = [{ ...layouts[widget].md, i: widget }];
      }
    if (layouts[widget].sm)
      try {
        obj["sm"].push({ ...layouts[widget].sm, i: widget });
      } catch (e) {
        obj["sm"] = [{ ...layouts[widget].sm, i: widget }];
      }
    if (layouts[widget].xs)
      try {
        obj["xs"].push({ ...layouts[widget].xs, i: widget });
      } catch (e) {
        obj["xs"] = [{ ...layouts[widget].xs, i: widget }];
      }
    if (layouts[widget].xxs)
      try {
        obj["xxs"].push({ ...layouts[widget].xxs, i: widget });
      } catch (e) {
        obj["xxs"] = [{ ...layouts[widget].xxs, i: widget }];
      }
    return obj;
  }, {});
};
