module.exports={
    path: 'i_detail/:id',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
        cb(null, require('../containers/i_detail').default)
        }, 'detailPage')
    }
}