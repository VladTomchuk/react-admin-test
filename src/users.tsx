import {useMediaQuery, Theme} from "@mui/material";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    SimpleForm,
    Edit,
    Create, TextInput, PasswordInput,
    //ReferenceField
} from "react-admin";

export const Users = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid >
                    <TextField source="id"/>
                    <TextField source="name"/>
                    <EmailField source="email"/>
                    <TextField link="show" source="info"/>
                    <EditButton/>
                    <DeleteButton mutationMode="pessimistic"/>
                </Datagrid>
            )}
        </List>
    );
};


export const UserEdit = () => (
    <Edit mutationMode="pessimistic">
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source="name"/>
            <TextInput source="info" multiline rows={3}/>
            <TextInput source="email"/>
            <PasswordInput source="password"/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create redirect="list">
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="info" multiline rows={5}/>
            <TextInput source="email"/>
            <PasswordInput source="password"/>
        </SimpleForm>
    </Create>
)