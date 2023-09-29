// ______// class based component:

// import React from 'react'; class Header extends React.Component
import React, {Component} from 'react';

class Header extends Component{


    // inputChange = (e) => {
    //     const value = e.target.value === '' ? false : true;
    //     this.setState({
    //         active: value,
    //         keywords: e.target.value,
            
    //     })
    // }

    

    render () {
        return (
                <>
                <header style={{background:`${this.props.active ? '#03d9ff' : '#03a9fa'}`}}>  
                        <div className='logo' >News</div>
                    <input onChange={this.props.keyword} />
                    <button onClick={()=>this.props.changeColor}>Change backround color</button>
                    </header>
                </>
        )    
    }
    
}
export default Header;
