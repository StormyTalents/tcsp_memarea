import { useMemo } from "react";
import { useRouter } from "next/router";

import {
  VideoCameraIcon,
  DocumentTextIcon,
  MusicNoteIcon,
} from "@heroicons/react/solid";

import { Button } from "./../../components/button";
import { Resource } from "../../types";
import { Resource as ResourceItem } from "./../../components/resource";

export const Resources = () => {
  const router = useRouter();

  const resources = useMemo<Array<Resource>>(
    () => [
      {
        id: "1",
        title: "The Credit Success Journal",
        course: "The Credit Solution Program",
        type: "pdf",
      },
      {
        id: "2",
        title: "Divorce & Credit",
        course: "The Credit Solution Program",
        type: "mov",
      },
      {
        id: "3",
        title: "Dealing with Tax Liens",
        course: "The Credit Solution Program",
        type: "audio",
      },
    ],
    []
  );
  return (
    <div>
      <div tw="flex items-center gap-2 my-6">
        <Button variant="primary" color="brand" title="All" />
        <Button
          variant="primary"
          color="gray"
          title="Documents"
          iconPos="left"
          icon={<DocumentTextIcon tw="h-5 w-5" />}
        />

        <Button
          variant="primary"
          color="gray"
          title="Videos"
          iconPos="left"
          icon={<VideoCameraIcon tw="h-5 w-5" />}
        />

        <Button
          variant="primary"
          color="gray"
          title="Audio"
          iconPos="left"
          icon={<MusicNoteIcon tw="h-5 w-5" />}
        />
      </div>
      <div tw="flex justify-between gap-4">
        {resources.map((_resource) => (
          <ResourceItem
            key={_resource.id}
            {..._resource}
            onClickView={() => router.push(`./resources/${_resource.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
