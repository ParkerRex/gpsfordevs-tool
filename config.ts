import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/healthkit/",
  match: "https://developer.apple.com/documentation/healthkit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 2500,
  outputFileName: "healthkit.json",
};
