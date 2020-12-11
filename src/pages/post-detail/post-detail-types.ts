import { RouteComponentProps } from 'react-router';

export namespace PostDetailTypes {
    export interface Props extends RouteComponentProps<{postId: string}> {

    }
};