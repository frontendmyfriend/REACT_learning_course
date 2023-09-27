import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css'

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';
import JSON from './db.json'


// JSX
class App extends Component {

    state = {
        news: JSON,
        footerText: 'Footer with a lot of stuff in there'
    }

    render () {
        // console.log(this.state);
        return (
            <div className='hey'>
                <Header/>
                <NewsList
                    news={this.state.news}
                />
                <Footer footerText={this.state.footerText} />
            </div>
    )
        
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





// what React is doing behind the scenes
// const App = () => {
//     return React.createElement('h1', {id: 'title'}, 'Hello from H1', React.createElement('div',{className:'div' } ,'Hello from div'))
// };