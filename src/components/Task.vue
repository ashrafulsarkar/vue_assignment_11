<script setup>
import { ref } from 'vue'
import { taskData } from '../store/task';
const task = taskData();
</script>

<template>
    <div class="task_data mt-3" v-for="(taskData, index) in task.taskDatas" :key="index">
        <div class="card">
            <div class="row g-0 align-items-center">
                <div class="col-9">
                    <div class="card-body">
                        <h5 class="mb-0">
                            <span v-if="taskData.status == 'undone'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                </svg>
                            </span>
                            <span v-if="taskData.status == 'done'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                </svg>
                            </span>
                            {{taskData.title}}
                        </h5>
                    </div>
                </div>
                <div class="col-2">
                    <div class="done_btn" v-if="taskData.status == 'undone'">
                        <button class="btn btn-primary" @click="task.doneTask(index)">Done</button>
                    </div>
                    <div class="undone_btn" v-else>
                        <button class="btn btn-danger" @click="task.undoneTask(index)">Undone</button>
                    </div>
                </div>
                <div class="col-1">
                    <div class="btn_delete">
                        <button class="btn btn-danger" @click="task.deleteTask(index)">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>