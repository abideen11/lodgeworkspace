import React from 'react';

export default class RentalForm extends React.Component {
    render() {
        return(
            <div className="div-rfm">
                <div className="rfm-div">
                    <h1>This is a test</h1>
                    <p>{this.props.clickedRental.rental}</p>
                </div>
            </div>
        )
    }
}