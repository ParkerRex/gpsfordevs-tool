import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/avkit",
  match: "https://developer.apple.com/documentation/avkit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 100000,
  outputFileName: "avkit.json",
};
