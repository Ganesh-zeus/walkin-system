export class JobRole {
    constructor(public selected:boolean,public role:string){}
}

export class Personal {
    constructor(
        public first_name:string,
        public last_name:string,
        public user_email:string,
        public phone_number:string[],
        public portfolio_url:string,
        public preferred_job_roles:JobRole[],
        public referrer_name:string,
        public job_alerts:boolean
    ){}
}