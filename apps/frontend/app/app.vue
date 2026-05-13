<script setup lang="ts">
  const { data } = await useFetch('http://localhost:3001/courses')
</script>

<template>
  <div>
    <div>
    <h1>Courses</h1>

    <ul>
      {{ data }}
      <li v-for="course in data" :key="course.id">
        {{ course?.title }}
      </li>
    </ul>
  </div>
  </div>
</template>
