import { Map, List } from "immutable";
import { handleActions, createActions } from "redux-actions";

// createActions 를 이용해 한번에 액션 생성 함수를 선언할 수 있다.
export const { insert, toggle, remove } = createActions(
  // 첫번째 파라미터는 액션 생성함수의 객체
  {
    INSERT: item => item,
    REMOVE: id => id,
    TOGGLE: id => id
  },
  // 두번째 파라미터는 identityActions 인데 얜 잘 모르겠다.. 지금 쓰는 형태는 옵션
  // 세번째 파라미터 객체로 액션들의 접두어를 설정할 수 있다.
  {
    prefix: "todos"
  }
);
// 코드 재사용성으로 보면 createAction을 쓰는게 나은듯
// 깔끔하기는 createActions가 낫긴한데.. 리듀서의 조건을 문자열로 직접 설정하지 않을 방법이 있으면 더 좋을것같다.

// 리듀서 초기 상태 생성
const initialState = List([
  Map({
    id: "0",
    contents: "리액트 공부",
    done: true
  }),
  Map({
    id: "1",
    contents: "TodoList 만들기 두번째...",
    done: false
  })
]);

// 리듀서 만들고 default로 내보내기
export default handleActions(
  {
    "todos/INSERT": (state, action) => {
      const { id, contents, done } = action.payload;
      return state.push(
        Map({
          id,
          contents,
          done
        })
      );
    },
    "todos/TOGGLE": (state, action) => {
      // 액션으로 넘어온 값이 무슨 값인지 명확하게 알려주기 위해 별칭을 사용한다.
      const { payload: index } = action;
      // state의 index번째 객체 안의 done 값을 찾는다.
      // 찾은 값을 변경하는 함수
      return state.updateIn([index, "done"], done => !done);
    },
    "todos/REMOVE": (state, action) => {
      const { payload: index } = action;
      return state.delete(index);
    }
  },
  initialState
);
