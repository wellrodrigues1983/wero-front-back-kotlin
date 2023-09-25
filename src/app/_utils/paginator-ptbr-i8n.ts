import { Injectable, Optional, SkipSelf } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable({providedIn: 'root'})
export class MatPaginatorIntlPtBr extends MatPaginatorIntl {


  /** A label for the page size selector. */
  override itemsPerPageLabel: string = 'Itens por página:';

  /** A label for the button that increments the current page. */
  override nextPageLabel: string = 'Avançar';

  /** A label for the button that decrements the current page. */
  override previousPageLabel: string = 'Voltar';

  /** A label for the button that moves to the first page. */
  override firstPageLabel: string = 'Primeira página';

  /** A label for the button that moves to the last page. */
  override lastPageLabel: string = 'Última página';

  /** A label for the range of items within the current page and the length of the whole list. */
  override getRangeLabel: (page: number, pageSize: number, length: number) => string = (
    page: number,
    pageSize: number,
    length: number,
  ) => {
    if (length == 0 || pageSize == 0) {
      return `0 of ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    return `${startIndex + 1} – ${endIndex} de ${length}`;
  };
}

/** @docs-private */
export function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl: MatPaginatorIntl) {
  return parentIntl || new MatPaginatorIntl();
}

/** @docs-private */
export const MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY,
};
