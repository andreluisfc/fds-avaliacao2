<template>
  <msg-sim-nao ref="msgSimNao"/>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <v-form @submit.prevent @submit="onSave" ref="form">
        <v-card>
          <v-card-title>
            <span class="text-h5">Formulário de cadastro de pessoas</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                  <v-img :src="pessoa.imagem" width="200px" class="mr-5"/>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      label="Nome*"
                      required
                      :rules="[v => !!v || 'Nome é obrigatório']"
                      v-model="pessoa.nome"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Email*"
                      required
                      :rules="[v => !!v || 'Email é obrigatório', v => /.+@.+/.test(v) || 'Email deve ser válido']"
                      v-model="pessoa.email"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="6"
                  >
                    <v-text-field
                      label="Idade*"
                      required
                      type="number"
                      :rules="[v => !!v || 'Idade é obrigatória', v => v >= 1 || 'Idade deve ser maior que 0', v => v <= 120 || 'Idade deve ser menor que 120']"
                      v-model="pessoa.idade"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      label="Imagem"
                      v-model="pessoa.imagem"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-row>
            </v-container>
            <small>*campos obrigatórios</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              append-icon="mdi-close"
              color="red-darken-1"
              variant="text"
              @click="close"
            >
              CANCELAR
            </v-btn>
            <v-btn
              append-icon="mdi-content-save"
              color="green-darken-1"
              variant="text"
              type="submit"
            >
              SALVAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script setup>
import {ref, inject} from 'vue'
import MsgSimNao from "@/components/MsgSimNao.vue";

const form = ref(null);
const axios = inject('axios');
const pessoa = ref({})
const onConfirm = ref((p) => {
});

const msgSimNao = ref(null);
const dialog = ref(false);

const onSave = () => {
  form.value.validate().then((r) => {
    if (r.valid) {
      onConfirm.value(pessoa.value);
      dialog.value = false;
      pessoa.value = {};
    }
  });
}


const open = (p = null, f) => {
  if (p) {
    pessoa.value = {...p};
  } else {
    getPessoa();
  }
  onConfirm.value = f;
  dialog.value = true
};

const close = () => {
  msgSimNao.value.open('Cancelar cadastro', 'Deseja realmente cancelar o cadastro?', () => {
    dialog.value = false;
    pessoa.value = {};
  });
};

const getPessoa = () => {
  axios.get('/users').then((r) => {
    let p = r.data;

    pessoa.value = {
      nome: p.first_name + ' ' + p.last_name,
      email: p.email,
      idade: Math.floor(Math.random() * (120 - 1) + 1),
      imagem: p.avatar
    }

  })

}

defineExpose({
  open
})

</script>
