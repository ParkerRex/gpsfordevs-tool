import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/app_clips",
  match: "https://developer.apple.com/documentation/app_clips/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 10000000,
  outputFileName: "app_clips.json",
};
