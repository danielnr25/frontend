<script setup>
import studentService from '../services/studentService';
import {ref,onMounted} from 'vue';

const students = ref([]);

const emit = defineEmits(["edit"]);

const fetchStudents = () => {
    studentService.getAllStudents().then((response) => {
        students.value = response.data;
    })
}


const editStudent = (student) =>{
    emit("edit",student);
    fetchStudents()
}

const deleteStudent = (id) =>{
    studentService.deleteStudent(id).then(()=>{
        fetchStudents();
    })
}

onMounted(() => {
    fetchStudents()
})

</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th  scope="col" class="px-6 py-3">ID</th>
                    <th  scope="col" class="px-6 py-3">NOMBRE</th>
                    <th  scope="col" class="px-6 py-3">APELLIDO</th>
                    <th  scope="col" class="px-6 py-3">EDAD</th>
                    <th  scope="col" class="px-6 py-3">PROFESION</th>
                    <th  scope="col" class="px-6 py-3">ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="student in students"
                    v-bind:key="student.id"
                    class="odd:bg-white even:bg-gray-50 border-b text-gray-700 font-medium"
                >
                    <td  scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ student.id }}</td>
                    <td class="px-6 py-4">{{ student.lastname }}</td>
                    <td class="px-6 py-4">{{ student.firstname }}</td>
                    <td class="px-6 py-4">{{ student.age }}</td>
                    <td class="px-6 py-4">{{ student.profession }}</td>
                    <td>
                        <button @click="editStudent(student)" type="button"
                        class="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                        >Editar</button>
                        <button 
                        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                        @click="deleteStudent(student.id)"  type="button">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


