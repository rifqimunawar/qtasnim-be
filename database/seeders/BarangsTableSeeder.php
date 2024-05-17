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
                'id' => 13,
                'nama' => 'kolor hejo',
                'stok' => 200,
                'jumlah_terjual' => 20,
                'tanggal_transaksi' => '2024-05-16',
                'jenis_barang_id' => 33,
                'created_at' => '2024-05-17 10:38:30',
                'updated_at' => '2024-05-17 14:10:34',
            ),
            1 => 
            array (
                'id' => 14,
                'nama' => 'baju persib',
                'stok' => 89,
                'jumlah_terjual' => 1,
                'tanggal_transaksi' => '2024-05-17',
                'jenis_barang_id' => 33,
                'created_at' => '2024-05-17 10:38:58',
                'updated_at' => '2024-05-17 14:10:52',
            ),
            2 => 
            array (
                'id' => 15,
                'nama' => 'iphone',
                'stok' => 3,
                'jumlah_terjual' => 1,
                'tanggal_transaksi' => '2024-05-17',
                'jenis_barang_id' => 32,
                'created_at' => '2024-05-17 10:40:01',
                'updated_at' => '2024-05-17 10:40:01',
            ),
            3 => 
            array (
                'id' => 17,
                'nama' => 'sarung',
                'stok' => 78,
                'jumlah_terjual' => 21,
                'tanggal_transaksi' => '2024-05-17',
                'jenis_barang_id' => 33,
                'created_at' => '2024-05-17 14:11:26',
                'updated_at' => '2024-05-17 14:11:26',
            ),
            4 => 
            array (
                'id' => 18,
                'nama' => 'kopi',
                'stok' => 400,
                'jumlah_terjual' => 98,
                'tanggal_transaksi' => '2024-05-17',
                'jenis_barang_id' => 36,
                'created_at' => '2024-05-17 17:56:28',
                'updated_at' => '2024-05-17 18:18:44',
            ),
            5 => 
            array (
                'id' => 19,
                'nama' => 'coca cola',
                'stok' => 200,
                'jumlah_terjual' => 76,
                'tanggal_transaksi' => '2024-05-17',
                'jenis_barang_id' => 36,
                'created_at' => '2024-05-17 18:15:44',
                'updated_at' => '2024-05-17 18:15:44',
            ),
            6 => 
            array (
                'id' => 20,
                'nama' => 'big cola',
                'stok' => 213,
                'jumlah_terjual' => 82,
                'tanggal_transaksi' => '2024-05-25',
                'jenis_barang_id' => 36,
                'created_at' => '2024-05-17 18:16:03',
                'updated_at' => '2024-05-17 18:16:03',
            ),
            7 => 
            array (
                'id' => 21,
                'nama' => 'kopi gooday',
                'stok' => 65,
                'jumlah_terjual' => 45,
                'tanggal_transaksi' => '2024-05-17',
                'jenis_barang_id' => 36,
                'created_at' => '2024-05-17 18:16:32',
                'updated_at' => '2024-05-17 18:16:32',
            ),
        ));
        
        
    }
}