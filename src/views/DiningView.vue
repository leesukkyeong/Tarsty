<template>
  <div>
    <Carousel :imgSrc1='imgSrc1' :imgSrc2='imgSrc2' :imgSrc3='imgSrc3'></Carousel>
    <Txtimg :des1='dining_des' :des2='dining_des1' :imgs='imgs'></Txtimg>
    <Txtimg :des1='dining_des2' :des2='dining_des3' :imgs='imgs1'></Txtimg>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import Txtimg from '../components/Txtimg'


export default {
  components: {
   Carousel, Txtimg },
  data(){
    return {
      imgSrc1: "https://pup-review-phinf.pstatic.net/MjAyMjEyMjJfOTkg/MDAxNjcxNjcxODg1MTgx.U0GNT39zwNqtHiYmE3DXOYLNHHlrnBIMk7qH12_TtM4g.48FODvIxyO5uusRV5lwetrF6X8IpL665JSU9uw0JtCkg.JPEG/7079D116-175C-465F-A4A6-3B836C0F141F.jpeg",
      imgSrc2:"https://pup-review-phinf.pstatic.net/MjAyMjEyMTlfODIg/MDAxNjcxNDI2NjI2ODg1.nMJ3CdMeKSJJic_zlTT9LqtYgV0El8b372IDCiwH238g.Um5PZrGDEClaREYfoKdYjBkiUpL3HgjkfBFXrHODS4Ig.JPEG/0E9DA1C1-CA64-4C58-881E-FEBEC6567AE5.jpeg",
      imgSrc3:"https://pup-review-phinf.pstatic.net/MjAyMjEyMThfMjk4/MDAxNjcxMjk3MDEzMjY0.Asw95vLhGJhY549oE6KegzDeKb9FZ6b5AEwCcMHZ78Ig.0ul3dX7UYPwHWJSoMYVpq5DSmGvT-Xd_XQNWT4Kguukg.JPEG/1B1EB528-5D19-4F85-9FAC-B38DA026940C.jpeg",
      dining_des:'탈스티는 대화에 집중할 수 있도록 Small Dining을 제공하고 있습니다 ',
      dining_des1:'계절과 날씨, 방문한 분의 기분 및 상황을 고려하여 직접 다이닝을 직접 큐레이션합니다 ',
      dining_des2:'식사를 겸할 수 있도록 포만감있는 안주를 제공합니다',
      dining_des3: '대화의 흐름이 끊기지 않도록 Small Dining 또한 제공하고 있습니다 ',
      imgs: ["https://pup-review-phinf.pstatic.net/MjAyMjEyMDZfMjIy/MDAxNjcwMjkxMDMzNTEw.3LGR1jj_Bo9yFxJd_Y3j0b_-r6DLDleOwgb3cePWEQcg.EcIzEO8KXZH56GRzt1klQmlnmLAjb_0UTZUKymYO2O8g.JPEG/6BF5C8AF-1FDD-4EBB-B271-5758688A6F84.jpeg",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDhfMTM5%2FMDAxNjczMTQxNjk1MTI3.HGdM6Ks9jeIE0VXBjCYq5hmcxziuxEWs-SHvGpVIm-wg.jiU4U-wOXctbceh87he16cnaOQ5UWLSBLGScaAc1c70g.JPEG.0303jsi%2FIMG_3936.JPG&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDhfMjcz%2FMDAxNjczMTQxNjU5ODU4.oqrPLeKa0xQRzVMRTgIiuhR0zvBWS566a8vWTOW_3vIg.llfj0xGJBHUcQ-IDzpPX2rutJ5VfJYSdq4TF0z5c4Ggg.JPEG.0303jsi%2FIMG_3934.JPG&type=sc960_832"],
      imgs1: ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDhfNDEg%2FMDAxNjczMTQxNjY1NjU2.CzSKBarSsZeuWG_IoZTrD1yb_0IbxMLIgaJ32CZMgWEg.EWOy-XB4cu6XcjuZKudlC8oNK8AbnGLi30Hjz_6hthEg.JPEG.0303jsi%2FIMG_3939.JPG&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjhfMjg0%2FMDAxNjcyMjMzNzIxNjg3.x1L42qx2b5iyrGqumlpmlphcJAuSGbDzysD9-H829PMg.SACAo2q-r1Q2utjJGzpl6Nynzn3NUnXwXRgWXlE9BfYg.JPEG.gkstjsdn369%2FIMG_7209.jpg",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjhfNjMg%2FMDAxNjcyMjMzNzIyODEz.aTtqO_v2H0MZ2A8k25FTCXirHlt1ML5eXHYkSBwCm8sg.xiqPXDQcwkf1zh5J5h73_UaIQQdty57f96xVc2AZxQQg.JPEG.gkstjsdn369%2FIMG_7226.jpg"]
  }
}
}
</script>


<style>
.des {
  padding: 20px;
}
.des1{
    padding: 10px;
}
</style>