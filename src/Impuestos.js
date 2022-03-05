export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }
    setMontoBrutalAnual() {
        this._montoBrutoAnual = montoBrutoAnual
    }
    getMontoBrutalAnual() {
        return this._montoBrutoAnual
    }
    setDeducciones() {
        this._deducciones = deducciones
    }
    getDeducciones() {
        return this._deducciones
    }
}