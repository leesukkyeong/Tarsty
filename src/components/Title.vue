<template>
    <div class="title">
        <img alt="Tarstylogo" src="https://ldb-phinf.pstatic.net/20221108_193/1667836914881jgrFb_PNG/IMG_7307.PNG" width="100" height="100">
        <h1 style='line-height:20%'>{{title_fir}}</h1>
        <h2 style='line-height:60%'>{{title_se}}</h2>
    </div>
</template>

<script>

export default {
    components: {},
    data(){
        return {
            title_fir:'Tarsty',
            title_se: 'fill thirst, feel tarsty',
            wine: 'Orange Wine'
        }
},
}
</script>

<style scoped>
.title {
    padding: 0.1px;
}
</style>