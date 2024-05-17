<?php

namespace App\Http\Controllers;

use App\Models\JenisBarang;
use Illuminate\Http\Request;

class JenisBarangController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $jenisBarang = JenisBarang::all();
  
        return response()->json([
            "jenisBarang" => $jenisBarang
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
      $jenis = $request->jenis;

      JenisBarang::create([
        'jenis' => $jenis,
      ]);

      return response()->json([
        'result' => "Category Jenis Barang successfully added: '$jenis'"
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
      $jenisBarang = jenisBarang::find($id);

      if (!$jenisBarang) {
          return response()->json([
              'error' => 'jenis Barang not found'
          ], 404);
      }

      return response()->json([
          'jenisBarang' => $jenisBarang
      ], 200);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        try {
            $jenisBarang = JenisBarang::findOrFail($id);
    
            $jenisBarang->jenis = $request->jenis;
    
            $jenisBarang->save(); 
    
            return response()->json([
                'message' => "Jenis barang successfully updated: '$jenisBarang->jenis'"
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
        $jenisBarang = JenisBarang::find($id);
    
        if (!$jenisBarang) {
            return response()->json([
                'error' => 'Jenis barang not found'
            ], 404);
        }
    
        if ($jenisBarang->barangs()->exists()) {
            return response()->json([
                'error' => 'Cannot delete jenis barang because it has associated barangs.'
            ], 400);
        }
    
        $jenisBarang->delete();
        return response()->json([
            'message' => 'jenis barang successfully deleted'
        ], 200);
    }
}
