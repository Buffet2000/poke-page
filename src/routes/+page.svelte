<!-- localmost:5137 -->
<script>
   const base = process.env.NODE_ENV === 'production' ? '/poke-page' : '';
</script>

<div class="hero min-h-screen bg-base-300">
  <div class="hero-content">
    <div class="max-w-md text-center">
      <h1 class="text-white font-bold text-4xl">Welcome to PokePage</h1>
      <p class="py-6">Create an account to make your own PokePage with your own unique URL!</p>
      <a href="{base}/login" class="btn btn-primary">Create An Account</a>
    </div>
  </div>
</div>
