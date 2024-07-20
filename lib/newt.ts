import "server-only";

import { createClient } from "newt-client-js";
import { cache } from "react";

import { ProjectGallery } from "@/types/homepage";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getProjects = cache(async () => {
  const { items } = await client.getContents<ProjectGallery>({
    appUid: "homepage",
    modelUid: "projectGallery",
    query: {
      select: ["_id", "body", "image", "url"],
    },
  });
  return items;
});
