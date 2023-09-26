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

class Header extends Component{

    render () {
        return (
                <>
                    <header> 
                        <div className='logo'>Logo</div>
                        <input/>
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
