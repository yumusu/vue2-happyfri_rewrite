import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        quescount: 1,       // 当前题目计数
        selectedAns: '',    // 当前选中的答案
        questions: [{
            quesId: 1,
            quesTitle: '题目一',
            quesAns: [
                {
                    ansCode: 'A',
                    ansDescribe: '答案AAAAA'
                },
                {
                    ansCode: 'B',
                    ansDescribe: '这是答案B'
                },
                {
                    ansCode: 'C',
                    ansDescribe: '这是正确答案'
                },
                {
                    ansCode: 'D',
                    ansDescribe: '选D吧，D也不错'
                }
            ]
        },
        {
            quesId: 2,
            quesTitle: '题目二',
            quesAns: [
                {
                    ansCode: 'A',
                    ansDescribe: '二题A答案'
                },
                {
                    ansCode: 'B',
                    ansDescribe: '这是正确答案'
                },
                {
                    ansCode: 'C',
                    ansDescribe: 'C答案也是二题的'
                },
                {
                    ansCode: 'D',
                    ansDescribe: '选D吧，二题D'
                }
            ]
        },
        {
            quesId: 3,
            quesTitle: '题目三',
            quesAns: [
                {
                    ansCode: 'A',
                    ansDescribe: '三题答案AA'
                },
                {
                    ansCode: 'B',
                    ansDescribe: '选B吧，三题的B'
                },
                {
                    ansCode: 'C',
                    ansDescribe: 'C也是三题的C'
                },
                {
                    ansCode: 'D',
                    ansDescribe: '这是正确答案'
                }
            ]
        },
        {
            quesId: 4,
            quesTitle: '题目四',
            quesAns: [
                {
                    ansCode: 'A',
                    ansDescribe: '四题A答案，简称4A'
                },
                {
                    ansCode: 'B',
                    ansDescribe: '这是正确答案'
                },
                {
                    ansCode: 'C',
                    ansDescribe: 'C已经是四题的C'
                },
                {
                    ansCode: 'D',
                    ansDescribe: 'D也成了四题的D'
                }
            ]
        },
        {
            quesId: 5,
            quesTitle: '题目五',
            quesAns: [
                {
                    ansCode: 'A',
                    ansDescribe: '五题A，最后的A'
                },
                {
                    ansCode: 'B',
                    ansDescribe: '正确答案是D'
                },
                {
                    ansCode: 'C',
                    ansDescribe: 'D说它是正确答案'
                },
                {
                    ansCode: 'D',
                    ansDescribe: '这是正确答案'
                }
            ]
        }],
        answers: [],
        correctAnswers: ['C', 'B', 'D', 'B', 'D']
    },
    getters: {
        // 根据quescount(当前问题)返回问题
        currentQues(state){
            // 判断是不是箭头函数的问题，结果不是
            // return state.questions.find((val) => val.quesId === state.quescount);
            try{
                // 这里会执行
                // console.log("currentQues执行了");
                if(state.questions.find){
                    return state.questions.find(function(val){
                        // 这里不会执行，判断是安卓UC不支持find
                        // console.log("find执行了");
                        return val.quesId === state.quescount;
                    });
                }else{
                    // filter是一个数组，所以要取[0]
                    return state.questions.filter(function(val){
                        // console.log("filter执行了");
                        // console.log(val.quesId, state.quescount);
                        return val.quesId === state.quescount;
                    })[0];
                }
                
            }catch(e){
                console.log(e.name + ":" + e.message);
            }
            
        }
    },
    mutations,
    actions
})

export default store;