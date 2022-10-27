module.exports = {
    entry: {
        index: './src/index.js',
        graph: './src/graph.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    }
};