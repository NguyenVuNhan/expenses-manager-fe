import React from "react";

if (process.env.NODE_ENV !== "production") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    onlyLogs: true,
    trackAllPureComponents: true,
  });
}
