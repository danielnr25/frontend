<script setup>
import { ref,watch } from 'vue';

const props = defineProps({
    initialData:Object
});

const emit = defineEmits(['submit']);
const student = ref({...props.initialData})
const students = ref([]);
const fetchStudents = () => {
    studentService.getAllStudents().then((response) => {
        students.value = response.data;
    })
}


watch(
    () => props.initialData,
    (newVal) => {
        student.value = {...newVal}
    },
    {inmediate:true}
)


const submitForm = () => {
    emit('submit', student.value)
    fetchStudents()
}

</script>

<template>
    <div>
        <form @submit.prevent="submitForm" class="max-w-md mx-auto">
        <div class="relative z-0 w-full mb-5 group">
            <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" v-model="student.lastname" name="lastname" id="firstname" placeholder="">
            <label for="lastname" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" v-model="student.firstname" name="firstname" id="firstname" placeholder="">
            <label for="firstname" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="text" v-model="student.age"  name="age" id="age" placeholder="">
            <label for="age" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Edad</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="student.profession" name="profession" id="profession" placeholder="">
            <label for="profession" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profesion</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <button class="w-full bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-800" type="submit">Agregar</button>
        </div>
        </form>
    </div>
</template>

