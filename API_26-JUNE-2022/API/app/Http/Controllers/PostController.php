<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    function getPost()
    {
        return $allPost = Post::all();
    }

    function addPost(Request $request)
    {
        $newPost = new Post();
        $newPost->title = $request->title;
        $newPost->author = $request->author;
        $newPost->save();
    }
    function updatePost(Request $request, $id)
    {
        $updatePost = Post::find($id);
        $updatePost->title = $request->title;
        $updatePost->author = $request->author;
        $updatePost->update();
    }

    function deletePost($id)
    {
        $deletePost = Post::find($id);
        $deletePost->delete();
    }
}
