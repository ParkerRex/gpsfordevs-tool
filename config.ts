import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/coregraphics",
  match: "https://developer.apple.com/documentation/coregraphics/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "coregraphics.json",
};
