<script setup lang="ts">
interface Props {
  label: string;
  variant?: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});
</script>

<template>
  <button :class="['btn', `btn--${props.variant}`]">
    {{ props.label }}
  </button>
</template>

<style scoped>
.btn {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn--primary {
  background: black;
  color: white;
}

.btn--secondary {
  background: white;
  color: black;
  border: 1px solid black;
}

.btn:hover {
  opacity: 0.8;
}
</style>
