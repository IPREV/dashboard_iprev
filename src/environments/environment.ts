// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   // API: 'https://api.iprev.ma.gov.br/api-intranet'
   //API: 'http://10.31.47.76:3333',
  //API: 'http://localhost:3333',
  //API_RH: 'http://localhost:3336',
  //API_FREQUENCIA: 'http://10.31.47.76:3334'
  //API_FREQUENCIA: 'http://localhost:3334'

  API: 'http://10.31.47.76:3333',
  API_FREQUENCIA: 'http://10.31.47.76:3334',
  //API: 'http://intranet.iprev.ma.gov.br/api',
  //API: 'http://intranet.iprev.ma.gov.br/api-intranet',
  API_RH: 'https://api.iprev.ma.gov.br/api-recadastramento-ativo',

};
