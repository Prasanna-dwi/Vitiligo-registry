<template>
    <div class="row bg-purple q-pa-md">
      <div class="col-1">
      <q-btn color="white" label="" flat > <q-icon name="keyboard_arrow_left" class="text-h6"/> </q-btn>
      
      </div>
      <div class="col">
      <q-tabs
        v-model="tab"
        inline-label
        indicator-color="transparent"
        class=" text-white text-h6 text-color-purple1"
        align="justify"
      >
        <q-route-tab v-for="tab in tabs" v-bind:data="tab"  v-bind:key="tab.link"   :to="{ name:tab.link}" :icon="tab.icon" :label="tab.label" class="text-h6" />
      </q-tabs>
        </div>
      <div class="col-1">
       <q-btn color="white" label="" flat > <q-icon name="keyboard_arrow_right" class="text-h6"/> </q-btn>
      </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TabRoute from './TabRoute';
@Component
export default class RouteTabComponent extends Vue {
  @Prop({ type: Array, required: true }) readonly tabs!: TabRoute[];
  @Prop({ type: String, default: '' }) readonly tab!: string;
}

</script>