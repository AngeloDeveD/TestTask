<template>
  <div class="CenteredDiv">
    <div class="flex content-center items-center">
      <h2 class="mr-4 font-bold text-2xl text-red-600">Учётные записи</h2>
      <button class="bg-red-600 rounded-md size-9 cursor-pointer text-white" @click="addComponent">
        +
      </button>
    </div>
    <div class="py-2 my-3 bg-red-400 text-white rounded-md w-full">
      <h2 class="text-sm px-6">
        Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;
      </h2>
    </div>
    <div class="max-h-80 overflow-y-auto">
      <div
        v-if="components.length > 0"
        v-for="component in components"
        :key="component.id"
        class=""
      >
        <FormComponent :id="component.id" @remove="removeComponent" />
      </div>
      <div v-else>
        <h2 class="">Пожалуйста добавьте учётную запись</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import FormComponent from './FormComponent.vue'

interface Components {
  id: number
}

const components = ref<Components[]>([])

let nextId = 1

const addComponent = (): void => {
  components.value.push({ id: nextId++ })
}

const removeComponent = (id: number): void => {
  components.value = components.value.filter((component) => component.id !== id)
}
</script>

<style scoped>
.CenteredDiv {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  padding: 10px;
  border-width: 2px;
  border-radius: 7px;
  border-color: #fecaca;
}
</style>
