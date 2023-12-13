import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/metalperformanceshaders",
  match: "https://developer.apple.com/documentation/metalperformanceshaders/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "metalperformanceshaders.json",
};
