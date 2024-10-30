import {Injectable} from '@angular/core';
import { Producto } from '../models/producto.models';
@Injectable ({providedIn: 'root'})
export class ProductosService{
    constructor(){
        console.log("Servicio listo para usar!!!");
    }
    private productos: Producto[] = [
        { 
            nombre: "Toyota Corolla 2023", 
            img: "https://img.asmedia.epimg.net/resizer/v2/P24KNJ2V4VAHXFYOCY35F5G57A.jpg?auth=0e439f9bd4ca9ba6b99f6e42cccc8c82f010632ffdb642869841e9ff148f531f&width=1472&height=828&focal=976%2C427",
            precio: 25000,
            descripcion: "Modelo: Toyota Corolla, Año: 2023, Motor: 2.0L, Transmisión: Automática, Kilometraje: 10,000 km, Color: Blanco, Características: Pantalla táctil de 7'', cámara de reversa, sensores de estacionamiento, Bluetooth."
        },
        { 
            nombre: "Honda Civic 2022", 
            img: "https://di-uploads-pod13.dealerinspire.com/hillsidehonda/uploads/2022/01/2022-Honda-Civic-Hatchback-Hillside-Honda-1024x555.jpeg",
            precio: 24000,
            descripcion: "Modelo: Honda Civic, Año: 2022, Motor: 2.0L, Transmisión: Manual, Kilometraje: 5,000 km, Color: Negro, Características: Asientos de piel, sistema de audio premium, cámara de reversa, control de crucero."
        },
        { 
            nombre: "Ford Mustang 2023", 
            img: "https://www.autopista.es/uploads/s1/10/15/44/03/el-ford-mustang-de-nueva-generacion-en-2023.jpeg",
            precio: 45000,
            descripcion: "Modelo: Ford Mustang, Año: 2023, Motor: V8 5.0L, Transmisión: Automática, Kilometraje: 1,000 km, Color: Rojo, Características: Sistema de sonido Bang & Olufsen, asientos calefaccionados, techo panorámico."
        },
        { 
            nombre: "Chevrolet Silverado 2023", 
            img: "https://di-uploads-pod20.dealerinspire.com/edwardschevydowntown/uploads/2022/12/Chevy-truck-dealer-near-Brighton-AL-2023-Chevy-Silverado-1500-Z71-red.jpg",
            precio: 35000,
            descripcion: "Modelo: Chevrolet Silverado, Año: 2023, Motor: V8 5.3L, Transmisión: Automática, Kilometraje: 2,500 km, Color: Azul, Características: Pantalla de 8'', sistema de navegación, cama de 6.5 pies."
        },
        { 
            nombre: "BMW X5 2022", 
            img: "https://www.autopista.es/uploads/s1/78/50/33/7/la-version-competition-del-bmw-x5-una-de-las-ultimas-en-anadirse-a-la-gama.jpeg",
            precio: 60000,
            descripcion: "Modelo: BMW X5, Año: 2022, Motor: 3.0L Turbo, Transmisión: Automática, Kilometraje: 15,000 km, Color: Gris, Características: Asientos de cuero, sistema de infoentretenimiento iDrive, asistencia de estacionamiento."
        },
        { 
            nombre: "Mercedes-Benz GLE 2023", 
            img: "https://images.ctfassets.net/c9t6u0qhbv9e/7weq8HdYEMTU7WzfcHJWbQ/8f2df6e4533121583e8592b259ca5285/2023_Mercedes-Benz_GLE-Class_review_summary.jpeg",
            precio: 70000,
            descripcion: "Modelo: Mercedes-Benz GLE, Año: 2023, Motor: 3.0L Turbo, Transmisión: Automática, Kilometraje: 5,000 km, Color: Plata, Características: Techo corredizo, asientos ventilados, sistema de sonido Burmester."
        },
        { 
            nombre: "Nissan Altima 2023", 
            img: "https://cdn.jdpower.com/JDP_2023%20Nissan%20Altima%20SL%20Garnet%20Pearl%20Red%20Front%20Quarter%20View.jpg",
            precio: 23000,
            descripcion: "Modelo: Nissan Altima, Año: 2023, Motor: 2.5L, Transmisión: CVT, Kilometraje: 8,000 km, Color: Negro, Características: Asistente de seguridad, pantalla de 8'', conectividad Apple CarPlay y Android Auto."
        },
        { 
            nombre: "Hyundai Tucson 2023", 
            img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/09/hyundai-tucson-opel-grandland-2022-2804009.jpg?tf=3840x",
            precio: 29000,
            descripcion: "Modelo: Hyundai Tucson, Año: 2023, Motor: 2.5L, Transmisión: Automática, Kilometraje: 7,000 km, Color: Rojo, Características: Control de clima automático, sistema de navegación, sensores de estacionamiento."
        },
        { 
            nombre: "Kia Sportage 2023", 
            img: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/08/kia-sportage-vs-kia-sorento-3117844.jpg?tf=3840x",
            precio: 27000,
            descripcion: "Modelo: Kia Sportage, Año: 2023, Motor: 2.4L, Transmisión: Automática, Kilometraje: 6,000 km, Color: Blanco, Características: Pantalla táctil de 10.25'', cámara de reversa, asistente de mantenimiento de carril."
        },
        { 
            nombre: "Subaru Outback 2023", 
            img: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_371a054dfccf421080e16333ee165afe.webp",
            precio: 32000,
            descripcion: "Modelo: Subaru Outback, Año: 2023, Motor: 2.5L, Transmisión: Automática, Kilometraje: 3,000 km, Color: Verde, Características: Sistema de tracción integral, asientos calefaccionados, pantalla de 11.6''."
        },
        { 
            nombre: "Toyota RAV4 2022", 
            img: "https://www.autofacil.es/wp-content/uploads/2022/01/toyotarav4electrichybridadventure3.jpg",
            precio: 32000,
            descripcion: "Modelo: Toyota RAV4, Año: 2022, Motor: 2.5L 4 cilindros, Transmisión: Automática, Kilometraje: 10,000 km, Color: Rojo, Características: Tracción en las cuatro ruedas, sistema de seguridad Toyota Safety Sense."
        },
        { 
            nombre: "Audi Q7 2022", 
            img: "https://www.audi.bo/content/dam/nemo/models/q7/q7/my-2022/NeMo-Derivate-Startpage/stage/1920x1080-Q7_2020_1986.jpg?width=768",
            precio: 80000,
            descripcion: "Modelo: Audi Q7, Año: 2022, Motor: 3.0L V6 Turbo, Transmisión: Automática, Kilometraje: 8,000 km, Color: Blanco, Características: Asientos para 7 pasajeros, sistema de sonido premium Bang & Olufsen."
        },
        { 
            nombre: "Volkswagen Tiguan 2023", 
            img: "https://di-uploads-pod44.dealerinspire.com/nyevolkswagen/uploads/2023/01/Front-angle-view-of-white-2023-Volkswagen-Tiguan-highlighting-its-release-date-and-price-1.jpg",
            precio: 37000,
            descripcion: "Modelo: Volkswagen Tiguan, Año: 2023, Motor: 2.0L 4 cilindros, Transmisión: Automática, Kilometraje: 5,000 km, Color: Plata, Características: Pantalla táctil de 8'', sistema de asistencia para estacionamiento."
        },
        { 
            nombre: "Honda CR-V 2022", 
            img: "https://superautospanama.com/app/nitroapp/layout/media/pubs/2153/0_32536100_1666496167-2153.png",
            precio: 33000,
            descripcion: "Modelo: Honda CR-V, Año: 2022, Motor: 1.5L Turbo, Transmisión: CVT, Kilometraje: 12,000 km, Color: Azul, Características: Asientos traseros reclinables, compatibilidad con Apple CarPlay y Android Auto."
        },
        { 
            nombre: "Ford Explorer 2023", 
            img: "https://autosdeprimera.com/wp-content/uploads/2022/08/ford-explorer-china-2023-b.jpg",
            precio: 48000,
            descripcion: "Modelo: Ford Explorer, Año: 2023, Motor: 2.3L EcoBoost, Transmisión: Automática, Kilometraje: 0 km, Color: Azul, Características: Sistema de tracción total, asientos para 7 pasajeros."
        },
        { 
            nombre: "Mazda CX-5 2022", 
            img: "https://www.muycomputer.com/wp-content/uploads/2022/10/Destacada-Mazda-CX-5-2022.jpg",
            precio: 33000,
            descripcion: "Modelo: Mazda CX-5, Año: 2022, Motor: 2.5L 4 cilindros, Transmisión: Automática, Kilometraje: 8,000 km, Color: Rojo, Características: Asientos de cuero, sistema de audio premium."
        },
        { 
            nombre: "Subaru Forester 2023", 
            img: "https://img.motoryracing.com/noticias/portada/34000/34671-n.jpg",
            precio: 35000,
            descripcion: "Modelo: Subaru Forester, Año: 2023, Motor: 2.5L Boxer, Transmisión: CVT, Kilometraje: 0 km, Color: Amarillo, Características: Tracción en las cuatro ruedas, asistente de conducción EyeSight."
        },
        { 
            nombre: "Volkswagen Tiguan 2022", 
            img: "https://di-uploads-pod33.dealerinspire.com/volkswagenofmarion/uploads/2021/12/2022-vw-tiguan-profile.jpg",
            precio: 36000,
            descripcion: "Modelo: Volkswagen Tiguan, Año: 2022, Motor: 2.0L Turbo, Transmisión: Automática, Kilometraje: 12,000 km, Color: Negro, Características: Pantalla táctil de 8'', sistema de navegación."
        }
        
    ]
    
    getProductos(): Producto[]
    {return this.productos;}

    getProducto(id:number) 
    {return this.productos[id];}
    
    buscarProductos (termino: string): Producto[]{
        let productosArr: Producto[]= [];
        termino = termino.toLocaleLowerCase();
        for(let i= 0;i < this.productos.length; i++){
            let producto = this.productos[i];
            let nombre = producto.nombre.toLocaleLowerCase();
            if(nombre.indexOf(termino)>=0){
                productosArr.push(producto)
            }
        }
        return productosArr;
    }
}