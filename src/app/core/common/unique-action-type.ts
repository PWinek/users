/**
 * Globalna zmienna do zapisywania już zdefiniowanych typów akcji
 *
 * @global
 */
const actionTypesCache: { [label: string]: boolean } = {};

/**
 * Funkcja dodaje do `actionTypesCache` typ akcji
 *
 * W przypadku kiedy akcja już jest zdefiniowana, to zdarzy się błąd aplikacji
 */
export function uniqueActionType<T>(label: T | ''): T {
  if (actionTypesCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  actionTypesCache[<string>label] = true;

  return <T>label;
}
