import prettier from 'eslint-plugin-prettier'

export default [
  {
    plugins: { prettier },
    rules: {
      'prettier/prettier': [
        'error',
        {
          bracketSameLine: true // Pastikan aturan ini sesuai dengan Prettier
        }
      ]
    }
  }
]
