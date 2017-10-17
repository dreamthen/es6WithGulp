import yargs from "yargs";

<<<<<<< HEAD
export const args = yargs.option('production', {
    boolean: true,
    default: false,
    describe: "min all javaScripts"
=======
export const args = yargs.option("production", {
    boolean: true,
    default: false,
    describe: "min all files"
>>>>>>> 0343d0961d3dbf5b59074c89be0342a393a58df0
}).option("watch", {
    boolean: true,
    default: false,
    describe: "watch all files"
}).option("verbose", {
    boolean: true,
    default: false,
    describe: "log all files"
}).option("sourcemaps", {
<<<<<<< HEAD
    describe: "sourceMap all files"
}).option("port", {
    string: true,
    default: 8080,
    describe: "server port"
=======
    describe: "map all files"
}).option("port", {
    string: true,
    default: 8080,
    describe: "server port config"
>>>>>>> 0343d0961d3dbf5b59074c89be0342a393a58df0
}).argv;