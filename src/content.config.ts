// 1. Import utilities from `astro:content` and `astro/zod`
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 2. Define your collection(s)
// One markdown file per team member in src/content/team.
// `photo` is a file name inside public/team/ (e.g. "ana.jpg"); leave it out to show initials.
const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    role: z.string(),
    email: z.string(),
    photo: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'team': teamCollection,
};
