import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default class RentalReceipt extends React.Component {
    state = {
        options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
    render() {
        return(
            <div className="div-rre">
                <div className="rre-div"></div>
                <div className="rre-div2">
                    <p className="rre-div2p" onClick={() => window.print()}><FontAwesomeIcon icon={faPrint} /> Print for Your Record</p>
                    <div className="rrd2-div">
                        <h1>Receipt #: {this.props.reservedRental.receiptNumber}</h1>
                        <br />
                        <br />
                        <p className="rrd2-p1">Host: {this.props.reservedRental.name}</p>
                        <p className="rrd2-p2">Location: {this.props.reservedRental.location}</p>
                        <p className="rrd2-p3">Rental: {this.props.reservedRental.rental}</p>
                        <p className="rrd2-p4">Price: ${this.props.reservedRental.price}</p>
                        <p className="rrd2-p5">From: {this.props.reservedRental.begin_Date.toLocaleDateString('en-US', this.state.options)}</p>
                        <p className="rrd2-p6">To: {this.props.reservedRental.end_Date.toLocaleDateString('en-US', this.state.options)}</p>
                        <p className="rrd2-p7">Total Day(s): {this.props.reservedRental.days}</p>
                        <p className="rrd2-p8">Lodging Fee: ${this.props.reservedRental.lodging_Fee_fixed}</p>
                        <p className="rrd2-p9">Service Fee: ${this.props.reservedRental.service_Fee_fixed}</p>
                        <div className="rrd2-d1">
                            <hr />
                        </div>
                        <p className="rrd2-p10">Amount Paid: ${this.props.reservedRental.total__fixed}</p>
                        <div className="rrd2-d2">
                            <hr />
                        </div>
                        <h2 className="rrd2-h2">Thank You for Being an Awesome Customer!</h2>
                    </div>
                    <br />
                </div>
                <div className="rre-div3"></div>
            </div>
        )
    }
}