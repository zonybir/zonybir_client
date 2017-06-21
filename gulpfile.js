'use strict'

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    maps= require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    include = require('gulp-file-include'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    livereload = require('livereload');

const {html,images,css,js,livereloadconfig} = require('./gulpconfig');

gulp.task('html',()=>{
    return gulp.src(html.entry)
            .pipe(include({
                prefix:'@',
                basepath:html.basepath
            }))
            .pipe(gulp.dest(html.out))
})
gulp.task('copy_index',()=>{
    return gulp.src(html.copyEntry)
            .pipe(gulp.dest(html.copyOut))
})
gulp.task('images',()=>{
    return gulp.src(images.entry)
            .pipe(gulp.dest(images.out))
})

gulp.task('sass',()=>{
    return gulp.src(css.entry)
            .pipe(maps.init())
            .pipe(sass({
                //outputStyle: 'compressed'
            }).on('error',sass.logError))
            .pipe(autoprefixer({
                browsers: [
                    'last 2 version',
                    'Android >= 4.0',
                    'iOS >= 6'
                ]
            }))
            .pipe(maps.write('./'))
            .pipe(gulp.dest(css.out))
})

gulp.task('webpack',()=>{
    return gulp.src('./src/script/app.js')
            .pipe(webpack({
                watch:true,
                output:{
                    filename:'./build/script/app.js'
                },
                module:{
                    loaders:[
                        {
                            test:/\.js$|\.jsx$/,
                            loader:'babel',
                            query:{
                                presets:['react','es2015']
                            }
                        }
                    ]
                },
                resolve:{
                    extensions:['','.js','.jsx']
                },
                devtool:'source-map'
            }))
            .pipe(gulp.dest('./'))
})

gulp.task('dev',['html','copy_index','images','sass'],()=>{
    let livereloadServer = livereload.createServer({
        port:35730
    })
    livereloadServer.watch(livereloadconfig.watch);

    gulp.watch(html.watch,['html'])
    gulp.watch(html.copyEntry,['copy_index'])
    gulp.watch(images.watch,['images'])
    gulp.watch(css.watch,['sass'])
    //gulp.watch(js.watch,['webpack'])
})