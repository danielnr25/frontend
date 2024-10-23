<script setup>
import studentForm from './components/studentForm.vue';
import studentList from './components/studentList.vue';
import studentService from './services/studentService';
import {ref} from 'vue';

const students = ref([]);
const studentToEdit = ref(null);

const handleEdit = (student) =>{
    studentToEdit.value = student;
}

const fetchStudents = () => {
    studentService.getAllStudents().then((response) => {
        students.value = response.data;
    })
}

const handleSubmit = (student) => {
    if(student.id){
        studentService.updateStudent(student.id, student).then(() =>{
            alert('Estudiante actualizado');
            fetchStudents()
            studentToEdit.value = null;
        })
    }else{
       studentService.createStudent(student).then(()=>{
        alert('Estudiante registrado');
        fetchStudents()
        studentToEdit.value = null;
       })
    }
}

</script>
<template>
   <div class="mx-auto max-w-7xl px-10 py-10">
    <h1 class="text-blue-700 text-center text-2xl font-semibold">Gestión de Estudiantes</h1>

        <studentForm 
            @submit="handleSubmit"
            :initialData="studentToEdit"
        />

        <studentList
            @edit="handleEdit"
        />
    </div>
</template>

