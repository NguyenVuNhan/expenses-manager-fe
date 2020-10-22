import React, { ReactElement, ReactNode } from "react";
import Select, { SelectProps } from "@material-ui/core/Select";
import { Controller, ControllerProps } from "react-hook-form";
import FormControl, { FormControlProps } from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

// type Props = ControllerProps<"select"> & TextFieldProps;

interface Props {
  controllerProps: ControllerProps<ReactElement>;
  selectProps: SelectProps;
  fullWidth: boolean;
  label?: string;
  children: ReactNode;
}

const FormSelect = ({
  controllerProps,
  fullWidth,
  label,
  children,
  selectProps: { ...rest },
}: Props & FormControlProps) => {
  let cProps: ControllerProps<ReactElement> = {
    ...controllerProps,

    // as: (
    //   <Select label={label} {...rest}>
    //     {children}
    //   </Select>
    // ),
  };

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Controller {...cProps} />
    </FormControl>
  );
};

export default FormSelect;
