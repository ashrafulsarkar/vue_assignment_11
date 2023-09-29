import {ref, reactive} from 'vue'
import { defineStore } from "pinia";

const taskData = defineStore('task', () => {

    const task = JSON.parse(localStorage.getItem('task')) || []
    const taskDatas = ref(task)
    
    const addTask = (data) => {
        taskDatas.value[taskDatas.value.length] = ({ title: data, status: 'undone' })
        localStorage.setItem('task', JSON.stringify(taskDatas.value));
    }

    const deleteTask = (i) => {
        taskDatas.value.splice(i, 1)
        localStorage.setItem('task', JSON.stringify(taskDatas.value))
        // console.log(i);
    }

    const doneTask = (i) => {
        taskDatas.value[i].status = 'done'
        localStorage.setItem('task', JSON.stringify(taskDatas.value));
        // console.log(i);
    }

    const undoneTask = (i) => {
        taskDatas.value[i].status = 'undone'
        localStorage.setItem('task', JSON.stringify(taskDatas.value));
        // console.log(i);
    }
    
    return {taskDatas, addTask, deleteTask, doneTask, undoneTask}
})

export {taskData}