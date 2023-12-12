import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/corebluetooth",
  match: "https://developer.apple.com/documentation/corebluetooth/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "corebluetooth.json",
};
