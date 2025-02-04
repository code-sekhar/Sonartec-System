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
import { ProfileComponent } from './client/client-dashboard/profile/profile.component';
import { CreateaccountComponent } from './recruiter/auth/createaccount/createaccount.component';
import { ForgotNewPasswordComponent } from './recruiter/auth/forgot-new-password/forgot-new-password.component';
import { RecruiterforgotYourPasswordComponent } from './recruiter/auth/recruiterforgot-your-password/recruiterforgot-your-password.component';
import { RecruiterSignInComponent } from './recruiter/auth/recruiter-sign-in/recruiter-sign-in.component';
import { RecruiterdashboardComponent } from './recruiter/recruiter-dashboard/recruiterdashboard/recruiterdashboard.component';
import { RecruitermaindashboardComponent } from './recruiter/recruiter-dashboard/recruitermaindashboard/recruitermaindashboard.component';
import { RecruiterJobOpeningsComponent } from './recruiter/recruiter-dashboard/recruiter-job-openings/recruiter-job-openings.component';
import { RecruiterpipelineComponent } from './recruiter/recruiter-dashboard/recruiterpipeline/recruiterpipeline.component';
import { RecruiterDetailrquestComponent } from './recruiter/recruiter-dashboard/recruiter-detailrquest/recruiter-detailrquest.component';
import { RecruiterDetailpipelineComponent } from './recruiter/recruiter-dashboard/recruiter-detailpipeline/recruiter-detailpipeline.component';
import { RecruiterjobApplicatinComponent } from './recruiter/recruiter-dashboard/recruiter-candidates/recruiterjob-applicatin/recruiterjob-applicatin.component';
import { RecruiterresumeComponent } from './recruiter/recruiter-dashboard/recruiter-candidates/recruiterresume/recruiterresume.component';
import { RecruiterformsubmissionComponent } from './recruiter/recruiter-dashboard/recruiter-candidates/recruiterformsubmission/recruiterformsubmission.component';
import { RecruiterinterviewComponent } from './recruiter/recruiter-dashboard/recruiter-candidates/recruiterinterview/recruiterinterview.component';
import { RecruiterScreeningFiterComponent } from './recruiter/recruiter-dashboard/recruiter-candidates/recruiter-screening-fiter/recruiter-screening-fiter.component';
import { RecruiterInterviewsComponent } from './recruiter/recruiter-dashboard/recruiter-interviews/recruiter-interviews.component';
import { RecruiterCandidateComponent } from './recruiter/recruiter-dashboard/recruiter-candidate/recruiter-candidate.component';
import { RecruiterContractsComponent } from './recruiter/recruiter-dashboard/recruiter-contracts/recruiter-contracts.component';
import { RecruiterdetailContractsComponent } from './recruiter/recruiter-dashboard/recruiterdetail-contracts/recruiterdetail-contracts.component';
import { RecruiterEarningsWalletComponent } from './recruiter/recruiter-dashboard/recruiter-earnings-wallet/recruiter-earnings-wallet.component';
import { RecruiterparntProfileComponent } from './recruiter/recruiter-dashboard/recruiterProfile/recruiterparnt-profile/recruiterparnt-profile.component';
import { RecruiterProfessionalInformationComponent } from './recruiter/recruiter-dashboard/recruiterProfile/recruiter-professional-information/recruiter-professional-information.component';
import { RecruiterPersonalInformationComponent } from './recruiter/recruiter-dashboard/recruiterProfile/recruiter-personal-information/recruiter-personal-information.component';
import { RecruiterEarningsOverviewComponent } from './recruiter/recruiter-dashboard/recruiterProfile/recruiter-earnings-overview/recruiter-earnings-overview.component';
import { RecruiterAccountSettingsComponent } from './recruiter/recruiter-dashboard/recruiterProfile/recruiter-account-settings/recruiter-account-settings.component';
import { AdminCreateAccountComponent } from './admin/auth/admin-create-account/admin-create-account.component';
import { AdminforgotYourPasswordComponent } from './admin/auth/adminforgot-your-password/adminforgot-your-password.component';
import { AdminforgotNewPasswordComponent } from './admin/auth/adminforgot-new-password/adminforgot-new-password.component';
import { AdminSignInComponent } from './admin/auth/admin-sign-in/admin-sign-in.component';
import { AmindashboardComponent } from './admin/amin-dashboard/amindashboard/amindashboard.component';
import { AminmainDashboardComponent } from './admin/amin-dashboard/aminmain-dashboard/aminmain-dashboard.component';
import { AminUserComponent } from './admin/amin-dashboard/amin-user/amin-user.component';
import { AdminJobPostingsComponent } from './admin/amin-dashboard/admin-job-postings/admin-job-postings.component';
import { AdminDetailjobOverviewComponent } from './admin/amin-dashboard/admin-detailjob-overview/admin-detailjob-overview.component';
import { AdminPipelineComponent } from './admin/amin-dashboard/admin-pipeline/admin-pipeline.component';
import { AdminDetailPipelineComponent } from './admin/amin-dashboard/admin-detail-pipeline/admin-detail-pipeline.component';
import { AdminContractsComponent } from './admin/amin-dashboard/admin-contracts/admin-contracts.component';
import { AdmindetailContractPipelineComponent } from './admin/amin-dashboard/admindetail-contract-pipeline/admindetail-contract-pipeline.component';
import { AdminSubscriptionsComponent } from './admin/amin-dashboard/adminSubscription/admin-subscriptions/admin-subscriptions.component';
import { AdminSubscriptionPlansComponent } from './admin/amin-dashboard/adminSubscription/admin-subscription-plans/admin-subscription-plans.component';
import { AdminPaymentTrakingComponent } from './admin/amin-dashboard/adminSubscription/admin-payment-traking/admin-payment-traking.component';
import { AdminCommissionsComponent } from './admin/amin-dashboard/adminSubscription/admin-commissions/admin-commissions.component';
import { AdminReportsComponent } from './admin/amin-dashboard/admin-reports/admin-reports.component';
import { ReportsComponent } from './admin/amin-dashboard/Configuration/reports/reports.component';
import { GeneralSettingsComponent } from './admin/amin-dashboard/Configuration/general-settings/general-settings.component';
import { PaymentTrackingComponent } from './admin/amin-dashboard/Configuration/payment-tracking/payment-tracking.component';
import { SupportModerationComponent } from './admin/amin-dashboard/support-moderation/support-moderation/support-moderation.component';
import { SupportTicketsComponent } from './admin/amin-dashboard/support-moderation/support-tickets/support-tickets.component';
import { SupportNotificationCenterComponent } from './admin/amin-dashboard/support-moderation/support-notification-center/support-notification-center.component';
import { SupportActivityLogComponent } from './admin/amin-dashboard/support-moderation/support-activity-log/support-activity-log.component';

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
            },
            {
                path:'profile', component:ProfileComponent
            }

        ]
    },
    //Recruiter
    {
        path: 'recruiter',component:CreateaccountComponent
    },
    {
        path: 'recruiter/forgot-password',component:ForgotNewPasswordComponent
    },
    {
        path:'recruiter/forgot-new-password',component:RecruiterforgotYourPasswordComponent
    },
    {
        path:'recruiter/sign-in',component:RecruiterSignInComponent
    },
    {
        path:'recruiter/dashboard',component:RecruiterdashboardComponent,
        children:[
            {
                path: '',component:RecruitermaindashboardComponent
            },
            {
                path: 'job-openings',component:RecruiterJobOpeningsComponent
            },
            {
                path: 'pipeline',component:RecruiterpipelineComponent
            },
            {
                path: 'detail-pipeline',component:RecruiterDetailpipelineComponent,
                children:[
                    {
                        path:'',component:RecruiterjobApplicatinComponent
                    },
                    {
                        path:'resume',component:RecruiterresumeComponent
                    },
                    {
                        path:'form-submission',component:RecruiterformsubmissionComponent
                    },
                    {
                        path:'interview',component:RecruiterinterviewComponent
                    }
                ]
            },
            {
                path: 'request',component:RecruiterDetailrquestComponent
            },
            {
                path:'screening-fiter', component:RecruiterScreeningFiterComponent,
                children:[
                    {
                        path:'',component:RecruiterjobApplicatinComponent
                    },
                    {
                        path:'resume',component:RecruiterresumeComponent
                    },
                    {
                        path:'form-submission',component:RecruiterformsubmissionComponent
                    },
                    {
                        path:'interview',component:RecruiterinterviewComponent
                    }
                ]
            },
            {
                path:'interview', component:RecruiterInterviewsComponent
            },
            {
                path:'candidate', component:RecruiterCandidateComponent
            },
            {
                path:'contracts', component:RecruiterContractsComponent
            },
            {
                path:'detail-contracts', component:RecruiterdetailContractsComponent,
                children:[
                    {
                        path:'',component:RecruiterjobApplicatinComponent
                    },
                    {
                        path:'resume',component:RecruiterresumeComponent
                    },
                    {
                        path:'form-submission',component:RecruiterformsubmissionComponent
                    },
                    {
                        path:'interview',component:RecruiterinterviewComponent
                    }
                ]
            },
            {
                path:'earnings-wallet',component:RecruiterEarningsWalletComponent
            },
            {
                path:'profile',component:RecruiterparntProfileComponent,
                children:[
                    {
                        path:'',component:RecruiterPersonalInformationComponent
                    },
                    {
                        path:'professional-information',component:RecruiterProfessionalInformationComponent
                    },
                    {
                        path:'earnings-overview',component:RecruiterEarningsOverviewComponent
                    },
                    {
                        path:'account-settings',component:RecruiterAccountSettingsComponent
                    }
                ]
            }

        ]
    },
    // {
    //     path:'recruiter/profile', component:RecruiterpipelineComponent
    // },
    //Admin 
    {
        path: 'admin',component:AdminCreateAccountComponent
    },
    {
        path: 'admin/forgot-password',component:AdminforgotYourPasswordComponent
    },
    {
        path:'admin/forgot-new-password',component:AdminforgotNewPasswordComponent
    },
    {
        path:'admin/sign-in',component:AdminSignInComponent
    },
    {
        path:'admin/dashboard',component:AmindashboardComponent,
        children:[
            {
                path: '',component:AminmainDashboardComponent
            },
            {
                path: 'user',component:AminUserComponent
            },
            {
                path: 'job-postings',component:AdminJobPostingsComponent
            },
            {
                path: 'detail-Job-overview',component:AdminDetailjobOverviewComponent
            },
            {
                path: 'pipeline',component:AdminPipelineComponent
            },
            {
                path:'detail-pipeline',component:AdminDetailPipelineComponent,
                children:[
                    {
                        path:'',component:RecruiterjobApplicatinComponent
                    },
                    {
                        path:'resume',component:RecruiterresumeComponent
                    },
                    {
                        path:'form-submission',component:RecruiterformsubmissionComponent
                    },
                    {
                        path:'interview',component:RecruiterinterviewComponent
                    }
                ]
            },
            {
                path:'contracts',component:AdminContractsComponent
            },
            {
                path:'contracts-pipeline',component:AdmindetailContractPipelineComponent,
                children:[
                    {
                        path:'',component:RecruiterjobApplicatinComponent
                    },
                    {
                        path:'resume',component:RecruiterresumeComponent
                    },
                    {
                        path:'form-submission',component:RecruiterformsubmissionComponent
                    },
                    {
                        path:'interview',component:RecruiterinterviewComponent
                    }
                ]
            },
            {
                path:'subscriptions',component:AdminSubscriptionsComponent,
                children:[
                    {
                        path:'',component:AdminSubscriptionPlansComponent
                    },
                    {
                        path:'payment-traking',component:AdminPaymentTrakingComponent
                    },
                    {
                        path:'commissions',component:AdminCommissionsComponent
                    }
                ]
            },
            {
                path:'reports',component:AdminReportsComponent
            },
            {
                path:'configuration',component:ReportsComponent,
                children:[
                    {
                        path:'',component:GeneralSettingsComponent
                    },
                    {
                        path:'payment-trackings',component:PaymentTrackingComponent
                    }
                ],
                
            },
            {
                path:'support',component:SupportModerationComponent,
                children:[
                    {
                        path:'',component:SupportTicketsComponent
                    },
                    {
                        path:'notifications-center',component:SupportNotificationCenterComponent
                    },
                    {
                        path:'activity-log',component:SupportActivityLogComponent
                    }

                ]
            }
        ]
    }

   
    
];
//Payment Tracking