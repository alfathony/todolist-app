<?php

use App\Model\Todo;
use Illuminate\Database\Seeder;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create([
            'name' => 'Belajar laravel',
            'note' => 'Belajar laravel untuk vue js',
            'due_date' => '2020-09-09',
            'status' => false
        ]);

        Todo::create([
            'name' => 'Belajar React',
            'note' => 'Belajar laravel untuk react js',
            'due_date' => '2020-10-10',
            'status' => false
        ]);

        Todo::create([
            'name' => 'Belajar React Progressive web app',
            'note' => 'Belajar PWA untuk aplikasi yang di bangun di skripsi',
            'due_date' => '2020-07-07',
            'status' => false
        ]);

        Todo::create([
            'name' => 'Belajar Laravel CRUD',
            'note' => 'Belajar CRUD untuk aplikasi yang di bangun di skripsi',
            'due_date' => '2020-06-06',
            'status' => true
        ]);
    }
}
