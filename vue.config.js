const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false, // Предотвращает извлечение CSS в отдельные файлы, что важно для библиотеки
  },
  configureWebpack: {
    output: {
      libraryExport: 'default', // Экспорт библиотеки по умолчанию
    },
  },
})
