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
db.student.aggregate([
    $project :{
        name :1,
        age:1
    }
])

db.student.aggregate([
    {
        $match: {
            age: { $gt: 20 }
        }
    },
    {
        $group: {
            _id: "$age",
            totalStudents: { $sum: 1 }
        }
    }
])
db.stiudents.aggregate([
    {
        $match: {
            age: { $gt: 20 }
        } 