<script lang="ts">
  export let data;
  import{ Auth } from "@supabase/auth-ui-svelte";
  import { ThemeSupa } from "@supabase/auth-ui-shared";
  import { goto } from "$app/navigation";
  
  const base = process.env.NODE_ENV === 'production' ? '/poke-page' : '';

  let { supabase, session } = data;
  $: ({ supabase, session } = data)

  $: if(session) {
    goto(`${base}/${data.session?.user.email}`)
  }
</script>

<div class="hero min-h-screen bg-base-300">
  <div class="hero-content max-sm:w-[300px]">
    <div class="flex flex-col">
      <p>Create an account or login below!</p>
      <!-- Supabase Auth UI -->
      <Auth
        supabaseClient={supabase}
        theme="dark"
        appearance={{
          theme: ThemeSupa,
          style: {
            input: "width: 340px"
          }
        }}
      />
    </div>
  </div>
</div>
