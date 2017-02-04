<template>
    <div>
        <popbg>
            <div class="content">
                <slot></slot>
            </div>
        </popbg>
    </div>
</template>
<script>
    import popbg from './popbg'
    export default {
        components: {
            popbg
        }
    }
</script>
<style lang= "scss" scoped>
    .content{
      /*  height: 100%;
        width: 100%;
        overflow-y: hidden;*/
        /*background-color: #fff;*/
    }
</style>