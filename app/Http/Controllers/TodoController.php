<?php

namespace App\Http\Controllers;

use App\Model\Todo;
use Carbon\Carbon;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::orderBy('created_at', 'DESC')->paginate(20);
        return response()->json(['status' => 'success', 'data' => $todos]);
    }

    public function show($id)
    {
        $row = Todo::find($id);
        return response()->json(['status' => 'success', 'data' => $row]);
    }

    public function store(Request $request){
        // parsing due_date format
        $due_date = Carbon::parse($request->due_date)->format('Y-m-d');

        $todo = new Todo;
        $todo->name = $request->name;
        $todo->note = $request->note;
        $todo->status = $request->status;
        $todo->due_date = $due_date;
        $todo->save();

        return response()->json(['status' => 'success']);
    }

    public function update(Request $request, $id){
        $todo = Todo::find($id);
        $todo->status = 1;
        $todo->save();

        return response()->json(['status' => 'success']);
    }
}
