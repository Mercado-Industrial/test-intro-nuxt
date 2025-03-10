import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-02-05",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app:{
    head:{
      title:'Testiando Nuxt',
      meta:[
        {name: 'description',content:'Probando sitio hecho con Nuxt 3'}
      ],
      link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    currencyKey:process.env.CURRENCY_API_KEY,
  }
})