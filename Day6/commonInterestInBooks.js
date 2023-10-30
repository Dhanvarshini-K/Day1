//   Find the common interest in books for the students
//   Output
//   Wings of Fire - [‘Arun’, ‘Balu’]
//   Chakra - [‘Arun’, ‘Ashok’]
//   War and Peace - [‘Ashok’, ‘Cathi’],
//   All about Cricket- [‘Balu’],
//   Against the wind- [‘Cathi’]
//   The Shining - [‘Cathi’, ‘Ashok’]
//   Find the user who shares most interest with other users.
//   For example: Ashok since he shares book interest with Arun, Cathi. And also Arun since he shares interest with Balu and Ashok

const students = [
    {
      id: 0,
      name: 'Arun',
      books: ['Wings of Fire', 'Chakra'],
    },
    {
      id: 1,
      name: 'Ashok',
      books: ['Chakra', 'War and Peace', 'The Shining']
    },
    {
      id: 2,
      name: 'Balu',
      books: ['Wings of Fire', 'All about Cricket'],
    },
    {
      id: 3,
      name: 'Cathi',
      books: ['Against the wind', 'The Shining', 'War and Peace']
    },
  ];
  
  const bookInterest = {};
  
  students.forEach(student => {
    student.books.forEach(book => {
      if (bookInterest[book]) {
        bookInterest[book].push(student.name);
      } else {
        bookInterest[book] = [student.name];
      }
    });
  });
  
  console.log("Interests in books:");
  for (const book in bookInterest) {
    console.log(`${book} - [${bookInterest[book].join(',')}]`);
  }

  const studentInterestCount = {};
  
  students.forEach(student => {
    studentInterestCount[student.name] = 0;
  
    student.books.forEach(book => {
      studentInterestCount[student.name] += bookInterest[book].length - 1; 
    });
  });
  
  let mostInterestUser = '';
  let mostInterestCount = 0;
  
  for (const user in studentInterestCount) {
    if (studentInterestCount[user] > mostInterestCount) {
      mostInterestUser = user;
      mostInterestCount = studentInterestCount[user];
    }
  }
  
  console.log(`Find the User who shares the most interest with other users: ${mostInterestUser}`);