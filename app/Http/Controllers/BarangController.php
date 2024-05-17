<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
  public function index()
  {
    $barang = Barang::all();

      return response()->json([
          "barang" => $barang
      ], 200);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
      try {
        $nama = $request->nama;
        $stok = $request->stok;
        $jumlah_terjual = $request->jumlah_terjual;
        $tanggal_transaksi = $request->tanggal_transaksi;
        $jenis_barang_id = $request->jenis_barang_id;

        Barang::create([
          'nama' => $nama,
          'stok' => $stok,
          'jumlah_terjual' => $jumlah_terjual,
          'tanggal_transaksi' => $tanggal_transaksi,
          'jenis_barang_id' => $jenis_barang_id,
        ]);

    return response()->json([
      'result' => "Barang successfully added: '$nama'"
    ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'message' => "Something went wrong"
      ], 500);
    }
  }

  /**
   * Display the specified resource.
   */public function show($id)
  {
    $barang = Barang::find($id);

    if (!$barang) {
        return response()->json([
            'error' => 'jenis Barang not found'
        ], 404);
    }

    return response()->json([
        'barang' => $barang
    ], 200);
  }


  /**
   * Update the specified resource in storage.
   */
  public function update($id, Request $request)
  {
    try {
      $barang = Barang::findOrFail($id);
      
      // dd($barang);
          $barang->nama = $request->nama;
          $barang->stok = $request->stok;
          $barang->jumlah_terjual = $request->jumlah_terjual;
          $barang->tanggal_transaksi = $request->tanggal_transaksi;
          $barang->jenis_barang_id = $request->jenis_barang_id;

          $barang->save();

          return response()->json([
              'result' => "Barang successfully updated: '$barang->nama'"
          ], 200);
      } catch (\Throwable $th) {
          return response()->json([
              'message' => "Something went wrong"
          ], 500);
      }
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
      $barang = Barang::find($id);
  
      if (!$barang) {
          return response()->json([
              'error' => 'barnag not found'
          ], 404);
      }
  
      $barang->delete();
      return response()->json([
          'message' => 'barnag successfully deleted'
      ], 200);
  }
}
