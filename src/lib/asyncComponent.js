import React, {Component} from "react";

export default function asyncComponent(getComponent){
    return class AsyncComponent extends Component {
        static Component = null;
        state = {Component : AsyncComponent.Component};

        constructor(props){
            super(props);
            if(AsyncComponent.Component) return;
            // getComponent() : 컴포넌트를 import 하는 함수
            getComponent().then(({default: Component}) => {
                // 컴포넌트가 언마운트 되었다가 나중에 재 마운트 할 때는 컴포넌트를 새로 불러오지 않고, static 값으로 남아있던 예전 컴포넌트를 재사용 하기 위함
                AsyncComponent.Component = Component;
                this.setState({Component});
            });
        }
        
        render(){
            const {Component} = this.state;
            if(Component){
                return <Component {...this.props}/>
            }
            return null;
        }
    }
}