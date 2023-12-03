import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/mapkit",
  match: "https://developer.apple.com/documentation/mapkit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "mapkit.json",
};
