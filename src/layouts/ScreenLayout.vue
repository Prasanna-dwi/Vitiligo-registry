<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="row justify-center form-backgorund">
        <div class="col-md-4 col-lg-4">
            <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
// import RouteTabComponent from 'src/components/route-tab/RouteTabComponent.vue'
// import { RouteConfig } from 'vue-router'
// import routes from 'src/router/routes';
// import TabRoute from 'src/components/route-tab/TabRoute';
@Component({
})
export default class ScreenLayout extends Vue {
/* public isNavMenu = false;
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
  } */
}

</script>
