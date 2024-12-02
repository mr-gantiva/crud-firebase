<script setup>
import { ref } from 'vue';
import { useUserStore } from "../stores/userStore";

const name = ref('');
const email = ref('');
const userStore = useUserStore();

const submitForm = () => {
    const newUser = { name: name.value, email: email.value };
    userStore.addUser(newUser);
    name.value = '';
    email.value = '';
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form @submit.prevent="submitForm">
                    <input class="form-control my-3" type="text" v-model="name" placeholder="Nombre" required>
                    <input class="form-control my-3" type="email" v-model="email" placeholder="Correo electrónico"
                        required>
                    <button class="btn btn-success" type="submit">Agregar Usuario</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped></style>