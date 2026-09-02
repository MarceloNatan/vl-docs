import { defineConfig } from '#q-app/wrappers';
export default defineConfig(() => ({
  boot: ['firebase'], css: ['app.scss'], extras: ['material-icons'], build: { target: { browser: ['es2022', 'chrome120', 'firefox120', 'safari16'] } },
  devServer: { open: false, host: '127.0.0.1', port: 9001 }, framework: { plugins: [] }, animations: [],
}));
