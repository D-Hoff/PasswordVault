<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShelfsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shelfs', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('site')->nullable();
            $table->string('email')->nullable();
            $table->string('username')->nullable();
            $table->string('password');
        });

        
        $dataEntries = array(
            ['site' => 'Facebook',      'email' => 'example@gmail.com', 'username' => null,         'password' => 'ziBkL5dac7tPXcem'],
            ['site' => 'Twitter',       'email' => 'example@gmail.com', 'username' => 'example',    'password' => '09y5Vhrc3xYpydqJ'],
            ['site' => 'Instagram',     'email' => 'example@gmail.com', 'username' => 'example',    'password' => 'yJkq6kfyHYSvUJJH'],
            ['site' => null,            'email' => null,                'username' => null,         'password' => 'lRts9wUv0zeHxlGK'],
            ['site' => 'Netflix',       'email' => 'example@gmail.com', 'username' => null,         'password' => 'EiC2cI7rT9e0hLMs'],
            ['site' => 'Hulu',          'email' => 'example@gmail.com', 'username' => null,         'password' => 'YkPrA8PALzuMyyNz'],
            ['site' => 'Home Computer', 'email' => null,                'username' => null,         'password' => 'MJXZ3R21n67ly5b8'],
            ['site' => 'Bank',          'email' => null,                'username' => 'example',    'password' => 'P9GR8pya8BkVnbUm'],
        );

        //insert data into table
        foreach($dataEntries as $row){
            DB::table('shelfs')->insert($row);
        }

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shelfs');
    }
}
