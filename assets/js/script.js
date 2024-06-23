const venta = document.querySelector("#venta")
const alquiler = document.querySelector("#alquiler")

console.log(venta)
console.log(alquiler)

if (alquiler !== null) {
    // Arrelo de objetos 
    const propiedades_ventas = [
        {
            nombre: 'Apartamento de lujo en zona exclusiva',
            src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
            descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
            habitaciones: 4,
            banos: 4,
            costo: "5.000",
            smoke: false,
            pets: false  
        },
        {
            nombre: 'Apartamento acogedor en la montaña',
            src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
            descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
            ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
            habitaciones: 2,
            banos: 1,
            costo: "2.500",
            smoke: true,
            pets: true  
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica',
            src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            banos: 3,
            costo: "4.500",
            smoke: false,
            pets: false  
        },
        {
            nombre: 'Apartamento en el centro de la ciudad ',
            src: 'https://a0.muscache.com/im/pictures/miso/Hosting-50546901/original/8c7e8bad-8ffb-4706-8443-d068170207f8.jpeg?im_w=720',
            descripcion: 'Amplio apartemaento con vista oriente',
            ubicacion: '342 hill valley, CA 2141',
            habitaciones: 3,
            banos: 3,
            costo: "2.300",
            smoke: false,
            pets: true  
        }
    ]
    

    const row = document.getElementById("contenedor")
    
    let html= ""
    
    for (let venta of propiedades_ventas){
        html += `
            <div class="col-md-4 mb-4">
                  <div class="card">
                    <img src="${venta.src}" />
                    <div class="card-body">
                      <h5 class="card-title">
                        ${venta.nombre}
                      </h5>
                      <p class="card-text">
                      ${venta.descripcion}
                      </p>
                      <p>
                        <i class="fas fa-map-marker-alt"></i> 
                        ${venta.ubicacion}
                      </p>
                      <p>
                        <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${venta.banos} Baños
                      </p>
                      <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>

                       <p class=" ${venta.smoke ?  "text-success" : "text-danger"} ">
                    <i class="fas ${venta.smoke ?  "fa-smoking" : "fa-smoking-ban"} "></i> 
                    ${venta.smoke ?  "Permitido fumar" : "No se permite fumar"}
                        </p>


                        <p class=" ${venta.pets ?  "text-success" : "text-danger"} ">
                            <i class="fas ${venta.pets ?  "fa-paw" : "fa-ban"} "></i> 
                            ${venta.pets ?  "Mascotas permitidas" : "No se permiten mascotas"}
                        </p>

                    </div>
                  </div>
                </div>
        `
    }
    
    row.innerHTML = html
}




if (venta !== null) {
    
    // Arrelo de objetos 
    const propiedades_alquiler = [
        {
            nombre: 'Apartamento en el centro de la ciudad',
            src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
            descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: "2.000",
            smoke: false,
            pets: true  
        },
        {
            nombre: 'Apartamento luminoso con vista al mar',
            src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
            ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
            habitaciones: 3,
            banos: 3,
            costo: "2.500",
            smoke: true,
            pets: true  
        },
        {
            nombre: 'Condominio moderno en zona residencial',
            src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: "2.200",
            smoke: false,
            pets: false  
        },
        {
            nombre: 'Casa de campo junto al lago ',
            src: 'https://images.adsttc.com/media/images/5728/6d8f/e58e/cebb/a100/0201/large_jpg/Casa_Villarrica06.jpg?1462267267',
            descripcion: 'Hermosa casa de campo con un muelle a  un hermoso lago ',
            ubicacion: '123 river Avenue, east Town, NY 21421',
            habitaciones: 3,
            banos: 1,
            costo: "2.300",
            smoke: false,
            pets: true  
        }
    ]


    const row = document.getElementById("contenedor")

    let html= ""

    for (let alquiler of propiedades_alquiler){
        html += `
            <div class="col-md-4 mb-4">
                <div class="card">
                <img src="${alquiler.src}" />
                <div class="card-body">
                    <h5 class="card-title">
                    ${alquiler.nombre}
                    </h5>
                    <p class="card-text">
                    ${alquiler.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${alquiler.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${alquiler.banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
                
                    
                    <p class=" ${alquiler.smoke ?  "text-success" : "text-danger"} ">
                        <i class="fas ${alquiler.smoke ?  "fa-smoking" : "fa-smoking-ban"} "></i> 
                        ${alquiler.smoke ?  "Permitido fumar" : "No se permite fumar"}
                    </p>


                    <p class=" ${alquiler.pets ?  "text-success" : "text-danger"} ">
                        <i class="fas ${alquiler.pets ?  "fa-paw" : "fa-ban"} "></i> 
                        ${alquiler.pets ?  "Mascotas permitidas" : "No se permiten mascotas"}
                    </p>
                    
                    
                    

                    </div>
                </div>
                </div>
        `
    }

    row.innerHTML = html


}




