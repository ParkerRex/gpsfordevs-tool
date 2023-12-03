import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/pencilkit",
  match: "https://developer.apple.com/documentation/pencilkit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 25000,
  outputFileName: "pencilkit.json",
};
