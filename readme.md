# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Objectives
  * Learn `promise.finally()`.
  * Learn `Promise.all()`.
  * Learn `POST`, `PUT`, `DELETE`.
  * Learn about preflight requests and `CORS`.
  * Learn to organize endpoints in `Postman`.
  * Learn `ref`s in `React`.

# Steps
  * Show our `GET` in action in Chrome Devtools Network tab.
  * Teach `promise.finally()` and clean up `setPerson` and `setError`.
  * Teach `Promise.all()` and use it to fetch two people.
  * Implement `setPeople` so we concatenate the two people to `this.state.people`.
  * Show each new endpoint on `mockable.io`.
  * Make each new endpoint work on `Postman`.
  * Implement `postNewPerson`, `putPerson`, `deletePerson`.
  * Dry code.