import groups, { IGroupsState } from "@components/dashboard/pages/groups/store";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alert, { AlertState } from "./alert";
import dropdowns, { DropdownState } from './dropdown';
import leftMenu, { LeftMenuState } from "./leftMenu";
import notifications, { INotification} from "./notifications";
import profilePicture, { ProfilePictureState } from "./profilePicture";

export interface RootState {
    alert: AlertState;
    dropdowns: DropdownState[];
    leftMenu: LeftMenuState;
    profilePicture: ProfilePictureState;
    notifications: INotification;
    groups: IGroupsState;
}

const reducers = combineReducers({
    alert,
    dropdowns,
    leftMenu,
    profilePicture,
    notifications,
    groups: groups.reducer,
});

const store = configureStore({
    reducer: reducers
});

export default store;