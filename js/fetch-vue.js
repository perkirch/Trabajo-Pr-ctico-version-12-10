
// fetch(json local) con VUE
const { createApp } = Vue

createApp({
  data() {
    return {
      url: "./paises.json",
      selecciones: []
    }
  },

  methods: {
    fetchData(url) {

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.selecciones = data.arreglo
          console.log(this.selecciones)
        })
    }
  },


  created() {
    this.fetchData(this.url)
  }

}).mount('#tarjeta-selecciones')


