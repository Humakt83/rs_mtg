<script>
</script>

<svelte:head>
	<title>Cubes and Stuff MtG</title>
	<meta name="description" content="my mtg cubes and stuff" />
</svelte:head>

<main>

  <p>Welcome to my MtG site with cube lists and draft tool for them. More content might arrive later someday.</p>

</main>

<style lang="scss">
  @import '../vars.scss';
 
  main {
    text-align: center;
    color: $color;
    height: 100%;
    width: 100%;
  }

  img {
    width: 500px;
    max-width: 90vw;
    border: 3px solid $highlight-color;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>