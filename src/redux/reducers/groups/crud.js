import actions from "../../actions";
import { combineReducers } from "redux";

const {
  GET_ALL,
  ALL_RETURNED,
  GET_NOTIFICATIONS,
  ALL_NOTIFICATIONS_RETURNED,
  GET_DATA,
  DATA_RETURNED,
  GET_DATA_SLIDER,
  DATA_SLIDER_RETURNED,
  ALL_CLEAR,
  GET_BY_ID,
  BY_ID_RETURNED,
  GET_BY_ALIAS,
  BY_ALIAS_RETURNED,
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_RETURNED,
  GET_DATA_ACHIVMENTS,
  DATA_ACHIVMENTS_RETURNED,
  GET_DATA_SERVICES,
  DATA_SERVICES_RETURNED,
  GET_PAGE_DETAILS,
  PAGE_DETAILS_RETURNED,
  GET_DATA_PARTNERS,
  DATA_PARTNERS_RETURNED,
  ASK_FOR_RATE,
  ASK_FOR_RATE_RETURNED,
  CREATE_NEW,
  CREATED,
  CLEAR,
  DELETE_ITEM,
  DELETED,
  READ_FILE_ACTION,
  READ_COMPLETED,
  DOWNLOAD_COUNT_ACTION,
  DOWNLOAD_COUNT_COMPLETED,
  GET_DATA_CONF,
  DATA_CONF_RETURNED,
  DATA_MENUS_RETURNED,
  GET_DATA_MENUS,
} = actions;

export const askingForRating = (state = false, action) => {
  switch (action.type) {
    case ASK_FOR_RATE:
      return true;
    case ASK_FOR_RATE_RETURNED:
      return false;
    default:
      return state;
  }
};
export const askingForRatingReturned = (state = false, action) => {
  switch (action.type) {
    case ASK_FOR_RATE_RETURNED:
      return action.data;
    default:
      return state;
  }
};

export const getAll = (state = false, action) => {
  switch (action.type) {
    case GET_ALL:
      return action?.data?.spinner === "none" ? false : true;
    case ALL_RETURNED:
      return false;
    default:
      return state;
  }
};
export const allReturned = (state = [], action) => {
  switch (action.type) {
    case ALL_RETURNED:
      return {
        ...state,
        [action?.subSort ? action?.subSort : action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
        count: action.data.count,
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};

export const getData = (state = false, action) => {
  switch (action.type) {
    case GET_DATA:
      return true;
    case DATA_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName
          ? action.data.returnedTypeName
          : action?.dataObject]: action.data[action.data.returnedTypeName]
          ? action.data[action.data.returnedTypeName]
          : action?.data,
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};

export const getDataAchivments = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_ACHIVMENTS:
      return true;
    case DATA_ACHIVMENTS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataAchivmentsReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_ACHIVMENTS_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};

export const getDataServices = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_SERVICES:
      return true;
    case DATA_SERVICES_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataServicesReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_SERVICES_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};
export const getDataConfs = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_CONF:
      return true;
    case DATA_CONF_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataConfssReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_CONF_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};
export const getDataNotification = (state = false, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return true;
    case ALL_NOTIFICATIONS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const datanotificationReturned = (state = [], action) => {
  switch (action.type) {
    case ALL_NOTIFICATIONS_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};
export const getDataMenus = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_MENUS:
      return true;
    case DATA_MENUS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataMenusReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_MENUS_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};
export const getDataSlider = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_SLIDER:
      return true;
    case DATA_SLIDER_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataSliderReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_SLIDER_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};

export const getById = (state = false, action) => {
  switch (action.type) {
    case GET_BY_ID:
      return true;
    case BY_ID_RETURNED:
      return false;
    default:
      return state;
  }
};
export const byIdReturned = (state = false, action) => {
  switch (action.type) {
    case BY_ID_RETURNED:
      return action.data;
    default:
      return state;
  }
};

export const getByAlias = (state = false, action) => {
  switch (action.type) {
    case GET_BY_ALIAS:
      return true;
    case BY_ALIAS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const byAliasReturned = (state = false, action) => {
  switch (action.type) {
    case BY_ALIAS_RETURNED:
      return action.data;
    default:
      return state;
  }
};

export const submitComment = (state = false, action) => {
  switch (action.type) {
    case SUBMIT_COMMENT:
      return true;
    case SUBMIT_COMMENT_RETURNED:
      return false;
    default:
      return state;
  }
};
export const submitCommentReturned = (state = false, action) => {
  switch (action.type) {
    case SUBMIT_COMMENT_RETURNED:
      return action.data;
    default:
      return state;
  }
};

export const getPageInfo = (state = false, action) => {
  switch (action.type) {
    case GET_PAGE_DETAILS:
      return true;
    case PAGE_DETAILS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const pageInfoReturned = (state = false, action) => {
  switch (action.type) {
    case PAGE_DETAILS_RETURNED:
      return action.data;
    default:
      return state;
  }
};

export const getDataPartners = (state = false, action) => {
  switch (action.type) {
    case GET_DATA_PARTNERS:
      return true;
    case DATA_PARTNERS_RETURNED:
      return false;
    default:
      return state;
  }
};
export const dataPartnersReturned = (state = [], action) => {
  switch (action.type) {
    case DATA_PARTNERS_RETURNED:
      return {
        ...state,
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };

    case ALL_CLEAR:
      return {
        [action.data.returnedTypeName]:
          action.data[action.data.returnedTypeName],
      };
    default:
      return state;
  }
};
export const createNew = (state = false, action) => {
  switch (action.type) {
    case CREATE_NEW:
      return true;
    case CREATED:
      return false;
    default:
      return state;
  }
};
export const created = (state = false, action) => {
  switch (action.type) {
    case CREATED:
      return action.response;
    case CLEAR:
      return false;
    default:
      return state;
  }
};
export const readFileAction = (state = false, action) => {
  switch (action.type) {
    case READ_FILE_ACTION:
      return true;
    case READ_COMPLETED:
      return false;
    default:
      return state;
  }
};

export const readCompleted = (state = false, action) => {
  switch (action.type) {
    case READ_COMPLETED:
      return action.response;
    default:
      return state;
  }
};

export const downloadCountAction = (state = false, action) => {
  switch (action.type) {
    case DOWNLOAD_COUNT_ACTION:
      return true;
    case DOWNLOAD_COUNT_COMPLETED:
      return false;
    default:
      return state;
  }
};

export const downloadCountCompleted = (state = false, action) => {
  switch (action.type) {
    case DOWNLOAD_COUNT_COMPLETED:
      return action.response;
    default:
      return state;
  }
};
export const deleteItem = (state = false, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return true;
    case DELETED:
      return false;
    default:
      return state;
  }
};
export const deleted = (state = false, action) => {
  switch (action.type) {
    case DELETED:
      return action.response;
    case CLEAR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  getAll,
  allReturned,
  getData,
  dataReturned,
  getById,
  byIdReturned,
  getByAlias,
  byAliasReturned,
  submitComment,
  submitCommentReturned,
  getDataSlider,
  dataSliderReturned,
  getDataAchivments,
  dataAchivmentsReturned,
  getDataServices,
  dataServicesReturned,
  getPageInfo,
  pageInfoReturned,
  getDataPartners,
  dataPartnersReturned,
  createNew,
  created,
  readFileAction,
  readCompleted,
  downloadCountAction,
  downloadCountCompleted,
  getDataNotification,
  datanotificationReturned,
  deleteItem,
  deleted,
  getDataMenus,
  dataMenusReturned,
  getDataConfs,
  dataConfssReturned,
});
