import React, { Suspense, useState, useMemo, lazy } from "react";
import MainTemplate from "components/templates/main.template";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { breakPoints, layouts as lay } from "constants/style.const";
import { getLayout } from "helpers/rgl.helpers";
import widgets from "components/widgets";
import Loading from "pages/Loading";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Home = () => {
  // TODo: get widget from local storage
  const [myWidgets, setMyWidgets] = useState<string[]>([
    "IncomeExpenseWidget",
    "WalletWidget",
    "ExpensesFlowWidget",
    "TransactionsWidget",
  ]);
  const layout = getLayout(myWidgets, lay);
  const [layouts, setLayouts] = useState<ReactGridLayout.Layouts>(layout);

  const onLayoutChange = (
    currentLayout: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts
  ) => {
    setLayouts(allLayouts);
  };

  const children = useMemo(
    () =>
      myWidgets.map((widget) => {
        const LazyComponent = lazy(() => import(`../../${widgets[widget]}`));
        return (
          <div key={widget}>
            <Suspense fallback={<Loading />}>
              <LazyComponent />
            </Suspense>
          </div>
        );
      }),
    [myWidgets]
  );

  return (
    <MainTemplate>
      <ResponsiveGridLayout
        className="layout w-100"
        layouts={layouts}
        breakpoints={breakPoints}
        onLayoutChange={onLayoutChange}
        rowHeight={30}
      >
        {children}
      </ResponsiveGridLayout>
    </MainTemplate>
  );
};

export default Home;
