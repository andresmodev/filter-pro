import styles from "./Pagination.module.css";
import Button from "../Button/Button.jsx";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // si soló hay una página no muestro nada

  const handlePrevius = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const getPageNumbers = (range = 3) => {
    const start = Math.max(1, currentPage - Math.floor(range / 2));
    const end = Math.min(totalPages, start + range - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.container}>
      <Button onClick={handlePrevius} disabled={currentPage === 1}>
        Anterior
      </Button>

      {pageNumbers.map((page) => (
        <Button key={page} onClick={() => handlePageClick(page)} disabled={currentPage === page}>
          {page}
        </Button>
      ))}

      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Siguiente
      </Button>
    </div>
  );
}

export default Pagination;

/* 
const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 0; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // si hay muchas, mostrar la primera
      pages.push(1);

      let start = Math.max(2, currentPage - 2);
      let end = Math.min(totalPages - 1, currentPage + 2);

      // Ajustar si se esta cerca del inicio o del final
      if (currentPage <= 3) end = 5;
      if (currentPage >= totalPages - 2) start = totalPages - 4;

      // Agregar (...) si hay salto después de la página 1
      if (start > 2) pages.push("...");

      // Agregar números intermedios
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Agregar (...) antes de la última página
      if (end < totalPages - 1) pages.push("...");

      // Siempre mostrar la última página
      if (totalPages > 1) pages.push(totalPages);
    }

    return pages;
  };
*/
