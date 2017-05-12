'use strict'

var gulp = require('gulp'),
    webpack = require('gulp-webpack');
        

gulp.task('webpack',()=>{
    return gulp.src('./src/app.js')
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