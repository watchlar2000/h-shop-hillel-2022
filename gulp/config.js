const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    files: `${buildFolder}/files`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    assets: `${buildFolder}/assets`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/styles.scss`,
    js: `${srcFolder}/js/app.js`,
    assets: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/assets/**/*.svg`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    assets: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
  },
  clean: {
    files: `${buildFolder}/**/*.*`,
  },
};
