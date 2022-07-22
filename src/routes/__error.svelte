<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
      
      return {
        props: {
          title: `${status}: ${error.message}`
        }
      };
    }
  </script>
  
  <script>
    export let title;
  </script>
  
  <h1 class="text-center text-2xl m-auto p-4 text-red-600">{title}</h1>