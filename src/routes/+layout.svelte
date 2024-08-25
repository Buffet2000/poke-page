<script>
  export let data;
  import "../app.pcss";
  import { goto, invalidateAll } from "$app/navigation";
  
  const base = process.env.NODE_ENV === 'production' ? '/poke-page' : '';

  let { supabase, session } = data;
  $: ({ supabase, session } = data)

  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === "SIGNED_IN") {
      invalidateAll();
    }

    if (event === "SIGNED_OUT") {
      await goto(`${base}/login`);
      invalidateAll();
    }
  })
  
</script>

<!-- Navbar -->
<div class="bg-base-100 justify-between fixed top-0 left-0 right-0">
  <div class="navbar max-w-3xl mx-auto justify-between">
    <div>
      <a href="{base}/" class="btn btn-ghost text-xl">PokePage</a>
      {#if session !== null}
        <a href="{base}/{session.user.email}" class="btn btn-ghost">MyPage</a>
      {/if}
    </div>
    <div>
      {#if session === null}
        <button on:click={() => goto(`${base}/login`)}>Login</button>
      {:else}
        <span class="text-white text-lg ml-2">{session.user.email}</span>
        <button class="ml-5 hover:text-[#00b5ff]" on:click={async () => { await supabase.auth.signOut() }}>Logout</button>
      {/if}
    </div>
  </div>
</div>

<slot></slot>
