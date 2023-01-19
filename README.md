# Tarsty (와인바 소개 웹)

## 배포링크
___
개발 기간(2023.01.07-2023.01.18 1.5주)

[Tarsty홈페이지](https://elaborate-panda-8af2da.netlify.app/)
<br></br>
## 화면 이미지
___
<details>
    <summary>홈</summary>
<img width="400" alt="KakaoTalk_Photo_2023-01-18-23-27-49" src="https://user-images.githubusercontent.com/104298444/213198148-04c78d78-0ec0-49d9-af2f-b4351df7f809.png">
<img width="400" alt="2" src="https://user-images.githubusercontent.com/104298444/213198698-d25f4e28-1ba4-4c92-821d-617cf791c16e.png">
</details>
<details>
    <summary>와인</summary>
<img width="400" alt="3" src="https://user-images.githubusercontent.com/104298444/213198968-f3cc4cc6-fae6-4f85-9c6c-49d49bf9308a.png">
<img width="400" alt="4" src="https://user-images.githubusercontent.com/104298444/213198979-59a86ea2-1aeb-4909-b268-d2d3b7846138.png">
</details>
<details>
    <summary>다이닝</summary>
<img width="400" alt="5" src="https://user-images.githubusercontent.com/104298444/213199226-7ba6e673-df72-4b3b-bad2-605255202216.png">
<img width="400" alt="6" src="https://user-images.githubusercontent.com/104298444/213199237-505bb401-be4a-4916-8314-d6a383fb13ff.png">
</details>
<details>
    <summary>탈스티 소개</summary>
<img width="400" alt="7" src="https://user-images.githubusercontent.com/104298444/213199416-23140f09-bc7d-43e9-88d6-b67209008467.png">
<img width="400" alt="8" src="https://user-images.githubusercontent.com/104298444/213199424-930f0c15-f6fb-47d2-bdef-1a7961bd7ae2.png">
</details>
<details>
    <summary>매장안내</summary>
<img width="400" alt="9" src="https://user-images.githubusercontent.com/104298444/213199429-a0889e37-9746-470d-b380-354a3e0a4c47.png">
<img width="400" alt="10" src="https://user-images.githubusercontent.com/104298444/213199443-44cac298-38ae-4d3b-acdb-2a6b53ddfbf0.png">
</details>
<br></br>

## 프로젝트 개요
___
#### 1. 주제선정 이유
지인이 운영하는 와인바를 홍보 하고자 주제를 선정했습니다.
해당 와인바에 방문하기 전, 홈페이지가 없어 업체 정보(장소는 어떻게 구성되어 있는지, 와인은 어떤 것이 있는지 등)를 얻기가 제한적이었습니다. 이를 해결하고 홍보에 도움이 되고 싶습니다.

#### 2. 문서
[기획서](https://docs.google.com/document/d/1jv8zAzjY-swQsYjKBM4C4rm6-DsO0Kw9jPF1HSee1Nk/edit)

#### 3. 기능 목표
1. 각 기능 컴포넌트화
2. Carousel 기능 도입
3. 지도 기능 (카카오맵 API)
<br></br>
## 기술스택
___
Front-End
* <img src="https://img.shields.io/badge/vue.js-40B783?style=for-the-badge&logo=vue.js&logoColor=white"><img src="https://camo.githubusercontent.com/47d8237d822743a0389cd64dbeffce5220d3237fb6fc15f480df19cbd4d3cb77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d48544d4c35266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=HTML5&amp;logoColor=white" style="max-width: 100%; user-select: auto;"><img src="https://camo.githubusercontent.com/cb4472f9af9977db27f95300d3802acf99b3bd55e5596fe944be773754ddb6b2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d43535333266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=CSS3&amp;logoColor=white" style="max-width: 100%; user-select: auto;"><img src="https://camo.githubusercontent.com/eea3c89b5aa320f391bd9ce962c4ef7d92c943a56c376c6cbac82be641585101/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%; user-select: auto;">
* <img src="https://camo.githubusercontent.com/5e4de9f6b76c491d51472b924bd82ea6ee0b584c6c0bc89489e11631bcdcf551/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c656420636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c656420636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&amp;logo=styled components&amp;logoColor=white" style="max-width: 100%; user-select: auto;"><img src="https://camo.githubusercontent.com/def4b95383d923b6ee6e023bc48459af0b4cb2a3f4e91046b7b80c52af220fd2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5765627061636b2d3844443646393f7374796c653d666f722d7468652d6261646765266c6f676f3d5765627061636b266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&amp;logo=Webpack&amp;logoColor=black" style="max-width: 100%; user-select: auto;">
* <img src="https://camo.githubusercontent.com/8ad8bdf1c23f7eb21cc5ed62dfdb676ef39d6d8d4394827a4bc4880d34ca142b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f45534c696e742d3442333243333f7374796c653d666f722d7468652d6261646765266c6f676f3d45534c696e74266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&amp;logo=ESLint&amp;logoColor=white" style="max-width: 100%; user-select: auto;"><img src="https://camo.githubusercontent.com/7377d22a8cae7fb93e3a601f9137488132a46ccad5409e02504d379e15ce858b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f50726574746965722d4637423933453f7374796c653d666f722d7468652d6261646765266c6f676f3d5072657474696572266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&amp;logo=Prettier&amp;logoColor=black" style="max-width: 100%; user-select: auto;"><img src="https://camo.githubusercontent.com/7e0b70f915b88c556f28818f297ac350b6d01036be64a28cfd7aaeb63b8e2c0b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426162656c2d4639444333453f7374796c653d666f722d7468652d6261646765266c6f676f3d426162656c266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&amp;logo=Babel&amp;logoColor=black" style="max-width: 100%; user-select: auto;">




Deploy
* <img src="https://camo.githubusercontent.com/d40fd7f6edc4413e104086306f702da23cb25df8d6b6f47c9219dd781151cf82/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65746c6966792d3030433742373f7374796c653d666f722d7468652d6261646765266c6f676f3d4e65746c696679266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&amp;logo=Netlify&amp;logoColor=white" style="max-width: 100%; user-select: auto;">
개발 도구
* <img src="https://camo.githubusercontent.com/fdb91eb7d32ba58701c8e564694cbe60e706378baefa180dbb96e2c1cfb9ec0f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666f722d7468652d6261646765266c6f676f3d476974266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&amp;logo=Git&amp;logoColor=white" style="max-width: 100%; user-select: auto;"><img src="https://camo.githubusercontent.com/4c8ff408d7b8658d244e8dc7a764f24381721f63654652aa2a05639b3b5cc943/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=GitHub&amp;logoColor=white" style="max-width: 100%; user-select: auto;">
<br></br>
## Git Commit & PR Message
___
| 태그이름 | 설명 |
|:----------|:----------|
| feat | 새로운 기능 추가|
| fix | 버그 수정 |
| design | CSS 등 사용자 UI 수정|
| refactor | 코드 리팩토링|
| comment | 주석 추가 및 변경|
| docs | 문서 수정 (MD 파일)|
| test | 테스트 코드 생성 및 수정 |
| chore | 빌드 테스트, 패키지 매니저 설정|
| rename | 파일명, 폴더명 수정|
| remove | 파일을 삭제하는 작업|
