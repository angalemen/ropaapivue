<script>
import { h, defineComponent } from "vue";
import { NButton, useMessage, NImage } from "naive-ui";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      ropas: [],
      columns: [
        { key: "marca", label: "Marca" },
        { key: "modelo", label: "Modelo" },
        { key: "talla", label: "Talla" },
        { key: "urlimagen", label: "Imagen", render: (row) => h(NImage, { src: row.urlimagen, width: 50, height: 50 }) },

      ],
    };
  },

  async mounted() {
    try {
      let ropa = await axios.get("http://localhost:8082/api/ropas", {
        auth: {
          username: "rafa",
          password: "1234",
        },
      });

      this.ropas = ropa.data;
    } catch (error) {
      console.error("Error fetching data:", error);

    }
  },
});
</script>

<template>
  <n-data-table :columns="columns" :data="ropas" :pagination="pagination" :bordered="false" />
</template>


