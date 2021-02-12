<template>
  <v-navigation-drawer
    permanent
    mini-variant
    :mini-variant.sync="mini"
    expand-on-hover
    left
    app
  >
    <!-- :mini-variant.sync="mini" -->
    <!-- <v-navigation-drawer permanent mini-variant expand-on-hover left> -->
    <template v-slot:prepend>
      <v-list class="py-0" dense nav>
        <v-list-item two-line class="px-0">
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title mt-2 pb-2">Title</v-list-item-title>
            <v-list-item-subtitle class="subtitle-2"
              >Subtitle</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider> </v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-lightbulb</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Section</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data: () => ({
    mini: false,
  }),
};
</script>

<style scoped>
</style>
