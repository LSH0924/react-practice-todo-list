// next는 store.dispatch와 비슷한 역할을 한다.
// store.dispatch와 다른 점은 next(action)을 했을 때는 그 다음 처리해야 할 미들웨어로 액션을 넘겨주고, 추가로 처리할 미들웨어가 없으면 바로 리듀서로 넘겨준다는 것.
// dispatch 는 액션을 처음부터 디스패치 해서 리듀서로 넘겨준다.
const loggerMiddleware = store => next => action => {
    console.log("현재 store의 state", store.getState());
    console.log("현재 store의 todos", store.getState().todos.toJS());
    console.log("액션", action);
    
    // 액션을 다음 미들웨어 또는 리듀서로 넘긴다.
    const result = next(action);
    
    console.log("다음 작업으로 넘긴 뒤 store의 state", store.getState());
    console.log("현재 store의 todos", store.getState().todos.toJS());
    console.log("\n"); // 로그 구분용 newLine

    // store.dispatch(ACTION_TYPE) 했을 때(리듀서로 갔을 때)의 결과
    return result;
};

export default loggerMiddleware;