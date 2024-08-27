<!-- localmost:5137/[email] -->
<script lang="ts">
  import { page } from '$app/stores';
  import { getPokemonList, getPokemon } from '$lib/pokemonAPI';
  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data)

  $: email = $page.params.email;

  let pokemonList: any = []
  let pokemonData: any = []
  let profile: any = {
    description: 'This is your description, feel free to write about yourself or your favorite Pokemon.',
    pokemon_ids: [1, 2, 3]
  }
  let isEditModalOpen = false;
  let isPokemonInfoModalOpen = false;
  let selectedPokemon: any = null;
  let searchInput = '';

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
  
  async function saveProfile() {
    const { data: profileData, error: profileError } = await supabase.from('profiles').select('*').eq('email', email)

    if (profileData?.length === 0) {
      const { data, error } = await supabase
        .from('profiles')
        .insert({ ...profile, user_id: session?.user?.id, email: session?.user?.email })
    } else {
      const { data, error } = await supabase
        .from('profiles')
        .update(profile)
        .eq('user_id', session?.user?.id)
    }
  }

  page.subscribe(async () => {
    pokemonList = await getPokemonList();

    const { data: profileData, error: profileError } = await supabase.from('profiles').select('description, pokemon_ids').eq('email', email)

    if (profileData?.length == 0 && email == session?.user?.email) {
      console.log('SAVE PROFILE');
      await saveProfile();
    } else if (profileData != null && profileData.length > 0) {
      profile = profileData[0]
    } else {
      console.log('NO PROFILE');
      profile = {
        description: 'This user does not have a profile yet!',
        pokemon_ids: []
      }
    }

    await refreshPokemonData();
  })

  async function savePageEdits() {
    await saveProfile();
    await refreshPokemonData();
    isEditModalOpen = false;
  }

  async function togglePokemon(id: number) {
    let pokemonIDs = profile.pokemon_ids;

    if (pokemonIDs.length >= 3 && !pokemonIDs.includes(id)) {
      alert('You can only have 3 pokemon maximum!')
      return
    }

    if (pokemonIDs.includes(id)) {
      let index = pokemonIDs.indexOf(id);
      pokemonIDs.splice(index, 1);
    } else {
      pokemonIDs.push(id);
    }

    profile.pokemon_ids = [ ...pokemonIDs ]
  }
</script>

<div class="hero min-h-screen bg-base-300">
  <div class="hero-content">
    <div class="max-w-2xl text-center pt-20">
      <h1 class="text-white font-bold sm:text-3xl max-sm:text-2xl">{email}'s Page</h1>
      <p class="py-3 max-w-md mx-auto">{profile.description}</p>
      <div class="grid grid-cols-3 max-sm:grid-cols-1">
        {#if pokemonData === undefined}
          <p>Loading...</p>
        {:else}
          {#each pokemonData as pokemon}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={() => { selectedPokemon = pokemon, isPokemonInfoModalOpen = true }} class="card bg-slate-700 m-4 shadow-lg shadow-blue-900 hover:bg-slate-600 cursor-pointer">
              <div class="card-body">
                <div class="text-center">
                  <img src={pokemon.sprites.front_default} alt="Pokemon" class="w-32 h-32 mx-auto" />
                  <h2 class="text-white text-2xl font-bold">{pokemon.name}</h2>
                  <p class="text-info">{pokemon.types[0].type.name}</p>
                </div>
              </div>
            </div>
            <dialog class="modal min-w-fit" class:modal-open={isPokemonInfoModalOpen}>
              {#if selectedPokemon}
                <div class="modal-box flex justify-between">
                  <button class="btn btn-xs absolute right-2 top-2" on:click={() => isPokemonInfoModalOpen = false}>X</button>
                  <div class="w-[60%]">
                    <img src={selectedPokemon.sprites.front_default} alt="Pokemon" class="w-60 h-60 mx-auto my-auto" />
                  </div>
                  <div class="ml-3 mr-3 mt-2 w-[40%] border-l-[1px] border-black">
                    <div class="mt-1 ml-5 text-info text-start">
                      NAME: <p class="text-white">{selectedPokemon.name}</p>
                    </div>
                    <div class="mt-1 ml-5 text-info text-start">
                      TYPE: <p class="text-white">{selectedPokemon.types[0].type.name}</p>
                    </div>
                    <div class="mt-1 ml-5 text-info text-start">
                      ATTACK: <p class="text-white">{selectedPokemon.stats[1].base_stat}</p>
                    </div>
                    <div class="mt-1 ml-5 text-info text-start">
                      DEFENCE: <p class="text-white">{selectedPokemon.stats[2].base_stat}</p>
                    </div>
                    <div class="mt-1 ml-5 text-info text-start">
                      HEALTH POINTS: <p class="text-white">{selectedPokemon.stats[0].base_stat}</p>
                    </div>
                  </div>
                </div>
              {/if}
            </dialog>
          {/each}
        {/if}
      </div>
      {#if email == session?.user?.email}
        <button class="btn btn-info mt-5" on:click={() => isEditModalOpen = true}>Edit Page</button>
        <dialog class="modal min-w-lg max-sm:mt-10" class:modal-open={isEditModalOpen}>
          <div class="modal-box">
            <button class="btn btn-xs absolute right-2 top-2" on:click={() => isEditModalOpen = false}>X</button>
            <h3 class="mt-2">Edit Your PokePage</h3>
            <p class="text-xs text-[#88898a] mt-2">Here you can make edits to your page, such as description or pokemon selected.</p>
            <p class="text-white p-2">Edit your description</p>
            <textarea
              bind:value={profile.description}
              class="textarea textarea-bordered textarea-lg w-full max-w-md h-[300px]"
            />
            <p class="text-white p-2">Select your pokemon</p>
            <div class="col-span-3">
              <input
                type="text"
                class="input input-bordered w-full"
                placeholder="Search for a pokemon!"
                bind:value={searchInput}
              >
              <button class="btn btn-success mt-5 w-[200px]" on:click={() => savePageEdits()}>Save Edits</button>
            </div>
            <div class="grid grid-cols-3 overflow-y-scroll max-h-[600px] m-3">
              {#each pokemonList as pokemon, index }
                {#if pokemon.name.includes(searchInput)}
                  <button
                    class={
                      "card bg-slate-700 h-12 p-1 m-1 justify-center items-center "
                      + (profile.pokemon_ids.includes(index + 1)
                      ? "border-2 border-blue-600"
                      : "")
                    }
                    on:click={() => togglePokemon(index + 1)}
                  > 
                    <div class="text-center">
                      <h2 class="text-white text-xl max-sm:text-sm">{pokemon.name}</h2>
                    </div>
                  </button>
                {/if}
              {/each}
            </div>
          </div>
        </dialog>
      {/if}
    </div>
  </div>
</div>
