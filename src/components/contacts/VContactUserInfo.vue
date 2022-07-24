<template>
  <div class="v-contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__name">
        <span>{{ contactData.phone }}</span>
      </div>
      <div class="info__tools">
        <div class="start-call">Call</div>
        <div class="start-chat">Start chat</div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  name: "v-contact-user-info",
  computed: {
    ...mapGetters(["CONTACTS"]),
  },
  props: {},
  data: () => ({
    contactData: {},
  }),
  methods: {},
  mounted() {
    this.CONTACTS.find((contact) => {
      if (contact.id == this.$route.query.id) {
        this.contactData = contact;
      }
    });
  },
};
</script>


<style>
</style>