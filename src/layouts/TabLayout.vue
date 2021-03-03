<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="isNavMenu = !isNavMenu"
        />

        <q-toolbar-title>
          Vitiligo App
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
      <div>
        <route-tabs :tabs="tabLinks"/>
      </div>
    </q-header>

    <q-drawer
      v-model="isNavMenu"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <div>
        <router-view />
      
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import RouteTabComponent from 'src/components/route-tab/RouteTabComponent.vue'
import { Vue, Component } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import routes from 'src/router/routes';
import TabRoute from 'src/components/route-tab/TabRoute';
@Component({
  components:{
    "route-tabs": RouteTabComponent
  }
})
export default class TabLayout extends Vue {
  public isNavMenu = false;
  public tabLinks:TabRoute[] = [];
  mounted(){
    this.addRoutes(routes,'');
  }
  public addRoutes(configuredRoutes:RouteConfig[],parentPath:string){
    configuredRoutes.forEach((route:RouteConfig) =>{
      let routePath = `${parentPath}${route.path}`;
      if(route.meta!==undefined && route.meta.showTabMenu){
        this.tabLinks.push(new TabRoute({
          label : `${route.meta.label}`,
          caption : ``,
          link : `${route.name}`,
          icon : ``
        }));
      }
      console.log(route);
      if(route.children !== undefined ) {
        if(route.children.length > 0 ){
          console.log('child')
          this.addRoutes(route.children,`${routePath}/`)
        }
      }
    })
  }
}
</script>
