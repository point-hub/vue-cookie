<script setup lang="ts">
import { ref } from 'vue'
import cookie from '../dist/vue-cookie.js'

const cookies = ref(cookie.getAll())

const form = ref({
  name: '',
  value: '',
})

const onSave = () => {
  if (form.value.name && form.value.value) {
    // add cookie
    cookie.set(form.value.name, form.value.value)
    // reset form
    form.value.name = ''
    form.value.value = ''
    // refresh cookies
    cookies.value = cookie.getAll()
  }
}

const name = ref()
const value = ref()

const onGet = () => {
  if (name.value) {
    value.value = cookie.get(name.value)
  }
}

const onRemove = (name: string) => {
  // remove cookie
  cookie.remove(name)
  // refresh cookies
  cookies.value = cookie.getAll()
}
</script>

<template>
  <div class="mx-auto max-w-xl space-y-10 p-4">
    <h1 class="text-2xl font-bold">Vue Cookie</h1>
    <div class="space-y-3">
      <div class="bg-slate-800 p-4 text-sm text-slate-100">
        <pre><code>set(name, value)</code></pre>
      </div>
      <div class="flex space-x-5">
        <input v-model="form.name" type="text" class="w-full border py-2 px-4" placeholder="name" />
        <input v-model="form.value" type="text" class="w-full border py-2 px-4 text-lg" placeholder="value" />
      </div>
      <button class="w-full border px-4 py-2" @click="onSave()">Save</button>
    </div>
    <div class="space-y-3">
      <div class="bg-slate-800 p-4 text-sm text-slate-100">
        <pre><code>get(name)</code></pre>
      </div>
      <div class="flex space-x-5">
        <input v-model="name" type="text" class="w-full border py-2 px-4" placeholder="name" />
      </div>
      <button class="w-full border px-4 py-2" @click="onGet()">Get</button>
      <div>{{ value }}</div>
    </div>
    <div class="space-y-3">
      <div class="bg-slate-800 p-4 text-sm text-slate-100">
        <pre><code>getAll()</code></pre>
      </div>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="whitespace-nowrap bg-slate-100 p-3 font-semibold uppercase text-slate-800 lg:px-5">KEY</th>
            <th class="whitespace-nowrap bg-slate-100 p-3 font-semibold uppercase text-slate-800 lg:px-5">VALUE</th>
            <th class="whitespace-nowrap bg-slate-100 p-3 font-semibold uppercase text-slate-800 lg:px-5"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-transparent border-b-slate-200" v-for="(value, key, index) in cookies" :key="index">
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">{{ key }}</td>
            <td class="whitespace-nowrap px-4 py-3 sm:px-5">{{ value }}</td>
            <td class="whitespace-nowrap px-4 py-3 text-right sm:px-5">
              <button @click="onRemove(key as string)">x</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
