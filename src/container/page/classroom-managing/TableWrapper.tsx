import React from 'react';
import "./style.css";

const TableWrapper = (props: { children: any; }) => {

    const {children} = props;

    return (
        <div className={"antd-table"}>
            {children}
        </div>
    )
};

export default TableWrapper;