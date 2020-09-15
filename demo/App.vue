<template>
  <div class="container m-auto">
    <div class="m-4">
      <h1 class="text-xl font-bold my-2">Cookie Demo</h1>
      <p class="my-2">
        Please check your browser cookie to confirm
      </p>
      <hr class="mb-10" />
      <h2 class="text-lg my-2">Add Cookie</h2>
      <div class="flex">
        <input
          type="text"
          class="border border-gray-600 mr-2 px-2"
          v-model="form.name"
          placeholder="key"
        />
        <input
          type="text"
          class="border border-gray-600 mr-2 px-2"
          v-model="form.value"
          placeholder="value"
        />
        <button
          class="bg-blue-700 text-white py-1 px-4 uppercase"
          @click="set(form.name, form.value)"
        >
          Save
        </button>
      </div>
      <br />
      <div>
        <h2 class="text-lg my-2">List Cookie</h2>
        <div class="overflow-auto">
          <table class="border border-gray-500 table-fixed w-full">
            <thead class="uppercase text-left">
              <tr>
                <th class="p-2">Key</th>
                <th class="p-2">Value</th>
                <th class="p-2"></th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr v-for="(cookie, index) in cookies" :key="index">
                <td class="break-words border-b border-t border-gray-500 p-2">
                  {{ cookie[0] }}
                </td>
                <td class="break-words border-b border-t border-gray-500 p-2">
                  {{ cookie[1] }}
                </td>
                <td
                  class="break-words border-b border-t border-gray-500 p-2 text-right"
                >
                  <button
                    @click="view(cookie[0])"
                    class="border bg-blue-500 text-white py-1 px-4 uppercase text-xs"
                  >
                    View
                  </button>
                  <button
                    @click="remove(cookie[0])"
                    class="border bg-red-500 text-white py-1 px-4 uppercase text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "../dist/cookie.common.js";

export default {
  name: "App",
  components: {},
  data() {
    return {
      form: {
        name: null,
        value: null
      },
      cookies: []
    };
  },
  mounted() {
    this.refreshList();
  },
  methods: {
    set(name, value) {
      cookie.set(name, value);
      this.clearForm();
      this.refreshList();
    },
    view(name) {
      alert(cookie.get(name));
    },
    remove(name) {
      cookie.remove(name);
      this.refreshList();
    },
    refreshList() {
      this.cookies = cookie.getAll();
    },
    clearForm() {
      this.form.name = null;
      this.form.value = null;
    }
  }
};
</script>
