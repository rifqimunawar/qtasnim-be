<?php

use App\Http\Controllers\BarangController;
use App\Http\Controllers\JenisBarangController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('jenis', [JenisBarangController::class, 'index']);
Route::post('jenis', [JenisBarangController::class, 'store']);
Route::get('jenis/{id}', [JenisBarangController::class, 'show']);
Route::put('jenis/{id}/update', [JenisBarangController::class, 'update']);
Route::delete('jenis/{id}', [JenisBarangController::class, 'destroy']);

Route::get('barang', [BarangController::class, 'index']);
Route::post('barang', [BarangController::class, 'store']);
Route::get('barang/{id}', [BarangController::class, 'show']);
Route::put('barang/{id}/update', [BarangController::class, 'update']);
Route::delete('barang/{id}', [BarangController::class, 'destroy']);

