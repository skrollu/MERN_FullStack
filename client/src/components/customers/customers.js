import React, { Component } from 'react';
import styles from '../../css/customers.module.css';
import axios from 'axios';
import { connect } from 'react-redux'
import { getItems } from '../../actions/itemActions'
import PropTypes from 'prop-types'

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>

        <ul className={styles.ul}>
        {this.props.item.items.map(customer => 
          <li className={styles.li} key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

Customers.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired //represent our state
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(Customers);
