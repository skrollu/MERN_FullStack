import React, { Component } from 'react';
import styles from '../../css/customers/customers.module.css';
import { connect } from 'react-redux'
import { getItems } from '../../actions/itemActions'
import PropTypes from 'prop-types'
import Spinner from '../ui/spinner';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      collection: "customers"
    };
  }

  componentDidMount() {
    this.props.getItems(this.state.collection);
  }

  render() {
    return this.props.item.loading ? (
      <Spinner />
    ) : (
      <div>
        <h2 id="componentTitle" className={styles.title}>Customers</h2>
        <ul id="CustomersList" className={styles.ul}>
          {this.props.item.items.map(customer => 
            <li id={`customer${customer._id}`} className={styles.li} key={customer._id}>{customer.firstName} {customer.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

Customers.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Customers);
