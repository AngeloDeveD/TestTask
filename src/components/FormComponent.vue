<template>
  <div class="pt-2 flex w-full space-x-4">
    <div class="w-1/2 flex space-x-4">
      <div class="w-1/2">
        <h3 class="">Метки</h3>
        <input
          type="text"
          maxlength="50"
          placeholder="Значение"
          class="w-full bg-white border-solid border-red-600 text-red-600 border rounded-md h-8 pl-2 focus:outline-none selection:text-white selection:bg-red-600 placeholder:text-red-300"
        />
      </div>
      <div class="w-1/2">
        <h3 class="">Тип записи</h3>
        <select
          id="dropdown"
          v-model="optionType"
          class="w-full bg-white border-solid border-red-600 text-red-600 border rounded-md h-8 pl-2 focus:outline-none selection:text-white selection:bg-red-600 placeholder:text-red-300"
        >
          <option v-for="option in optionsType" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="w-1/2 flex space-x-4">
      <div :class="!optionType ? 'w-1/2' : 'w-full'">
        <h3 class="">Логин</h3>
        <input
          type="text"
          maxlength="100"
          placeholder="Значение"
          class="w-full bg-white border-solid border-red-600 text-red-600 border rounded-md h-8 pl-2 focus:outline-none selection:text-white selection:bg-red-600 placeholder:text-red-300"
        />
      </div>
      <div class="w-1/2" v-show="!optionType">
        <PasswordComponent />
      </div>
    </div>

    <div class="flex flex-col-reverse">
      <button class="size-11 bg-red-400 rounded-md" @click="removeComponent">R</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ref } from 'vue'

import PasswordComponent from './PasswordComponent.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['remove'])

interface Options {
  value: number
  text: string
}

const optionType = ref<number>(0)

const optionsType = ref<Options[]>([
  { value: 0, text: 'Локальная' },
  { value: 1, text: 'LDAP' }
])

const removeComponent = (): void => {
  emit('remove', props.id)
}
</script>
