<template>
    <div>
        <div class="pop bg" v-bind:style="styleobj"></div> 
        <div class="pop content" v-bind:style="styleobj">
            <slot></slot>
        </div> 
    </div>
</template>
<script>
    export default {
        created () {
            document.querySelector('html').style.overflow = 'hidden'
            this.styleobj.height = window.screen.height+'px'
            this.styleobj.width = window.screen.width+'px'
            console.log('pop created')
        },
        destroyed () {
            console.log('pop destroyed')
            document.querySelector('html').style.overflow = 'auto'
        },
        data () {
            return {
                styleobj: {
                    height: '',
                    width: ''
                }
            }
        }
    }
</script>
<style lang= "scss" scoped>
    .pop{
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }
    .bg{
        background-color: #ccc;
        opacity: 0.7;
    }
    .content{
        z-index: 999;
    }
</style>