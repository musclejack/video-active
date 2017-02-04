<template>
    <div id="header">
        <span class="back" @click="back"></span><h4 class="title"><span>返回首页</span></h4>
    </div>
</template>
<script>
    export default {
        methods: {
            back () {
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang= 'scss' scoped>
    #header{
        position: fixed;
        top: 0;
        left: 0;
        height: 2.43rem;
        width: 100%;
        z-index: 999;
        /*position: relative;*/
        color: #fff;
        background-color: rgba(21, 195, 155, 1);
        vertical-align: middle;
        .title{
            padding: 0;
            margin: 0;
            height: 2.43rem;
            line-height: 2.43rem;
            font-size: .9rem;
            margin-left: 2.68rem;
            padding-top: .14rem;
            /*height: .9rem;*/
        }
        .back{
            width: .53rem;
            height: .9rem;
            margin-left: 1.1rem;
            bottom: .75rem;
            position: absolute;
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA4CAYAAACYCio/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAACqUlEQVRYw83Zu2sUURTA4TMbieIrRBAVCWgTURTEYJMUoo0oEjDY+Og0+i/YiaAWImJhiIFUSWUURBQUFRFiFUGxELUJGMEXK4hRMSbmZ3H3wrjszrnzOEMOnGJ371y+ncedc2YEkJLzFPAEOB7/vmzEOf6PM2VDIuAijeN0WZAIuErzmAVWLBLbaBGRQRHpTxiDiFQs90QLMEpyzNdOXrND0wpcVxBzQL/lydoK3A5AHI1vVzRiKXBPQcwAffXbFolYBjxWEL+A/Y22LwrRBowriB/AnmZzFIFoByYUxDegJ2mevIjVwHMFUQW6tLnyINYCrxTEJ2BbyHxZER3AGwXxHtgUOmcWxAZgUkFM1sYFz5sW0Qm8UxCvgfVp/2CawZuBDwriJbAmy+EOHbgd+KwgngGrsiBCIV3AVwUxjlvUMl+F2oAe3GKUFI9wy3uuNSnpx13AtIK4CyzJi0iC7AV+KoibuFt+bkQzyAHgt4IYxVVghSAaQQ7h6oWkGAIqRSLqIUdwlVNSXMFV5YUi4pDDAYgLFgCfEVARkaqItCeU/LdEpM+y76gEjvtuiXDdTfj5cd7y0MQ/HAvAXLY+WdNcvtcwvnx99qIvaCMYL2hplvgxjJd4n7vRb3p3ML7p+QwpAx7iWk1TiAA7CSuMVlpDBFcqflEwExiXij63sACKZ5+dwJSCMW8nfG5kATRYPjuAtwpmCuOW0+c69Cb8I7DVGiK4xxIvFEwV2GENEdwlG/KgptsaIrgu76mCmcbdNkwhAiwn7GHePmuI4O459xXMDHDQGiLAYvQHvrO48tQUIrg65YaCmQNOWEOE8JcCJ60hHjOsYP4AbaF9Tdb4K+5dzYDSW81b7xGfEXCpyR4p7VVaPOtfLp71v0WAeTdZF721fCAiY/7Lf7ko/m22akmrAAAAAElFTkSuQmCC")
            no-repeat 0 0;
            background-size:100% 100%;
        }
    }
</style>