const express = require("express");
let studentsRouter = express.Router();

const file = require("../module/fileStudent.js");

studentsRouter.get('/',(request, response)=>{         //проверено
    let array = file.getStudents()
    response.send(array);
});

studentsRouter.get('/:id',(request, response)=>{        //проверено
    let studentId = request.params.id;
    let student = file.idStudent(studentId)
    response.send(student);

});


studentsRouter.post('/',(request, response)=>{           //проверено
    let {name, curs, major} = request.body;

    let newStudent = {
        name,
        curs,
        major
    }
    file.addStudent(newStudent)

    console.log(name)
    response.status(200).send("Student added")
});

studentsRouter.delete('/',(request, response)=>{         //проверено
    let {id} = request.body;
    file.deleteStudent(id);
    console.log(request.body)
    response.status(200).send("Student deleted")
    
});

studentsRouter.put('/',(request, response)=>{                  //проверено
    let {id, newName, newCurs, newMajor} = request.body;

    file.putStudent(id, newName, newCurs, newMajor)

    response.status(200).send("Student changed")
});






module.exports = studentsRouter;