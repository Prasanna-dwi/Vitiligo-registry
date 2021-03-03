<template>
    <q-page>
        <q-card class="my-card page-section-block">
            <q-card-section>
                <q-input borderless placeholder="Name" type="text" v-model="patient.name" class="text-h4 input-text-color q-pl-md q-pr-md"/>
            </q-card-section>
            <q-separator class="seperator" />
            <q-card-section>
                <q-input borderless placeholder="Age" type="number" v-model="patient.age" class="text-h4 input-text-color text-purple q-pl-md q-pr-md"/>
            </q-card-section>
            <q-separator class="seperator" />
            <q-card-section class="q-pt-lg q-pb-lg">
                <q-radio  label="Male" val="M" color="purple" v-model="patient.gender" class="text-h4 input-text-color q-pr-xl" />
                <q-radio label="Female" val="F" color="purple" v-model="patient.gender" class="text-h4 input-text-color q-pr-xl q-pl-md" />
                
            </q-card-section>
        </q-card>
        <q-card class="my-card page-section-block q-mt-lg q-mb-lg">
            <q-card-section>
                <q-input borderless placeholder="Onset"  v-model="patient.onSet" mask="date" class="text-h4 input-text-color q-pl-md q-pr-md">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer text-h4 input-text-color">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                            <q-date v-model="patient.onSet">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                            </q-date>
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </q-card-section>
            <q-separator class="seperator" />
            <q-card-section>
                <q-select
                    v-model="locationFirstLension"
                    :options="locationFirstLensionOptions"
                    label="Location of first lesion"
                    type="checkbox"
                    multiple
                    emit-value
                    map-options
                >
                <template v-slot:option="{ itemProps, itemEvents, opt, selected, checkedOption }">
                    <q-item
                        v-bind="itemProps"
                        v-on="itemEvents"
                    >
                        <q-item-section side>
                            <q-checkbox
                                :value="selected"
                                type="checkbox"
                                :label="opt.label"
                            />
                        </q-item-section>
                    </q-item>
                    </template>
                </q-select>
                {{locationFirstLension}}
            </q-card-section>
            <q-separator class="seperator" />
            <q-card-section class="q-pt-lg q-pb-lg">
                <q-radio  label="Male" val="M" color="purple" v-model="patient.gender" class="text-h4 input-text-color q-pr-xl" />
                <q-radio label="Female" val="F" color="purple" v-model="patient.gender" class="text-h4 input-text-color q-pr-xl q-pl-md" />
                {{patient.gender}}
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import {Patient, LocationType } from '../models/patient/patient';
@Component({
})
export default class HistoryPage extends Vue {
    private patient:Patient = new Patient();
    public locationFirstLension:any=[];
    public locationFirstLensionOptions:any=[];
   

   public created(){
       Object.keys(LocationType).forEach((key, index) => {
      
      this.locationFirstLensionOptions.push({
        code: key,
        label: key,
      });
    });
   }

}
</script>