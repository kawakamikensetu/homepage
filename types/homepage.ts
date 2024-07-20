import type { Image } from "newt-client-js";

export interface ProjectGallery {
  _id: string;
  body: string;
  image: Image;
  url?: string;
}
