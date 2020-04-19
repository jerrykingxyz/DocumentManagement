import * as React from 'react';
import { App } from './App';
import Sidebar from "./components/Sidebar/Sidebar";
import MDEditorDom from "./components/MDEditor/MDEditor";

export interface IMainProps
{
    app: App; // Reference to our App.ts class
}

export class Main extends React.Component<IMainProps, {}>
{
    constructor(props: IMainProps)
    {
        super(props);
    }

    public render(): JSX.Element
    {

        return (
            <div className='content'>
               <Sidebar title='萝依' club='红色家园' detail='option'/>
               <Sidebar title='fileName' club='' detail='nodes'/>
                <MDEditorDom/>
            </div>
        );

    }
}
