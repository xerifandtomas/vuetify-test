<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        :elevation="hover ? 8 : 4"
        class="mx-auto mb-2 anchor"
        id="contact"
      >
        <v-card-title to="#contact">
          <span>Contact me</span>
        </v-card-title>

        <v-col class="pa-0">
          <v-window v-model="step">
            <!-- Email -->
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field
                  label="Your mail address"
                  v-model="email"
                  :rules="mailRules"
                  dense
                >
                </v-text-field>
                <span class="caption grey--text text--darken-1"
                  >Mail address to contact you back</span
                >
              </v-card-text>
            </v-window-item>

            <!-- Message -->
            <v-window-item :value="2">
              <v-card-text>
                <v-textarea
                  label="Your message"
                  v-model="message"
                  :rules="messageRules"
                  counter
                  dense
                >
                </v-textarea>
                <span class="caption grey--text text--darken-1">Write me</span>
              </v-card-text>
            </v-window-item>

            <!-- Preview -->
            <v-window-item :value="3">
              <v-card-text>
                <h3 v-if="email">
                  Your mail address : <a>{{ email }}</a>
                </h3>
                <p v-if="message">{{ message }}</p>
              </v-card-text>
            </v-window-item>

            <!-- Success -->
            <v-window-item :value="4">
              <div class="px-2 pb-2 text-center">
                <h3 class="font-weight-light mb-2">Success</h3>
                <span class="caption grey--text">I will answer ASAP !</span>
              </div>
            </v-window-item>
          </v-window>
        </v-col>

        <v-divider> </v-divider>

        <v-card-actions>
          <v-btn :disabled="step === 1" text @click="previous()">Back</v-btn>
          <v-spacer> </v-spacer>
          <v-btn
            :disabled="step === 4"
            color="primary"
            depressed
            @click="next()"
          >
            <span v-if="step < 3">Next</span>
            <span v-else>Send</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "MailWindow",
  data: () => ({
    step: 1,
    maxCharacter: 100,
    email: "",
    message: "",
  }),
  props: ["scroll"],
  computed: {
    mailRules() {
      return [
        (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
      ];
    },
    messageRules() {
      return [(v) => v.length <= this.maxCharacter];
    },
  },
  methods: {
    previous() {
      this.step--;
    },
    next() {
      this.step++;
    },
  },
};
</script>
