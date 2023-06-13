const gulp = require('gulp');
const concat = require('gulp-concat');
const cssMin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = require('gulp-imagemin');
const stripJs = require('gulp-strip-comments');
const stripCss = require('gulp-strip-css-comments');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

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
    .pipe(babel({
        comments: true,
        presets: ['@babel/env']
    }))
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

function index(){
    return gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
}

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/*.html').on('change', gulp.parallel(index, reload))
    gulp.watch('./src/styles/*.css').on('change', gulp.parallel(styles, reload))
    gulp.watch('./src/scripts/*.js').on('change',gulp.parallel(scripts, reload))
})
/*Como mencionado durante o vídeo, não temos necessidade de executar a minificação das 
imagens constantemente, então adicionei o observador apenas nos arquivos HTML, CSS e JS
Já realizando em paralelo, a minificação dos arquivos para que assim, consigamos realizar
a observação no arquivo final.
*/


function end(callback){
    console.log('Realizando Processos!')
    return callback()
}

/*Mantive o default completo em execução paralela com a 
intenção de melhorar o desempenho durante a execução total.*/
exports.default = gulp.parallel(styles, images, scripts, index, end);



//Utilizei durante o módulo anterior.
// exports.watch = function(){ //função de monitoramento do Gulp
//     gulp.watch('./src/styles/*.css', gulp.parallel(styles))
//     gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
// }