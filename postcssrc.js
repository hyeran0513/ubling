// module.exports를 이용하여 핟당된 내용을 밖으로 내보내는 기능
// node.js에서 동작
module.exports = {
  plugins: [
    // autoprefixer패키지를 require을 함수를 이용하여 직접 연결할 수 있도록 설정
    require("autoprefixer"),
  ],
};
