import styled from 'styled-components';
const ButtonsWrapper = styled.div`
display: flex;
justify-content end;
`;
const Button = styled.button`
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
  &:hover {
    background-color: #ddd;
  
`;
const NextButton = styled.button`
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 100px;
  margin: 3px;
  color: #009879;
  background-color: white;
  border-radius: 8px;
  font-family: 'proxima-nova-soft', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 200ms ease-out;
  border: 2px solid #009879;
`;
const PreviousButton = styled.button`
  border: 0;
  text-align: center;
  display: inline-block;
  padding: 14px;
  width: 100px;
  margin: 3px;
  color: #009879;
  background-color: white;
  border-radius: 8px;
  font-family: 'proxima-nova-soft', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: box-shadow 200ms ease-out;
  border: 2px solid #009879;
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
  return (
    <ButtonsWrapper>
      <PreviousButton
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        Previous
      </PreviousButton>
      {new Array(pagesCount).fill(1).map((_, index) => {
        console.log(index);
        if (
          (pagesCount > index && currentPage === pagesCount) ||
          currentPage === pagesCount - 1
        ) {
          <Button key={index} onClick={() => setCurrentPage(index)}>
            {--currentPage}
          </Button>;
        }
        if (
          (pagesCount > index && index === currentPage - 1) ||
          index === currentPage ||
          index === currentPage + 1
        ) {
          return (
            <Button key={index} onClick={() => setCurrentPage(index)}>
              {++index}
            </Button>
          );
        } else return;
      })}
      <NextButton
        onClick={() =>
          currentPage < pagesCount && setCurrentPage(currentPage + 1)
        }
      >
        Next
      </NextButton>
    </ButtonsWrapper>
  );
};
export default PageButtons;
