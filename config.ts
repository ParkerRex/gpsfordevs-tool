import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/objectivec",
  match: "https://developer.apple.com/documentation/objectivec/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 10000000,
  outputFileName: "objectivec.json",
};
