'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'BerandaController.index')
Route.get('/error', 'BerandaController.error')
Route.post('/auth', 'BerandaController.auth')
Route.get('/logout', 'BerandaController.logout')
Route.get('/beranda', 'BerandaController.beranda').middleware("AuthService")

Route.get('/scraping-dataset', 'ScrapingDatasetController.index').middleware("AuthService")
Route.get('/workerScraping', 'ScrapingDatasetController.scraping').middleware("AuthService")
Route.delete('/scraping-dataset', 'ScrapingDatasetController.remove').middleware("AuthService")
Route.get('/scrapingData', 'ScrapingDatasetController.getData').middleware("AuthService")
Route.get('/scrapingStatus', 'ScrapingDatasetController.status').middleware("AuthService")
Route.get('/actionScraping', 'ScrapingDatasetController.actionScraping').middleware("AuthService")

Route.get('/dataset', 'DatasetController.index').middleware("AuthService")
Route.get('/allDataset', 'DatasetController.getAll').middleware("AuthService")
Route.get('/getDataset', 'DatasetController.getData').middleware("AuthService")
Route.post('/dataset', 'DatasetController.add').middleware("AuthService")
Route.delete('/dataset', 'DatasetController.remove').middleware("AuthService")

Route.get('/kamus', 'KamusController.index').middleware("AuthService")
Route.post('/kamus', 'KamusController.all').middleware("AuthService")

Route.get('/stopword', 'StopwordController.index').middleware("AuthService")
Route.post('/stopword', 'StopwordController.add').middleware("AuthService")
Route.put('/stopword', 'StopwordController.update').middleware("AuthService")
Route.delete('/stopword', 'StopwordController.remove').middleware("AuthService")

Route.get('/slangword', 'SlangwordController.index').middleware("AuthService")
Route.post('/slangword', 'SlangwordController.add').middleware("AuthService")
Route.put('/slangword', 'SlangwordController.update').middleware("AuthService")
Route.delete('/slangword', 'SlangwordController.remove').middleware("AuthService")

Route.get('/rootword', 'RootwordController.index').middleware("AuthService")
Route.post('/rootword', 'RootwordController.add').middleware("AuthService")
Route.put('/rootword', 'RootwordController.update').middleware("AuthService")
Route.delete('/rootword', 'RootwordController.remove').middleware("AuthService")

Route.get('/lstm-rnn', 'KlasifikasiController.index').middleware("AuthService")
Route.post('/send-token-kelas', 'KlasifikasiController.tokenKelas').middleware("AuthService")
Route.post('/train-lstm', 'KlasifikasiController.initLSTM').middleware("AuthService")
Route.get('/get-summay-training', 'KlasifikasiController.summaryTraining').middleware("AuthService")
Route.post('/pengujian-model', 'KlasifikasiController.pengujian').middleware("AuthService")

Route.get('/model-klasifikasi', 'ModelController.index').middleware("AuthService")
Route.post('/upload-model', 'ModelController.upload').middleware("AuthService")
Route.post('/set-as-current-model', 'ModelController.setAsCurrentModel').middleware("AuthService")

Route.get('/web-api', 'WebApiController.index').middleware("AuthService")
Route.get('/getHistoryAPI', 'WebApiController.history').middleware("AuthService")
Route.post('/api/klasifikasi', 'WebApiController.perdictText')

