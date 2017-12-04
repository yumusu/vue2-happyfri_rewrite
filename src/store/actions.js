import router from '../router'

const actions = {
    nextButtonClick({ commit, state }){
        if(state.selectedAns === ''){
            alert('请选择一个答案');
            return;
        }
        if(state.quescount < state.questions.length){
            commit('quescountDecrement');
        }else{
            commit('quesCompleted');
            router.push('/result');
        }
    }
}

export default actions;