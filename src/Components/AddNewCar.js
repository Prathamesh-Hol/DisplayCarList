import React from 'react';
import '../App.css';
import axios from 'axios';

const AddNewCar = (props) => {

    function cancel(){
        props.addNewCarBlock();
    }

    function addCar(){
    axios({
        method: 'put',
        url: 'http://45.79.76.22:7080/EasyRentals/EasyRentals/car/listyourcar',
        data: {
            "address": {
                "city": "string",
                "geoLocation": {
                "latitude": 0,
                "longitude": 0
                },
                "postalCode": 0,
                "state": "string",
                "street": "string"
            },
            "amount": parseInt(document.getElementById('model-amount').value),
            "audioPlayer": true,
            "bluetooth": true,
            "contactNum": 0,
            "drivingLicenseNumber": "string",
            "drivingLicenseState": "string",
            "gps": true,
            "hybrid": true,
            "licenseNum": document.getElementById('model-name').value,
            "make": "string",
            "maximumDistance": "string",
            "model": document.getElementById('model-name').value,
            "odometer": 0,
            "petFriendly": true,
            "style": "string",
            "sunRoof": true,
            "transmission": "string",
            "withDriver": true,
            "withoutDriver": true,
            "year": document.getElementById('model-year').value
        }
    })
    .then(() => {
            props.addNewCarBlock();
        })
        
    }

    return(
        <div>
            <label htmlFor="mname"><b>Car Name:</b></label> 
            <input type="text" name="mname" id="model-name" required></input><br />
            <label htmlFor="myear"><b>Car Year:</b></label> 
            <input type="text" name="myear" id="model-year" required></input><br />
            <label htmlFor="mamount"><b>Car Amount:</b></label> 
            <input type="text" name="mamount" id="model-amount" required></input><br />
            <button onClick={addCar}>Add Car</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    )
}

export default AddNewCar;