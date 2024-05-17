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
                'id' => 1,
                'jenis' => 'celana',
                'created_at' => '2024-05-16 16:36:11',
                'updated_at' => '2024-05-16 16:42:39',
            ),
            1 => 
            array (
                'id' => 2,
                'jenis' => 'konsumsi',
                'created_at' => '2024-05-16 16:36:24',
                'updated_at' => '2024-05-16 16:42:55',
            ),
        ));
        
        
    }
}