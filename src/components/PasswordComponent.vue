<template>
  <h3 class="">Пароль</h3>
  <div
    class="bg-white border-solid border-red-600 text-red-600 border rounded-md h-8 pl-2 selection:text-white selection:bg-red-600"
  >
    <input
      :type="showPassword ? 'text' : 'password'"
      maxlength="100"
      placeholder="Пароль"
      class="w-3/4 focus:outline-none h-full"
    />
    <button class="w-1/4" @click="ChangeTypeField">{{ showPassword ? 'hide' : 'show' }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

//const PasswordTypeField = ref<string>('password')

const showPassword = ref<boolean>(false)

function ChangeTypeField() {
  showPassword.value = !showPassword.value
}
</script>
