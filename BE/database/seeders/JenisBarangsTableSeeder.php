<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class JenisBarangsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('jenis_barangs')->delete();
        
        \DB::table('jenis_barangs')->insert(array (
            0 => 
            array (
                'id' => 32,
                'jenis' => 'elektronik',
                'created_at' => '2024-05-17 10:37:21',
                'updated_at' => '2024-05-17 10:37:21',
            ),
            1 => 
            array (
                'id' => 33,
                'jenis' => 'pakaian',
                'created_at' => '2024-05-17 10:37:28',
                'updated_at' => '2024-05-17 10:37:28',
            ),
            2 => 
            array (
                'id' => 34,
                'jenis' => 'sperpart motor',
                'created_at' => '2024-05-17 10:37:57',
                'updated_at' => '2024-05-17 10:37:57',
            ),
            3 => 
            array (
                'id' => 35,
                'jenis' => 'makanan',
                'created_at' => '2024-05-17 17:57:32',
                'updated_at' => '2024-05-17 17:57:32',
            ),
            4 => 
            array (
                'id' => 36,
                'jenis' => 'minuman',
                'created_at' => '2024-05-17 17:57:35',
                'updated_at' => '2024-05-17 17:57:35',
            ),
        ));
        
        
    }
}