import * as React from 'react';
import '../../App.css';

interface Props {
    pageNumber: any,
    pagination: (event: any, pageNum:number) => any,
    isSelectedPage: boolean
}

interface State {

}

export class TablePagination extends React.Component<Props, State> {
    render() {
        const {pageNumber, isSelectedPage} = this.props;
        return (
            <a onClick={((e) => this.props.pagination(e, pageNumber))} className={isSelectedPage ? "pagination-number selected-page" : "pagination-number" }>
                {pageNumber}
            </a>
        );
    }
}

export default TablePagination;
