import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer.apple.com/documentation/appstoreconnectapi",
  match: "https://developer.apple.com/documentation/appstoreconnectapi/**",
  selector: `.doc-content`,
  maxPagesToCrawl: 1000000,
  outputFileName: "appstoreconnect.json",
};
