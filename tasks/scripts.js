import gulp from "gulp";
import gulpif from "gulp-if";
import concat from "gulp-concat";
import webapack from "webpack";
import gulpWebpack from "webpack-stream";
import named from "vinyl-named";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import livereload from "gulp-livereload";
import uglify from "gulp-uglify";
import {log, colors} from "gulp-util";
import {args} from "./util/args";

gulp.task("scripts", () => {
    return gulp.src("app/js/index.js")
        .pipe(plumber({
            errorHandle: function () {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                loaders: [
                    {
                        test: /\.js[x]$/,
                        loaders: ["babel"]
                    }
                ]
            }
        }), null, (error, status) => {
            log(`Failed '${colors.cyan('scripts')}'`, status.toString({
                chunks: false
            }));
        })
        .pipe(gulp.dest("server/public/js"))
        .pipe(rename({
            basename: "cp",
            extname: ".min.js"
        }))
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                "quote_keys": true
            }
        }))
        .pipe(gulp.dest("server/public/js"))
        .pipe(gulpif(args.watch, livereload()));
});
