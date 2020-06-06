import * as React from 'react'
import style from './index.m.css'
import Options from "./Options";
import documentIcon from 'img/document.svg'
import settingIcon from 'img/setting.svg'


export interface ISidebarProps {
    title: string,
    club: string,
    detail: string,
    onClick: () => any,
}


export default class Sidebar extends React.Component<ISidebarProps, {}> {

    //每一个设置一个onClick
    render() {
        return <div className={style.sidebar}>
            <div onClick={this.props.onClick}>
                <Options icon={documentIcon} content='文档'/>
                <Options icon={settingIcon} content='设置'/>
            </div>
        </div>
    }
}
