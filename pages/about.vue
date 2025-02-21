<template>
    <div>
      <h2>About</h2>
      <p>  Descripción para la página de About
      </p>
      <div>{{ data }}</div>
    </div>
</template>

<script setup>
/*
    const {data}= await useFetch('/api/currency/MXN',{
        method: 'post',
        body:{age:30}
    })*/

    const {data}= await useFetch('/api/currency/MXN')
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }

    p{
        margin: 20px 0;
    }
</style>