<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <span>{{ message }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            append-icon="mdi-close"
            color="red-darken-1"
            variant="text"
            @click="dialog = false"
          >
            NÃO
          </v-btn>
          <v-btn
            append-icon="mdi-check"
            color="green-darken-1"
            variant="text"
            @click="onConfirm(); dialog = false"
          >
            SIM
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import {ref} from 'vue'

const dialog = ref(false);

const title = ref('asdas');
const message = ref('');
const onConfirm = ref(() => {});

function open(t, m, f) {
  title.value = t;
  message.value = m;
  onConfirm.value = f;
  dialog.value = true;
}

defineExpose({
  open
})

</script>
