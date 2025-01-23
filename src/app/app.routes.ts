import { Routes } from '@angular/router';
import { CreateAccountComponent } from './client/auth/create-account/create-account.component';
import { ForgotYourPasswordComponent } from './client/auth/forgot-your-password/forgot-your-password.component';
import { ForgotYourNewPasswordComponent } from './client/auth/forgot-your-new-password/forgot-your-new-password.component';
import { SignInComponent } from './client/auth/sign-in/sign-in.component';
import { DashboardComponent } from './client/client-dashboard/dashboard/dashboard.component';
import { MaindashboardComponent } from './client/client-dashboard/maindashboard/maindashboard.component';
import { JobOpeningsComponent } from './client/client-dashboard/job-openings/job-openings.component';
import { DetailJobOverviewComponent } from './client/client-dashboard/detail-job-overview/detail-job-overview.component';
import { JobApplicationComponent } from './client/client-dashboard/candidates/job-application/job-application.component';
import { ResumeComponent } from './client/client-dashboard/candidates/resume/resume.component';
import { FormSubmissionComponent } from './client/client-dashboard/candidates/form-submission/form-submission.component';
import { InterviewComponent } from './client/client-dashboard/candidates/interview/interview.component';
import { AddJobComponent } from './client/client-dashboard/add-job/add-job.component';
import { ScoreCardComponent } from './client/client-dashboard/addNewJob/score-card/score-card.component';
import { JobDetailComponent } from './client/client-dashboard/addNewJob/job-detail/job-detail.component';
import { HiringPipelineComponent } from './client/client-dashboard/addNewJob/hiring-pipeline/hiring-pipeline.component';
import { RequestsComponent } from './client/client-dashboard/requests/requests.component';
import { PipelineComponent } from './client/client-dashboard/pipeline/pipeline/pipeline.component';
import { DetailPipelineComponent } from './client/client-dashboard/pipeline/detail-pipeline/detail-pipeline.component';
import { InterviewsComponent } from './client/client-dashboard/interviews/interviews.component';
import { CandidateComponent } from './client/client-dashboard/candidate/candidate.component';
import { ContractsComponent } from './client/client-dashboard/contracts/contracts.component';
import { DetailContractsComponent } from './client/client-dashboard/detail-contracts/detail-contracts.component';

export const routes: Routes = [
    {
        path: '',component:CreateAccountComponent
    },
    {
        path: 'forgot-password',component:ForgotYourPasswordComponent
    },
    {
        path:'forgot-new-password',component:ForgotYourNewPasswordComponent
    },
    {
        path:'sign-in',component:SignInComponent
    },
    {
        path:'dashboard',component:DashboardComponent,
        children:[
            {
                path: '',component:MaindashboardComponent
            },
            {
                path: 'job-openings',component:JobOpeningsComponent
            },
            {
                path: 'detail-Job-overview',component:DetailJobOverviewComponent,
                children:[
                    {
                        path:'',component:JobApplicationComponent
                    },
                    {
                        path:'resume',component:ResumeComponent
                    },
                    {
                        path:'form-submission',component:FormSubmissionComponent
                    },
                    {
                        path:'interview',component:InterviewComponent
                    }

                ]
            },
            {
                path:'add-job',component:AddJobComponent,
                children:[
                    {
                        path:'',component:JobDetailComponent
                    },
                    {
                        path:'score',component:ScoreCardComponent
                    },
                    {
                        path:'hiring-pipeline',component:HiringPipelineComponent
                    },
                  

                ]
            },
            {
                path:'request',component:RequestsComponent
            },
            {
                path:'pipeline',component:PipelineComponent,
            },
            {
                path:'detail-pipeline',component:DetailPipelineComponent,
                children:[
                    {
                        path:'',component:JobApplicationComponent
                    },
                    {
                        path:'resume',component:ResumeComponent
                    },
                    {
                        path:'form-submission',component:FormSubmissionComponent
                    },
                    {
                        path:'interview',component:InterviewComponent
                    }


                ]
            },
            {
                path:'interview', component:InterviewsComponent
            },
            {
                path:'candidate', component:CandidateComponent
            },
            {
                path:'contracts', component:ContractsComponent
            },
            {
                path:'detail-contracts', component:DetailContractsComponent,
                children:[
                    {
                        path:'',component:JobApplicationComponent
                    },
                    {
                        path:'resume',component:ResumeComponent
                    },
                    {
                        path:'form-submission',component:FormSubmissionComponent
                    },
                    {
                        path:'interview',component:InterviewComponent
                    }


                ]
            }

        ]
    },
    
];
