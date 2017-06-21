const html={
    entry:__dirname+'/src/static_page/*.html',
    basepath:__dirname+'/src/static_page/public',
    out:__dirname+'/build/html',
    watch:__dirname+'/src/static_page/**/*.html',
    copyEntry:__dirname+'/src/index.html',
    copyOut:__dirname+'/build/'
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

const js={
    entry:__dirname+'/scr/script/app.js',
    out:__dirname+'/build/script/app.js',
    watch:__dirname+'/src/script/**'
}
exports.html=html;
exports.images=images;
exports.css=css;
exports.js=js;
exports.livereloadconfig=livereloadconfig;