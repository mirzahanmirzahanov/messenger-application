<template>
  <div class="contact-list">
    <!-- связываем пропс 'contact_data' с 'contact' -->
    <v-contact-user
      v-for="contact in CONTACTS"
      :key="contact.id"
      :contact_data="contact"
      @to-contact-info="toContactInfo(contact)"
    />
    <!-- ловим эмит to-contact-info, отправленный из ребенка
    и привязываем к нему ф-цию toContactInfo -->
  </div>
</template>


<script>
import VContactUser from "@/components/contacts/VContactUser.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { VContactUser },
  name: "contact-list",
  props: {},
  data: () => ({}),
  computed: {
    ...mapGetters(["CONTACTS"]),
  },
  methods: {
    ...mapActions(["GET_CONTACTS"]),
    toContactInfo(contact){
      this.$router.push({
        name: 'contact',
        query: {'id': contact.id}
      })
    }
  },
  mounted() {
    this.GET_CONTACTS();
  },
};
</script>


<style>
</style>