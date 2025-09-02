<script lang="ts">
  let { data } = $props();
  const { company, name, dateAccomplished, stack, projectImageUrl, content } =
    data.project;

  const getTagFromStyle = (style: ProcessedTextContent["style"]) => {
    return style === "normal" ? "p" : style;
  };
</script>

<main class="default-margin work-page">
  <h4>{company}</h4>
  <div class="underscore"></div>
  <h2 class="mb-s">{name}</h2>
  <img src={projectImageUrl} class="project-image" alt="" />
  <div class="project-container mt-m">
    <div class="meta-data">
      <h3 class="semi-bold">Date</h3>
      <p>{dateAccomplished.slice(0, 7)}</p>
      <h3 class="semi-bold mt-m">Tech Stack</h3>
      <ul>
        {#each stack as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
    <div class="project-text">
      {#each content as block}
        {#if block.type === "text"}
          <svelte:element this={getTagFromStyle(block.style)}>
            {block.textToRender}
          </svelte:element>
        {:else}
          <img src={block.url} alt="" class="content-image" />
        {/if}
      {/each}
    </div>
  </div>
</main>


<style>
    .work-page{
        padding-top: 80px;
        padding-bottom: 140px;
    }

    .project-image {
        width: 100%;
        max-height: 450px;
        object-fit: cover;
    }

    .project-container {
        display: flex;
    }

    .meta-data{
        min-width: 200px;
    }

</style>