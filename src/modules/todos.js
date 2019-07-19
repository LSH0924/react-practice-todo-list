import { Map, List } from "immutable";
import { handleActions, createActions } from "redux-actions";

// 액션 타입 선언
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";
const TOGGLE = "todos/TOGGLE";

// 액션 생성 함수 만들고 내보내기
export const insert = createActions(INSERT);
export const toggle = createActions(TOGGLE);
export const remove = createActions(REMOVE);

// 리듀서 초기 상태 생성
const initialState = List([Map({})]);

// 리듀서 만들고 default로 내보내기
export default handleActions(
  {
    [INSERT]: (state, action) => {
      const { id, contents, done } = action.payload;
      return state.push(
        Map({
          id,
          contents,
          done
        })
      );
    },
    [TOGGLE]: (state, action) => {
      // 액션으로 넘어온 값이 무슨 값인지 명확하게 알려주기 위해 별칭을 사용한다.
      const { payload: index } = action;
      // state의 index번째 객체 안의 done 값을 찾는다.
      // 찾은 값을 변경하는 함수
      return state.updateIn([index, "done"], done => !done);
    },
    [REMOVE]: (state, action) => {
      const { payload: index } = action;
      return state.delete(index);
    }
  },
  initialState
);
