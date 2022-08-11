import gulp from 'gulp';
import { path } from './gulp/config.js';
import { deleteAsync } from 'del';
import fileInclude from 'gulp-file-include';
import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpack from 'webpack-stream';
import imagemin from 'gulp-imagemin';
import gulpIf from 'gulp-if';

const sass = gulpSass(dartSass);
const isBuild = process.argv.includes('--build');
const isDev = !process.argv.includes('--build');

const copy = () => {
  return gulp.src(path.src.files).pipe(gulp.dest(path.build.files));
};

const html = () => {
  return gulp
    .src(path.src.html)
    .pipe(fileInclude())
    .pipe(replace(/@assets\//g, './assets/'))
    .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.stream());
};

const scss = () => {
  return gulp
    .src(path.src.scss, { sourcemaps: isDev })
    .pipe(replace(/@assets\//g, '../assets/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      gulpIf(
        isBuild,
        autoPrefixer({
          grid: true,
          overrideBrowserlist: ['last 3 versions'],
          cascade: true,
        })
      )
    )
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
};

const js = () => {
  return gulp
    .src(path.src.js, { sourcemaps: isDev })
    .pipe(
      webpack({
        mode: isBuild ? 'production' : 'development',
        output: {
          filename: 'app.js',
        },
      })
    )
    .pipe(gulp.dest(path.build.js))
    .pipe(browserSync.stream());
};

const assets = () => {
  return gulp
    .src(path.src.assets)
    .pipe(
      gulpIf(
        isBuild,
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3, // 0 to 7
        })
      )
    )
    .pipe(gulp.dest(path.build.assets))
    .pipe(gulp.src(path.src.svg))
    .pipe(gulp.dest(path.build.assets))
    .pipe(browserSync.stream());
};

const remove = () => {
  return deleteAsync(path.clean.files);
};

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.assets, assets);
};

const server = (done) => {
  browserSync.init({
    server: {
      baseDir: `${path.build.html}`,
    },
    notify: false,
    port: 3000,
  });
};

const globalTasks = gulp.parallel(copy, html, scss, js, assets);

export const build = gulp.series(remove, globalTasks);
export const dev = gulp.series(
  remove,
  globalTasks,
  gulp.parallel(watcher, server)
);

gulp.task('default', dev);
