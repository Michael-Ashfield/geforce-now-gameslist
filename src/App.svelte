<script>
  import { TableSort } from "svelte-tablesort";
  let games = [];

  fetch(
    "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON"
  )
    .then(response => {
      return response.json();
    })
    .then(res => {
      games = res;
      console.log(games);
    });
</script>

<style>
  .svelte-fix {
    display: none;
  }
  .ascending {
    color: hotpink !important;
  }

  :global(table td, table th) {
    border: 1px solid silver;
  }

  :global(.descending:after, .ascending:after) {
    content: " ";
    position: relative;
    left: 5px;
    border: 5px solid transparent;
  }

  :global(.descending:after) {
    top: 14px;
    border-top-color: silver;
  }

  :global(.ascending:after) {
    bottom: 12px;
    border-bottom-color: silver;
  }

  :global(.descending, .ascending) {
    padding-right: 10px;
  }
</style>

<main>
  <h1>
    <u>Geforce Now Game List</u>
  </h1>
  <h3>
    This is a table directly from the current Nvidia's
    <a
      href="https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON">
      JSON data here.
    </a>
    <br />
    💕 Please feel free to contribute code to the project
    <a href="https://github.com/lettuceboop/geforce-now-gameslist">here</a>
    💕
  </h3>

  <div class="container-fluid">

    <TableSort
      items={games}
      class="table table-striped table-bordered table-hover">
      <tr slot="thead" class="thead-dark">
        <th data-sort="id" data-sort-initial="descending">ID</th>
        <th data-sort="title">Title</th>
        <th data-sort="isFullyOptimized">Is Fully Optimized</th>
        <th data-sort="isHighlightsSupported">Is Highlights Supported</th>
        <th data-sort="publisher">Publisher</th>
        <th data-sort="genres">Genres</th>
        <th data-sort="status">Status</th>
      </tr>
      <tr slot="tbody" let:item>
        <td>{item.id}</td>

        <td>
          <b>
            <a href={item.steamUrl} title={item.title}>{item.title}</a>
          </b>
        </td>
        <td>
          {#if item.isFullyOptimized}Yes{:else}No{/if}
        </td>
        <td>
          {#if item.isHighlightsSupported}Yes{:else}No{/if}
        </td>
        <td>{item.publisher}</td>
        <td>
          {item.genres}
        </td>
        <td>{item.status}</td>

      </tr>
    </TableSort>

  </div>

</main>
