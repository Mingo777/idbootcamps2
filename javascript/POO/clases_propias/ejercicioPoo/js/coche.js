class Coche {

    constructor(pColor, pMarca, pEscenario) {
        this.color = pColor;
        this.marca = pMarca;
        this.section = pEscenario;

        this.div = document.createElement('div');
        this.div.style.width = "200px";
        this.div.style.height = "80px";
        this.div.innerText = this.marca;
        this.div.style.backgroundColor = this.color;

        this.section.appendChild(this.div);
        this.avance = 0;

    }

    //hacer un metodo que me permite mover el coche alente o atras.


    //podais elegir la tecla que mueve cada coche.

    encender() {
        //console.log('objeto', this);
        let self = this;
        document.addEventListener('keydown', (event) => {
            // console.log('DOM', this)
            if (event.keyCode === 68) {
                //marcha alante
                self.acelerar(40)
            } else if (event.keyCode === 80) {
                //marcha atras
                self.acelerar(-40)
            }
        }
        );
    }

    apagar() {
        document.removeEventListener('keydown', self.moverse);
    }


    acelerar(pVelocidad) {
        this.avance += pVelocidad;
        this.div.style.marginLeft = this.avance + 'px';
    }



}