<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model
{
    use HasFactory;
  protected $guarded = ([]);
  public function jenis_barang()
  {
      return $this->belongsTo(JenisBarang::class);
  }
}
