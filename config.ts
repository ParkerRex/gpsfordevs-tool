import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/WidgetKit",
  match: "https://developer.apple.com/documentation/WidgetKit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "WidgetKit.json",
};
