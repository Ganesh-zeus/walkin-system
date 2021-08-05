export class Description {
    constructor(
        public title:string,
        public description:string
    ){}
}

export class JobRole {
    constructor(
        public image_source:string,
        public selected:boolean,
        public job_role_title:string,
        public descriptions:Description[]
    ){}
}

export class TimeSlot {
    constructor(
        public start_time:string,
        public end_time:string
    ){}
}

export class Walkin {
    constructor(
        public id:string,
        public title:string,
        public date_time:string,
        public location:string,
        public job_roles:JobRole[],
        public opportunities:string[],
        public prerequisites:Description[],

        public time_slots:TimeSlot[],
        public preferred_job_roles:JobRole[],
    ){}
}