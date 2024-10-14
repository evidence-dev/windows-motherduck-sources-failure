import { cancel, intro,isCancel, text, outro, spinner } from "@clack/prompts";
import * as duckdb from "duckdb-async";

intro("Motherduck Windows Reproduction")

const motherduckToken = await text({
  message: "Input your motherduck token",
  validate: (value) => value.length === 0 ? "Value is required" : undefined
})

if (isCancel(motherduckToken)) {
  cancel("Cancelled!")
  process.exit()
}

/** @type {duckdb.Database} */
let ddb;
try {
  ddb = await duckdb.Database.create(`md:?motherduck_token=${motherduckToken}`)
} catch (e) {
  cancel(`Error creating connection to DuckDB \n\t${e.message.split("\n").join("\n\t")}`)
  process.exit()
}
const s = spinner();

s.start("Running 'SELECT 1'")
try {
  await ddb.all("SELECT 1")
} catch (e) {
  s.stop("Query Failed!")
  cancel(`Error running query\n\t${e.message.split("\n").join("\n\t")}`)
}
s.stop("Query Ran Successfully")

outro("Done")
