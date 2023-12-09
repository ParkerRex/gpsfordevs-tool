import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/Vision",
  match: "https://developer.apple.com/documentation/Vision/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 100000,
  outputFileName: "vision.json",
};
