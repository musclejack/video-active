<template>
    <div>
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
            <not-award v-if="ispop === 'savesuc'" desc='信息保存成功啦' btn="确定"></not-award>
            <not-award v-if="ispop === 'saveerr'" desc='好惨..信息保存失败!再试一次或者联系客服' btn="确定"></not-award>
            
        </pop>
        <load  v-if="ispop === 'load'"></load>
        <init-load  v-if="ispop === 'initload'" bgcolor='#15c39b'></init-load>
        <init-load  v-if="ispop === 'initloadaward'" bgcolor='rgb(240, 240, 240)'></init-load>
    </div>
</template>
<script>
import pop from './pop'
import popframe from '../views/index/popframe'
import award from '../views/index/award'
import instruction from '../views/index/instruction'
import listC from '../views/index/listC'
import popsuc from './saveinfo/popsuc'
import config from '../config'
import notAward from './not-award'
import load from './load'
import initLoad from './init-load'
import skate from '../views/index/skate'
export default {
    components: {
        pop,
        popframe,
        award,
        instruction,
        listC,
        popsuc,
        notAward,
        load,
        initLoad,
        skate
    },
    computed: {
        ispop () {//
            return this.$store.state.ispop
        }
    }
}
</script>