//import {Admin, Resource, ShowGuesser} from "react-admin";
import {Admin, Resource} from "react-admin";
import localStorageDataProvider from 'ra-data-local-storage';
import {PostCreate, UserEdit, Users} from "./users";
import {defaultData} from "./defaultData";
//import {PostList,PostEdit,PostCreate} from "./posts";


const dataProvider = localStorageDataProvider({
    defaultData:defaultData
});

export const App = () => <Admin dataProvider={dataProvider}>
    {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>*/}
    <Resource name="users" list={Users} edit={UserEdit} create={PostCreate}/>
</Admin>;