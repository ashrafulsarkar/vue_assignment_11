<script setup>
import { ref } from 'vue'
import Task from './Task.vue'
import { taskData } from '../store/task';
const task = taskData();

const taskText = ref('')
const addTask = () => {
	task.addTask(taskText.value)
	taskText.value = ''
}
</script>

<template>
	<Task></Task>
	<div class="task_add_box mt-3">
		<form @submit.prevent="addTask">
			<div class="mb-3">
				<input type="text" required class="form-control" v-model="taskText" placeholder="Type task title">
			</div>
			<button type="submit" class="btn btn-primary">Add Task</button>
		</form>
	</div>
</template>

<style scoped></style>
