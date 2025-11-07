import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },

  staticDirs: [{ from: "../public", to: "frontend" }],

  viteFinal: async (config) => {
    return mergeConfig(config, {
      base: "/frontend/",

      build: {
        assetsInlineLimit: 0,
      },

      resolve: {
        alias: {
          "/icons": "/public/icons",
          "/images": "/public/images",
          "/fonts": "/public/fonts",
        },
      },
    });
  },
};

export default config;
