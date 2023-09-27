// ______// class based component:

// import React from 'react'; class Header extends React.Component
import React, {Component} from 'react';

// let styles = {
//     header: {
//         background: "#03a9fa"
//     },
//     logo: {
//         color: '#fff',
//         fontFamily: 'Georgia',
//         textAlign: 'center'
//     }
// };

// const inputChange = () => {
//     console.log('I was changed')
// };

class Header extends Component{

    state = {
        title:"The keywords are:",
        keywords: '',
        count: 0
    }

    inputChange = (e) => {
        // console.log('I was changed')
        // console.log(e.target.value);
        this.setState({
            keywords: e.target.value,
    
        })
    }

    // addOne () {
    //     this.setState({count: this.state.count +1})
    // }
    addOne () {
        this.setState(
            (state, props) => (
                {
                    count:state.count +1
                }
            )
        )
    }

    render () {
        return (
                <>
                    <header> 
                    <div
                            className='logo'
                            onClick={()=> console.log('I was clicked')}
                            >Logo</div>
                    <input
                        onChange ={this.inputChange}
                    />
                    <br />
                    <div>{this.state.title}</div>
                    <div>{this.state.keywords}</div>
                    <div>{this.state.count}</div>
                    <button onClick={()=>this.addOne()}>Add one</button>
                    </header>
                </>
                )    
    };
    
}
export default Header;


// ______// functional component:
// const Header = () => {
//     const getFullYear = () => {
//         const newDate = new Date();
//         return newDate.getFullYear()
// }
//     return (
//         <>
//             <div>
//                 The year is {getFullYear()}
//             </div>
//         </>
//    )
// }
