<template>
  <msg-sim-nao ref="msgSimNao"/>
  <modal-cadastro ref="modalCadastro"/>
  <br/>
  <v-app-bar>
  <v-btn color="green" append-icon="mdi-plus-box" @click="openModal()">INSERIR NOVA PESSOA</v-btn>
  <v-spacer/>
  <v-app-bar-title>Cadastro de Pessoas</v-app-bar-title>
  <v-spacer/>
  <p class="ma-4">Total de pessoas: {{ totalPessoas >= 10 ? totalPessoas : '0' + totalPessoas }}</p>
  </v-app-bar>
  <v-row justify="start" class="ma-5">
    <v-col cols="4" v-for="d in data" :key="d.id">
      <pessoa-card :pessoa="d" :onEdit="() => openModal(d)" :onDelete="() => deletePessoa(d)"/>
    </v-col>
  </v-row>
</template>

<script setup>
import {computed, ref} from "vue";
import ModalCadastro from "@/components/ModalCadastro.vue";
import {
  getDatabase,
  ref as dbref,
  set,
  push,
  remove,
  onChildRemoved,
  onChildChanged,
  onChildAdded
} from "firebase/database";
import MsgSimNao from "@/components/MsgSimNao.vue";
import PessoaCard from "@/components/PessoaCard.vue";

const modalCadastro = ref(null);

const db = getDatabase();

const msgSimNao = ref(null);

const data = ref([]);

const totalPessoas = computed(() => data.value.length);

const openModal = (p = null) => {
  modalCadastro.value.open(p, onModalSave)
}

const insertPessoa = (p) => {
  const newPostKey = push(dbref(db, 'pessoas')).key;
  p.id = newPostKey;
  set(dbref(db, 'pessoas/' + newPostKey), p);
}

const updatePessoa = (p) => {
  set(dbref(db, 'pessoas/' + p.id), p);
}

const deletePessoa = (p) => {
  msgSimNao.value.open('Excluir pessoa', 'Deseja realmente excluir a pessoa?', () => {
    remove(dbref(db, 'pessoas/' + p.id));
  });
}

const onModalSave = (p) => {
  if (p.id) {
    // update
    updatePessoa(p);
  } else {
    // insert
    insertPessoa(p);
  }
}

onChildAdded(dbref(db, 'pessoas'), (snapshot) => {
  data.value.push(snapshot.val());
});

onChildRemoved(dbref(db, 'pessoas'), (snapshot) => {
  data.value = data.value.filter((p) => p.id !== snapshot.val().id);
});

onChildChanged(dbref(db, 'pessoas'), (snapshot) => {
  data.value = data.value.map((p) => {
    if (p.id === snapshot.val().id) {
      return snapshot.val();
    }
    return p;
  });
});

</script>
