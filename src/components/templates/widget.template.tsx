import React, { ReactNode } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

interface Props {
  title: string;
  children: ReactNode;
}

const WidgetTemplate = ({ title, children }: Props) => {
  const paperStyle: React.CSSProperties = {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    height: "100%",
    width: "100%",
  };

  return (
    <Paper className="p-auto p-2" elevation={5} style={paperStyle}>
      <Typography variant="h5" className="mb-2 w-100">
        {title}
      </Typography>
      <div style={wrapperStyle}>{children}</div>
    </Paper>
  );
};

export default WidgetTemplate;
