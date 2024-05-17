<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BarangsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('barangs')->delete();
        
        \DB::table('barangs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nama' => 'celana',
                'stok' => 200,
                'jumlah_terjual' => 59,
                'tanggal_transaksi' => '2024-03-24',
                'jenis_barang_id' => 2,
                'created_at' => '2024-05-16 16:46:20',
                'updated_at' => '2024-05-16 16:49:06',
            ),
            1 => 
            array (
                'id' => 3,
                'nama' => 'makanan',
                'stok' => 103,
                'jumlah_terjual' => 87,
                'tanggal_transaksi' => '2022-12-10',
                'jenis_barang_id' => 1,
                'created_at' => '2024-05-16 16:49:51',
                'updated_at' => '2024-05-16 16:49:51',
            ),
        ));
        
        
    }
}