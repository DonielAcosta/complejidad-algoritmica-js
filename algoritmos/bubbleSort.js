function bubbleSort(arreglo) {
    let longitud = arreglo.length; // O(1)
    for (let i = 0; i < longitud; i++) { // O(1)
      for (let j = 0; j < longitud; j++) { // O(1)
        if (arreglo[j] > arreglo[j + 1]) { // No se genera espacio en memoria
          let temporal = arreglo[j]; // O(1)
          arreglo[j] = arreglo[j + 1]; // No se genera espacio en memoria
          arreglo[j + 1] = temporal; // No se genera espacio en memoria
        }
      }
    }
    return arreglo; // No se genera espacio en memoria
  }