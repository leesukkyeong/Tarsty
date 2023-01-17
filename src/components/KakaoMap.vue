<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
  return {
    map: null,
    markerPositions1: [
      { title: "탈스티", latlng: new kakao.maps.LatLng(33.450705, 126.570677) },
    ],
    // 화면에 표시되어있는 marker들
    markers: [],
  }
},
  methods: {
  initMap() {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5841306783412, 126.9824287577613),
      level: 5,
    };
    this.map = new kakao.maps.Map(container, options);
  },
},
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      /* global kakao */
      script.addEventListener("load", () => {
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      //console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },
}

</script>

<style scoped>
#map {
  width: 700px;
  height: 500px;
  margin: auto;
}
.container-md{

  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 60px;
}
  .main-title{
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
  }

  .titles{
    margin-top: 100px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 32px;
    float:none;
  }
  .words{
    font-weight: 400;
    font-size: 17px;
  }
</style>