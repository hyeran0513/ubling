const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// import
const path = require("path");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname는 node.js에서 사용하는 변수명이다. 현재 파일의 실제 경로 찾아준다.
    // 따라서 절대경로의 dist를 찾아준다.
    // dist 폴더명은 변경이 가능하다.
    //    path: path.resolve(__dirname, 'dist'),
    //path: path.resolve(__dirname, "app"),
    // 파일명 또한 변경이 가능하다.
    //filename: 'main.js'
    //filename: "app.js",
    // 해당 경로의 기존 js파일은 삭제되도록 설정
    clean: true,
  },

  module: {
    rules: [
      {
        // .css파일을 찾도록 하는 정규표현식
        test: /\s?.css$/,
        use: [
          // 먼저 css-loader가 읽히고 style-loader가 동작한다. 순서가 중요하다.!!
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    // 위에 선언한 변수와 맞춰주어야 한다.
    new HtmlPlugin({
      // 패키지를 실행하면 기본적으로 동작할 html 파일 지정
      template: "./index.html",
    }),

    new CopyPlugin({
      patterns: [
        // static 폴더 안에 파일들이 dist라는 폴더로 들어가도록 설정
        { from: "static" },
      ],
    }),

    require("autoprefixer"),
  ],

  devServer: {
    host: "localhost",
  },
};
