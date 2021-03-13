/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export class Patient {
    name:string; //Name
    age:number | undefined; //Age
    gender:string; //Gender
    onSet:Date | undefined; //OnSetDate
    haloNaevi:YES_NO; //Halo naevi 
    // haloStages:any;
    drugHistory:any; 
    bodySurface:YES_NO; // Body surface involved / sites
    bodySurfaceSites:any; // Body surface involved / sites checkboxs
    occupation:string; //occupation
    hobbies:string; //Hobbies
    habiets:string; //Habits
    familyHistory:any; //Family History
    otherFD:string; //Other Family Details
    hairEnter:string; 
    PHT:any; //Pharmacological
    stDetails:string; //systemic TextBox
    tpDetails:string; //Topical Textbox
    phtDetails:string; //phototherapy Details
    phTherapyTreatment:any; //phototherapy
    allergiesDetails:string; //allergies Details
    procedures:string; //Procedues
    heightInCms:number | undefined; //height
    skinType:string; //Skin Type
    autoimmuneD:any; //autoimmune diseases
    otherautoimmuneD:string; //if other autoimmune diseases
    contactants:any; //contactants
    habits:any; //habits
    weight:number | undefined; //Weight
    oAUD:string; 
    coMorbidities:any; //co-morbidities
    thyroid:any; //coMorbidities Thyroid
    // pcpDetails:string;
    enterVision:string; //Vision Text Box
    enterHearing:string; //Hearing Text Box
    symptionType:any; //Symptoms
    vitiligoQ1:YES_NO;  // quality of life Questions 
    vitiligoQ1Details:string; // quality of life Questions 
    vitiligoQ2:YES_NO; // quality of life Questions 
    vitiligoQ2Details:string; // quality of life Questions 
    vitiligoQ3:YES_NO; // quality of life Questions 
    vitiligoQ3Details:string; // quality of life Questions 
    vitiligoQ4:YES_NO; // quality of life Questions 
    vitiligoQ4Details:string; // quality of life Questions 
    vitiligoQ5:YES_NO; // quality of life Questions 
    vitiligoQ5Details:string; // quality of life Questions 
    vitiligoQ6:YES_NO; // quality of life Questions 
    vitiligoQ6Details:string; // quality of life Questions 
    vitiligoQ7:YES_NO; // quality of life Questions 
    vitiligoQ7Details:string; // quality of life Questions 
    vitiligoQ8:YES_NO; // quality of life Questions 
    vitiligoQ8Details:string; // quality of life Questions 
    vitiligoQ9:YES_NO; // quality of life Questions 
    vitiligoQ9Details:string; // quality of life Questions 
    vitiligoQ10:YES_NO; // quality of life Questions 
    vitiligoQ10Details:string; // quality of life Questions 
    vitiligoQ11:YES_NO; // quality of life Questions 
    vitiligoQ11Details:string; // quality of life Questions 
    vitiligoQ12:YES_NO; // quality of life Questions 
    vitiligoQ12Details:string; // quality of life Questions 
    vitiligoQ13:YES_NO; // quality of life Questions 
    vitiligoQ13Details:string; // quality of life Questions 
    vitiligoQ14:YES_NO; // quality of life Questions 
    vitiligoQ14Details:string; // quality of life Questions 
    vitiligoQ15:YES_NO; // quality of life Questions 
    vitiligoQ15Details:string; // quality of life Questions 
    vitiligoQ16:YES_NO; // quality of life Questions 
    vitiligoQ16Details:string; // quality of life Questions 
    vitiligoQ17:YES_NO; // quality of life Questions 
    vitiligoQ17Details:string; // quality of life Questions 
    vitiligoQ18:YES_NO; // quality of life Questions 
    vitiligoQ18Details:string; // quality of life Questions 
    vitiligoQ19:YES_NO; // quality of life Questions 
    vitiligoQ19Details:string; // quality of life Questions 
    vitiligoQ20:YES_NO; // quality of life Questions 
    vitiligoQ20Details:string; // quality of life Questions 
    vitiligoQ21:YES_NO; // quality of life Questions 
    vitiligoQ21Details:string; // quality of life Questions 
    vitiligoQ22:YES_NO; // quality of life Questions  
    vitiligoQ22Details:string; // quality of life Questions 
    vitiligoQ23:YES_NO; // quality of life Questions 
    vitiligoQ23Details:string; // quality of life Questions 
    vitiligoQ24:YES_NO; // quality of life Questions 
    vitiligoQ24Details:string; // quality of life Questions 
    vitiligoQ25:YES_NO; // quality of life Questions 
    vitiligoQ25Details:string; // quality of life Questions 
    // paDetails:string; 
    otherHabits:string; //Other Habits
    previousTreatment:YES_NO; //Prebious Treatment
    bloodInvestigation:YES_NO; //Blood investigation Reports
    skinInvestigationReports:YES_NO; //Skin Biopsy investigation Reports
    skinInvestigationReportsType:any; //Skin Biopsy investigation Reports Type
    investigationOther:YES_NO; //Investigation Other
    investigationOtherOptions:any; //Investigation Other Details
    titleInvestigation:any; //Investigation Title

    constructor (params:Patient = {} as Patient) {
      const {
        name = '',
        gender = 'M',
        haloNaevi = 'Y',
        bodySurface = 'N',
        previousTreatment = 'N',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        bodySurfaceSites = [],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        drugHistory = ['MAS'],
        // haloStages=['LL'],
        occupation = '',
        PHT = ['ST'],
        autoimmuneD = [],
        skinType = '',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        phTherapyTreatment = [],
        hobbies = '',
        habiets = '',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        familyHistory = ['DM'],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        symptionType = ['pain'],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        contactants = [],
        coMorbidities=[],
        thyroid=[],
        otherFD = '',
        stDetails = '',
        tpDetails = '',
        phtDetails = '',
        procedures = '',
        enterHearing = '',
        vitiligoQ1Details = '',
        vitiligoQ1 = 'Y',
        vitiligoQ2Details = '',
        vitiligoQ2 = 'Y',
        vitiligoQ3 = 'Y',
        vitiligoQ3Details = '',
        vitiligoQ4 = 'Y',
        vitiligoQ4Details = '',
        vitiligoQ5 = 'Y',
        vitiligoQ5Details = '',
        vitiligoQ6 = 'Y',
        vitiligoQ6Details = '',
        vitiligoQ7 = 'Y',
        vitiligoQ7Details = '',
        vitiligoQ8 = 'Y',
        vitiligoQ8Details = '',
        vitiligoQ9 = 'Y',
        vitiligoQ9Details = '',
        vitiligoQ10 = 'Y',
        vitiligoQ10Details = '',
        vitiligoQ11 = 'Y',
        vitiligoQ11Details = '',
        vitiligoQ12 = 'Y',
        vitiligoQ12Details = '',
        vitiligoQ13 = 'Y',
        vitiligoQ13Details = '',
        vitiligoQ14 = 'Y',
        vitiligoQ14Details = '',
        vitiligoQ15 = 'Y',
        vitiligoQ15Details = '',
        vitiligoQ16 = 'Y',
        vitiligoQ16Details = '',
        vitiligoQ17 = 'Y',
        vitiligoQ17Details = '',
        vitiligoQ18 = 'Y',
        vitiligoQ18Details = '',
        vitiligoQ19 = 'Y',
        vitiligoQ19Details = '',
        vitiligoQ20 = 'Y',
        vitiligoQ20Details = '',
        vitiligoQ21 = 'Y',
        vitiligoQ21Details = '',
        vitiligoQ22 = 'Y',
        vitiligoQ22Details = '',
        vitiligoQ23 = 'Y',
        vitiligoQ23Details = '',
        vitiligoQ24 = 'Y',
        vitiligoQ24Details = '',
        vitiligoQ25 = 'Y',
        vitiligoQ25Details = '',
        oAUD = '',
        enterVision = '',
        allergiesDetails = '',
        // pcpDetails = '',
        // paDetails = '',
        habits = [],
        otherHabits = '',
        hairEnter = '',
        otherautoimmuneD='',
        bloodInvestigation='Y',
        skinInvestigationReports='Y',
        skinInvestigationReportsType=[],
        investigationOther='Y',
        investigationOtherOptions=[],
        titleInvestigation=[{investigationTitle:''}],
      } = params
      this.name = name
      this.gender = gender
      this.haloNaevi = haloNaevi
      this.bodySurface = bodySurface
      this.bodySurfaceSites = bodySurfaceSites
      // this.haloStages=haloStages
      this.drugHistory = drugHistory
      this.occupation = occupation
      this.hobbies = hobbies
      this.habiets = habiets
      this.familyHistory = familyHistory
      this.symptionType = symptionType
      this.otherFD = otherFD
      this.PHT = PHT
      this.stDetails = stDetails
      this.tpDetails = tpDetails
      this.phtDetails = phtDetails
      this.procedures = procedures
      this.vitiligoQ1 = vitiligoQ1
      this.vitiligoQ1Details = vitiligoQ1Details
      this.vitiligoQ2 = vitiligoQ2
      this.vitiligoQ2Details = vitiligoQ2Details
      this.vitiligoQ3 = vitiligoQ3
      this.vitiligoQ3Details = vitiligoQ3Details
      this.vitiligoQ4 = vitiligoQ4
      this.vitiligoQ4Details = vitiligoQ4Details
      this.vitiligoQ5 = vitiligoQ5
      this.vitiligoQ5Details = vitiligoQ5Details
      this.vitiligoQ6 = vitiligoQ6
      this.vitiligoQ6Details = vitiligoQ6Details
      this.vitiligoQ7 = vitiligoQ7
      this.vitiligoQ7Details = vitiligoQ7Details
      this.vitiligoQ8 = vitiligoQ8
      this.vitiligoQ8Details = vitiligoQ8Details
      this.vitiligoQ9 = vitiligoQ9
      this.vitiligoQ9Details = vitiligoQ9Details
      this.vitiligoQ10 = vitiligoQ10
      this.vitiligoQ10Details = vitiligoQ10Details
      this.vitiligoQ11 = vitiligoQ11
      this.vitiligoQ11Details = vitiligoQ11Details
      this.vitiligoQ12 = vitiligoQ12
      this.vitiligoQ12Details = vitiligoQ12Details
      this.vitiligoQ13 = vitiligoQ13
      this.vitiligoQ13Details = vitiligoQ13Details
      this.vitiligoQ14 = vitiligoQ14
      this.vitiligoQ14Details = vitiligoQ14Details
      this.vitiligoQ15 = vitiligoQ15
      this.vitiligoQ15Details = vitiligoQ15Details
      this.vitiligoQ16 = vitiligoQ16
      this.vitiligoQ16Details = vitiligoQ16Details
      this.vitiligoQ17 = vitiligoQ17
      this.vitiligoQ17Details = vitiligoQ17Details
      this.vitiligoQ18 = vitiligoQ18
      this.vitiligoQ18Details = vitiligoQ18Details
      this.vitiligoQ19 = vitiligoQ19
      this.vitiligoQ19Details = vitiligoQ19Details
      this.vitiligoQ20 = vitiligoQ20
      this.vitiligoQ20Details = vitiligoQ20Details
      this.vitiligoQ21 = vitiligoQ21
      this.vitiligoQ21Details = vitiligoQ21Details
      this.vitiligoQ22 = vitiligoQ22
      this.vitiligoQ22Details = vitiligoQ22Details
      this.vitiligoQ23 = vitiligoQ23
      this.vitiligoQ23Details = vitiligoQ23Details
      this.vitiligoQ24 = vitiligoQ24
      this.vitiligoQ24Details = vitiligoQ24Details
      this.vitiligoQ25 = vitiligoQ25
      this.vitiligoQ25Details = vitiligoQ25Details
      this.oAUD = oAUD
      this.enterVision = enterVision
      this.enterHearing = enterHearing
      this.allergiesDetails = allergiesDetails
      this.contactants = contactants
      // this.pcpDetails = pcpDetails
      // this.paDetails = paDetails
      this.habits = habits
      this.otherHabits = otherHabits
      this.phTherapyTreatment = phTherapyTreatment
      this.skinType = skinType
      this.hairEnter = hairEnter
      this.autoimmuneD=autoimmuneD
      this.otherautoimmuneD=otherautoimmuneD
      this.coMorbidities=coMorbidities
      this.thyroid=thyroid
      this.previousTreatment=previousTreatment
      this.bloodInvestigation=bloodInvestigation
      this.skinInvestigationReports=skinInvestigationReports
      this.skinInvestigationReportsType=skinInvestigationReportsType
      this.investigationOther=investigationOther
      this.investigationOtherOptions=investigationOtherOptions
      this.titleInvestigation=titleInvestigation
    }
}
export type YES_NO = 'Y' | 'N' | 'null' ;
export enum LocationType{
    Face='Face', // Face
    Neck= 'Neck', // Neck
    Trunk='Trunk', // trunk
    upperLimbs='Upper limbs', // upper limbs
    lowerLimbs='Lower limbs', // lower limbs
    hands='Hands', // hands
    feet='Feet', // feet
    scalp='Scalp', // Scalp
    OTH='Others' // OTH
}
export enum EvolutionType{
    slow='Slow', // Slow
    rapid='Rapid', // Rapid
    static='Static', // Static
    fluctuating='Fluctuating' // Fluctuating
}
/* export enum SymptomsType{
    SkinSurfaces='Nearly all skin surfaces', //Nearly all skin surfaces
    BodyParts='Many parts of your body', //Many parts of your body
    OneSidePart='Only one side or part of your body', //Only one side or part of your body
    BodyAreas='One or only a few areas of your body', //One or only a few areas of your body
    Face='The Face', //The Face
    Hands='Hands' //Hands

} */
// co-morbidities Thyroid
export enum Thyroid{
    HYPO='Hypothyroidism', // Hypothyroidism
    HYPE='Hyperthyroidism', // Hyperthyroidism

}
export enum Diet{
    AL='Alcohol', // alcohol
    BL='Blueberries', // blueberries
    CT='Citrus', // citrus
    CF='Coffee', // coffee
    CU='Curds', // curds
    FI='Fish', // fish
    FJ='Fruit Juice', // fruit juice
    GB='Gooseberries', // gooseberries
    GP='Grapes', // grapes
    PI='Pickles', // pickles
    PO='Pomegranate', // pomegranate
    PE='Pears', // pears
    RM='Red Meats', // red meats
    TM='Tomatoes', // tomatoes
    WP='Wheat Products' // wheat products
}
export enum SkinType{
    NS='Normal Skin', // Normal Skin
    SS='Sensitive Skin', // Sensitive Skin
    DS='Dry Skin', // Dry Skin
    OS='Oily Skin', // Oily Skin
    CS='Combination Skin', // Combination Skin
    SCS='Scaly Skin', // Scaly Skin
    RS='Red Spots', // Red Spots
    SM='Skin Moles' // Skin Moles
}
export enum HairType{
    ST='Straight', // straight
    WV='Wavy', // wavy
    CU='Curly', // curly
    CO='Coily' // coily
}
export enum VitiligoType{
   SGM='Segmental', // segmental
   ACR='Acrofacial', // acrofacial
   MIX='Mixed', // mixed
   TRI='Trichrome' // trichrome
}
export enum DiseaseSigns{
    CL='confetti like', // confetti like
    LE='leukotrichia', // leukotrichia
    KO='koebners', // koebners
    VDA='VDA' // VDA
} 
export enum ScoringMethods{
    BSA='BSA', // BSA
    VASI='VASI', // VASI
    VES='VES' // VES
}
