const Users = {
    "data": [
    {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "age": 30,
    "userAccount": "Premium",
    "first_name": "Michael",
    "last_name": "Lawson",
    "description": "Lorem ipsum"
    },
    {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "age": 78,
    "userAccount": "Basic",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "description": "Lorem ipsum"
    },
    {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "age": 23,
    "userAccount": "Basic",
    "first_name": "Tobias",
    "last_name": "Funke",
    "description": "Lorem ipsum"
    },
    {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "age": 86,
    "userAccount": "Basic",
    "first_name": "Byron",
    "last_name": "Fields",
    "description": "Lorem ipsum"
    },
    {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "age": 30,
    "userAccount": "Premium",
    "first_name": "George",
    "last_name": "Edwards",
    "description": "Lorem ipsum"
    },
    {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "age": 67,
    "userAccount": "Premium",
    "first_name": "Rachel",
    "last_name": "Howell",
    "description": "Lorem ipsum"
    },
    {
    "id": 13,
    "email": "adrian.bell@reqres.in",
    "age": 54,
    "userAccount": "Basic",
    "first_name": "Adrian",
    "last_name": "Bell",
    "description": "Lorem ipsum"
    },
    {
    "id": 14,
    "email": "adrian.bell@reqres.in",
    "age": 54,
    "userAccount": "",
    "first_name": "Adrian",
    "last_name": "Bell",
    "description": "Lorem ipsum"
    }
    ]
    }

    const crearObjetoHTMLUsers = (usuario) => {
        const div = document.createElement('div');
        const userId = document.createElement('h2');
        const nombreUsuario = document.createElement('h3');
        const tipoCuenta = document.createElement('h4');
        const correo = document.createElement('p');
        const descripcion = document.createElement('p')
    }

    const imprimirUsers = ( ) => {
        const contenedor = document.getElementById ('mainContainer');

        usuarios.data.forEach( (usuario) => {
            const usuarioRepetir = crearObjetoHTMLUsers (usuario);
            contenedor.apprendChild (usuarioRepetir);
        })
    }

    userId.textContent = usuario.id; 
    nombreUsuario.textContent = '${usuario.first_name} ${usuario.last_name}';
    tipoCuenta.textContent = usuario.userAccount;
    correo.textContent = usuario.email;
    descripcion.textContent = usuario.descripcion;

    div.append(userId, nombreUsuario, tipoCuenta, correo, descripcion);

    return div;

    imprimirUsers();
