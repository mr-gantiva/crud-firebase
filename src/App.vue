<script setup>
import UserForm from './components/userForm.vue';
import UserList from './components/userList.vue';
</script>

<template>
  <header>
    <div class="container">
      <h1 class="text-center titulo py-5">CRUD con Firebase y Pinia</h1>
    </div>
  </header>

  <main>
    <UserForm />
    <UserList />
  </main>
</template>

<style scoped>
.titulo {
  color: #fafaf5;
}

main {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
