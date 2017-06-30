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

const gutil = require('gulp-util'),
    _webpack= require('webpack'),
    path = require('path');

const {html,images,css,js,livereloadconfig,lib} = require('./gulpconfig');

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

gulp.task('webpack_dev',()=>{
    startWebpack(true);
})
gulp.task('webpack_pro',()=>{
    startWebpack(false);
})
let isFirstRun=true;
const startWebpack=(dev)=>{
    let webpackConfig={
        entry:{
            app:'./src/script/app.js',
            vendor:lib
        },
        output:{
            path:path.resolve(__dirname+'/build/script'),
            filename:'[name].js'
        },
        module:{
            loaders:[
                {
                    test:/\.js$|\.jsx$/,
                    loader:'babel-loader',
                    query:{
                        presets:['react','es2015']
                    }
                }
            ]
        },
        resolve:{
            extensions:['.js','.jsx']
        },
        plugins:[
            new _webpack.optimize.CommonsChunkPlugin({
                names:['vendor']
            })
        ]
    };
    if(dev){
        //webpackConfig.devtool='source-map';
        webpackConfig.watch=true;
    }
    _webpack(webpackConfig,(err,stats)=>{
        if(err) throw new gutil.PluginError('webpack',err);
        if(dev&&!isFirstRun){
            gutil.log("[webpack]",stats.toString().split('\n').slice(0,6).join('\n'));
        }else{
            gutil.log("[webpack]",stats.toString({colors:'#ff0000'}));
        }
        isFirstRun=false;
    })
}

gulp.task('dev',['html','copy_index','images','sass','webpack_dev'],()=>{
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