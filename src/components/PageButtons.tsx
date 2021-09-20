import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
const ButtonsWrapper = styled.div`
display: flex;
justify-content end;
`;
const PaginationButton = styled.div`
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .paginationBttns a {
    border: 0;
    text-align: center;
    display: inline-block;
    padding: 14px;
    width: 50px;
    margin: 3px;
    color: #ffffff;
    background-color: #009879;
    border-radius: 8px;
    font-family: 'proxima-nova-soft', sans-serif;
    font-weight: 600;
    text-decoration: none;
    transition: box-shadow 200ms ease-out;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: #ddd;
  }

  .paginationActive a {
    color: white;
    background-color: #ddd;
  }

  .paginationDisabled a {
    display: none;
  }
  .previousBttn {
    height: 14px !important;
    width: 80px !important;
    color: #009879 !important;
    background-color: white !important;
    text-decoration: none !important;
    transition: box-shadow 200ms ease-out !important;
    border: 2px solid #009879 !important;
  }
`;
interface PageButtonsProps {
  setCurrentPage: (value: number) => void;
  currentPage: number;
  pagesCount: number;
}
const PageButtons: React.FC<PageButtonsProps> = ({
  setCurrentPage,
  pagesCount,
  currentPage,
}) => {
  const onPageChange = ({ selected }: { selected: number }) => {
    console.log(selected + 1);
    setCurrentPage(selected + 1);
    console.log(selected + 1);
  };
  return (
    <ButtonsWrapper>
      <PaginationButton>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pagesCount}
          onPageChange={onPageChange}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'previousBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
        />
      </PaginationButton>
    </ButtonsWrapper>
  );
};
export default PageButtons;
