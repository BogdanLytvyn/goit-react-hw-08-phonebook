import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <Spinner
        type="ThreeDots"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={2000}
        className={styles.Spinner}
      />
    );
  }
}
