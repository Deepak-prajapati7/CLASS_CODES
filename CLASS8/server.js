db 

db.students.aggregate([
  {
    $match: {
        gender: "female"
    }
  },
  {
    $group: {
        _id: "$gender",
        totalStudents: { $sum: 1 }
    }
  }
])