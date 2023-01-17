<template>
  <div>
    <Carousel :imgSrc1='imgSrc1' :imgSrc2='imgSrc2' :imgSrc3='imgSrc3'></Carousel>
    <Txtimg :des1='home_des' :des2='home_des1' :imgs='imgs'></Txtimg>
    <Txtimg :des1='home_des2' :des2='home_des3' :imgs='imgs1'></Txtimg>
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
      imgSrc1: "https://ldb-phinf.pstatic.net/20230108_263/16731596748969RoIB_JPEG/Tarsty_A-4232.jpg",
      imgSrc2:"https://ldb-phinf.pstatic.net/20230109_164/1673249356301LIcsm_JPEG/Tarsty_C-4376.jpg",
      imgSrc3:"https://ldb-phinf.pstatic.net/20230109_206/1673249342812CLG7c_JPEG/Tarsty_C-4127.jpg",
      home_des:'별다른 간판없이 가정집 사이에 위치해있어 조용하게 대화가 가능한 곳으로, 내부로 들어오시면 한옥을 리모델링한 아주 멋진 공간이 나옵니다. ',
      home_des1:'너무나 넓은 통창으로 펼쳐지는 아름다운 뷰를 감상하시러 오세요 ',
      home_des2:'야경을 볼 수 있는 전경이 있습니다 ',
      home_des3: '너무나 넓은 통창으로 펼쳐지는 시원한 뷰를 감상하시러 오세요 ',
      imgs: ["https://ldb-phinf.pstatic.net/20230108_21/1673159690144RvvAy_JPEG/Tarsty_A-5100.jpg",
      "https://ldb-phinf.pstatic.net/20230108_263/16731596748969RoIB_JPEG/Tarsty_A-4232.jpg",
      "https://ldb-phinf.pstatic.net/20230108_263/1673159675062AiRAH_JPEG/Tarsty_A-4376.jpg"],
      imgs1: ["https://pup-review-phinf.pstatic.net/MjAyMjEyMThfMTcz/MDAxNjcxMjk3MDEwODY3.OTvGq8XjXCpXm5PZ7rL_Cn6iGqegjXodRYqc41uYMrIg.3DVRNPz_EtrYu8cpUsV_gHrJ1lQr3TDZghkeXOYwmDkg.JPEG/FCE3460E-107E-42DD-9536-13EFB8148F17.jpeg",
      "https://pup-review-phinf.pstatic.net/MjAyMjEyMTdfMTE4/MDAxNjcxMjc2NDUxMDk4.3t-2rE15d2GO9c3-aQItvFLPN1ZwE2ZFSMSEKd5iK5Eg.vyzCDqu4QwHN7oINQAxlZHNrpdjlavxfxnT0R5znymEg.JPEG/A8A614D7-DD25-4499-AC71-BDE8802CD2CD.jpeg",
      "https://pup-review-phinf.pstatic.net/MjAyMjEyMThfMTcz/MDAxNjcxMjk3MDEwODY3.OTvGq8XjXCpXm5PZ7rL_Cn6iGqegjXodRYqc41uYMrIg.3DVRNPz_EtrYu8cpUsV_gHrJ1lQr3TDZghkeXOYwmDkg.JPEG/FCE3460E-107E-42DD-9536-13EFB8148F17.jpeg"]
  }
}
}
</script>

<style scope>
.main {
  padding: 20px;
}
.main1{
    padding: 10px;
}

.container {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid-image {
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
    margin:30px 0;
}
.grid-image img {
    width:calc(33.333% - 10px);
    margin:0 15px 15px 0;
    height:350px;
}
.grid-image img:nth-of-type(3n),
.grid-image img:last-child {
    margin-right:0;
}
@media screen and (max-width:640px){
  .grid-image img {
    width:calc(50% - 15px);
  }
}
@media screen and (max-width:480px){
  .grid-image img:nth-of-type(2n) {
    margin-right:0;
  }
  .grid-image img:nth-of-type(3n) {
    margin-right:15px;
  }
}


</style>