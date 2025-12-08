<script setup lang="ts">
import LocaleSwitcher from "~/components/LocaleSwitcher.vue";
import Links from "~/components/Links.vue";
</script>

<template>
  <div>
    <header>
      <LocaleSwitcher />
    </header>
    <main>
      <slot />
    </main>

    <Links to="/">Home</Links>
    <Links to="/about">About</Links>
  </div>
</template>
