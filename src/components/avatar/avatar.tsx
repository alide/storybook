import { StyledAvatar } from "./avatar.styled";
import { AvatarProps } from "./avatar.types";

export const Avatar = (props: AvatarProps) => {
  return <StyledAvatar {...props} />;
};

export default Avatar;
