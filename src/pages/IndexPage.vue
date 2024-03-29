<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});

// --------------------------------------
const miPromesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos un valor en la promesa');
    }, 1000);
  });
};

const medirTiempoAsync = async () => {
  try {
    console.log('inicio');

    //miPromesa().then(console.log);
    const respuesta = await miPromesa();
    console.log(respuesta);

    console.log('fin');

    return 'fin de medir tiempo async';
    //throw 'Error en  medir Tiempo Async';
  } catch (error) {
    return 'catch en medirtiempAsync';
  }
};

medirTiempoAsync()
  .then((valor) => console.log('THEN Exitoso:', valor))
  .catch((err) => console.log('error:', err));
</script>

<template>
  <q-page class="page">
    <h1>Index</h1>
  </q-page>
</template>
