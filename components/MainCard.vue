<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-tooltip open-delay="500" slot="opposite" bottom>
        <template v-slot:activator="{ on }">
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                v-on="on"
                :elevation="hover ? 14 : 7"
                :ripple="{ class: `light-blue--text` }"
                shaped
                id="profile"
              >
                <v-card-title class="headline justify-center mb-2"
                  >Nuxt + Vuetify example</v-card-title
                >
                <v-card-subtitle>This is a test</v-card-subtitle>
                <v-card-text class="pb-0"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</v-card-text
                >
              </v-card>
            </template>
          </v-hover>
        </template>
        <span>Test</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Profile",
};
</script>
