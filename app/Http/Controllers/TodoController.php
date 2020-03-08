<?php

namespace App\Http\Controllers;

use App\Model\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'DESC')->paginate(2);
        return response()->json(['status' => 'success', 'data' => $todos]);
    }
}
