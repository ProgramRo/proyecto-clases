import Cliente from './Cliente.js'
import Impuestos from './Impuestos.js'

const impuesto1 = new Impuestos(1500, 2000)
const cliente1 = new Cliente("Claudio", impuesto1)

console.log(cliente1.calcularImpuesto())