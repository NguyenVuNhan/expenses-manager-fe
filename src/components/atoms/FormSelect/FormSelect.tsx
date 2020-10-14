import React, { useState } from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {
  UnpackNestedValue,
  NestedValue,
  SetValueConfig,
} from "react-hook-form/dist/types/form";
import {
  DeepPartial,
  LiteralToPrimitive,
} from "react-hook-form/dist/types/utils";
import { FieldValues } from "react-hook-form/dist/types/fields";

type ExtraProps<TFieldValues extends FieldValues = FieldValues> = {
  setValue: <
    TFieldName extends string,
    TFieldValue extends TFieldValues[TFieldName]
  >(
    name: TFieldName,
    value: TFieldValue extends NestedValue<infer U>
      ? U
      : UnpackNestedValue<DeepPartial<LiteralToPrimitive<TFieldValue>>>,
    options?: SetValueConfig
  ) => void;
};

type Props<TFieldValues> = ExtraProps<TFieldValues> & TextFieldProps;

const FormSelect = <TFieldValues extends FieldValues = FieldValues>({
  children,
  setValue,
  onChange,
  name,
  value,
  defaultValue,
  ...rest
}: Props<TFieldValues>) => {
  const [val, setVal] = useState(
    value ? value : defaultValue ? defaultValue : ""
  );

  const handleChange = (event: any) => {
    if (onChange) onChange(event);
    if (name) setValue(name, event.target.value);
    setVal(event.target.value);
  };

  return (
    <TextField
      select
      value={value && value !== val ? value : val}
      {...rest}
      onChange={handleChange}
    >
      {children}
    </TextField>
  );
};

export default FormSelect;
