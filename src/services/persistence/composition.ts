import type { Dependencies } from "./dependencies";

import system from "fs";
import path from "path";
import { currentLocale as locale } from "@env/locale";

export const dependencies: Dependencies = {
  path,
  system,
  locale,
};
