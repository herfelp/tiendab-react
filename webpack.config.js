module.exports = {
  entry:'./src/index.jsx',
  output:{
    path: __dirname + '/public/js',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        use:[
          {
            loader:'file-loader',
           options:{
             name: '[name].[ext]',
             outputPath:'/img',
             publicPath:'/img'
           }
         }
        ]
      }
    ]
  }
}
