import yargs from "yargs";

export const args = yargs.option("production", {
    boolean: true,
    default: false,
    describe: "min all files"
}).option("watch", {
    boolean: true,
    default: false,
    describe: "watch all files"
}).option("verbose", {
    boolean: true,
    default: false,
    describe: "log all files"
}).option("sourcemaps", {
    describe: "map all files"
}).option("port", {
    string: true,
    default: 8080,
    describe: "server port config"
}).argv;