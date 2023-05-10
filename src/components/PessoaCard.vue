<template>
  <v-card>
    <v-img :src="props.pessoa.imagem" width="400px"/>
    <v-card-title>{{ props.pessoa.nome }}</v-card-title>
    <v-card-subtitle>{{ props.pessoa.idade }} anos</v-card-subtitle>
    <v-card-text>{{ props.pessoa.email }}</v-card-text>
    <v-card-actions>
      <v-btn color="blue" append-icon="mdi-pencil" @click="onEdit">Editar</v-btn>
      <v-btn color="error" append-icon="mdi-trash-can" @click="onDelete">Excluir</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  pessoa: {
    type: Object,
    required: true
  },
  onEdit: {
    type: Function,
    required: true
  },
  onDelete: {
    type: Function,
    required: true
  }
});


</script>
