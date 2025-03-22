<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_code')->unique();
            $table->string('name');
            $table->string('status')->default('active');
            $table->foreignId('payment_id')->constrained('payments');
            $table->string('customer_id')->constrained('customers');
            $table->string('total_payment');
            $table->string('payment_date');
            $table->string('payment_proof');
            $table->string('payment_expired');
            $table->string('payment_status');
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
