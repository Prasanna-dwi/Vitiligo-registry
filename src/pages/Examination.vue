/* eslint-disable @typescript-eslint/no-unsafe-call */
<template>
    <q-page class="HistoryForm">
        <div class="row bg-purple q-pa-lg q-mb-lg">
            <div class="col-1">
            <q-btn color="white" label="" flat to="/treatment" class="arrow-buttons"> <q-icon name="keyboard_arrow_left" class="text-h6"/></q-btn>
            </div>
            <div class="col-10">
                <h6 class="text-h6 no-margin text-center text-white">Examination</h6>
            </div>
            <div class="col-1">
            <q-btn color="white" label="" flat to="/questions" class="arrow-buttons"> <q-icon name="keyboard_arrow_right" class="text-h6"/></q-btn>
            </div>
        </div>
        <div class="q-pl-md q-pr-md">
            <q-card class="my-card no-shadow no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.generalExamination')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless :placeholder="$t('patient.placeholder.heightinCMS')" type="number" v-model="patient.heightInCms" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless :placeholder="$t('patient.weight')" type="number" v-model="patient.weight" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
            </q-card>
            <q-card class="my-card no-shadow no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.skinType')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <div class="row">
                        <div class="col-6">
                        <q-radio v-model="patient.skinType" val="NS" color="purple" :label="$t('patient.ns')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                        <q-radio v-model="patient.skinType" val="SS" color="purple" :label="$t('patient.ss')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                            <q-radio v-model="patient.skinType" val="DS" color="purple" :label="$t('patient.ds')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                        <q-radio v-model="patient.skinType" val="OS" color="purple" :label="$t('patient.os')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                        <q-radio v-model="patient.skinType" val="CS" color="purple" :label="$t('patient.cs')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                            <q-radio v-model="patient.skinType" val="scalySKin" color="purple" :label="$t('patient.scalySKin')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                            <q-radio v-model="patient.skinType" val="RS" color="purple" :label="$t('patient.rs')" class="input-text-color" />
                        </div>
                        <div class="col-6">
                        <q-radio v-model="patient.skinType" val="skinMoles" color="purple" :label="$t('patient.skinMoles')" class="input-text-color" />
                        </div>
                    </div>
                </q-card-section>
            </q-card>
            <q-card class="my-card no-shadow no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.hair')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless rows="2" :placeholder="$t('patient.placeholder.hairEnter')" type="textarea" v-model="patient.hairEnter" class="input-text-color q-pl-md"/>
                </q-card-section>
            </q-card>
            <q-card class="my-card no-shadow no-shadow q-mt-lg q-mb-lg">
                <!-- <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-select borderless v-model="skinType" :options="skinTypeOptions" :label="$t('patient.skinType')" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-select borderless v-model="hairType" :options="hairTypeOptions" :label="$t('patient.hairType')" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section> -->
                <q-card-section class="no-padding">
                    <q-uploader
                        url=""
                        :label="$t('patient.nails')"
                        multiple
                        class="uploadNails q-pt-md q-pb-md q-pl-md q-pr-sm"
                        >
                        <template v-slot:header="scope">
                            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                            <q-btn v-if="scope.queuedFiles.length > 0" icon="clear_all" @click="scope.removeQueuedFiles" round dense flat >
                                <q-tooltip>{{$t('patient.clearAll')}}</q-tooltip>
                            </q-btn>
                            <q-btn v-if="scope.uploadedFiles.length > 0" icon="done_all" @click="scope.removeUploadedFiles" round dense flat >
                                <q-tooltip>{{$t('patient.removeUploadFiles')}}</q-tooltip>
                            </q-btn>
                            <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                            <div class="col">
                                <div class="q-uploader__title">{{$t('patient.nails')}}</div>
                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                            </div>
                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                <q-uploader-add-trigger />
                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                            </q-btn>
                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                <q-tooltip>{{$t('patient.nails')}}</q-tooltip>
                            </q-btn>

                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                            </q-btn>
                            </div>
                        </template>
                    </q-uploader>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-select borderless v-model="vitiligoType" :options="vitiligoTypeOptions" :label="$t('patient.vitiligoType')" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-select borderless v-model="diseaseSigns" :options="diseaseSignsOptions" :label="$t('patient.diseaseSigns')" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-select borderless v-model="scoringMethods" :options="scoringMethodsOptions" :label="$t('patient.scoringMethods')" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
            </q-card>
            <q-card class="my-card no-shadow no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.dermoscopy')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-uploader
                        url=""
                        :label="$t('patient.photographs')"
                        multiple
                        class="uploadNails q-pt-md q-pb-md q-pl-md q-pr-sm"
                        >
                        <template v-slot:header="scope">
                            <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                            <q-btn v-if="scope.queuedFiles.length > 0" icon="clear_all" @click="scope.removeQueuedFiles" round dense flat >
                                <q-tooltip>{{$t('patient.clearAll')}}</q-tooltip>
                            </q-btn>
                            <q-btn v-if="scope.uploadedFiles.length > 0" icon="done_all" @click="scope.removeUploadedFiles" round dense flat >
                                <q-tooltip>{{$t('patient.removeUploadFiles')}}</q-tooltip>
                            </q-btn>
                            <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                            <div class="col">
                                <div class="q-uploader__title">{{$t('patient.photographs')}}</div>
                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                            </div>
                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                <q-uploader-add-trigger />
                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                            </q-btn>
                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                <q-tooltip>{{$t('patient.photographs')}}</q-tooltip>
                            </q-btn>

                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                            </q-btn>
                            </div>
                        </template>
                    </q-uploader>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>
<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Patient, ScoringMethods, DiseaseSigns, VitiligoType } from '../models/patient/patient'
@Component({
})
export default class ExaminationPage extends Vue {
     public patient:Patient = new Patient();
     public scoringMethods:any=[];
     public diseaseSigns:any=[];
     public diseaseSignsOptions:any=[];
     public vitiligoType:any=[];
     public vitiligoTypeOptions:any=[];
     public scoringMethodsOptions:any=[];
     public created () {
       Object.keys(ScoringMethods).forEach((key, index) => {
         // eslint-disable-next-line
         this.scoringMethodsOptions.push({
           code: key,
           label: key
         })
       })
       Object.keys(DiseaseSigns).forEach((key, index) => {
         // eslint-disable-next-line
         this.diseaseSignsOptions.push({
           code: key,
           label: this.$t('patient.' + key)
         })
       })
       Object.keys(VitiligoType).forEach((key, index) => {
         // eslint-disable-next-line
         this.vitiligoTypeOptions.push({
           code: key,
           label: this.$t('patient.' + key)
         })
       })
       /* Object.keys(ScoringMethods).forEach((key, index) => {
            this.scoringMethodsOptions = {
          code: key,
          label: key
        }
         }
       }); */
     }
}

</script>
