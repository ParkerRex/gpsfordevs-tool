import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/ARKit",
  match: "https://developer.apple.com/documentation/ARKit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "ARKit.json",
};
