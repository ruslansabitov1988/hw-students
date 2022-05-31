let fs = require('fs');

const STUDENT_FILE_PATH = "./student.txt";

const getStudents = () =>{
    return JSON.parse(fs.readFileSync(STUDENT_FILE_PATH, "utf-8"))

}

const addStudent = student =>{
    let array = JSON.parse(fs.readFileSync(STUDENT_FILE_PATH, "utf-8"));
    let newId = array.length + 1;
    student.id = newId;
    array.push (student);
    fs.writeFileSync(STUDENT_FILE_PATH, JSON.stringify(array));

}

const deleteStudent = id =>{
    let array = getStudents();
    let index = array.findIndex(item => item.id == id);

    if(index !=-1){
        array.splice(index, 1);
        fs.writeFileSync(STUDENT_FILE_PATH, JSON.stringify(array));
    }

}


const putStudent = (id, newName, newCurs, newMajor) =>{
    let array = getStudents();
    let index = array.findIndex(item => item.id == id);
    array[index].name = newName;
    array[index].curs = newCurs;
    array[index].major = newMajor;
    if(index !=-1){
        fs.writeFileSync(STUDENT_FILE_PATH, JSON.stringify(array));
    }

}

const idStudent = id =>{
    let array = getStudents();
    let foundStudentIndex = array.findIndex(item => item.id == id);

    if(foundStudentIndex !=-1){
        return (array[foundStudentIndex]);
    }else{
        return {};
    }

}





module.exports = {
    getStudents,
    addStudent,
    deleteStudent,
    putStudent,
    idStudent
}
