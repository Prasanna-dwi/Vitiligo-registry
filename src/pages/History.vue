<template>
    <q-page class="HistoryForm">
        <div class="row bg-purple q-pa-lg q-mb-lg">
            <div class="col-1">
            <q-btn color="white" label="" flat to="/investigations" class="arrow-buttons"> <q-icon name="keyboard_arrow_left" class="text-h6"/></q-btn>
            </div>
            <div class="col">
                <h6 class="text-h6 no-margin text-center text-white">History</h6>
            </div>
            <div class="col-1">
            <q-btn color="white" label="" flat to="/treatment" class="arrow-buttons"> <q-icon name="keyboard_arrow_right" class="text-h6"/></q-btn>
            </div>
        </div>
        <div class="q-pl-md q-pr-md">
            <q-card class="my-card no-shadow page-section-block">
                <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                    <q-input borderless :label="$t('patient.placeholder.name')" type="text" v-model="patient.name" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                    <q-input borderless :label="$t('patient.placeholder.age')" type="number" v-model="patient.age" class="input-text-color text-purple q-pl-md q-pr-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md no-checked-color">
                    <q-radio  :label="$t('patient.gender.male')" val="M" color="purple" v-model="patient.gender" class="input-text-color q-pr-xl" />
                    <q-radio :label="$t('patient.gender.female')" val="F" color="purple" v-model="patient.gender" class="input-text-color q-pr-xl q-pl-md" />
                </q-card-section>
            </q-card>
            <q-card class="my-card no-shadow page-section-block q-mt-lg q-mb-lg">
                <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                    <q-input borderless :label="$t('patient.placeholder.onset')"  v-model="patient.onSet" mask="date" class="input-text-color q-pl-md q-pr-md">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer input-text-color">
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
                <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                    <q-select
                        v-model="locationFirstLension"
                        :options="locationFirstLensionOptions"
                        :label="$t('patient.locationTension')"
                        type="checkbox"
                        multiple
                        emit-value
                        borderless
                        map-options
                        class="input-text-color q-pl-md q-pr-md"
                    >
                    <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                        <q-item
                            v-bind="itemProps"
                            v-on="itemEvents"
                        >
                            <q-item-section side>
                                <q-toggle
                                    :value="selected"
                                    @input="toggleOption(opt)"
                                />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label v-html="opt.label" ></q-item-label>
                            </q-item-section>
                        </q-item>
                        </template>
                    </q-select>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                    <q-select borderless v-model="evolution" :options="evolutionOptions" :label="$t('patient.evolution')" class="input-text-color q-pl-md q-pr-md"/>
                </q-card-section>
                <!-- <q-card-section class="q-pt-sm q-pb-sm q-pl-xs q-pr-xs">
                    <q-select
                        v-model="symptoms"
                        :options="symptomsOptions"
                        :label="$t('patient.symptoms')"
                        type="checkbox"
                        multiple
                        emit-value
                        borderless
                        map-options
                        class="input-text-color q-pl-md q-pr-md"
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
                 </q-card-section> -->
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.symptoms')}} </label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.symptionType" name="Redness" val="Redness" color="purple" :label="$t('patient.redness')" class="text-caption q-pt-md q-pb-md q-pl-xs q-pr-xs input-text-color"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.symptionType" name="pain" val="pain" color="purple" :label="$t('patient.pain')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.symptionType" name="itching" val="itching" color="purple" :label="$t('patient.itching')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                </q-card-section>
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1">
                    <div class="row">
                        <div class="col-7 self-center">
                            <label class="label-text-color">{{$t('patient.haloNavei')}} </label>
                        </div>
                        <div class="col-5 text-right">
                            <q-toggle
                                checked-icon="check"
                                color="purple"
                                class="text-right"
                                :false-value="falseValue"
                                :true-value="trueValue"
                                unchecked-icon="clear"
                                v-model="patient.haloNaevi"
                            />
                        </div>
                    </div>
                </q-card-section>
            <!--- <div class="stage-Section" v-if="patient.haloNaevi==='Y'">
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-checkbox v-model="patient.haloStages" name="moleCircularRing" val="moleCircularRing" color="purple" :label="$t('patient.moleCircularRing')" class="text-caption input-text-color"/>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-checkbox v-model="patient.haloStages" name="moleFadePinker" val="moleFadePinker" color="purple" :label="$t('patient.moleFadePinker')" class="text-caption input-text-color" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-checkbox v-model="patient.haloStages" val="ovalAreas" color="purple" :label="$t('patient.ovalAreas')" class="text-caption input-text-color" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-checkbox v-model="patient.haloStages" val="whitePatch" color="purple" :label="$t('patient.whitePatch')" class="text-caption input-text-color" />
                    </q-card-section>
                </div> -->
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row">
                        <div class="col-7 self-center">
                            <label class="label-text-color">{{$t('patient.bodySurface')}}</label>
                        </div>
                        <div class="col-5 text-right">
                            <q-toggle
                                checked-icon="check"
                                color="purple"
                                class="text-right"
                                v-model="patient.bodySurface"
                                :false-value="falseValue"
                                :true-value="trueValue"
                                unchecked-icon="clear"

                            />
                        </div>
                    </div>
                </q-card-section>
                <div class="stage-Section" v-if="patient.bodySurface==='Y'">
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSF" color="purple" :label="$t('patient.face')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSN" color="purple" :label="$t('patient.neck')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BST" color="purple" :label="$t('patient.trunk')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSUL" color="purple" :label="$t('patient.upperLimbs')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSLL" color="purple" :label="$t('patient.bsLL')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSH" color="purple" :label="$t('patient.hands')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSFE" color="purple" :label="$t('patient.feet')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.bodySurfaceSites" val="BSS" color="purple" :label="$t('patient.scalp')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs" style="text-align:center" v-if="patient.gender==='M'">
                        <q-img src="~assets/Images/human body-outline.svg" style="width:30%" />
                    </q-card-section>
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs" style="text-align:center" v-else-if="patient.gender==='F'">
                        <q-img src="~assets/Images/female-Human-body-outline.svg" style="width:30%" />
                    </q-card-section>

                </div>
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.CoMorbidities')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <div class="stage-Section">
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.coMorbidities" val="DM" color="purple" :label="$t('patient.DM')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.coMorbidities" val="TYR" color="purple" :label="$t('patient.thyroid')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <div v-for="thyroid in patient.coMorbidities" :key="thyroid.id">
                        <div v-if="thyroid==='TYR'">
                            <q-separator class="seperator" />
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.thyroid" val="HYPO" color="purple" :label="$t('patient.HYPO')" class="text-caption input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs"/>
                            </q-card-section>
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.thyroid" val="HYPE" color="purple" :label="$t('patient.HYPE')" class="text-caption input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs"/>
                            </q-card-section>
                        </div>
                    </div>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.coMorbidities" val="AUD" color="purple" :label="$t('patient.autoinmuneDiseases')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <div v-for="coMorbidities in patient.coMorbidities" :key="coMorbidities.id">
                        <div v-if="coMorbidities==='AUD'">
                           <q-separator class="seperator" />
                           <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.autoimmuneD" val="DM" color="purple" :label="$t('patient.dM')" class="input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.autoimmuneD" val="TY" color="purple" :label="$t('patient.thyroiditis')" class="input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.autoimmuneD" val="PEA" color="purple" :label="$t('patient.pernicios')" class="input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs" />
                            </q-card-section>
                           <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.autoimmuneD" val="Psoriasis" color="purple" :label="$t('patient.psoriasis')" class="input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.autoimmuneD" val="ADDS" color="purple" :label="$t('patient.addisons')" class="input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <q-card-section class="no-padding">
                                <q-checkbox v-model="patient.autoimmuneD" val="Oth" color="purple" :label="$t('patient.aother')" class="input-text-color q-pt-sm q-pb-sm q-pl-xs q-pr-xs" />
                            </q-card-section>
                            <div v-for="autoimmuneD in patient.autoimmuneD" :key="autoimmuneD.id">
                                <div v-if="autoimmuneD==='Oth'">
                                    <q-separator class="seperator" />
                                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                                        <q-input rows="2" borderless :label="$t('patient.placeholder.otherDetails')" type="textarea" v-model="patient.otherautoimmuneD" class="input-text-color q-pl-md"/>
                                    </q-card-section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.coMorbidities" val="VIS" color="purple" :label="$t('patient.vision')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <div v-for="vision in patient.coMorbidities" :key="vision.id">
                        <div v-if="vision==='VIS'">
                            <q-separator class="seperator" />
                            <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                                <q-input borderless rows="2" :label="$t('patient.placeholder.enterVision')" type="textarea" v-model="patient.enterVision" class="input-text-color q-pl-md"/>
                            </q-card-section>
                        </div>
                    </div>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.coMorbidities" val="HEAR" color="purple" :label="$t('patient.hearing')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <div v-for="hearing in patient.coMorbidities" :key="hearing.id">
                        <div v-if="hearing==='HEAR'">
                            <q-separator class="seperator" />
                            <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                                <q-input borderless rows="2" :label="$t('patient.placeholder.enterhearing')" type="textarea" v-model="patient.enterHearing" class="input-text-color q-pl-md"/>
                            </q-card-section>
                        </div>
                    </div>
                    <q-separator class="seperator" />
                    <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.coMorbidities" val="ALLERGIES" color="purple" :label="$t('patient.allergies')" class="text-caption input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs"/>
                    </q-card-section>
                    <div v-for="allergies in patient.coMorbidities" :key="allergies.id">
                        <div v-if="allergies==='ALLERGIES'">
                            <q-separator class="seperator" />
                            <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                                <q-input rows="2" borderless :label="$t('patient.placeholder.otherDetails')" type="textarea" v-model="patient.allergiesDetails" class="input-text-color q-pl-md"/>
                            </q-card-section>
                        </div>
                    </div>
                    <!-- <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-select borderless :label="$t('patient.DM')" class="text-caption input-text-color q-pl-md q-pr-md"/>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    </q-card-section> -->
                </div>
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.personalHistory')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-input rows="2" borderless :label="$t('patient.placeholder.occupation')" type="textarea" v-model="patient.occupation" class="input-text-color q-pl-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-input borderless  rows="2" :label="$t('patient.placeholder.hobbies')" type="textarea" v-model="patient.hobbies" class="input-text-color q-pl-md"/>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-select
                        v-model="diet"
                        :options="dietOptions"
                        :label="$t('patient.diet')"
                        type="checkbox"
                        multiple
                        emit-value
                        map-options
                        borderless
                        class="input-text-color q-pl-md q-pr-md"
                    >
                        <template v-slot:option="{ itemProps, itemEvents, opt, selected, toggleOption }">
                            <q-item
                                v-bind="itemProps"
                                v-on="itemEvents"
                            >
                                <q-item-section side>
                                <q-toggle
                                    :value="selected"
                                    @input="toggleOption(opt)"
                                />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label v-html="opt.label" ></q-item-label>
                            </q-item-section>
                            </q-item>
                        </template>
                    </q-select>

                </q-card-section>
                <!-- <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-input borderless rows="2" :label="$t('patient.placeholder.habits')" type="textarea" v-model="patient.habiets" class="input-text-color q-pl-md"/>
                </q-card-section> -->
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.fmHistory')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.familyHistory" val="DM" color="purple" :label="$t('patient.fDM')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.familyHistory" val="TY" color="purple" :label="$t('patient.thyroid')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.familyHistory" val="VI" color="purple" :label="$t('patient.vitiligo')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.familyHistory" val="GY" color="purple" :label="$t('patient.fGY')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.familyHistory" val="Oth" color="purple" :label="$t('patient.other')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <div v-for="familyhistory in patient.familyHistory" :key="familyhistory.id">
                   <q-card v-if="familyhistory==='Oth'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input rows="2" borderless :label="$t('patient.placeholder.familyDetails')" type="textarea" v-model="patient.otherFD" class="input-text-color q-pl-md"/>
                        </q-card-section>
                   </q-card>
                </div>
            </q-card>
            <!-- <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.otherDiseases')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
            </q-card>
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.vision')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless rows="2" :label="$t('patient.placeholder.enterVision')" type="textarea" v-model="patient.enterVision" class="input-text-color q-pl-md"/>
                </q-card-section>
            </q-card> -->
            <!-- <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.hearing')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless rows="2" :label="$t('patient.placeholder.enterhearing')" type="textarea" v-model="patient.enterHearing" class="input-text-color q-pl-md"/>
                </q-card-section>
            </q-card> -->
            <!-- <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.placeholder.allergies')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <q-input borderless rows="2" :label="$t('patient.placeholder.enterAllergies')" type="textarea" v-model="patient.allergiesDetails" class="input-text-color q-pl-md"/>
                </q-card-section>
            </q-card> -->
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.contactants')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.contactants" val="Rubber" color="purple" :label="$t('patient.rubber')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.contactants" val="Dyes" color="purple" :label="$t('patient.dyes')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.contactants" val="Lipstick" color="purple" :label="$t('patient.lipstick')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.contactants" val="Bindi" color="purple" :label="$t('patient.bindi')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.contactants" val="Leather" color="purple" :label="$t('patient.leather')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                    <q-checkbox v-model="patient.contactants" val="Plastic" color="purple" :label="$t('patient.plastic')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.contactants" val="Medicaments" color="purple" :label="$t('patient.medicaments')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="no-padding">
                        <q-checkbox v-model="patient.contactants" val="Jewellery" color="purple" :label="$t('patient.jewellery')" class="input-text-color q-pt-md q-pb-md q-pl-xs q-pr-xs" />
                </q-card-section>
            </q-card>
            <!-- <div v-for="contactants in patient.contactants" :key="contactants.id">
                <q-card class="my-card no-shadow q-mt-lg q-mb-lg" v-if="contactants==='PCP'">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row q-pt-xs q-pb-xs">
                            <div class="col-12 self-center">
                                <label class="label-text-color">{{$t('patient.pcp')}}</label>
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-input borderless rows="2" :label="$t('patient.placeholder.pcpDetails')" type="textarea" v-model="patient.pcpDetails" class="input-text-color q-pl-md"/>
                    </q-card-section>
                </q-card>
                <q-card class="my-card no-shadow q-mt-lg q-mb-lg" v-else-if="contactants==='PA'">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row q-pt-xs q-pb-xs">
                            <div class="col-12 self-center">
                                <label class="label-text-color">{{$t('patient.pa')}}</label>
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-input borderless rows="2" :label="$t('patient.placeholder.paDetails')" type="textarea" v-model="patient.pcpDetails" class="input-text-color q-pl-md"/>
                    </q-card-section>
                </q-card>
            </div> -->
            <q-card class="my-card no-shadow q-mt-lg q-mb-lg">
                <q-card-section class="bg-pink1 text-white">
                    <div class="row q-pt-xs q-pb-xs">
                        <div class="col-12 self-center">
                            <label class="label-text-color">{{$t('patient.placeholder.habits')}}</label>
                        </div>
                    </div>
                </q-card-section>
                <q-separator class="seperator" />
                <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                    <div class="q-gutter-xs">
                        <q-checkbox v-model="patient.habits" val="Alcohol" color="purple" :label="$t('patient.alcohol')" class="input-text-color" />
                        <q-checkbox v-model="patient.habits" val="Smoking" color="purple" :label="$t('patient.smoking')" class="input-text-color" />
                        <q-checkbox v-model="patient.habits" val="Tobacco" color="purple" :label="$t('patient.tobacco')" class="input-text-color" />
                        <q-checkbox v-model="patient.habits" val="Oth" color="purple" :label="$t('patient.others')" class="input-text-color" />
                    </div>
                </q-card-section>
            </q-card>
            <div v-for="habits in patient.habits" :key="habits.id">
                <q-card class="my-card no-shadow q-mt-lg q-mb-lg" v-if="habits==='Oth'">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row q-pt-xs q-pb-xs">
                            <div class="col-12 self-center">
                                <label class="label-text-color">{{$t('patient.othHabits')}}</label>
                            </div>
                        </div>
                    </q-card-section>
                    <q-separator class="seperator" />
                    <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                        <q-input borderless rows="2" :label="$t('patient.placeholder.otherHabits')" type="textarea" v-model="patient.pcpDetails" class="input-text-color q-pl-md"/>
                    </q-card-section>
                </q-card>
            </div>
        </div>

    </q-page>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Vue, Component } from 'vue-property-decorator'
