<template>
  <div class="container m-auto">
    <div class="m-4">
      <h1 class="my-2 text-xl font-bold">Cookie Demo</h1>
      <p class="my-2">
        Please check your browser cookie to confirm
      </p>
      <hr class="mb-10" />
      <h2 class="my-2 text-lg">Add Cookie</h2>
      <div class="flex">
        <input
          type="text"
          class="px-2 mr-2 border border-gray-600"
          v-model="form.name"
          placeholder="key"
        />
        <input
          type="text"
          class="px-2 mr-2 border border-gray-600"
          v-model="form.value"
          placeholder="value"
        />
        <button
          class="px-4 py-1 text-white uppercase bg-blue-700"
          @click="set(form.name, form.value)"
        >
          Save
        </button>
      </div>
      <br />
      <div>
        <h2 class="my-2 text-lg">List Cookie</h2>
        <div class="overflow-auto">
          <table class="w-full border border-gray-500 table-fixed">
            <thead class="text-left uppercase">
              <tr>
                <th class="p-2">Key</th>
                <th class="p-2">Value</th>
                <th class="p-2"></th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr v-for="(cookie, index) in cookies" :key="index">
                <td class="p-2 break-words border-t border-b border-gray-500">
                  {{ cookie[0] }}
                </td>
                <td class="p-2 break-words border-t border-b border-gray-500">
                  {{ cookie[1] }}
                </td>
                <td
                  class="p-2 text-right break-words border-t border-b border-gray-500"
                >
                  <button
                    @click="view(cookie[0])"
                    class="px-4 py-1 text-xs text-white uppercase bg-blue-500 border"
                  >
                    View
                  </button>
                  <button
                    @click="remove(cookie[0])"
                    class="px-4 py-1 text-xs text-white uppercase bg-red-500 border"
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
import cookie from "../dist/vue-cookie.common.js";

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
