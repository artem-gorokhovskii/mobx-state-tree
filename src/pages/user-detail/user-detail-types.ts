import { RouteComponentProps } from 'react-router';

export namespace UserDetailTypes {
    export interface Props extends RouteComponentProps<{userId: string}> {};
}