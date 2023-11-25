import { StyledSnackbar } from "./snackbar.styled";
import { SnackbarProps } from "./snackbar.types";

export const Snackbar = (props: SnackbarProps) => {
  return <StyledSnackbar {...props} />;
};

export default Snackbar;
