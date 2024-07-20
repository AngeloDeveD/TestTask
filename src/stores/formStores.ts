// stores/formStore.ts
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { RemovableRef } from '@vueuse/core'

interface Component {
    id: number
    // Добавьте другие свойства компонента, если необходимо
}

interface FormState {
    tags: RemovableRef<string>
    optionType: RemovableRef<number>
    login: RemovableRef<string>
    components: RemovableRef<Component[]>
}

export const useFormStore = defineStore('form', {
    state: (): FormState => ({
        tags: useLocalStorage<string>('tags', ''),
        optionType: useLocalStorage<number>('optionType', 0),
        login: useLocalStorage<string>('login', ''),
        components: useLocalStorage<Component[]>('components', []),
    }),
    actions: {
        addComponent(component: Component) {
            this.components.push(component)
        },
        removeComponent(index: number) {
            this.components.splice(index, 1)
        },
    },
})
