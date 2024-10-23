import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-type':'application/json'
    }
})

export default {
    getAllStudents(){
        return apiClient.get('/students');
    },
    createStudent(student){
        return apiClient.post('/students',student);
    },
    updateStudent(id,student){
        return apiClient.put(`/students/${id}`, student);
    },
    deleteStudent(id){
        return apiClient.delete(`/students/${id}`);
    }
}