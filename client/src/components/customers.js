import React, { Component } from 'react';
import styles from '../css/customers.module.css';
import axios from 'axios';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get('/api/customers')
      .then(res => {
        const data = res.data
        this.setState({ customers: data })
        console.log('Customers fetched...', this.state.customers)
    });

    /*
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
    */
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>

        <ul className={styles.ul}>
        {this.state.customers.map(customer => 
          <li className={styles.li} key={customer.id}>{customer.firstName} {customer.lastName}</li>

        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
