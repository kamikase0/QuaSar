<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />
    <p></p>

    <span class="text-subtitle1">Subtitle1</span>
    <span class="text-subtitle2">Subtitle2</span>

    <q-separator />
    <p class="text-body1">
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500, cuando un impresor (N. del T. persona que se
      dedica a la imprenta) desconocido usó una galería de textos y los mezcló
      de tal manera que logró hacer un libro de textos especimen.
    </p>
    <p class="text-body2">
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos
      de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
      industrias desde el año 1500, cuando un impresor (N. del T. persona que se
      dedica a la imprenta) desconocido usó una galería de textos y los mezcló
      de tal manera que logró hacer un libro de textos especimen.
    </p>
    <q-separator />

    <spam class="text-weight-thin"
      >Nostrud fugiat minim pariatur exercitation dolor sint aliquip dolore et
      minim sunt duis culpa.</spam
    >
    <spam class="text-weight-light"
      >Quis duis amet incididunt dolore commodo reprehenderit veniam magna ex
      excepteur irure amet qui enim.</spam
    >
    <spam class="text-weight-regular"
      >Quis nulla commodo fugiat duis amet id occaecat.</spam
    >
    <spam class="text-weight-medium"
      >Eiusmod dolore culpa adipisicing eu magna quis.</spam
    >
    <spam class="text-weight-bold"
      >Est nisi velit id pariatur ex et cupidatat occaecat ut aute ea aute
      occaecat tempor.</spam
    >
    <spam class="text-weight-bolder"
      >Nulla culpa excepteur occaecat cillum sit sunt do esse incididunt cillum
      Lorem irure in non.</spam
    >
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageTypography',
});


</script>
