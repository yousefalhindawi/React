<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

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
Route::get("/posts" , [PostController::class,'getPost']);
Route::post("/insert" , [PostController::class,'addPost']);
Route::delete("/post/{id}" , [PostController::class,'deletePost']);
Route::put("/post/{id}" , [PostController::class,'updatePost']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
