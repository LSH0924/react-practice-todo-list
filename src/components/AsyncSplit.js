import React, {Component} from "react";

class AsyncSplit extends Component {
    state = {
        Split : null
    }

    loadSplit = () => {
        // import() 는 Promise를 반환한다.
        // import() 를 사용하면 webpack은 청크를 생성해 저장한다.
        import("./Split").then(({default: Split}) => {
            this.setState({ Split });
        });
    };

    render(){
        const {Split} = this.state;
        // Split 이 존재하면 컴포넌트 Split을 랜더링, 아닐시 버튼을 표시한다.
        return Split ? <Split/> : <button onClick={this.loadSplit}>Split Loading</button>;
    }
}

export default AsyncSplit;