<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Shelf;


class ShelfsController extends Controller
{
    public function index()
    {
        $Shelfs = Shelf::orderBy('id', 'asc')->get();
        return $Shelfs;
    }


    public function store(Request $request)
    {
        // Makes sure these things are required before sent to the DB
        $this->validate($request, [
            'password' => 'required',
        ]);

        // Creates a new post
        $Shelf = new Shelf;
        
        // Gets the info from the input that was sent
        $Shelf->site = $request->input('site');
        $Shelf->email = $request->input('email');
        $Shelf->username = $request->input('username');
        $Shelf->password = $request->input('password');

        // Saves the new post to the database
        $Shelf->save();


        return $Shelf;
    }


    public function update(Request $request, $id)
    {
        // Makes sure these things are required before sent to the DB
        $this->validate($request, [
            'password' => 'required',
        ]);

        // Fetches specific data (using the id) from the posts table
        $Shelf = Shelf::find($id);

        // Gets the info from the input that was sent
        $Shelf->site = $request->input('site');
        $Shelf->email = $request->input('email');
        $Shelf->username = $request->input('username');
        $Shelf->password = $request->input('password');

        // Saves the new post to the database
        $Shelf->save();

        return $Shelf;
    }
}
