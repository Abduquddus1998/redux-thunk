import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions/action';


class  App extends React.Component{
    componentDidMount() {
        this.props.onFetchData()
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Fetching the data from the backend</h1>
                {this.props.error && <p>{this.props.error}</p>}

                {this.props.data && <ul>
                    <li>id: {this.props.data.id}</li>
                    <li>title: {this.props.data.title}</li>
                </ul>}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { num: state.num, data: state.data, error: state.error }
}

const mapDispatchToProps = (dispatch) => {
    return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);