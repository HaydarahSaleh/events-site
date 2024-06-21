import * as ACTION_TYPES from "../actions/actionTypes";

export function changeTheme(currentTheme) {
  localStorage.setItem("iconTheme", JSON.stringify(currentTheme));

  return {
    type: ACTION_TYPES.CHANGE_THEME,
    payload: currentTheme,
  };
}

export function setDarkMode({ isDark }) {
  localStorage.setItem("iconIsDark", JSON.stringify(isDark));
  return {
    type: ACTION_TYPES.DARK_THEME,
    payload: isDark,
  };
}

export function setDirection({ isRTL }) {
  localStorage.setItem("isiconRTL", JSON.stringify(isRTL));
  return {
    type: ACTION_TYPES.SET_DIRECTION,
    payload: isRTL,
  };
}
export function increaseFont() {
  return {
    type: ACTION_TYPES.INCREASE_FONT,
  };
}
export function decreaseFont() {
  return {
    type: ACTION_TYPES.DECREASE_FONT,
  };
}

export function resetFont() {
  return {
    type: ACTION_TYPES.RESET_FONT,
  };
}
