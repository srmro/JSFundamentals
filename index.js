// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];
function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  // write some logic that gets you the student ids 
  // LearnerSubmissions.forEach(())

  let results = []
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    // console.log(LearnerSubmissions[i].learner_id)
    results.push(LearnerSubmissions[i].learner_id)
  }
  try {
    let s = new Set(results); //filtering out the dupes
    results = [...s] //the new set of unique ids
  }
  catch {
  }

  // console.log(results)
  // let arr =[ {id: 125},
  // {id:132}]
  let arr = []
  for (let element of results) {
    // console.log(element)//125 132
    let obj = {
      id: element

    }
    //  obj.push(arr)
    arr.push(obj)
    //  console.log(obj)
    continue
  }
  results = arr
  // console.log(results)

  for ( let i = 0 ;i < results.length; i++ ){
    // get the assignments and their scores
    let id = results[i].id
      const assignments = LearnerSubmissions.filter((submission)=>{
        // console.log(submission)
        if(id === submission.learner_id){
          return true
        }
      });
      console.log(assignments)
      
      results[i]["2"]=150

      console.log( results[i]["2"])
    


}



}

// const submission =() => {

//   if (AssignmentGroup.assignments === LearnerSubmissions.submissions){
//   console.log("On time!");

// } else {
//   console.log("Not on time!");
      // make it an array of objects each object with an id key

      // just get the assignment id and score and save into the array 
      // make each assignment id as object key and score as the value
      // use the assignment id to find assignment score , then use it to divide 
      // calculate the avg
    // return result;
    

//arguments
console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));
//the score of learner Submissions
function calculateScore(LearnerSubmissions, listAssingments) {

}





