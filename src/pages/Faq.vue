<template>
  <Layout slotClass="container">
    <h1 class="text-center">FAQ</h1>

    <div
      class="mb-4"
      @click="open = index"
      v-for="(edge, index) in $page.allFaq.edges"
      v-bind:key="edge.node.id"
      v-bind:isOpen="(isOpen = index == open)"
    >
      <div
        class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
      >
        {{ edge.node.question }}
        <span class="h-6 w-6 flex items-center justify-center text-teal-500">
          <svg
            class="w-3 h-3 fill-current"
            v-bind:class="{ hidden: !isOpen, block: isOpen }"
            viewBox="0 -192 469.33333 469"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
            />
          </svg>
          <svg
            class="w-3 h-3 fill-current"
            v-bind:class="{ hidden: isOpen, block: !isOpen }"
            viewBox="0 0 469.33333 469.33333"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
            />
          </svg>
        </span>
      </div>
      <div
        class="{className}"
        v-html="edge.node.content"
        v-bind:class="{ hidden: !isOpen, block: isOpen }"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  allFaq {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        content
        question
        position
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "FAQ",
    open: 0,
  },
  data: () => ({
    open: 1,
  }),
};
</script>
