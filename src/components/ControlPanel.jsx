import React from "react";

const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber, setScale, scale } = props;

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages; // siamo sicuramente all'ultima pagina

  const firstPageClass = isFirstPage ? "disabled" : "clickable";
  const lastPageClass = isLastPage ? "disabled" : "clickable";

  const goToFirstPage = () => {
    if (!isFirstPage) setPageNumber(1);
  };
  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  };
  const goToNextPage = () => {
    if (!isLastPage) setPageNumber(pageNumber + 1);
  };
  const goToLastPage = () => {
    if (!isLastPage) setPageNumber(numPages); // numPages è il numero totale delle pagine
  };

  const onPageChange = (event) => {
    const { value } = event.target;
    setPageNumber(Number(value));
  };

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomInClass = isMinZoom ? "disable" : "clickable";
  const zoomOutClass = isMaxZoom ? "disable" : "clickable";

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };
  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  return (
    <div className="control-panel m-3 p-3 d-flex align-items-baseline justify-content-between">
      <div className="d-flex align-items-baseline justify-content-between">
        <i
          className={`fas fa-fast-backward mx-3 ${firstPageClass}`}
          onClick={goToFirstPage}
        />
        <i
          className={`fas fa-backward mx-3 ${firstPageClass}`}
          onClick={goToPreviousPage}
        />
        <span>
          Page
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages | 1}
            className="p-0 pl-1 mx-2"
            value={pageNumber}
            onChange={onPageChange}
          />{" "}
          of {numPages}
        </span>
        {/* <span>
        Page {pageNumber} of {numPages}
      </span> */}
        <i
          className={`fas fa-forward mx-3 ${lastPageClass}`}
          onClick={goToNextPage}
        />
        <i
          className={`fas fa-fast-forward mx-3 ${lastPageClass}`}
          onClick={goToLastPage}
        />
      </div>
      <div className="d-flex align-items-baseline justify-content-between">
        <i
          className={`fas fa-search-minus mx-3 ${zoomOutClass}`}
          onClick={zoomOut}
        />
        <span> {(scale * 100).toFixed()} %</span>

        <i
          className={`fas fa-search-plus mx-3 ${zoomInClass}`}
          onClick={zoomIn}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
