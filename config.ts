import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/Swift",
  match: "https://developer.apple.com/documentation/Swift/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 10000000,
  outputFileName: "Swift.json",
};
