import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/Homekit",
  match: "https://developer.apple.com/documentation/Homekit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "Homekit.json",
};
