<template>
    <div id="index">
        <m-header></m-header>
        <div class="bp"><img class="bpimg" :src="titleData.imageUrl"/></div>
        <div style="position: relative;height: 5rem;">
            <time-box :textdata = "stageData" style="margin-top: -1.65rem"></time-box>
        </div>
        <lottery :textdata = "flopData" v-if="flopData"></lottery>
        <lottery-sub :textdata = "pressInjectData" v-if="pressInjectData"></lottery-sub>
        <lottery-last :textdata = "recentPrizeData"></lottery-last>
        <game :textdata = "gameData"></game>
        <m-video :textdata = "videoData"></m-video>
        <m-footer></m-footer>
        <transition name= 'down'>
        <pop v-if="ispop === 'list'||ispop === 'instruction'||ispop === 'award'||ispop === 'notAward'||ispop === 'savesuc'||ispop === 'saveerr'||ispop === 'skate'">
            <popframe v-if="ispop === 'list'"  :title="'中奖名单'" :styleobj="{}">
                <list-c></list-c>
            </popframe>
            
            <popframe v-if="ispop === 'instruction'" :title="'活动说明'" :styleobj="{}">
                <instruction></instruction>
            </popframe>
            <popframe v-if="ispop === 'skate'" :title="'我的押注'" :styleobj="{height: '13.7rem','marginTop': '9rem'}">
                <skate ></skate>
            </popframe>
            <award v-if="ispop === 'award'"></award>
            <not-award v-if="ispop === 'notAward'" desc='好惨哦<br/>居然没中奖。。' btn="我服"></not-award>   
        </pop>
        <load  v-if="ispop === 'load'"></load>
        </transition>
    </div>
</template>

<script>
import mHeader from './header'
import timeBox from './timebox'
import lottery from './lottery'
import lotterySub from './lottery-sub'
import lotteryLast from './lottery-last'
import game from './game'
import mVideo from './video'
import mFooter from './footer'
import pop from '../../components/pop'
import popframe from './popframe'
import award from './award'
import instruction from './instruction'
import listC from './listC'
import notAward from '../../components/not-award'
import load from '../../components/load'
import initLoad from '../../components/init-load'
import skate from './skate'
import config from '../../config'
import util from '../../util/util'

export default {
    name: 'app',
    components: {
        mHeader,
        timeBox,
        lottery,
        lotterySub,
        lotteryLast,
        game,
        mVideo,
        mFooter,
        mHeader,
        pop,
        popframe,
        award,
        instruction,
        listC,
        notAward,
        load,
        initLoad,
        skate
    },
    computed: {
        titleData () {
            return this.$store.state.allData.titleData||{}
        },
        stageData () {
            return this.$store.state.allData.stageData||{}
        },
        recentPrizeData () {
            return this.$store.state.allData.recentPrizeData||{}
        },
        videoData () {
            return this.$store.state.allData.videoData||{}
        },
        gameData () {
            return this.$store.state.gameData.gameData||{}
        },
        flopData () {
            return this.$store.state.gameData.flopData
        },
        pressInjectData () {
            return this.$store.state.gameData.pressInjectData
        },
        ispop () {//
            return this.$store.state.ispop
        }
    },
    beforeCreate () {
        if(!(util.isEmptyObject(this.$store.state.allData)&&util.isEmptyObject(this.$store.state.gameData))) return 
        let a = this.$http.get(config.newurl+'/alldata')
        .then(response => {
            console.log(response,1)
            let alldata = JSON.parse(response.body)
            if (alldata.code !== 200) return alert('接口错误')
            this.$store.dispatch('setAllData', alldata.value)
            return Promise.resolve(true)
        })


        let b = this.$http.get(config.newurl+'/gamedata')
        .then(response => {
            console.log(response, 2)
            let gamedata = JSON.parse(response.body)
            if (gamedata.code !== 200) return alert('接口错误')
            this.$store.dispatch('setGameData', gamedata.value)
            return Promise.resolve(true)
        })
        Promise.all([a, b]).then(response => {
            // console.log(response,11)
            setTimeout(() => {this.$store.dispatch('setPop', null)}, 500)
        })
    }

}
</script>

<style lang ='scss' scoped>
/*    @improt "../../scss/base.scss";*/
    #index{
        background: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(0, 173, 130)), to(rgb(0, 127, 133)));
        height: 100%;
        overflow-y: auto;
    }

    .bp {
        width: 100%;
        height: 12.5rem;
        .bpimg {
            width: 100%;
            height: 100%;
            display: block;
            margin: 0 auto;
        }
    }
.down-enter-active {
    animation: shake .15s;
}
.down-leave-active {
    animation: shake .15s;
}
@keyframes shake {
    from, to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    10%, 30%, 50%, 70%, 90% {
        -webkit-transform: translate3d(-100px, 0, 0);
        transform: translate3d(-100px, 0, 0);
    }

    20%, 40%, 60%, 80% {
        -webkit-transform: translate3d(100px, 0, 0);
        transform: translate3d(100px, 0, 0);
    }
}
</style>
