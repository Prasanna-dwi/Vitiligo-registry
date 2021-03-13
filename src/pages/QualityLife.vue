<template>
    <q-page class="HistoryForm">
        <div class="row bg-purple q-pa-lg q-mb-lg">
            <div class="col-1">
            <q-btn color="white" label="" flat to="/examination" class="no-padding arrow-buttons"> <q-icon name="keyboard_arrow_left" class="text-h6"/></q-btn>
            </div>
            <div class="col-10">
                <h6 class="text-h6 no-margin text-center text-white">{{$t('patient.qqlQuestions')}}</h6>
            </div>
            <div class="col-1">
                <q-btn color="white" label="" flat to="/investigations" class="arrow-buttons"> <q-icon name="keyboard_arrow_right" class="text-h6"/></q-btn>
            </div>
        </div>
        <div class="q-pl-md q-pr-md">
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q1)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q1')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ1"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ1==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ1Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q2)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q2')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ2"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ2==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs" >
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ2Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
               </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q3)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q3')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ3"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ3==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ3Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q4)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q4')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ4"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ4==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ4Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q5)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q5')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ5"
                    />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ5==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ5Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q6)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q6')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ6"
                            />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ6==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ6Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q7)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q7')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ7"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ7==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ7Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q8)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q8')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ8"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ8==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ8Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q9)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q9')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ9"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ9==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ9Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q10)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q10')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ10"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ10==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ10Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q11)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q11')}} </label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ11"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ11==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ11Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q12)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q12')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ12"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ12==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ12Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q13)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q13')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ13"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ13==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ13Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q14)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q14')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ14"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ14==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ14Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q15)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q15')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ15"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ15==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ15Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q16)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q16')}} </label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ16"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ16==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ16Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q17)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q17')}} </label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ17"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ17==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ17Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q18)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q18')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ18"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ18==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ18Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q19)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q19')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ19"
                            />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ19==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ19Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q20)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q20')}} </label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ20"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ20==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ20Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q21)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q21')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ21"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ21==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ21Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q22)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q22')}} </label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ22"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ22==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ22Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q23)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q23')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ23"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ23==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ23Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                 </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q24)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q24')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ24"
                                />
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ24==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ24Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
                    </div>
                </q-card>
            </div>
            <div class="question-section q-mt-lg q-mb-lg">
                <span class="text-grey-13 text-body">Q25)</span>
                <q-card class="my-card no-shadow q-mt-xs">
                    <q-card-section class="bg-pink1 text-white">
                        <div class="row">
                            <div class="col-9 self-center">
                                <label class="label-text-color">{{$t('patient.questions.Q25')}}</label>
                            </div>
                            <div class="col-3 text-right">
                                <q-toggle
                                    checked-icon="check"
                                    color="purple"
                                    class="text-right"
                                    :false-value="falseValue"
                                    :true-value="trueValue"
                                    unchecked-icon="clear"
                                    v-model="patient.vitiligoQ25"/>
                            </div>
                        </div>
                    </q-card-section>
                    <div v-if="patient.vitiligoQ25==='Y'">
                        <q-separator class="seperator" />
                        <q-card-section class="q-pt-md q-pb-md q-pl-xs q-pr-xs">
                            <q-input borderless rows="2" :label="$t('patient.placeholder.enterDetails')" type="textarea" v-model="patient.vitiligoQ25Details" class="input-text-color q-pl-md"/>
                        </q-card-section>
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
export default class QualityLifePage extends Vue {
    private patient:Patient = new Patient();
    public falseValue = 'N';
    public trueValue = 'Y';
}

</script>
