<template>
    <q-page class="HistoryForm">
        <div class="row bg-purple q-pa-lg q-mb-lg">
            <div class="col-1">
            <q-btn color="white" label="" flat to="/questions" class="no-padding arrow-buttons"> <q-icon name="keyboard_arrow_left" class="text-h6"/></q-btn>
            </div>
            <div class="col-10">
                <h6 class="text-h6 no-margin text-center text-white">{{$t('patient.investigation')}}</h6>
            </div>
            <div class="col-1">
                <q-btn color="white" label="" flat to="/" class="arrow-buttons"> <q-icon name="keyboard_arrow_right" class="text-h6"/></q-btn>
            </div>
        </div>
        <div class="q-pl-md q-pr-md">
            <div class="question-section q-mt-lg q-mb-lg">
                <q-card class="my-card no-shadow">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.bloodInvestigation')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.bloodInvestigation"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.bloodInvestigation==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                            <q-uploader
                                url=""
                                :label="$t('patient.bloodInvestigation')"
                                multiple
                                class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                        <div class="q-uploader__title">{{$t('patient.bloodInvestigation')}}</div>
                                        <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                    </div>
                                    <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                        <q-uploader-add-trigger />
                                        <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                    </q-btn>
                                    <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                        <q-tooltip>{{$t('patient.bloodInvestigation')}}</q-tooltip>
                                    </q-btn>

                                    <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                        <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                    </q-btn>
                                    </div>
                                </template>
                            </q-uploader>
                        </q-card-section>
                    </div>
                </q-card>
                <q-card class="my-card no-shadow  q-mt-lg q-mb-lg">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-10 self-center">
                                <label class="label-text-color">{{$t('patient.skinInvestigationReports')}}</label>
                            </div>
                            <div class="col-2 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.skinInvestigationReports"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.skinInvestigationReports==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.skinInvestigationReportsType" name="Scrapings" val="Scrapings" color="purple" :label="$t('patient.scrapings')" class="text-caption q-pt-md q-pb-md q-pl-xs q-pr-xs input-text-color"/>
                        </q-card-section>
                        <div v-for="skinReportType in patient.skinInvestigationReportsType" :key="skinReportType.id">
                            <div v-if="skinReportType==='Scrapings'">
                                <q-separator class="seperator" />
                                <q-card-section class="no-padding">
                                    <q-uploader
                                        url=""
                                        :label="$t('patient.scrapings')"
                                        multiple
                                        class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                                <div class="q-uploader__title">{{$t('patient.scrapings')}}</div>
                                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                            </div>
                                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                <q-uploader-add-trigger />
                                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                            </q-btn>
                                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                                <q-tooltip>{{$t('patient.scrapings')}}</q-tooltip>
                                            </q-btn>

                                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                            </q-btn>
                                            </div>
                                        </template>
                                    </q-uploader>
                                </q-card-section>
                            </div>
                        </div>

                        <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.skinInvestigationReportsType" name="SSS" val="SSS" color="purple" :label="$t('patient.sss')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                        </q-card-section>
                        <div v-for="skinReportType in patient.skinInvestigationReportsType" :key="skinReportType.id">
                            <div v-if="skinReportType==='SSS'">
                                <q-separator class="seperator" />
                                <q-card-section class="no-padding">
                                    <q-uploader
                                        url=""
                                        :label="$t('patient.sss')"
                                        multiple
                                        class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                                <div class="q-uploader__title">{{$t('patient.sss')}}</div>
                                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                            </div>
                                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                <q-uploader-add-trigger />
                                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                            </q-btn>
                                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                                <q-tooltip>{{$t('patient.sss')}}</q-tooltip>
                                            </q-btn>

                                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                            </q-btn>
                                            </div>
                                        </template>
                                    </q-uploader>
                                </q-card-section>
                            </div>
                        </div>
                        <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.skinInvestigationReportsType" name="Biopsy" val="Biopsy" color="purple" :label="$t('patient.biopsy')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                        </q-card-section>
                        <div v-for="skinReportType in patient.skinInvestigationReportsType" :key="skinReportType.id">
                            <div v-if="skinReportType==='Biopsy'">
                                <q-separator class="seperator" />
                                <q-card-section class="no-padding">
                                    <q-uploader
                                        url=""
                                        :label="$t('patient.biopsy')"
                                        multiple
                                        class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                                <div class="q-uploader__title">{{$t('patient.biopsy')}}</div>
                                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                            </div>
                                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                <q-uploader-add-trigger />
                                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                            </q-btn>
                                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                                <q-tooltip>{{$t('patient.biopsy')}}</q-tooltip>
                                            </q-btn>

                                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                            </q-btn>
                                            </div>
                                        </template>
                                    </q-uploader>
                                </q-card-section>
                            </div>
                        </div>
                    </div>
                </q-card>
                <q-card class="my-card no-shadow  q-mt-lg q-mb-lg">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-10 self-center">
                                <label class="label-text-color">{{$t('patient.investigationOther')}}</label>
                            </div>
                            <div class="col-2 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.investigationOther"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.investigationOther==='Y'">
                       <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.investigationOtherOptions" name="XRAYS" val="XRAYS" color="purple" :label="$t('patient.xrays')" class="text-caption q-pt-md q-pb-md q-pl-xs q-pr-xs input-text-color"/>
                        </q-card-section>
                        <div v-for="investigationOtherOptions in patient.investigationOtherOptions" :key="investigationOtherOptions.id">
                            <div v-if="investigationOtherOptions==='XRAYS'">
                                <q-separator class="seperator" />
                                <q-card-section class="no-padding">
                                    <q-uploader
                                        url=""
                                        :label="$t('patient.xrays')"
                                        multiple
                                        class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                                <div class="q-uploader__title">{{$t('patient.xrays')}}</div>
                                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                            </div>
                                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                <q-uploader-add-trigger />
                                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                            </q-btn>
                                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                                <q-tooltip>{{$t('patient.xrays')}}</q-tooltip>
                                            </q-btn>

                                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                            </q-btn>
                                            </div>
                                        </template>
                                    </q-uploader>
                                </q-card-section>
                            </div>
                        </div>
                        <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                            <q-checkbox v-model="patient.investigationOtherOptions" name="ULTRASOUND" val="ULTRASOUND" color="purple" :label="$t('patient.ultraSounds')" class="text-caption q-pt-md q-pb-md q-pl-xs q-pr-xs input-text-color"/>
                        </q-card-section>
                        <div v-for="investigationOtherOptions in patient.investigationOtherOptions" :key="investigationOtherOptions.id">
                            <div v-if="investigationOtherOptions==='ULTRASOUND'">
                                <q-separator class="seperator" />
                                <q-card-section class="no-padding">
                                    <q-uploader
                                        url=""
                                        :label="$t('patient.ultraSounds')"
                                        multiple
                                        class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                                <div class="q-uploader__title">{{$t('patient.ultraSounds')}}</div>
                                                <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                            </div>
                                            <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                <q-uploader-add-trigger />
                                                <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                            </q-btn>
                                            <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                                <q-tooltip>{{$t('patient.ultraSounds')}}</q-tooltip>
                                            </q-btn>

                                            <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                                <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                            </q-btn>
                                            </div>
                                        </template>
                                    </q-uploader>
                                </q-card-section>
                            </div>
                        </div>
                        <q-separator class="seperator" />
                        <q-card-section class="no-padding">
                            <q-checkbox v-model="patient.investigationOtherOptions" name="OTH" val="OTH" color="purple" :label="$t('patient.others')" class="text-caption q-pt-md q-pb-md q-pl-xs q-pr-xs input-text-color"/>
                        </q-card-section>
                        <div v-for="investigationOther in patient.investigationOtherOptions" :key="investigationOther.id">
                           <div v-if="investigationOther==='OTH'">
                                <div v-for="(otherInvestigationReports,index) in patient.titleInvestigation" :key="index">
                                    <q-separator class="seperator" />
                                    <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                                        <q-input borderless :label="$t('patient.titleInvestigation')" v-model="otherInvestigationReports.investigationTitle" type="text" class="input-text-color q-pl-md q-pr-md"/>
                                    </q-card-section>
                                    <q-separator class="seperator" />
                                    <q-card-section class="no-padding">
                                        <q-uploader
                                            url=""
                                            :label="$t('patient.investigaionReportsUpload')"
                                            multiple
                                            class="uploadNails q-pt-md q-pb-sm q-pl-sm q-pr-sm"
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
                                                    <div class="q-uploader__title">{{$t('patient.investigaionReportsUpload')}}</div>
                                                    <!-- <div class="q-uploader__subtitle">{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div> -->
                                                </div>
                                                <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                                                    <q-uploader-add-trigger />
                                                    <q-tooltip>{{$t('patient.filesPick')}}</q-tooltip>
                                                </q-btn>
                                                <q-btn v-if="scope.canUpload" icon="cloud_upload" @click="scope.upload" round dense flat >
                                                    <q-tooltip>{{$t('patient.investigaionReportsUpload')}}</q-tooltip>
                                                </q-btn>

                                                <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat >
                                                    <q-tooltip>{{$t('patient.abortUpload')}}</q-tooltip>
                                                </q-btn>
                                                </div>
                                            </template>
                                        </q-uploader>
                                    </q-card-section>
                                </div>
                                <q-separator class="seperator" />
                                <div class="q-pa-md q-gutter-sm text-right">
                                    <q-btn color="primary" icon="add_box" label="Add Another" @click="addFind"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card>
            </div>
        </div>
    </q-page>
</template>
<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Patient } from '../models/patient/patient'
@Component({
})
export default class Investigation extends Vue {
    private patient:Patient = new Patient();
    public falseValue = 'N';
    public trueValue = 'Y';
    // eslint-disable-next-line
    public addFind () {
      // eslint-disable-next-line
      this.patient.titleInvestigation.push({ investigationTitle: '' });
    }
}

</script>
