function selectionSort(arreglo) {
    let longitud = arreglo.length; // O(1)
  
    for (let i = 0; i < longitud; i++) { // O(1)
      let minimo = i; // O(1)
      for (let j = i + 1; j < longitud; j++) { // O(1)
        if (arreglo[j] < arreglo[minimo]) { // No se genera espacio en memoria
          minimo = j; // No se genera espacio en memoria
        }
      }
      if (minimo != i) { // No se genera espacio en memoria
        let temporal = arreglo[i]; // O(1)
        arreglo[i] = arreglo[minimo]; // No se genera espacio en memoria
        arreglo[minimo] = temporal; // No se genera espacio en memoria
      }
    }
    return arreglo; // No se genera espacio en memoria
  }