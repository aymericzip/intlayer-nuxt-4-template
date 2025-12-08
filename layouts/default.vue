<script setup lang="ts">
import LocaleSwitcher from "~/components/LocaleSwitcher.vue";
import Link from "~/components/Links.vue";
</script>

<template>
  <div>
    <header>
      <LocaleSwitcher />
    </header>
    <main>
      <slot />
    </main>

    <Links href="/">Home</Links>
    <Links href="/about">About</Links>
  </div>
</template>

