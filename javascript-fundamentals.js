console.log(
  "=========================== JavaScript Fundamentals ==========================="
);
console.log(
  "==============================================================================="
);
//-------------------------------------------------------------------------//
// An Object with the provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};
//-------------------------------------------------------------------------//

//-------------------------------------------------------------------------//
// An Object with Properites and Methods with the provided assignment group.
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
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};
//-------------------------------------------------------------------------//

//-------------------------------------------------------------------------//
// An Array of Objects with the provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];
//-------------------------------------------------------------------------
//// here, we would process this data to achieve the desired result.
// const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0, // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833, // late: (140 - 15) / 150
//   },
// ];
//-------------------------------------------------------------------------//
function getLearnerData(course, ag, submissions) {
  // Line for Course info
  const courseId = course.id; // 451
  const courseName = course.name; // Introduction to JavaScript
  //-----------------------------------------------------------------------------//
  //=============================================================================//
  //=============================================================================//
  //-----------------------------------------------------------------------------//
  // Line for Course Assignment Group
  const agId = ag.id; // 12345
  const agCoursename = ag.name; // Fundamentals of JavaScript
  const agCourseId = ag.course_id; // 451
  const agGroupWeight = ag.group_weight; // 25
  // Assignments is an array
  const agAssignmentId0 = ag.assignments[0].id; // 1
  const agAssignmentName0 = ag.assignments[0].name; // Declare a Variable
  const agAssignmentDueDate0 = ag.assignments[0].due_at; // 2023-01-25
  const agAssignmentPointsPossible0 = ag.assignments[0].points_possible; // 50
  const agAssignmentId1 = ag.assignments[1].id; // 2
  const agAssignmentName1 = ag.assignments[1].name; // Write a Function
  const agAssignmentDueDate1 = ag.assignments[1].due_at; // 2023-02-27
  const agAssignmentPointsPossible1 = ag.assignments[1].points_possible; // 150
  const agAssignmentId2 = ag.assignments[2].id; // 3
  const agAssignmentName2 = ag.assignments[2].name; // Code the World
  const agAssignmentDueDate2 = ag.assignments[2].due_at; // 3156-11-15
  const agAssignmentPointsPossible2 = ag.assignments[2].points_possible; // 500
  //-----------------------------------------------------------------------------//
  //=============================================================================//
  //=============================================================================//
  //-----------------------------------------------------------------------------//
  // Line for provided learners submission
  // Index 0
  const learnerId0 = submissions[0].learner_id; // 125
  const learnerAssignId0 = submissions[0].assignment_id; // 1
  // Line for provided learners submission nested Object
  const learnerSubmissionDate0 = submissions[0].submission.submitted_at; // 2023-03-07
  const learnerSubmissionScore0 = submissions[0].submission.score; // 140
  //-----------------------------------------------------------------------------//
  // Index 1
  const learnerId1 = submissions[1].learner_id; // 125
  const learnerAssignId1 = submissions[1].assignment_id; // 2
  // Line for provided learners submission nested Object
  const learnerSubmissionDate1 = submissions[1].submission.submitted_at; // 2023-02-12
  const learnerSubmissionScore1 = submissions[1].submission.score; // 150
  //-----------------------------------------------------------------------------//
  // Index 2
  const learnerId2 = submissions[2].learner_id; // 125
  const learnerAssignId2 = submissions[2].assignment_id; // 3
  // Line for provided learners submission nested Object
  const learnerSubmissionDate2 = submissions[2].submission.submitted_at; // 2023-01-25
  const learnerSubmissionScore2 = submissions[2].submission.score; // 400
  //-----------------------------------------------------------------------------//
  // Index 3
  const learnerId3 = submissions[3].learner_id; // 132
  const learnerAssignId3 = submissions[3].assignment_id; // 1
  // Line for provided learners submission nested Object
  const learnerSubmissionDate3 = submissions[3].submission.submitted_at; // 2023-01-24
  const learnerSubmissionScore3 = submissions[3].submission.score; // 39
  //-----------------------------------------------------------------------------//
  // Index 4
  const learnerId4 = submissions[4].learner_id; // 132
  const learnerAssignId4 = submissions[4].assignment_id; // 2
  // Line for provided learners submission nested Object
  const learnerSubmissionDate4 = submissions[4].submission.submitted_at; // 2023-03-07
  const learnerSubmissionScore4 = submissions[4].submission.score; // 140
  //=============================================================================//

  //----------------------------- Helper Functions ------------------------------//
  // The parameters are the learners submitted score and the possible point
  function scorePrecentage(submissions, ag) {
    if (submissions.assignment_id === 1) {
      return submissions.submission.score / ag.assignments[0].points_possible;
    }
    if (submissions.assignment_id === 2) {
      return submissions.submission.score / ag.assignments[1].points_possible;
    }
    if (submissions.assignment_id === 3) {
      return submissions.submission.score / ag.assignments[2].points_possible;
    }
  }
  // The parameter is an array of scores and returns the average
  function scoreAverage(submissions, ag) {
    let scoreAverage = 0;
    if (submissions.learner_id === 125) {
      // return (
      //   (submissions[0].submission.score + submissions[1].submission.score) /
      //   (ag.assignments[0].points_possible + ag.assignments[1].points_possible)
      // );
      scoreAverage += submissions.submission.score;
    }
    if (submissions.learner_id === 132) {
      // return (
      //   (submissions[0].submission.score + submissions[1].submission.score) /
      //   (ag.assignments[0].points_possible + ag.assignments[1].points_possible)
      // );
      scoreAverage += submissions.submission.score;
    }
    return scoreAverage;
  }
  //-----------------------------------------------------------------------------//
  // here, we would process this data to achieve the desired result.
  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0, // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833, // late: (140 - 15) / 150
  //   },
  // ];
  let courseAssignment = ag.assignments;
  const studentsScoresAndAverageArr = [];
  for (let i = 0; i < submissions.length; i++) {
    studentsScoresAndAverageArr[i] = {};
    studentsScoresAndAverageArr[i].id = submissions[i].learner_id;
    studentsScoresAndAverageArr[i].avg = scoreAverage(submissions[i], ag);
    for (let j = 0; j < courseAssignment.length; j++) {
      studentsScoresAndAverageArr[i][courseAssignment[j].id] = scorePrecentage(
        submissions[i],
        ag
      );
    }
  }

  // studentsScoresAndAverageArr.push({
  //   id: submissions[i].learner_id,
  //   avg:
  //     (learnerSubmissionScore0 + learnerSubmissionScore1) /
  //     (agAssignmentPointsPossible0 + agAssignmentPointsPossible1),
  //   1: scorePrecentages / agAssignmentPointsPossible0,
  //   2: learnerSubmissionScore2 / agAssignmentPointsPossible2,
  // });

  // try {
  //   if (agCourseId !== courseId) throw new SyntaxError("The input was invalid");
  //   if (
  //     agAssignmentPointsPossible0 === 0 ||
  //     agAssignmentPointsPossible1 === 0 ||
  //     agAssignmentPointsPossible2 === 0
  //   )
  //     throw new SyntaxError("There are no possible points");
  //   if (
  //     typeof agAssignmentPointsPossible0 !== "number" ||
  //     typeof agAssignmentPointsPossible1 !== "number" ||
  //     typeof agAssignmentPointsPossible2 !== "number"
  //   )
  //     throw new SyntaxError("Your input is not a number");
  // } catch (error) {
  //   console.log(`Uh ohhh!!! ${error}`);
  // }

  return studentsScoresAndAverageArr;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

// let submitted_scoreId1 = 47;
// let points_possibleId1 = 50;
// function scorePrecentageId1(submitted_score, points_possible) {
//   return submitted_score / points_possible;
// }

// let testScorePercantageId1 = scorePrecentageId1(
//   submitted_scoreId1,
//   points_possibleId1
// );
// console.log(testScorePercantageId1);
// //=============================================================//
// let submitted_scoreId2 = 150;
// let points_possibleId2 = 150;
// function scorePrecentageId1(submitted_score, points_possible) {
//   return submitted_score / points_possible;
// }

// let testScorePercantageId2 = scorePrecentageId1(
//   submitted_scoreId2,
//   points_possibleId2
// );
// console.log(testScorePercantageId2);
// //=============================================================//
// let totalSubmittedScore = [testScorePercantageId1, testScorePercantageId2];
// let totalPointsPossible = [points_possibleId1, points_possibleId2];

// function totalScoreAverage(submitted_score, points_possible) {
//   let possiblePoints = 0;
//   let score = 0;
//   for (let i = 0; i < submitted_score.length; i++) {
//     score += submitted_score[i];
//     possiblePoints += points_possible[i];
//   }
//   return score / possiblePoints;
// }
// let totalAverage = totalScoreAverage(totalSubmittedScore, totalPointsPossible);
// console.log(totalAverage);
// //=============================================================//
