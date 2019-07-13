import React from 'react';
import './customers.css';
class Customers extends React.Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }
    // ↓ Lifecycle method
    async componentDidMount() {
        const response = await fetch('/api/customers');
        const data = await response.json()
        this.setState({customers: data})
        console.log(this.state.customers);
    } 

    render() {
        
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer => (
                        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
    
export default Customers;
    