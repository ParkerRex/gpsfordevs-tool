import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/musickit",
  match: "https://developer.apple.com/documentation/musickit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "musickit.json",
};
