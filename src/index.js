import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component{
    handleClickOnTitle(e){
        console.log(this)
    }
    render(){
        const isGood=true;
        const good='is good';
        const isNotGood='is not good';
        return(
            <div className="divHeaer">
                <h1 onClick={this.handleClickOnTitle.bind(this)}>
                    React 小书
                    {isGood
                        ? good
                        : isNotGood
                    }
                </h1>
            </div>
        )
    }
}

class  Header extends Component{
    render(){
        return(
            <div>
                <Title/>
            </div>
        )
    }
}

class LikeButton extends Component {
    static defaultProps={
        name:'Green'
    }
    constructor() {
        super();
        this.state = {
            isLiked: true
        }
    }
    handleClikeOnLikeButton (){
        this.setState({
            isLiked:!this.state.isLiked
        })
        // console.log('click')
    }
    render(){
        return(
            <button onClick={this.handleClikeOnLikeButton.bind(this)}>
                {this.props.name}{this.state.isLiked ? '点赞' :'取消'}
            </button>
        )
    }
}
class Main extends Component{
    render(){
        return(
            <div>
                <LikeButton name='Snow' />
                <h2>This is Main content</h2>
            </div>
        )
    }
}

class Footer extends Component{
    render(){
       return(
           <div>
               <h2>This is Footer</h2>
           </div>
       )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
