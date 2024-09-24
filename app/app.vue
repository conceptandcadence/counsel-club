<template>
	<NuxtPage />
	
</template>

<script setup lang="ts">
import { ref } from 'vue'


const route = useRoute()
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState()
</script>

<style>
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 32px;
  --space-6: 52px;
  --space-7: 84px;
  --space-8: 136px;
  --space-9: 220px;

  --font-family-sans: 'Futura ND';
  --font-family-serif: 'PT Serif';
  --font-family-mono: 'IBM Plex Mono';

  --font-size-0: 12px;
  --font-size-1: 14px;
  --font-size-2: 16px;
  --font-size-3: 18px;
  --font-size-4: 20px;
  --font-size-5: 24px;
  --font-size-6: 30px;
  --font-size-7: 36px;
  --font-size-8: 48px;
  --font-size-9: 60px;
  --font-size-10: 72px;

  --line-height-0: 16px;
  --line-height-1: 20px;
  --line-height-2: 24px;
  --line-height-3: 28px;
  --line-height-4: 28px;
  --line-height-5: 32px;
  --line-height-6: 36px;
  --line-height-7: 40px;
  --line-height-8: 48px;
  --line-height-9: 60px;
  --line-height-10: 72px;
  --line-height-11: 96px;
  --line-height-12: 128px;

  --white: #fff;
  --black: #101112;
  --gray-200: #ced2d9;
  --gray-600: #6e7683;
  --blue-600: #1e61cd;
  --magenta-100: #f9d7eb;

	--offwhite: '#FFFFF3';
	--charcoal: '#393631';
	--darkgreen: '#22392A';
	--brightgreen: '#28A066';

  --max-width-0: 320px;
  --max-width-1: 768px;
}

html {
  background-color: var(--offwhite);
  font-family: var(--font-family-sans), var(--font-family-serif), sans-serif;
  text-size-adjust: 100%;
}

body {
  margin: 0;
}
</style>

<style>
.container {
  margin: 0 auto;
}

main {
  margin-top: 45px;
}

.header {
  display: flex;
  padding: 0 var(--space-1);
  z-index: 10;
  background: var(--offwhite);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  & .header__title {
    font-weight: 800;
    font-size: var(--font-size-3);
    line-height: var(--line-height-1);
    padding-left: var(--space-2);
    margin: var(--space-3) 0;
    text-decoration: none;
    color: var(--black);
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 var(--space-3);

  & .footer__text {
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    display: flex;
    align-items: center;
    gap: 2px;
  }
}

@media (min-width: 575px) {
  .container {
    max-width: var(--max-width-1);
    padding: 0 var(--space-4);
  }

  main {
    margin-top: unset;
  }

  .header {
    position: unset;
    border-bottom: none;
    margin: var(--space-3) 0;
    padding: var(--space-2) 0;
    background: unset;

    & .header__title {
      margin: var(--space-3) 0 var(--space-2);
      font-size: var(--font-size-5);
    }
  }

  .footer {
    margin: var(--space-3) 0;
  }
}

.preview-toggle {
  backdrop-filter: blur(12px);
  border-radius: 0.25rem;
  bottom: 1rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  color: #1f2937;
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  position: fixed;
  right: 1rem;
  text-align: center;
  text-decoration: none;
  z-index: 50;
}

.preview-toggle:hover {
  background-color: #ef4444;
  color: #ffffff;
}

.preview-toggle span:first-child {
  display: block;
}
.preview-toggle:hover span:first-child {
  display: none;
}

.preview-toggle span:last-child {
  display: none;
}
.preview-toggle:hover span:last-child {
  display: block;
}
</style>
