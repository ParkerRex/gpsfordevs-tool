import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/uikit",
  match: "https://developer.apple.com/documentation/uikit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "uikit.json",
};
