import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/corehaptics",
  match: "https://developer.apple.com/documentation/corehaptics/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "corehaptics.json",
};
