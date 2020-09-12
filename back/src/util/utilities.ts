const hayValor = (dato: any) => {
  if (dato === null || dato === undefined || dato === '') {
    return false
  }
  return true
}

const hayValorRuta = (variable: any, ruta: any) => {
  const partesRuta = ruta.split(".")
  let valor = false
  let base: any
  let variableFinal: any
  for (const parte of partesRuta) {
    variableFinal = ""
    if (!hayValor(base)) {
      if (hayValor(variable[parte])) {
        base = variable[parte]
        variableFinal = base
      }
    } else {
      if (hayValor(base[parte])) {
        base = base[parte]
        variableFinal = base
      }
    }
  }
  if (hayValor(variableFinal)) {
    valor = true
  }
  return valor;
}

export const UTILITIES = {
  hayValor,
  hayValorRuta
}