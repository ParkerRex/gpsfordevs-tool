import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/coredata",
  match: "https://developer.apple.com/documentation/coredata/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "coredata.json",
};
