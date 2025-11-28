import { Button, type ButtonProps } from "@mui/material";

interface SubmitButtonProps extends ButtonProps {
  type?: "submit" | "button" | "reset";
}

export const SubmitButton = ({
  children,
  type = "submit",
  ...props
}: SubmitButtonProps) => {
  return (
    <Button type={type} {...props}>
      {children}
    </Button>
  );
};
