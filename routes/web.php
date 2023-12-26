<?php

use Illuminate\Support\Facades\Route;

// Default Laravel welcome page
Route::get('/', function () {
    return view('welcome');
});

// Authentication routes
Auth::routes();

// Home page route (Laravel Blade)
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Catch-all route for other Laravel routes (handle Vue.js routing on the client side)
Route::get('/{any}', function () {
    return view('home'); // Assuming home.blade.php is in the resources/views directory
})->where('any', '.*');
