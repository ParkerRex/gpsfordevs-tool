import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/coreml",
  match: "https://developer.apple.com/documentation/coreml/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "coreml.json",
};
