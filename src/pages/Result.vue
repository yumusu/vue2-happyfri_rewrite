<template>
<div>
    <div class="score_container">
        <span class="score_number"> {{ score }}分 !</span>
        <span class="score_evaluate">{{ scoreEvaluate }}</span>
    </div>
    <div class="share_container">
        <span class="share_button" @click="shareShow"></span>
    </div>
    <div class="share_cover" v-if="(shareIsShow == 1)" @click.stop="shareHide">
        <span class="share_guide"></span>
    </div>
    <div class="qrcode">
        <span class="qrcode_desc">关注葡萄之家，获取答案</span>
        <span class="qrcode_image"></span>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: '',
    data(){
        return {
            correctNums: 0,
            shareIsShow: 0
        }
    },
    computed: {
        score(){
            return Math.ceil(this.correctNums/this.correctAnswers.length*100);
        },
        scoreEvaluate(){
            if(this.score < 60){
                return '你说，是不是把老师讲的内容又偷偷还给老师了？'
            }else if(this.score < 80){
                return '还可以，下次再努力努力吧！'
            }else if(this.score < 100){
                return '考了这么高的分数，可以说是很厉害了！'
            }else if(this.score == 100){
                return '恭喜你获得成就：满分达成！'
            }else{
                return '成绩有误，请返回重试！'
            }
        },
        ...mapState({
            answers: 'answers',
            correctAnswers: 'correctAnswers'
        })
    },
    methods: {
        shareShow(){
            this.shareIsShow = 1;
        },
        shareHide(){
            this.shareIsShow = 0;
        }
    },
    created(){
        document.body.style.backgroundImage = "url(" + require('../images/result_bg.jpg') + ")";
        this.answers.forEach((value, key) => {
            if(value === this.correctAnswers[key]){
                this.correctNums ++
            }
        })
        console.log(this.score)
    }
}
</script>

<style>
/* 整个分数视图的容器 */
.score_container{
    background: url(../images/score_container.png) no-repeat;
    background-size: 100% 100%;
    width: 10rem;
    height: 10rem;
    position: relative;
    top: 1rem;
    margin: 0 auto;
}
/* 分数数值 */
.score_number{
    display: block;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding-top: 4.8rem;
    color: #f00;
}
/* 分数评价 */
.score_evaluate{
    display: block;
    font-size: 0.7rem;
    margin-top: 0.5rem;
    margin-left: 1.1rem;
    text-align: center;
    color: #888;
}
/* 分享按钮 */
.share_button{
    display: block;
    background: url(../images/share_button.png) no-repeat 0.2rem 0;
    background-size: 100% 100%;
    width: 5.75rem;
    height: 2.5rem;
    position: relative;
    top: 2rem;
    margin: 0 auto;
}
/* 分享遮罩 */
.share_cover{
    width: 100%;
    height: 100%;
    background: url(../images/share_cover.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.95;
    z-index: 20;
}
/* 分享引导图 */
.share_guide{
    width: 12rem;
    height: 11rem;
    background: url(../images/share_guide.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 1rem;
    left: 2rem;
}
/* 二维码容器 */
.qrcode{
    width: 100%;
    position: absolute;
    top: 15.7rem;
    font-size: 0.5rem;
    text-align: center;
}
/* 二维码图片 */
.qrcode_image{
    display: block;
    background: url(../images/qrcode_image.png) no-repeat;
    background-size: 100% 100%;
    width: 6rem;
    height: 6rem;
    position: relative;
    top: 0.5rem;
    left: 5rem;
}
</style>