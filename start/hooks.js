'use strict'
const { hooks } = use('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  
  // use('Adonis/Src/Server').getInstance().timeout = 0;
  // use('Logger').info(`Server timeout: ${use('Adonis/Src/Server').getInstance().timeout}`);

  const View = use('View')
  View.global('time', () => new Date())


})
