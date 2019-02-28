import React from 'react';
import axios from 'axios';
import { StyledContainer, StyledCrud } from './styled/styled';


const personURL = 'http://gabe.mockable.io/person/';

const randomBool = () => (
  !(Math.floor(Math.random() * 2))
);

const doFakeAjax = () => { // BROKEN!!! WHY??
  new Promise((resolve, reject) => {
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

  inputNameRef = React.createRef();

  inputAgeRef = React.createRef();

  inputNameEditRef = React.createRef();

  inputAgeEditRef = React.createRef();

  inputIdRef = React.createRef();

  // fakeFetchPerson = () => {
  //   this.startSpinner();
  //   this.resetError();

  //   doFakeAjax(personURL)
  //     .then(this.setPerson)
  //     .catch(this.setError);
  // }

  // CRUD OPERATIONS
  fetchPerson = () => { // BROKEN!!! WHY??
    this.resetError();
    this.startSpinner();

    axios.get(personURL)
      .then(this.setPerson)
      .catch(this.setError);
  }

  fetchTwoPeople = () => {

  }

  postNewPerson = () => {

  }

  putPerson = () => {

  }

  deletePerson = id => {

  }

  // STATE MANAGEMENT
  setPeople = people => {

  }

  setPerson = person => {
    this.stopSpinner();
    this.setState({ person });
  }

  setError = error => {
    this.stopSpinner();
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
          <button onClick={this.fetchPerson}>fetch person</button>
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        <StyledCrud>
          <h5>[GET] a random person</h5>
          {
            this.state.person && (
              <>
                <div>Name: {this.state.person.name}</div>
                <div>Age: {this.state.person.age}</div>
              </>
            )
          }
          <button onClick={this.fetchPerson}>fetch person</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[GET * 2] random people</h5>
          {
            this.state.people.map(
              person => <div key={person.id}>{person.name} is {person.age}</div>,
            )
          }
          <button onClick={this.fetchTwoPeople}>fetch 2 people</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[POST] a new person</h5>
          name: <input type='text' ref={this.inputNameRef} /><br />
          age: <input type='text' ref={this.inputAgeRef} /><br />
          <button onClick={this.postNewPerson}>submit new person</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[PUT] existing person by id</h5>
          name: <input type='text' ref={this.inputNameEditRef} /><br />
          age: <input type='text' ref={this.inputAgeEditRef} /><br />
          <button onClick={this.putPerson}>edit person</button>
        </StyledCrud>

        <StyledCrud>
          <h5>[DELETE] existing person by id</h5>
          id: <input type='text' ref={this.inputIdRef} /><br />
          <button
            onClick={() => this.deletePerson(this.inputIdRef.current.value)}
          >
            delete person
          </button>
        </StyledCrud>
      </StyledContainer>
    );
  }
}
