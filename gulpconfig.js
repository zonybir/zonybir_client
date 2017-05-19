const html={
    entry:__dirname+'/src/static_page/*.html',
    basepath:__dirname+'/src/static_page/public',
    out:__dirname+'/build/html',
    watch:__dirname+'/src/static_page/**/*.html'
}

const images={
    entry:__dirname+'/src/images/*.*',
    out:__dirname+'/build/img',
    watch:__dirname+'/src/images/*.*'
}

const css={
    entry:__dirname+'/src/style/app.scss',
    out:__dirname+'/build/style',
    watch:__dirname+'/src/style/**/*.scss'
}

const livereloadconfig={
    watch:[__dirname+'/build/**/*.*','!'+__dirname+'/build/**/*.map']
}

exports.html=html;
exports.images=images;
exports.css=css;
exports.livereloadconfig=livereloadconfig;