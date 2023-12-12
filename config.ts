import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/accelerate",
  match: "https://developer.apple.com/documentation/accelerate/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "accelerate.json",
};
