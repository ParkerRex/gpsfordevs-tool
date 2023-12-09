import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/charts",
  match: "https://developer.apple.com/documentation/charts/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 100000,
  outputFileName: "swiftcharts.json",
};
