<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //

    protected $fillable = ['code','name','description','parent_id'];

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    */
    public function parent() {
        return $this->belongsTo(self::class, 'parent_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children() {
        return $this->hasMany(self::class, 'parent_id','id');
    }

}
