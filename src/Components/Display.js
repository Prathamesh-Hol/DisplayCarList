import React from 'react';
import '../App.css';
import DisplayList from './DisplayList';
import AddNewCar from './AddNewCar';


class Display extends React.Component{

    state={
        addNewCarBlock : false
    }

    addNewCar = () => {
        this.setState({addNewCarBlock:!this.state.addNewCarBlock});
    };

    render(){
        return(
            <div>
                
                {this.state.addNewCarBlock?
                    <div>
                        <AddNewCar addNewCarBlock={this.addNewCar}/>
                    </div>
                    :
                    <div>
                        
                        <h1>List of Cars</h1>
                        <button onClick={this.addNewCar}>Add New Car</button>
                        <DisplayList />
                    </div>
                }
                
            </div>
        );
    }
}

export default Display;