import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//先写一个假数据
const state={
    totalTime:0,
    list:[{
        name:'二哲2.0',
        avatar:'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date:'2016-12-25',
        totalTime:6,
        comment:'10.29日晚上，陪女朋友一起生日需要6小时'
    }]
}

export default new Vuex.Store({
    state,
})