const imagen_nosotros = document.getElementById("imagen_nosotros")
imagen_nosotros.style.height = `${document.getElementById("contenido1_texto").offsetHeight}px`
    
        const opciones = document.querySelectorAll('.menuPrincipal li');
        opciones[0].addEventListener("click", scrollbajo1);
        opciones[1].addEventListener("click", scrollbajo2);
        opciones[2].addEventListener("click", scrollbajo3);
        opciones[3].addEventListener("click", scrollbajo4);
        opciones[4].addEventListener("click", scrollbajo5);
        opciones[5].addEventListener("click", scrollbajo6);
        opciones[6].addEventListener("click", scrollbajo7);

        const opciones2 = document.querySelectorAll('.menuPrincipal2 li');
        opciones2[0].addEventListener("click", scrollbajo1);
        opciones2[1].addEventListener("click", scrollbajo2);
        opciones2[2].addEventListener("click", scrollbajo3);
        opciones2[3].addEventListener("click", scrollbajo4);
        opciones2[4].addEventListener("click", scrollbajo5);
        opciones2[5].addEventListener("click", scrollbajo6);
        opciones2[6].addEventListener("click", scrollbajo7);

        const opcionesN = document.querySelectorAll('.menuNavegacion li');
        opcionesN[0].addEventListener("click", scrollbajo1);
        opcionesN[1].addEventListener("click", scrollbajo2);
        opcionesN[2].addEventListener("click", scrollbajo3);
        opcionesN[3].addEventListener("click", scrollbajo4);
        opcionesN[4].addEventListener("click", scrollbajo5);
        opcionesN[5].addEventListener("click", scrollbajo6);
        opcionesN[6].addEventListener("click", scrollbajo7);

        function scrollbajo1(){
            window.scrollTo(0, 0)
        }
        function scrollbajo2(){
            window.scrollTo(0, 758)
        }
        function scrollbajo3(){
            const valor_height = document.getElementById("nosotros").offsetHeight
            window.scrollTo(0, Number(730) + valor_height,) 
        }
        function scrollbajo4(){
            const valor_height1 = document.getElementById("nosotros").offsetHeight
            const valor_height2 = document.getElementById("listProductos").offsetHeight
            window.scrollTo(0, Number(740) + valor_height1 + valor_height2)
        }
        function scrollbajo5(){
            const valor_height1 = document.getElementById("nosotros").offsetHeight
            const valor_height2 = document.getElementById("listProductos").offsetHeight
            const valor_height3 = document.getElementById("novedades").offsetHeight
            window.scrollTo(0, Number(730) + valor_height1 + valor_height2 + valor_height3)
        }
        function scrollbajo6(){
            const valor_height1 = document.getElementById("nosotros").offsetHeight
            const valor_height2 = document.getElementById("listProductos").offsetHeight
            const valor_height3 = document.getElementById("novedades").offsetHeight
            const valor_height4 = document.getElementById("revisar").offsetHeight
            window.scrollTo(0, Number(730) + valor_height1 + valor_height2 + valor_height3 + valor_height4)
        }
        function scrollbajo7(){
            const valor_height1 = document.getElementById("nosotros").offsetHeight
            const valor_height2 = document.getElementById("listProductos").offsetHeight
            const valor_height3 = document.getElementById("novedades").offsetHeight
            const valor_height4 = document.getElementById("revisar").offsetHeight
            const valor_height5 = document.getElementById("contactanos").offsetHeight
            window.scrollTo(0, Number(730) + valor_height1 + valor_height2 + valor_height3 + valor_height4 + valor_height5)
        }

        function mostrar_buscar(){
            const barra_buscar = document.getElementById("buscar")
            const carrito = document.getElementById("carrito")
            const menu_navegacion = document.getElementById("links_boton_navegacion")
            const icono_menu = document.getElementById("icono_menu")

            barra_buscar.classList.toggle("active")
            carrito.classList.remove("active")
            menu_navegacion.classList.remove("active")
            icono_menu.classList.remove("active")
        }
        function mostrar_carrito(){
            const barra_buscar = document.getElementById("buscar")
            const carrito = document.getElementById("carrito")
            const menu_navegacion = document.getElementById("links_boton_navegacion")
            const icono_menu = document.getElementById("icono_menu")

            barra_buscar.classList.remove("active")
            carrito.classList.toggle("active")
            menu_navegacion.classList.remove("active")
            icono_menu.classList.remove("active")
        }
        function mostrar_menu_navegacion(){
            const barra_buscar = document.getElementById("buscar")
            const carrito = document.getElementById("carrito")
            const menu_navegacion = document.getElementById("links_boton_navegacion")
            const icono_menu = document.getElementById("icono_menu")

            barra_buscar.classList.remove("active")
            carrito.classList.remove("active")
            menu_navegacion.classList.toggle("active")
            icono_menu.classList.toggle("active")
        }

        const adicionar__al_carrito = document.querySelectorAll(".adicionar_carrito button")
        for (let boton in adicionar__al_carrito){
            adicionar__al_carrito[boton].onclick = (event) => {
                adicionar_producto_carrito(event)
            }
        }
        function adicionar_producto_carrito(local){
            document.getElementById("boton_confirmar").parentNode.removeChild(document.getElementById("boton_confirmar"))

            var local_info = local.path[2]
            
            const div_geral = document.getElementById("carrito")

            const div_local = document.createElement("div")
            div_local.className = "producto_carrito"

            const div_img = document.createElement("div")
            div_img.className = "imagen_producto_carrito"
            const img_div = document.createElement("img")
            img_div.src = local_info.getElementsByTagName("img")[0].src
            div_img.appendChild(img_div)

            const div_info = document.createElement("div")
            div_info.className = "nombre_precio"
            const nombre = document.createElement("p")
            nombre.innerHTML = local_info.getElementsByTagName("h2")[0].innerHTML
            const precio = document.createElement("p")
            precio.innerHTML = local_info.getElementsByTagName("p")[0].innerHTML
            div_info.appendChild(nombre)
            div_info.appendChild(precio)

            const div_boton = document.createElement("div")
            div_boton.className = "boton_excluir"
            const boton = document.createElement("button")
            const img_boton = document.createElement("img")
            img_boton.src = "imagens/excluir.png"
            img_boton.onclick = (event) => {
                excluir_producto_carrito(event)
            }
            boton.appendChild(img_boton)
            div_boton.appendChild(boton)

            const div_boton_confirmar = document.createElement("div")
            div_boton_confirmar.id = "boton_confirmar"
            const boton_confirmar = document.createElement("button")
            boton_confirmar.innerHTML = "Checkout Now"
            div_boton_confirmar.appendChild(boton_confirmar)

            div_local.appendChild(div_img)
            div_local.appendChild(div_info)
            div_local.appendChild(div_boton)

            div_geral.appendChild(div_local)
            div_geral.appendChild(div_boton_confirmar)
        }
        function excluir_producto_carrito(local){
            var local_producto = local.path[3]
            local_producto.parentNode.removeChild(local_producto)
        } 