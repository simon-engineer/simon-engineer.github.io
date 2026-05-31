// @ts-check
import { defineConfig } from 'astro/config';

// User site (repo: simon-engineer.github.io) → served at the root URL.
// No `base` needed. If you ever move this to a project repo, set
// `base: '/<repo-name>'` here.
export default defineConfig({
  site: 'https://simon-engineer.github.io',
});
