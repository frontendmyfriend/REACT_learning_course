// ______// class based component:

// import React from 'react'; class Header extends React.Component
import React, {Component} from 'react';

class Header extends Component{

    state = {
        keywords: ''
    }

    inputChange = (e) => {
        this.setState({
            keywords: e.target.value,
        })
    }

    render () {
        return (
                <>
                    <header> 
                        <div className='logo' >News</div>
                        <input onChange = {this.inputChange} />
                    </header>
                </>
        )    
    }
    
}
export default Header;
