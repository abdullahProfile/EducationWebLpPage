const {src , dest , watch , series}= require('gulp');
const saas=require('gulp-sass')(require('sass'));

function styleBuild() {
  return src('style.scss')
  .pipe(saas())
  .pipe(dest('css'));
}

function watchTask() {
  watch(['style.scss'], styleBuild)
}

exports.default=series(styleBuild,watchTask);