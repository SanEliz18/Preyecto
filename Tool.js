class Tool {
    /**
     * 
     * @param {string} cadena 
     * @returns {string}
     */
    static strToSlug (cadena){
        return encodeURIComponent(cadena).replace(/%20/g, '-');
    }

    static numberToLetter(number){
        let letter;
        switch (number){
            case 1:
                letter = "Uno";
                break;
            case 2:
                letter =  "dos";
                break;
            default:
                letter = "No encontrado";
                break;
        }
        return letter;
    }
    /**
     * 
     * @param {String} parameter 
     * @param {Array} data 
     */
    static setDataToLocalStorage(parameter, data){
        localStorage.setItem(parameter, JSON.stringify(data));
    }
    /**
     * 
     * @param {string} parameter 
     * @returns {Array}
     */
    static getDatFromLocalStorage(parameter){
        return JSON.parse( localStorage.getItem(parameter));
    }

    static identifyUser(user){
        personas = getDatFromLocalStorage(personas)
        user_ = personas.prototype.find(user);
        return user
    }

    static getCarreraFromLocalStorage(parameter="carreras"){
        let carreras = []; 
        let carrerasArray = JSON.parse( localStorage.getItem(parameter));
         carrerasArray.forEach(element => {
            let object =  new Carrera();
            object.Nombre = element.Nombre;
            object.Generacion = element.Generacion;
            carreras.push(object);
        });
        return carreras;
    }
}