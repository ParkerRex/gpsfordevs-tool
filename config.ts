import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/cloudkit/",
  match: "https://developer.apple.com/documentation/cloudkit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1500,
  outputFileName: "cloudkit.json",
};
