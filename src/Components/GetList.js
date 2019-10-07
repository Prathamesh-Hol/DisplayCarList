import React from 'react';
import '../App.css';
import axios from 'axios';

class GetList extends React.Component{
    state = {
        items:[],
        listItems : []
    }
    componentDidMount() {
        axios.get("http://45.79.76.22:7080/EasyRentals/EasyRentals/car/getCarList")
        .then(
            result => {
                this.setState({ items: result.data});
                this.setState({ 
                    listItems: this.state.items.map((list) =>
                        <li key={list.model}>
                            <div>
                                <p>Car Name : {list.model}</p>
                                <p>Amount : {list.amount}</p>
                                <p>Year : {list.year}</p>
                            </div> 
                        </li> 
                    )
                });               
            })
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.listItems}
                </ul>
            </div>
        )
    }
    

}

export default GetList;