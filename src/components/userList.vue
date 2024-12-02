<script setup>
import { computed, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();

const users = computed(() => userStore.users);

const deleteUser = (userId) => {
    userStore.deleteUser(userId);
}
onMounted(async () => {
    await userStore.fetchUsers();
})

</script>

<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <table v-if="users.length" class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody v-for="user in users" :key="user.id">
                        <tr>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td><button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <p v-else class="mensaje__tabla--vacia p-2"> No hay usuarios registrados.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.mensaje__tabla--vacia {
    color: red;
    background-color: #fff;
    border-radius: 5px;
}

table {
    border-radius: 10px;
}
</style>