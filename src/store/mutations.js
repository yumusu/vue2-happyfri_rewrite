const mutations = {
    // 增加题目计数，添加选中答案，并重置当前答案
    quescountDecrement(state){
        state.quescount++;
        state.answers.push(state.selectedAns);
        state.selectedAns = '';
        // console.log(state.answers)
    },
    // 点完最后一题，添加答案，重置当前答案
    quesCompleted(state){
        state.answers.push(state.selectedAns);
        state.selectedAns = '';
        // console.log(state.answers);
    },
    // 点击答案li事件，点击后把当前答案code传给selectedAns
    liClick(state, sel){
        state.selectedAns = sel;
    },
    // 初始化数据
    initialState(state){
        state.quescount = 1;
        state.selectedAns = '';
        state.answers = [];
        // console.log("初始化完成")
    }
}

export default mutations;