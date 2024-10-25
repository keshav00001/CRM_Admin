import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
// Dashboard Pages
import AdminDashboard from "./../pages/Dashboard/AdminDashboard";
import BenchmarkingDashboard from "./../pages/Dashboard/BenchmarkingDashboard";
import TrendAnalysis from "./../pages/Dashboard/TrendAnalysis";
import StudentQualityIndex from "./../pages/Dashboard/StudentQualityIndex";
import TrafficDashboard from "./../pages/Dashboard/TrafficDashboard";
import CounsellorDashboard from "./../pages/Dashboard/CounsellorDashboard";
// Query manager
import StudentQueryList from "./../pages/Query_Manager/StudentQueryList";
import FilterOption from "../pages/Query_Manager/FilterOption";
import ImportReport from "../pages/Query_Manager/ImportReport";
import UploadDataScreen from "../pages/Query_Manager/UploadDataScreen";
import Checklist from "../pages/Query_Manager/Checklist";
import UploadFile from "../pages/Query_Manager/UploadFile";

// Application Forms
import InAppCallLogs from "../pages/ApplicationForms/InAppCallLogs";

// Lead Manager
import UserProfile from "../pages/LeadManager/UserProfile";
import Scoring from "../pages/LeadManager/Scoring";

// Campaign Manager
import CampaignManager from "../pages/CampaignManager/CampaignManager";

// User Access Control
import UserManager from "../pages/UserAccessControl/UserManager";
import DownloadRequestList from "../pages/UserAccessControl/DownloadRequestList";
import UserSessions from "../pages/UserAccessControl/UserSessions";
import UserActivity from "../pages/UserAccessControl/UserActivity";
import QuickSnapshot from "../pages/UserAccessControl/QuickSnapshot";
import ClientRegistration from "../pages/UserAccessControl/ClientRegistration";

// Form Desk
import FormManager from "../pages/FormDesk/FormManager";
import UploadDocument from "../pages/FormDesk/UploadDocument";
import ManageForms from "../pages/FormDesk/ManageForms";
import ManageDocuments from "../pages/FormDesk/ManageDocuments";
import ManageExam from "../pages/FormDesk/ManageExam";

// Application Manager
import Applications from "../pages/ApplicationManager/Applications";
import ApplicationManagerTable from "../pages/ApplicationManager/ApplicationManagerTable";
import CommunicationPerformance from "../pages/ApplicationManager/CommunicationPerformance";
import CommunicationLogDetails from "../pages/ApplicationManager/CommunicationLogDetails";

// Marketing
import Marketing from "../pages/Marketing/Marketing";

// Query manage

// Reports and Analytics
import ReportsAnalytics from "../pages/ReportsAnalytics/ReportsAnalytics";

// Template Manager
import CreateTemplate from "../pages/TemplateManager/CreateTemplate";
import ManageTemplate from "../pages/TemplateManager/ManageTemplate";
import CreateCommunicationTemplate from "../pages/TemplateManager/CreateCommunicationTemplate";

import ManageCommunicationTemplate from "../pages/TemplateManager/ManageCommunicationTemplate";
import CreateEmailTemplate from "../pages/TemplateManager/CreateEmailTemplate";
// Email Template Builder
import EmailTemplateBuilder from "../pages/TemplateManager/EmailTemplateBuilder";
import BasicLayout from "../pages/TemplateManager/BasicLayout";
// whatsApp template
import CreateWhatsAppTemplate from "../pages/TemplateManager/CreateWhatsAppTemplate";
import CreateSmsTemplate from "../pages/TemplateManager/CreateSmsTemplate";

// Settings
import Settings from "../pages/Settings/Setting";

// Login Form
import Login from "../pages/LoginForm/Login";
import ForgotPwd from "../pages/LoginForm/ForgotPwd";
import PasswordReset from "../pages/LoginForm/PasswordReset";

// CreateWidget

import CreateWidget from "../pages/CreateWidget/CreateWidget";

//rule creation
import AllRules from "../pages/Automation Design/AllRules";
import GenerateRules from "../pages/Automation Design/GenerateRules";

