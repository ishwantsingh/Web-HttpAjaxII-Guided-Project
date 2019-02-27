import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import axios from 'axios';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

const randomBool = () => (
  !(Math.floor(Math.random() * 2))
);

const doFakeAjax = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomBool()) {
        resolve({ id: '1', name: 'Samar', age: 25 });
      } else {
        reject({ message: 'No joy.' });
      }
    }, 1000);
  });
};

export default class Container extends React.Component {
  state = {
    person: null,
    error: null,
    loading: false,
    people: [],
  }

  componentDidMount() {
    this.fetchPerson();
  }

  fetchTwoPeople = () => {
    this.resetError();
    this.startSpinner();

    const promiseA = axios.get('http://demo6368739.mockable.io/');
    const promiseB = axios.get('http://demo6368739.mockable.io/');

    Promise.all([promiseA, promiseB])
      .then(([personA, personB]) => this.setPeople([personA.data, personB.data]))
      .finally(this.stopSpinner);
  }

  fetchPerson = () => {
    this.resetError();
    this.startSpinner();

    axios.get('http://demo6368739.mockable.io/')
      .then(res => this.setPerson(res.data))
      .catch(this.setError)
      .finally(this.stopSpinner);

    // fetch('http://demo6368739.mockable.io/')
    //   .then(data => data.json())
    //   .then(this.setPerson)
    //   .catch(this.setError)
    //   .finally(this.stopSpinner);

    // $.ajax({
    //   url: 'http://demo6368739.mockable.io/',
    //   success: this.setPerson,
    //   error: err => this.setError({ message: err.statusText }),
    // }).done(this.stopSpinner);
  }

  fakeFetchPerson = () => {
    this.startSpinner();
    this.resetError();
    doFakeAjax('http://demo6368739.mockable.io/')
      .then(this.setPerson)
      .catch(this.setError)
      .finally(this.stopSpinner);
  }

  setPeople = people => {
    this.setState(st => ({ people: st.people.concat(people) }));
  }

  setPerson = person => {
    // this.stopSpinner();
    this.setState({ person });
  }

  setError = error => {
    // this.stopSpinner();
    this.setState({ error });
  }

  resetError = () => {
    this.setState({ error: null });
  }

  startSpinner = () => this.setState({ loading: true })

  stopSpinner = () => this.setState({ loading: false })

  render() {
    if (this.state.loading) {
      return (
        <StyledContainer>
          Loading...
        </StyledContainer>
      );
    }

    if (this.state.error) {
      return (
        <StyledContainer>
          <div>Argh! This failed rather miserably. {this.state.error.message}</div>
          <button onClick={this.fetchPerson}>fetch again</button>
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        {
          this.state.person && (
            <div>
              <div>Name: {this.state.person.name}</div>
              <div>Age: {this.state.person.age}</div>
              <button onClick={this.fetchPerson}>fetch person</button>
            </div>
          )
        }
        <button onClick={this.fetchTwoPeople}>fetch 2 people</button>
      </StyledContainer>
    );
  }
}
