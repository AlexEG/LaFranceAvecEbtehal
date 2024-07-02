import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://alexeg.github.io" : "http://localhost:4321",
  base: "/LaFranceAvecEbtehal",
  integrations: [
    starlight({
      title: "La Françe Avec Ebtehal",
      social: {
        // github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
            { label: "Example Guide 2", link: "/guides/exampl/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "others",
          autogenerate: { directory: "others" },
        },
      ],
    }),
  ],
});
