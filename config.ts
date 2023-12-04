import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/avfoundation",
  match: "https://developer.apple.com/documentation/avfoundation/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "avfoundation.json",
};
