<template>
  <div>
    <table class="table">
      <thead>
        <tr>
        <th class="col-3">Productos</th>
        <th class="col-2"></th>
        <th class="col-1">ID</th>
        <th class="col-1">Stock</th>
        <th class="col-1">Precio $</th>
        <th class="col-2"></th>
        <th class="col-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productoLista" :key="producto.id">
        <td class="col-3">
          {{producto.marca}}
          <br>
          {{producto.modelo}}</td>
        <td class="col-2">
          <img :src="producto.img" :alt="producto.modelo">
        </td>
        <td class="col-1">{{producto.id}}</td>
        <td class="col-1">{{producto.stock}}</td>
        <td class="col-1">{{producto.precio}}</td>
        <td class="col-2">
          <router-link
          :to="{
            name: 'Update',
            params: {
              id: producto.id,
              producto
            }
          }"
          class="btn btn-primary">Actualizar</router-link>
        </td>
        <td class="col-2">
          <router-link
          :to="{
            name: 'Delete',
            params: { id: producto.id, producto } }"
          class="btn btn-danger">Eliminar</router-link>
        </td>
         </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Stock",
  // data(){
  //   return {
  //     productoid: this.producto.id
  //   }
  // },
  props: {
    productoLista: [],
  },
}
</script>

<style scoped>


</style>
