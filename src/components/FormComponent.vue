<template>
  <div class="pt-2 flex w-full space-x-4">
    <div class="w-1/2 flex space-x-4">
      <div class="w-1/2">
        <h3 class="">Метки</h3>
        <input
          type="text"
          maxlength="50"
          placeholder="Значение"
          title="Пожалйста, добавьте метки"
          v-model="tags"
          @blur="validateFields"
          class="w-full bg-red-500 border-solid border-red-600 text-white border rounded-md h-8 pl-2 focus:outline-none selection:text-red-600 selection:bg-white placeholder:text-red-100"
        />
      </div>
      <div class="w-1/2">
        <h3 class="">Тип записи</h3>
        <select
          id="dropdown"
          v-model="optionType"
          @blur="validateFields"
          title="Пожалйста, выберите тип записи"
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
          title="Пожалйста, введите логин"
          v-model="login"
          @blur="validateFields"
          class="w-full bg-red-500 border-solid border-red-600 text-white border rounded-md h-8 pl-2 focus:outline-none selection:text-red-600 selection:bg-white placeholder:text-red-100"
        />
      </div>
      <div class="w-1/2" v-show="!optionType">
        <h3 class="">Пароль</h3>
        <div
          class="bg-white border-solid border-red-600 text-red-600 border rounded-md h-8 pl-2 selection:text-white selection:bg-red-600"
        >
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            maxlength="100"
            placeholder="Пароль"
            @blur="validateFields"
            class="w-3/4 focus:outline-none h-full placeholder:text-red-300"
            title="Пожалйста, введите пароль"
          />
          <button class="w-1/4" @click="ChangeTypeField">
            {{ showPassword ? 'hide' : 'show' }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col-reverse">
      <button class="size-11 bg-red-400 rounded-md" @click="removeComponent">R</button>
      <button class="size-11 bg-green-400 rounded-md" @click="saveData">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFormStore } from '../stores/formStores'
import { defineProps } from 'vue'
//import PasswordComponent from './PasswordComponent.vue'

const formStore = useFormStore()

const tags = ref(formStore.tags)
const optionType = ref(formStore.optionType)
const login = ref(formStore.login)
const password = ref<string>('')

const props = defineProps<{ id: number }>()

const showPassword = ref<boolean>(false)

function ChangeTypeField() {
  showPassword.value = !showPassword.value
}

const optionsType = ref([
  { value: 0, text: 'Локальная' },
  { value: 1, text: 'LDAP' }
])

const removeComponent = (): void => {
  formStore.removeComponent(props.id)
}

const validateFields = (): void => {
  if (!login.value || !password.value) {
    alert('Пожалуйста, заполните все поля логина и пароля.')
  }
}

const saveData = (): void => {
  if (login.value && password.value) {
    alert('Данные сохранены!')
  } else {
    alert('Пожалуйста, заполните все поля.')
  }
}
</script>
