import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/carplay",
  match: "https://developer.apple.com/documentation/carplay/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "carplay.json",
};
