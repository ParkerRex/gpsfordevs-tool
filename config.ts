import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/swiftdata/",
  match: "https://developer.apple.com/documentation/swiftdata/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000,
  outputFileName: "output.json",
};
