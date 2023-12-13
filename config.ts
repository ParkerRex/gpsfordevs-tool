import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/AppIntents",
  match: "https://developer.apple.com/documentation/AppIntents/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "AppIntents.json",
};
