<template>
  <div>
    <Carousel :imgSrc1='imgSrc1' :imgSrc2='imgSrc2' :imgSrc3='imgSrc3'></Carousel>
    <Txtimg :des1='wine_des' :des2='wine_des1' :imgs='imgs'></Txtimg>
    <Txtimg :des1='wine_des2' :des2='wine_des3' :imgs='imgs1'></Txtimg>
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
      imgSrc1:"https://ldb-phinf.pstatic.net/20230101_174/1672565649065U23xF_JPEG/IMG_0333.jpg",
      imgSrc2:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMzBfNzQg%2FMDAxNjcyMzY5MjcwMzg5.QAXkEU3_EiTRR_jLaNDo_TEiz-DGW9b0wEXWvp_FpFcg.dPTQqL71bE7QQGQ3sprK-nloVq8FBJj5mTxKR3K899Mg.JPEG.happyminayou%2FIMG_8215.jpg",
      imgSrc3:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDJfMjk0%2FMDAxNjcyNjY5NTc5NTA0.yLnkx3XZbu-TDzE_AeIa9UKNLaQZlcOHEYjFN7dBI70g.oSv3OUYLrrLPJ0CSobRHK4dZlsLmRYP0b_X1eDYK2OYg.JPEG.angdu0813%2F4101A758-4471-474C-A1F8-CEE3DE98BD02.jpg",
      wine_des:'탈스티는 북촌 오렌지 와인(natural only)바 입니다 ',
      wine_des1:'와인 취향을 말해주시면 오렌지 와인을 직접 큐레이션해드립니다 ',
      wine_des2:'2분 이상 보틀 1병이 필수이며 혼자 방문하신 분을 위해 글라스 와인을 제공합니다',
      wine_des3: '다양한 오렌지 와인을 보유하고 있습니다(구트오가우, 초타, 뮬레츠닉, 반 바흐트 외) ',
      imgs: ["https://ldb-phinf.pstatic.net/20230108_105/1673159674762Wvi5P_JPEG/Tarsty_A-4734.jpg",
      "https://pup-review-phinf.pstatic.net/MjAyMjEyMjJfNDUg/MDAxNjcxNjcxODgzMjUy.vUybOeCuZKw-1KidgQYuvAlo5rb__j89mWjhBktyvIcg.8fdDZtXUZ-xVCB7WQwVao8pnUPJacW0jNPNh70k-8dgg.JPEG/6B72E0A5-386E-4035-8D54-D9535249C6DE.jpeg",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDJfMTAz%2FMDAxNjcyNjY5NTg3ODgx.x1knl3OZvoBWiDi2AhHPWm3-awovPHemP67l9g6hA1gg.-ncvJvrotdTiYb_dn1mtpvYUD-XMvQrd2pAK7MPIsq8g.JPEG.angdu0813%2FB3F954CB-B54A-494C-B175-A797903CBC70.jpg&type=sc960_832"],
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

</style>