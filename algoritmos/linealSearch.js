function linearSearch(arreglo, clave) { // O(n)
    for (let indice = 0; indice < arreglo.length; indice++) { // O(1)
      if (arreglo[indice] === clave) { // No se genera espacio en memoria
        return indice;  // No se genera espacio en memoria
      }
    }
    return -1; // No se genera espacio en memoria
  }