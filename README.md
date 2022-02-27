# ubling

> 프로젝트 파토냈지만.. webpack 활용과 scss, javascript 공부를 좀 하려구 만든 레포지토리
<br/>

#### common.scss: 공통된 scss를 모아둔 파일
```
/* common.scss 내용 예시 */
margin: 0;
padding: -;
```
<br/>

#### getElementById vs querySelector
```
<form id="userForm">
  <input id="username" type="text" value="Guilherme" />
</form>

/* getElementById */
const username = document.getElementById("username");

/* querySelector */
const username = document.querySelector("#userForm #username");
```
<br/>

> querySelector은 더 구체적으로 원하는 엘리먼트를 선택할 수 있어서 사용 추천
 <br/> 
 <br/> 

#### onClick vs addEventListener

```
function copy_to_clipboard() {
  var copyText = document.getElementById('code');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('Copy');
  alert('방코드가 복사되었습니다.');
}

const copyBtn = document.querySelector('#copyBtn');

/* onClick */
copyBtn.onClick = () => {
  copy_to_clipboard();
};

/* addEventListener */
copyBtn.addEventListener('click', () => {
  copy_to_clipboard();
});
```
<br/>

> onClick: 덮어쓰기 / addEventListener: 누적 <br/>
> ∴ addEventListener 사용 추천
