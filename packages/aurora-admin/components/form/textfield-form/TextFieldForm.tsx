import { TextField, type TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const TextFieldForm = (props: TextFieldProps) => {
  const { label, name, ...rest } = props;
  const { register } = useFormContext();
  return (
    <>
      <TextField label={label} {...rest} {...register(name!)} />
    </>
  );
};
