<script>
  import "../app.css";
  import { goto } from "$app/navigation";
</script>

<!-- Navbar -->
<div class="bg-base-100 justify-between fixed top-0 left-0 right-0">
  <div class="navbar max-w-3xl mx-auto justify-between">
    <div>
      <a href="/" class="btn btn-ghost text-xl">PokePage</a>
      <a href="/user" class="btn btn-ghost">PokePage</a>
    </div>
    <div>
      <button on:click-{() => goto('/login')}></button>
    </div>
  </div>
</div>

<slot></slot>