import { createSelector } from "@reduxjs/toolkit";



export const selectUser = (state) => state.user;
export const selectActiveFilter = (state) =>
  selectUser(state).filters.activeFilter;
export const selectSortDirection = (state) =>
  selectUser(state).filters.direction;

export const selectModules = createSelector(
  [selectUser],
  (user) => user.modules
);

export const selectModulesByFilter = createSelector(
  [selectModules, selectActiveFilter, selectSortDirection],
  (modules, activeFilter, sortDirection) => {
      console.log('modules',modules)
    if (!modules) return [];
    if (activeFilter === "all") {
      return [...modules];
    }
    if (activeFilter === "cards-count") {
      return [...modules].sort((a, b) => {
        return sortDirection === "up"
          ? b.cards.length - a.cards.length
          : a.cards.length - b.cards.length;
      });
    }
    if (activeFilter === "created-at") {
      return [...modules].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortDirection === "up" ? dateB - dateA : dateA - dateB;
      });
    }
    return modules;
  }
);

export const selectAllUsers = (state) => state.allUsers;

export const getUserId = (_, props) => props.userId;

export const selectModulesByUserId = createSelector(
    [selectAllUsers, getUserId],
    (allUsers, userId) => {
        // Find the user with the matching userId
        const user = allUsers?.data.find((user) => user._id === userId);

        return user ? user.modules : [];
    }
);