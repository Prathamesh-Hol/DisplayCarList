import React from 'react';
import '../App.css';
import Display from './Display';

class App extends React.Component{
    state = {
        showNewComponent:false
    }
    nextPage = () =>{
        this.setState({showNewComponent:!this.state.showNewComponent});
    }
    render(){
        return (
            <div>
                {!this.state.showNewComponent?
                    <div className="App">
                        <form>
                            <label htmlFor="uname"><b>First name:</b></label> 
                            <input type="text" name="uname" /> <br />
                            <label htmlFor="password"><b>Password:</b></label>
                            <input type="password" name="password"/><br />
                            <button onClick={this.nextPage}>Login</button>
                        </form> 
                    </div>:<Display />
                }                
            </div>
        );
    }
}

export default App;
