<template>
    <div class="init" :style="{'backgroundColor':styleobj}">
        <load></load>
    </div>
</template>
<script>
    import load from './load'

    export default {
        props: ['bgcolor'],
        components: {
            load
        },
        computed : {
            styleobj () {
                return this.bgcolor
            }
        }
    }
</script>
<style lang= "scss">
    .init{
        width: 100%;
        height: 100%;
        /*background-color: #2aa155;*/
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
</style>