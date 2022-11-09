module.exports = {
    entry: {
        index: './index.js',
        graph: './graph.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/../dist'
    }
};