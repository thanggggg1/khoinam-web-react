import React, { Component } from 'react';

class Sidebar extends Component{
    render(){

        let data = [
            {sidebarListLink: "service-details-left-sidebar", sidebarListIcon: 'flaticon-015-cart', sidebarListText: 'Cáp trung thế'},
            {sidebarListLink: "service-details-left-sidebar", sidebarListIcon: 'flaticon-010-tank-1', sidebarListText: 'Cáp cao su'},
            {sidebarListLink: "service-details-left-sidebar", sidebarListIcon: 'flaticon-002-welding', sidebarListText: 'Cáp vặn xoắn'},
            {sidebarListLink: "service-details-left-sidebar", sidebarListIcon: 'flaticon-004-walkie-talkie', sidebarListText: 'Điện dân dụng'},
            {sidebarListLink: "service-details-left-sidebar", sidebarListIcon: 'flaticon-042-monitor', sidebarListText: 'Cáp đồng  nhôm trần'},
            {sidebarListLink: "service-details-left-sidebar", sidebarListIcon: 'flaticon-050-boxes', sidebarListText: 'Cáp đồng nhôm bọc'}
        ];

        let Datalist = data.map((val, i)=>{
            return(
                <li key={i}><a href={val.sidebarListLink}><i className={val.sidebarListIcon} />{val.sidebarListText}</a></li>
            )
        })

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Sản phẩm</h3>
                        <ul className="sidebar-list">
                            {Datalist}
                        </ul>
                    </div>
                    {/*<div className="sidebar">*/}
                    {/*    <h3 className="sidebar-title">Download brochure</h3>*/}
                    {/*    <ul className="sidebar-list">*/}
                    {/*        <li><a href="/"><i className="fa fa-file-pdf-o" />Brochures.PDF</a></li>*/}
                    {/*        <li><a href="/"><i className="fa fa-file-word-o" />Brochures.DOC</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Sidebar;
