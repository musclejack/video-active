<template>
    <div class="game-head">
        <p class="game-title">{{this.title}}</p>
        <p class="game-desc">{{this.subtitle}}</p>
    </div>
</template>
<script>
    export default {
        props:{
            title:{
                type: String,
            },
            subtitle: {
                type: String
            }
        }
    }
</script>
<style lang= "scss">
    .game-head{
        height: 1.7rem;
        position: relative;
        border-left: .1rem solid rgba(255, 220, 55, 1);
        margin-left: 1rem;
        padding-left: 0.5rem;
        margin-bottom: .92rem;
        &:after{
            content: "";
            position: absolute;
            bottom: -.46rem;
            width: calc(100% - 1rem);
            height: 1px;
            left: -.25rem;
            background-color: #ccc;
        }
        p{
            margin: 0;
            padding: 0;
        }
        .game-title{
            font-size: 0.8rem;
            /*font-weight: 600;*/
        }
        .game-desc{
            font-size: 0.65rem;
            opacity: .6;
        }
    }
</style>