export class Patient {
    name:string;
    age:number;
    gender:string;
    onSet:Date;
    constructor(params:Patient = {} as Patient) {
        const { 
            
            name='',
            gender="M",
            age=0

        } = params;
        this.name=name
        this.gender=gender
        this.age=age
    }
}
export enum LocationType{
    Face='Face', 
    Neck= 'Neck', 
    Forearms='Forearms', 
    Feet='Feet', 
    DorsalHand='Dorsal Hand', 
    Fingers='Fingers', 
    scalp='scalp',
    OTH='OTH'
}
