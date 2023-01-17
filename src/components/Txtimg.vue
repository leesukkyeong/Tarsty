<template>
  <div>
    <div class='des'>
      <h4 >{{des1}}</h4>
      <h4 >{{des2}}</h4>
    </div>
    <div class="grid-image">
      <img v-for="item in imgs" :key="item"  :src="item"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['des1','des2','imgs'],
  components: { },
  data(){
    return {
  }
}
}
</script>

<style>
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
