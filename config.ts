import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/appkit",
  match: "https://developer.apple.com/documentation/appkit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 10000000,
  outputFileName: "appkit.json",
};
