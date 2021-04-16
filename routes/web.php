<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', 'HomeController@welcome')->name('welcome');

Route::get('/', 'AppController@index')->middleware('auth');

/*
Verb          Path                           Action  Route Name
GET           /category                      index   category.index
GET           /category/create               create  category.create
POST          /category                      store   category.store
GET           /category/{user}               show    category.show
GET           /category/{user}/edit          edit    category.edit
PUT|PATCH     /category/{user}               update  category.update
DELETE        /category/{user}               destroy category.destroy
*/
Route::resource('category', CategoryController::class)->only(['index','store','show','update','destroy'])->middleware('auth');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
