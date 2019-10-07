import React from 'react';
import '../App.css';
import GetList from './GetList';


class DisplayList extends React.Component{
    
    render(){       
        return (
            <div>
                <GetList />
            </div>
        );
    };
}

export default DisplayList;