import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   });

// //   console.log(expenses);
// // });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     });

// //     console.log(expenses);
// //   });

  

// // database.ref('expenses').push({
// //   description: 'Food',
// //   note: 'comida da semana',
// //   amount: 8888,
// //   createdAt: moment().valueOf()
// // });




// // database.ref('notes/-LC_BLyWdKWSKvxxdJcq').remove();

// // database.ref('notes').push({
// //   title: 'Course Topic',
// //   body: 'Reactive Native, Angular, Python'
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // }, (e) => {
// //   console.log('Error with data fetching: ', e);
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({
// //   name: 'Daniel Simizo',
// //   age: 34,
// //   stressLevel: 8,
// //   job:  {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'New York',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // database.ref()
// // .remove()
// // .then(() => {
// //   console.log('isSingle removed');
// // }).catch((e) => {
// //   console.log('Something went wrong in removing isSingle', e);
// // });