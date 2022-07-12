import tw, { styled } from "twin.macro";
import { CheckIcon, EyeIcon } from "@heroicons/react/solid";

import { Badge } from "../badge";
import { CourseStatus } from "./../../types";

type StatusChipProps = {
  status: CourseStatus;
};

export const StatusChip = ({ status }: StatusChipProps) => {
  return (
    <Badge
      icon={status === "completed" ? <CheckIcon /> : <EyeIcon />}
      title="Completed"
      color={status === "completed" ? "gogreen" : "sunglow"}
      size="sm"
    />
  );
};
