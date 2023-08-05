import { defineConfig } from '@umijs/max';
import routes from './routes';
import proxy from './proxy';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'GOD-CAI',
  },
  proxy: proxy['dev'],
  routes,
  npmClient: 'yarn',
});
