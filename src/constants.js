export const TASKS_MANAGEMENT_MAIN_MENU_CONTRIBUTION_KEY = 'tasksManagement.MainMenu';

export const DEFAULT_DEBOUNCE_TIME = 500;
export const DEFAULT_PAGE_SIZE = 10;
export const EMPTY_STRING = '';
export const HYPHEN = '-';
export const ROWS_PER_PAGE_OPTIONS = [10, 20, 50, 100];
export const CONTAINS_LOOKUP = 'Icontains';

export const TASK_STATUS = {
  RECEIVED: 'RECEIVED',
  ACCEPTED: 'ACCEPTED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
};

export const GROUP_RESOLVE_POLICY = {
  ALL: 'ALL',
  ANY: 'ANY',
  N: 'N',
};

export const TASK_COLUMNS = {
  SOURCE: 'source',
  TYPE: 'type',
  ENTITY: 'entity',
  ASSIGNEE: 'assignee',
  BUSINESS_STATUS: 'businessStatus',
  STATUS: 'status',
};

export const TASK_PREVIEW_COLUMNS = [
  TASK_COLUMNS.SOURCE,
  TASK_COLUMNS.TYPE,
  TASK_COLUMNS.ENTITY,
  TASK_COLUMNS.ASSIGNEE,
  TASK_COLUMNS.BUSINESS_STATUS,
  TASK_COLUMNS.STATUS,
];

export const TASK_STATUS_LIST = [
  TASK_STATUS.RECEIVED, TASK_STATUS.ACCEPTED, TASK_STATUS.COMPLETED, TASK_STATUS.FAILED];

export const GROUP_RESOLVE_POLICY_LIST = [GROUP_RESOLVE_POLICY.ALL, GROUP_RESOLVE_POLICY.ANY, GROUP_RESOLVE_POLICY.N];

export const RIGHT_TASKS_MANAGEMENT_SEARCH = 191001;

export const TASKS_MANAGEMENT_ROUTE_GROUPS_GROUP = 'tasksManagement.route.group';

export const TASK_GROUP_SEARCH = 191001;
export const TASK_GROUP_CREATE = 191002;
export const TASK_GROUP_UPDATE = 191003;
export const TASK_GROUP_DELETE = 191004;

export const RIGHT_TASK_EXECUTIONER_GROUPS = 190001;

export const TASKS_PREVIEW_CONTRIBUTION_KEY = 'tasksManagement.taskPreview';

export const BENEFIT_PLAN_TASK_PREVIEW_TABLE_VALUE = 'BenefitPlanTaskPreviewTable';

export const BENEFIT_PLAN_UPDATE_STRING = 'Benefit Plan Update';

export const APPROVED = 'APPROVED';
export const FAILED = 'FAILED';
