const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = require('gulp-imagemin');
const stripJs = require('gulp-strip-comments');
const stripCss = require('gulp-strip-css-comments');

function styles (){
    return gulp.src([
        './src/styles/*.css',
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/jquery-ui/*.css',
        './vendor/Owl/css/*.css'
    ])
    .pipe(stripCss())
    .pipe(concat('styles.css'))
    .pipe(cssMin())
    .pipe(rename ({ suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
}


function scripts (){
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/Owl/js/owl.js',
        './vendor/jquery-ui/jquery-ui.js',
        './vendor/Mask/jquery.mask.js',
        './vendor/Validation/jquery.validate.js',
        './vendor/Validation/localization/messages_pt_BR.js',
        './src/scripts/*.js'
    ])
    .pipe(stripJs())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) 
        .pipe(gulp.dest('./dist/js'))
}

function images(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function(){ //função de monitoramento do Gulp
    gulp.watch('./src/styles/*.css', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}