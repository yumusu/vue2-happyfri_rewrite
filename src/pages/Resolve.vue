<template>
<div>
    <header class="header_tips">
        <span>题目{{ quescount }}</span>
    </header>
    <div class="question_container">
        <header class="question_header">{{ currentQues.quesTitle }}</header>
        <ul class="answer_list">
            <li v-for="answer in currentQues.quesAns" :key="answer.ansCode" @click="liClick(answer.ansCode)">
                <span class="answer_code" :class="{'answer_selected': selectedAns === answer.ansCode}">{{ answer.ansCode }}</span>
                <span class="answer_describe">{{ answer.ansDescribe }}</span>
            </li>
        </ul>
    </div>
    <span class="next_ques" @click="nextButtonClick" v-if="( quescount < questions.length )"></span>
    <span class="next_ques submit_button" @click="nextButtonClick" v-else></span>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'Resolve',
    data(){
        return {

        }
    },
    computed: {
        ...mapState({
            quescount: 'quescount',
            selectedAns: 'selectedAns',
            questions: 'questions'
        }),
        ...mapGetters({
            currentQues: 'currentQues'
        })
    },
    methods: {
        ...mapMutations({
            liClick: 'liClick',
            initialState: 'initialState'
        }),
        ...mapActions({
            nextButtonClick: 'nextButtonClick'
        })
    },
    created(){
        this.initialState();
        document.body.style.backgroundImage = "url(" + require('../images/bg.jpg') + ")";
    }
}
</script>

<style>
.question_container{
    position: absolute;
    top: 5rem;
    left: 1rem;
    width: 14rem;
    height: 13rem;
    background: url(../images/resolve_bg.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 0.8rem;
}
.question_container header{
    position: absolute;
    left: 3rem;
    top: 2rem;
}

/* 答案列表 ul */
.question_container ul.answer_list{
    position: absolute;
    left: 3rem;
    top: 3rem;
    font-size: 0.6rem;
}

.question_container ul.answer_list li{
    margin-top: 0.5rem;
}

/* 答案序号 span */
.question_container ul.answer_list .answer_code{
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border: 1px solid #fff;
    border-radius: 100%;
    text-align: center;
    line-height: 0.7rem;
    margin-right: 0.2rem;
}

/* 选中答案的样式 */
.question_container ul.answer_list .answer_selected{
    background-color: #969633;
    color: #000;
}

/* 下一步按钮 */
.next_ques{
    position: absolute;
    top: 17rem;
    left: 6rem;
    width: 4rem;
    height: 2rem;
    background: url(../images/next_ques.png) no-repeat;
    background-size: 100% 100%;
}

/* 提交按钮 */
.submit_button{
    background: url(../images/submit_button.png) no-repeat;
    background-size: 100% 100%;
}
</style>