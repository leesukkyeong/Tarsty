<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      markerPositions: [
        {
          title: '탈스티',
          latlng: new kakao.maps.LatLng(37.5841306783412, 126.9824287577613)
        }
      ],
      // 화면에 표시되어있는 marker들
      markers: []
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(37.5841306783412, 126.9824287577613),
        level: 5
      }
      this.map = new kakao.maps.Map(container, options)
    },
    displayMarkers(positions) {
      console.log('dfgjgfdfgj')
      // // 1. 현재 표시되어있는 marker들이 있다면 marker에 등록된 map을 없애준다.
      // if (this.markers.length > 0) {
      //   this.markers.forEach((item) => {
      //     item.setMap(null);
      //   });F
      // }

      // 2. 마커 이미지 커스터마이징 하기
      // javascript 영역에서 assets의 정보 가져오기
      const imgSrc ='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
      const imgSize = new kakao.maps.Size(24, 35)
      const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize)
      console.log()
      // 3. 마커 표시하기
      positions.forEach((position) => {
        // information window 생성
        const infowindow = new kakao.maps.InfoWindow({
          removable: true,
          content: `<div style="padding:5px;">${position.title}</div>`
        })

        const marker = new kakao.maps.Marker({
          map: this.map,
          position: position.latlng
        })
        // 이벤트 등록
        //  kakao.maps.event.addListener(marker, "click", () => {infowindow.open(this.map, marker);});
        kakao.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.open(this.map, marker)
        })
        kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close(this.map, marker)
        })

        this.markers.push(marker)
      })

      // 4. 지도를 이동시켜주기
      // 배열.reduce( (누적값, 현재값, 인덱스, 요소)=>{return 결과값}, 초기값);
      const bounds = positions.reduce(
        (bounds, position) => bounds.extend(position.latlng),
        new kakao.maps.LatLngBounds()
      )

      this.map.setBounds(bounds)
    }
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script')
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`
      /* global kakao */
      script.addEventListener('load', () => {
        kakao.maps.load(this.initMap)
      })
      document.head.appendChild(script)
    } else {
      //console.log("이미 로딩됨: ", window.kakao);
      this.initMap()
      this.displayMarkers(this.markerPositions)
    }
  }
}
</script>

<style scoped>
#map {
  width: 700px;
  height: 500px;
  margin: auto;
}
.container-md {
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 60px;
}
.main-title {
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
}

.titles {
  margin-top: 100px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 32px;
  float: none;
}
.words {
  font-weight: 400;
  font-size: 17px;
}
</style>