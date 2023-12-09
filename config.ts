import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/spritekit",
  match: "https://developer.apple.com/documentation/spritekit/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 100000,
  outputFileName: "spritekit.json",
};
