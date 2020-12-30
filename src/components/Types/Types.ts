import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type dataProps = {
  id: string;
  data: postProps;
};

export type postProps = {
  name?: string;
  description?: string;
  photoUrl?: string;
  message?: string;
};

export type userState = {
  email: string;
  uid: string;
  displayName: string;
  photoUrl: string;
};

export type User = {
  user: userState | null;
};

export type userSelect = {
  user: User;
};

export type HeaderOptionProps = {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  Title?: string;
  avatar?: string;
  onClick?: any;
};
