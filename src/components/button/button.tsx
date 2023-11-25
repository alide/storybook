import { StyledButton } from "./button.styled";
import { ButtonProps } from "./button.types";

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
