<template>
    <q-page class="HistoryForm">
        <div class="row bg-purple q-pa-lg q-mb-lg">
            <div class="col-1">
            <q-btn color="white" label="" flat to="/" class="arrow-buttons"> <q-icon name="keyboard_arrow_left" class="text-h6"/> </q-btn>
            </div>
            <div class="col-10">
                <h6 class="text-h6 no-margin text-center text-white">Treatment</h6>
            </div>
            <div class="col-1">
            <q-btn color="white" label="" flat to="/examination" class="arrow-buttons"> <q-icon name="keyboard_arrow_right" class="text-h6"/> </q-btn>
            </div>
        </div>
        <div class="q-pl-md q-pr-md">
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row">
                        <div class="col-9 self-center">
                            <label class="label-text-color">{{$t('patient.previousTreatment')}}</label>
                        </div>
                        <div class="col-3 text-right">
                            <q-toggle
                                checked-icon="check"
                                color="purple"
                                class="text-right"
                                :false-value="falseValue"
                                :true-value="trueValue"
                                unchecked-icon="clear"
                                v-model="patient.previousTreatment"/>
                        </div>
                    </div>
                </q-card-section>
                <div v-if="patient.previousTreatment==='Y'">
                    <q-separator class="seperator" />
                    <q-card class="my-card no-shadow q-mt-lg q-mb-lg q-ml-lg q-mr-lg">
                        <q-card-section class="bg-pink1 text-white">
                            <div class="row q-pt-xs q-pb-xs">
                                <div class="col-12 self-center">
                                    <label class="label-text-color">{{$t('patient.drugHistory')}}</label>
                                </div>
                            </div>
                        </q-card-section>
                        <div class="stage-Section">
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="NMT" color="purple" :label="$t('patient.nmt')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                            </q-card-section>
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="MAS" color="purple" :label="$t('patient.mas')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="LT" color="purple" :label="$t('patient.mLT')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="PLT" color="purple" :label="$t('patient.puvaLT')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="SU" color="purple" :label="$t('patient.mSU')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="UT" color="purple" :label="$t('patient.mUT')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.drugHistory" val="DP" color="purple" :label="$t('patient.mDP')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                            </q-card-section>
                        </div>
                    </q-card>
                </div>
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.pTreatment')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <div class="q-gutter-sm">
                        <q-checkbox v-model="patient.PHT" val="ST" color="purple" :label="$t('patient.systemic')" class="input-text-color" />
                        <q-checkbox v-model="patient.PHT" val="TP" color="purple" :label="$t('patient.topical')" class="input-text-color" />
                    </div>
                </q-card-section>
            </q-card>
            <div v-for="patientPHT in patient.PHT" :key="patientPHT.id">
                <q-card class="my-card no-shadow q-mt-lg q-mb-lg" v-if="patientPHT==='ST'">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row q-pt-xs q-pb-xs">
                            <div class="col-12 self-center">
                                <label class="label-text-color">{{$t('patient.sT')}}</label>
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-input borderless rows="2" :label="$t('patient.placeholder.treatmentDetails')" type="textarea" v-model="patient.stDetails" class="input-text-color q-pl-md"/>
                    </q-card-section>
                </q-card>
                <q-card class="my-card no-shadow q-mt-lg q-mb-lg" v-if="patientPHT==='TP'">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row q-pt-xs q-pb-xs">
                            <div class="col-12 self-center">
                                <label class="label-text-color">{{$t('patient.topicalTreatment')}}</label>
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-input borderless rows="2" :label="$t('patient.placeholder.treatmentDetails')" type="textarea" v-model="patient.tpDetails" class="input-text-color q-pl-md"/>
                    </q-card-section>
                </q-card>
            </div>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.phTreatment')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <div class="q-gutter-sm">
                        <q-checkbox v-model="patient.phTherapyTreatment" val="NBUVB" color="purple" label="NBUVB" class="input-text-color" />
                        <q-checkbox v-model="patient.phTherapyTreatment" val="PUVA" color="purple" label="PUVA" class="input-text-color" />
                        <q-checkbox v-model="patient.phTherapyTreatment" val="PUVAsol" color="purple" label="PUVAsol" class="input-text-color" />
                        <q-checkbox v-model="patient.phTherapyTreatment" val="excimer" color="purple" label="Excimer" class="input-text-color" />
                    </div>
                </q-card-section>
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.procedures')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless rows="2" :label="$t('patient.placeholder.procedures')" type="textarea" v-model="patient.procedures" class="input-text-color q-pl-md"/>
                </q-card-section>
            </q-card>
        </div>
    </q-page>
</template>
<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { Patient } from '../models/patient/patient'
@Component({
})
export default class TreatmentPage extends Vue {
    private patient : Patient = new Patient();
    public falseValue='N';
    public trueValue='Y';
}

</script>
