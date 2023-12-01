import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/technologies",
  match: "https://developer.apple.com/documentation/**",
  selector: `doc-content-wrapper`,
  maxPagesToCrawl: 1000,
  outputFileName: "output.json",
};