import { Patient, LocationType, EvolutionType, Thyroid, Diet } from '../models/patient/patient'
@Component({
})
export default class HistoryPage extends Vue {
    public falseValue='N';
    public trueValue='Y';
    public patient:Patient = new Patient();
    public locationFirstLension : any=[];
    public locationFirstLensionOptions:any=[];
    public evolution:any=[];
    public evolutionOptions:any=[];
    public thyroid:any=[];
    public thyroidOptions:any=[];
    public diet:any=[];
    public dietOptions:any=[];
    // eslint-disable-next-line
    public created () {
      Object.keys(LocationType).forEach((key, index) => {
        // eslint-disable-next-line
        this.locationFirstLensionOptions.push({
          code: key,
          label: this.$t('patient.LocationType.' + key)
        })
      })
      Object.keys(EvolutionType).forEach((key, index) => {
        // eslint-disable-next-line
        this.evolutionOptions.push({
          code: key,
          label: this.$t('patient.EvolutionType.' + key)
        })
      })
      Object.keys(Thyroid).forEach((key, index) => {
        // eslint-disable-next-line
        this.thyroidOptions.push({
          code: key,
          label: this.$t('patient.' + key)
        })
      })
      Object.keys(Diet).forEach((key, index) => {
        // eslint-disable-next-line
        this.dietOptions.push({
          code: key,
          label: this.$t('patient.Diet.' + key)
        })
      })
    }
}

</script>
