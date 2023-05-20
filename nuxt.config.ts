// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VForm",
          Field: "VField",
          FieldArray: "VFieldArray",
          ErrorMessage: "VErrorMessage",
        },
      },
    ],
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  components: [{
    path: '~/components',
    global: true
  }],
  extends: [
    // "github:traderfour/base-trader4-layers", // Extend from a git repository
    "base-layers", // Extend from a local directory
    "@nuxt-themes/docus", // Extend from a npm package
  ],
  routeRules: {
    // Render these routes with SPA
    "/my/**": { ssr: false },
  },
  content: {
    documentDriven: false,
    highlight: {

      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
});
