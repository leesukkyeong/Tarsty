<template>
  <div>
    <Carousel :imgSrc1='imgSrc1' :imgSrc2='imgSrc2' :imgSrc3='imgSrc3'></Carousel>
    <Txtimg :des1='About_des' :des2='About_des1' :imgs='imgs'></Txtimg>
    <Txtimg :des1='About_des2' :des2='About_des3' :imgs='imgs1'></Txtimg>
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
      imgSrc1:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDJfMjM4%2FMDAxNjcyNjcwMTM3OTM5.eZHQH99mEjqt6KX0nbaukcZBcOvz6vh0-zJlLiKSclwg.EDl2N8qCmCWEgkSNGBrmEXAe83T6UP85pCgl08dWzI0g.JPEG.angdu0813%2Foutput_3156553593.jpg",
      imgSrc2:"https://pup-review-phinf.pstatic.net/MjAyMjEyMDZfMjAy/MDAxNjcwMjkxMDM2NjE5.M11tXJdZYUtMY1GyVcz2eNBAxxRTjaEFGCXWPFIC2Kog.LMpidigLTJbVG7hnlTvibVAHEqzTR9vovrMFVswivw8g.JPEG/64013F79-30FA-4D0A-A723-DF526E2EEC3D.jpeg",
      imgSrc3:"https://pup-review-phinf.pstatic.net/MjAyMjEyMDRfMTkw/MDAxNjcwMTMxODUwNDM5.fhuC5cnBVZTWtzFy9zzpcHd8HJ1AwSfhsN7TW4CnYjcg.D4XtA7Q8EDyhZYH22isCsHfQxYU10-Kev3X4hEJc8dYg.JPEG/AA1D3875-8E0D-44B8-BE26-D3EEF1F3CE0B.jpeg",
      About_des:"'갈증에서 벗어나다' 탈스티는 고즈넉한 삼청동 골목에서 시작됩니다 ",
      About_des1:'탈스티는 존재하는 갈증을 농도 짙은 대화로 해갈하는 방향성을 가집니다',
      About_des2:'해갈의 첫 번째 도구는 오렌지 와인입니다',
      About_des3: "미완의 상태로 남은 여백이 '탈스티'된 여러분들의 풍요로움으로 가득 채워지길 바랍니다",
      imgs: ["https://ldb-phinf.pstatic.net/20230108_263/16731596748969RoIB_JPEG/Tarsty_A-4232.jpg",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjhfMjc0%2FMDAxNjcyMjMzNzE5MjA2.dJtlhckbemazEMZJLHzX_gVhvx0EaUIZ5eDFznCdG5cg.MNry6CYvM8A1DqERutLywgom9un7niCsOMllu8BAc-8g.JPEG.gkstjsdn369%2FIMG_7191.jpg",
      "https://ldb-phinf.pstatic.net/20230108_6/1673159644060OpEgI_JPEG/Tarsty_A-4004.jpg"],
      imgs1: ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDhfMjAy%2FMDAxNjczMTQxNjY1Mzcy.Yyw0_33UEq3wfSR3Id6DqquaDoVO2_pwC61uMy0DJ18g.nZumDillpudDq8CV-ZI0lKn7bdr4WYIsNyqrFKd_mAUg.JPEG.0303jsi%2FIMG_3929.JPG&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDhfNzcg%2FMDAxNjczMTQxNjgyNDky.n32gAyyek3CBkxKB_SFc_3DgYChJNCwmSER9tNjc-_og.Jju1iBnhp3TElUu8w2TE5lkEhtVLygxLW6yGSDZg-sQg.JPEG.0303jsi%2FIMG_3931.JPG&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMDFfMTUw%2FMDAxNjE0NTk3MjM0NTE5.E2hjHFCU3DmVtfGS9b6X4es2hjp2HbmSYubbBDij630g._Ac9u1Ij8rpbMeQDDw5zgrZ-h9jnFdhzLxJTEz88H2og.JPEG.soldsoul%2FIMG_2431.JPG&type=sc960_832"]
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