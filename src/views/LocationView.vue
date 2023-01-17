<template>
  <div>
    <div>
      <img src = "https://ldb-phinf.pstatic.net/20221202_159/16699100345918PjQR_PNG/IMG_8060_3.PNG" width="650" height="650">
    </div>
    <div class='mainLo'>
      <h4 >{{Lo_main}}</h4>
      <h4 >{{Lo_main1}}</h4>
    </div>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "../components/KakaoMap"

export default {
  name: "locationView",
  components: {
    KakaoMap,
  },
  data(){
    return {
      Lo_main: '한옥마을에서 내려오시는 길은 경사가 가팔라, 삼청동수제비 맞은편 골목길 이용을 권합니다',
      Lo_main1: '주차: 현대미술관 / 인근 공영주차장, 대중교통 및 도보 이용 권고'
  }
  // 카카오맵
},mounted(){
    //  const script = document.createElement('script');
    //   /* global kakao */
    //   script.onload = () => kakao.maps.load(this.initMap);
    //    // script.src = "test000000000111111"
    //   document.head.appendChild(script);
}
}
</script>


<style>
.mainLo {
  padding: 20px;

}
</style>
