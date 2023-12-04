import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/foundation",
  match: "https://developer.apple.com/documentation/foundation/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "foundation.json",
};
