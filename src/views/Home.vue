<template>
  <v-card class="text-center">
    <v-card-title>
      Avaliação 2 FDS
    </v-card-title>
    <v-card-subtitle class="font-weight-bold">
      Acadêmico: André Luis Finger Candido
    </v-card-subtitle>
    <br/>
    <v-card-item>
      <v-list>
        <v-list-item-title>Pré requisitos do projeto:</v-list-item-title>
        <div v-for="i in required" :key="i">
          <v-list-item density="compact"> - {{ i }}</v-list-item>
        </div>
      </v-list>
    </v-card-item>
  </v-card>
  <br/>
  <v-card class="text-center">
    <v-card-title>
      Explicação
    </v-card-title>
    <v-card-item>
      <hr>
      <br/>
      <h3>Firebase</h3>
      Este projeto utiliza integração com a biblioteca nativa do Firebase para Node, portanto, a atualização dos dados
      ocorre em tempo real, mesmo que haja mais de uma instância do cliente editando os mesmos.
      <br/>
      <hr>
      <br/>
      <h3>Axios</h3>
      <v-row>
        <v-col cols="8">
          Utilizo o Axios para buscar dados aleatórios do cadastro de pessoas, para isso, consulto a
          <a href="https://random-data-api.com/">random data API</a>
        </v-col>
        <v-col cols="4">
          <v-code>https://random-data-api.com/api/v2/</v-code>
        </v-col>
      </v-row>
      <hr>
      <br/>
      <h3>Componentes</h3>
      Utilizo componentes no modal de cadastro e também no card de pessoas.
      <br/>
      <hr>
    </v-card-item>
  </v-card>
</template>

<script setup>

const required = [
  'Utilizar v-router',
  'Utilizar axios',
  'Utilizar componentes',
  'Utilizar vuetify',
  'Integrar CRUD com firebase',
]

</script>
