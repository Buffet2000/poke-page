<!-- localmost:5137/[email] -->
<script lang="ts">
  import { page } from '$app/stores';
  import { getPokemonList, getPokemon } from '$lib/pokemonAPI';

  $: email = $page.params.email;

  let pokemonList: any = []
  let pokemonData: any = []
  let profile: any = {
    description: 'This is ypur description, feel free to write about yourself or your favorite Pokemon.',
    pokemon_ids: [1, 2, 5]
  }

  async function refreshPokemonData() {
    pokemonData = [];

    profile.pokemon_ids.map(async (id: number) => {
      const data = await getPokemon(id.toString());

      if (pokemonData === undefined) {
        pokemonData = [data];
      } else {
        pokemonData = [ ...pokemonData, data ]
      }
    })
  }

  page.subscribe(async () => {
    pokemonList = await getPokemonList();
    await refreshPokemonData();
    console.log(await getPokemon('1'));
    console.log(pokemonList);
    console.log(pokemonData);
  })
</script>

<div class="hero min-h-screen bg-base-300">
  <div class="hero-content">
    <div class="max-w-2xl text-center">
      <h1 class="text-white font-bold text-4xl">{email}'s Page</h1>
      <p class="py-3 max-w-md mx-auto">User description here...</p>
      <div class="grid grid-cols-3">
        {#if pokemonData === undefined}
          <p>Loading...</p>
        {:else}
          {#each pokemonData as pokemon}
            <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
              <div class="card-body">
                <div class="text-center">
                  <img src={pokemon.sprites.front_default} alt="Pokemon" class="w-32 h-32 mx-auto" />
                  <h2 class="text-white text-2xl font-bold">{pokemon.name}</h2>
                  <p class="text-info">{pokemon.types[0].type.name}</p>
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
