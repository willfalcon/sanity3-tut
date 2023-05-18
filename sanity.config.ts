import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'devvqo6i',
  dataset: 'production',
  title: 'Personal Website',
  apiVersion: '2023-04-21',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemas
    
  }
});

export default config;