function AppRoutes(props) {
  return (
    <div>
      <Routes>
        {/* -------Dashboard---------- */}
        <Route exact path="/" element={<AdminDashboard />} />
        <Route exact path="/demo" element={<Home />} />
        <Route exact path="/traffic-dashboard" element={<TrafficDashboard />} />
        <Route
          exact
          path="/counsellor-dashboard"
          element={<CounsellorDashboard />}
        />
        <Route
          exact
          path="/benchmarking-dashboard"
          element={<BenchmarkingDashboard />}
        />
        <Route exact path="/trend-analysis" element={<TrendAnalysis />} />
        <Route
          exact
          path="/communication-performance"
          element={<CommunicationPerformance />}
        />
        <Route
          exact
          path="/student-quality-index"
          element={<StudentQualityIndex />}
        />
        {/* ---------Application Forms-------- */}
        <Route exact path="/in-app-call-logs" element={<InAppCallLogs />} />
        {/* -------- Lead Manager -------- */}
        <Route exact path="/userProfile" element={<UserProfile />} />
        <Route exact path="/scoring" element={<Scoring />} />
        {/* ----------Campaign Manager --------*/}
        <Route exact path="/campaign-manager" element={<CampaignManager />} />
        {/* User access control */}
        <Route exact path="/users/user-manager" element={<UserManager />} />
        <Route exact path="/users/manage-sessions" element={<UserSessions />} />
        <Route exact path="/users/activity" element={<UserActivity />} />
        <Route
          exact
          path="/reports/download-request-list"
          element={<DownloadRequestList />}
        />
        <Route
          exact
          path="/client-registration"
          element={<ClientRegistration />}
        />
        <Route exact path="/snapshots" element={<QuickSnapshot />} />

        {/* ---------Form Desk--------- */}
        <Route exact path="/form-manager" element={<FormManager />} />
        <Route exact path="/upload-document" element={<UploadDocument />} />
        <Route exact path="/manage-forms" element={<ManageForms />} />
        <Route exact path="/manage-documents" element={<ManageDocuments />} />
        <Route exact path="/manage-exam" element={<ManageExam />} />

        {/* ---------Application Manager------ */}
        <Route exact path="/applications" element={<Applications />} />
        <Route
          exact
          path="/application-manager"
          element={<ApplicationManagerTable />}
        />
        {/* ----------- Marketing ---------- */}
        <Route exact path="/marketing" element={<Marketing />} />

        {/* query manager */}
        <Route exact path="/QueryList" element={<StudentQueryList />} />
        <Route exact path="/filter-option" element={<FilterOption />} />
        <Route exact path="/import-report" element={<ImportReport />} />
        <Route
          exact
          path="/upload-data-screen"
          element={<UploadDataScreen />}
        />
        <Route exact path="/checklist" element={<Checklist />} />
        <Route exact path="/uploadfile" element={<UploadFile />} />

        {/* ----------Reports Analytics---------- */}
        <Route exact path="/reports-analytics" element={<ReportsAnalytics />} />

        {/* ----------- Template Manager --------- */}
        <Route exact path="/create-template" element={<CreateTemplate />} />
        <Route exact path="/manage-template" element={<ManageTemplate />} />
        <Route
          exact
          path="/manage-communication-template"
          element={<ManageCommunicationTemplate />}
        />
        <Route
          exact
          path="/create-communication-template"
          element={<CreateCommunicationTemplate />}
        />
        {/* ------- */}
        <Route
          exact
          path="/email-template-builder"
          element={<EmailTemplateBuilder />}
        />
        <Route exact path="/basic-layout" element={<BasicLayout />} />
        <Route exact path="/email-template" element={<CreateEmailTemplate />} />
        <Route
          exact
          path="/whatsApp-template"
          element={<CreateWhatsAppTemplate />}
        />
        <Route exact path="/sms-template" element={<CreateSmsTemplate />} />

        {/* ------Communication Performance-------- */}
        <Route
          exact
          path="/communication-performance"
          element={<CommunicationPerformance />}
        />
        <Route
          path="/communication-logs-details-report"
          element={<CommunicationLogDetails />}
        />

        {/* ----------- Settings---------- */}

        <Route exact path="/settings" element={<Settings />} />


        {/* ----------- Create Widget---------- */}
        <Route path="/widget" element={<CreateWidget />} />


        {/* -----------Auth Login Form---------- */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgot-password" element={<ForgotPwd />} />
        <Route exact path="/password-reset" element={<PasswordReset />} />


        {/* -----------  Rule Generate---------- */}
        <Route exact path="/allRules" element={<AllRules />} />
        <Route exact path="/generateRules" element={<GenerateRules />} />

      </Routes>
    </div>
  );
}

export default AppRoutes;
