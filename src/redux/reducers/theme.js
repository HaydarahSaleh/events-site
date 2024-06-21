import * as ACTION_TYPES from "../actions/actionTypes";
import { combineReducers } from "redux";
import { themeList } from "../../constants/theme";

const defaultTheme = localStorage.getItem("iconTheme")
  ? JSON.parse(localStorage.getItem("iconTheme"))
  : themeList[0];
const initialState = {
  isDark: Boolean(JSON.parse(localStorage.getItem("iconIsDark"))),
  currentTheme: defaultTheme,
  themeList,
  isRTL: Boolean(JSON.parse(localStorage.getItem("isiconRTL"))),
};

const basicTheme = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DARK_THEME:
      return {
        ...state,
        isDark: action.payload,
      };

    case ACTION_TYPES.SET_DIRECTION:
      return {
        ...state,
        isRTL: action.payload,

        currentTheme: {
          ...state.currentTheme,
          direction: action.payload === true ? "rtl" : "ltr",
        },
      };

    case ACTION_TYPES.CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };

    case ACTION_TYPES.GET_THEME_LIST:
      return {
        ...state,
        themeList: action.payload.length ? action.payload : state.themeList,
      };

    case ACTION_TYPES.INCREASE_FONT:
      return {
        ...state,
        currentTheme: {
          ...state.currentTheme,
          elements: {
            ...state.currentTheme.elements,
            fontSize: {
              ...state.currentTheme.elements.fontSize,
              xxs: state.currentTheme.elements.fontSize.xxs + 1,
              xxl: state.currentTheme.elements.fontSize.xxl + 1,
              xs: state.currentTheme.elements.fontSize.xs + 1,
              title: state.currentTheme.elements.fontSize.title + 1,
              number: state.currentTheme.elements.fontSize.number + 1,
              summary: state.currentTheme.elements.fontSize.summary + 1,
              sm: state.currentTheme.elements.fontSize.sm + 1,
              s: state.currentTheme.elements.fontSize.s + 1,
              m: state.currentTheme.elements.fontSize.m + 1,
              l: state.currentTheme.elements.fontSize.l + 1,
              g: state.currentTheme.elements.fontSize.g + 1,
              btn: state.currentTheme.elements.fontSize.btn + 1,
              awarenessTitle:
                state.currentTheme.elements.fontSize.awarenessTitle + 1,
            },
          },
        },
      };

    case ACTION_TYPES.DECREASE_FONT:
      return {
        ...state,
        currentTheme: {
          ...state.currentTheme,
          elements: {
            ...state.currentTheme.elements,
            fontSize: {
              ...state.currentTheme.elements.fontSize,
              xxs: state.currentTheme.elements.fontSize.xxs - 1,
              xxl: state.currentTheme.elements.fontSize.xxl - 1,
              xs: state.currentTheme.elements.fontSize.xs - 1,
              title: state.currentTheme.elements.fontSize.title - 1,
              number: state.currentTheme.elements.fontSize.number - 1,
              summary: state.currentTheme.elements.fontSize.summary - 1,
              sm: state.currentTheme.elements.fontSize.sm - 1,
              s: state.currentTheme.elements.fontSize.s - 1,
              m: state.currentTheme.elements.fontSize.m - 1,
              l: state.currentTheme.elements.fontSize.l - 1,
              g: state.currentTheme.elements.fontSize.g - 1,
              btn: state.currentTheme.elements.fontSize.btn - 1,
              awarenessTitle:
                state.currentTheme.elements.fontSize.awarenessTitle - 1,
            },
          },
        },
      };

    case ACTION_TYPES.RESET_FONT:
      return {
        ...state,
        currentTheme: {
          ...state.currentTheme,
          elements: {
            ...state.currentTheme.elements,
            fontSize: {
              ...state.currentTheme.elements.fontSize,
              xxs: state.currentTheme.elements.fontSizeG[0],
              xxl: state.currentTheme.elements.fontSizeG[1],
              xs: state.currentTheme.elements.fontSizeG[2],
              title: state.currentTheme.elements.fontSizeG[3],
              sm: state.currentTheme.elements.fontSizeG[4],
              s: state.currentTheme.elements.fontSizeG[5],
              m: state.currentTheme.elements.fontSizeG[6],
              l: state.currentTheme.elements.fontSizeG[7],
              g: state.currentTheme.elements.fontSizeG[8],
              btn: state.currentTheme.elements.fontSizeG[9],
              awarenessTitle: state.currentTheme.elements.fontSizeG[10],
              number: state.currentTheme.elements.fontSizeG[11],
              summary: state.currentTheme.elements.fontSizeG[12],
            },
          },
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  basicTheme,
});
