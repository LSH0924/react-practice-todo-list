import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

// 액션 타입 선언
// 문자열 앞부분에 리듀서 이름을 적어준다.
// 접두사를 설정하면 다른 리듀서에서 같은 액션 타입 이름을 사용한다 해도 안심!
const SET_INPUT = "input/SET_INPUT";

// 액션 타입 생성 함수
export const setInput = createAction(SET_INPUT);

// 리듀서의 초기 상태 정의하기
const initialState = Map({
  value: ""
});

// 리듀서 정의하고 내보내기
export default handleActions(
  // 첫 번째 파라미터 : 각 액션에 따라 실행할 함수를 담은 객체
  {
    [SET_INPUT]: (state, action) => {
      return state.set("value", action.payload);
    }
  },
  // 두 번째 파라미터 : 리듀서 초깃값
  initialState
);
