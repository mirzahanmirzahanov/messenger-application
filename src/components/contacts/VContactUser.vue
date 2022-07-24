<template>
  <div class="v-contact-user" @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
      <span>{{ contact_data.name }}</span>
    </div>
    <div class="user__status" :class="className"></div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "v-contact-user",
  props: {
    // создаем props, который прининамет contact из ContactList 
    // (из родителя в ребенка, ребенок - этот компонент)
    contact_data: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    //открытие отдельного контакта
    toContactInfo() {
      // прокидываем событие из ребенка 
      // в родителя с помощью $emit
      //пока что вырезал эту часть 
      // и сделал прямой роут в информацию о контакте
      this.$emit('to-contact-info')
    },
  },
  computed: {
    className() {
      return {
        online: this.contact_data.status === "online",
        offline: this.contact_data.status === "offline",
      };
    },
  },
};
</script>


<style>
</style>