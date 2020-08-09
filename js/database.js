'use strict'
//Se declara en un arreglo las preguntas
const data = [{
    id: 1,
    question: '¿Un < iframe > es utilizado para desplegar una página web dentro de otra página web?',
    options: [
        'Verdadero',
        'Falso'
    ],
    indexCorrect: 1,
    solutionHtml: ` 
    
    <div class="col-12">
                <div class="jumbotron mt-1">
                    <h1 class="mb-3">Etiqueta iframe</h1>
                    <p style="text-align: justify;">El elemento HTML iframe sirve para crear un espacio
                        dentro
                        de la
                        página donde se puede
                        incrustar otra web. Es un cuadrado cuyas dimensiones debe especificar el desarrollador en la
                        propia
                        página, incluidas por los atributos width y height en la propia etiqueta IFRAME.
                        frame se utiliza en muchos contextos. Dentro de un iframe podemos mostrar contenidos de otras
                        páginas,
                        como si estuvieran en la nuestra, por lo que sirven para ejemplos como:

                        Códigos de banner, que se invocan por medio de un iframe pidiendo los datos del banner
                        generalmente a un
                        servidor de banners que puede estar en otra red.
                        Visualizar contenidos de terceros, como bloques de noticias o novedades que ofrecen en otras
                        webs.
                        Interfaces de usuario, en el que ciertas actividades se realizan de forma autónoma y el
                        procesamiento
                        está en otra página web. </p>
                    <div>

                    </div>
                </div>
            </div>

            <div class="col-12">
                <h2>Sintaxis básica</h2>
                <p>Para hacer uso de la etiqueta iframe utilizar:
                    <code>&lt;iframe src="" frameborder="0"&gt;
                        &lt;/iframe&gt;</code>
                </p>
            </div>
            <div class="col-12">
                <h2>Ejemplo</h2>
                <p>Se incrusta otra página web dentro de esta, el código utilizado es:
                    <code> &lt;iframe src=s"page3.html" frameborder="0"&gt; &lt;/iframe&gt;</code>
                </p>
                <iframe src="index.html" title="W3Schools Free Online Web Tutorials">
                </iframe>
            </div>
            <div class="col-12">
                <h2 class="my-3">Atributos más importantes</h2>
                <table class="table-responsive-md table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Atributo</th>
                            <th>Definición</th>
                        </tr>
                    </thead>


                    <tr>
                        <td> <strong>src</strong> </td>
                        <td>Para indicar la página web que se mostrará en el espacio del frame flotante. </td>
                    </tr>


                    <tr>
                        <td> <strong>width</strong> </td>
                        <td>Para definir la anchura del recuadro del iframe</td>

                    </tr>
                    <tr>
                        <td> <strong>height</strong> </td>
                        <td>Para definir la altura del iframe </td>

                    </tr>
                    <tr>
                        <td> <strong>scrolling</strong> </td>
                        <td>Indica si se quiere que aparezcan barras de desplazamiento para ver los contenidos del
                            iframe completo, en el caso que no aparezcan en el espacio reservado para el iframe. </td>

                    </tr>
                    <tr>
                        <td> <strong>marginwidth</strong> </td>
                        <td>Para definir el margen a izquierda y derechar que debe tener la página que va dentro del
                            iframe, con respecto al borde. </td>

                    </tr>
                    <tr>
                        <td> <strong>marginheight</strong> </td>
                        <td>Lo mismo que marginwidth, pero en este caso para el tamaño del margen por la parte de arriba
                            y abajo. </td>

                    </tr>
                </table>
            </div>
    
    `
},
{
    id: 2,
    question: '¿Cuál es el elemento HTML correcto para insertar un salto de línea?',
    options: [
        '< lb >',
        '< break >',
        '< br >'
    ],
    indexCorrect: 3,
    solutionHtml: `      
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta br</h1>
        <p style="text-align: justify;">El elemento HTML break < br> produce un salto de línea en el
                texto . Es útil para escribir un poema o una dirección, donde la división de
                las líneas es significante. </p>
        <div>

        </div>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta br utilizar:
        <code>&lt;br&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Línea 1 'se usa < br>' <br>
            Línea 2 'se usa < br>' <br>
    </p>
</div>
    
    `
}
    ,
{
    id: 3,
    question: '¿Cómo se define una lista numerada?',
    options: [
        '< ul >',
        '< ol >',
        '< dl >',
        '< list >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta ol</h1>
        <p style="text-align: justify;">
            El elemento ol representa una lista ordenada de ítems que, en contraste con las listas no
            ordenadas
            (elemento ul), produce un significado diferente si el orden de los ítems es alterado. Los ítems
            de
            ambas listas, ordenadas y no ordenadas, son representados por el elemento li.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta lo utilizar:
        <code>&lt;ol&gt; 
            Aquí van etiquetas li    
            &lt;/ol&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se hace uso del siguiente html:<code>&lt;ol&gt; 
        <code>&lt;li&gt; 
            .... 
            &lt;/li&gt;</code>
        &lt;/ol&gt;</code>
    </p>

    <ol>
        <li>Ecuador</li>
        <li>Colombia</li>
        <li>Perú</li>
    </ol>
</div>
    
    `
},
{
    id: 4,
    question: '¿Cuál es el elemento correcto para reproducir un archivo de video?',
    options: [
        '< media >',
        '< video >',
        '< movie >'
    ],
    indexCorrect: 2,
    solutionHtml: `    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta video</h1>
        <p style="text-align: justify;">
            El elemento HTML video se utiliza para incrustar vídeos en un documento HTML o XHTML.
            De hecho, si arrastramos un video a la ventana del navegador, veremos que comienza a
            reproducirse en él. Para poder insertar videos en nuestras páginas HTML tenemos que utilizar la
            etiqueta < video>, que junto a la etiqueta < source> podremos utilizar estas capacidades
                    multimedia de HTML5.

                    Si lo que quieres es insertar videos desde Youtube, Vimeo u otro servicio alternativa,
                    debes utilizar la etiqueta < iframe> en lugar de la etiqueta <p video>.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta video utilizar:
        <code> &lt;video &gt src="url" &lt;/ &gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se hace uso del siguiente html:<code>&lt;video src="assets/video.mp4" controls&gt; 
       
        &lt;/video&gt;</code>
    </p>

    <video src="assets/video.mp4" controls></video>
</div>
<div class="col-12">
    <h2>Atributos más importantes</h2>
    <table class="table-responsive-md table table-striped table-bordered">
        <thead>
            <tr>
                <th>Atributo</th>
                <th>Definición</th>
            </tr>
        </thead>


        <tr>
            <td> <strong>autoplay</strong> </td>
            <td>Un atributo booleano; si se especifica, el video comenzará a reproducirse automáticamente
                tan pronto
                como sea posible, sin detenerse para terminar de cargar los datos.</td>
        </tr>


        <tr>
            <td> <strong>autobuffer</strong> </td>
            <td> Un atributo booleano; si se especifica, el video comenzará automáticamente a almacenarse en
                el
                búfer, incluso si no está listo para reproducirse de forma automática. Esto se debe utilizar
                para
                los casos en los que se considera probable que el video se reproduzca (por ejemplo, si el
                usuario
                accedió a esa página específica para reproducir el video, no si hay un video insertado junto
                con
                otros contenidos). El video se almacena en el búfer hasta que el caché de medios esté lleno.
            </td>

        </tr>
        <tr>
            <td> <strong>buffered</strong> </td>
            <td>Un atributo que se puede leer para determinar qué intervalos de tiempo del multimedia se han
                almacenado en búfer. Este atributo contiene un objeto TimeRanges .</td>

        </tr>
        <tr>
            <td> <strong>controls</strong> </td>
            <td>Si está presente este atributo, Gecko ofrecerá controles para permitir que el usuario
                controle la
                reproducción de video, incluyendo volumen, búsqueda y pausar/reanudar reproducción.</td>

        </tr>
        <tr>
            <td> <strong>height</strong> </td>
            <td>La altura del área de visualización del vídeo en píxeles CSS.</td>

        </tr>
        <tr>
            <td> <strong>src</strong> </td>
            <td>La URL del vídeo que se va a insertar. Es opcional; podrás optar, en su lugar, por el
                elemento
                < source> dentro del bloque de vídeo para especificar el video que se va a incrustar. </td>

        </tr>

        <tr>
            <td> <strong>loop</strong> </td>
            <td> Un atributo booleano; si se especifica, al alcanzar el final del video, buscaremos
                automáticamente hasta
                el principio.</td>

        </tr>
    </table>
</div>`
},
{
    id: 5,
    question: '¿Quien define los estándares sobre la Web?',
    options: [
        'World Wide Web Consortium',
        'Mozilla',
        'Google',
        'Microsoft'
    ],
    indexCorrect: 1,
    solutionHtml: ` <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">World Wide Web Consortium</h1>
        <p style="text-align: justify;">

            El Consorcio WWW, en inglés: World Wide Web Consortium (W3C), es un consorcio internacional que
            genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo
            plazo.

            Este consorcio fue creado en octubre de 1994 y está dirigido por Tim Berners-Lee, el creador
            original del URL (Uniform Resource Locator, Localizador Uniforme de Recursos), del HTTP
            (HyperText
            Transfer Protocol, Protocolo de Transferencia de HiperTexto) y del HTML (Hyper Text Markup
            Language,
            Lenguaje de Marcado de HiperTexto), que son las principales tecnologías sobre las que se basa la
            Web.
            Tomado de wikipedia
        </p>
    </div>
</div>`
},
{
    id: 6,
    question: 'Seleccione el elemento HTML correcto para definir un texto importante:',
    options: [
        '< important >',
        '< strong >',
        '< i >',
        '< b >'
    ],
    indexCorrect: 2,
    solutionHtml: ` <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta strong</h1>
        <p style="text-align: justify;">La etiqueta strong nos permite enfatizar un texto. Esta etiqueta
            visiblemente sea muy parecida a la
            negrita ya que muchos navegadores enfatizan el texto poniéndolo en negrita. En HTML5 va a
            representar el texto importante. </p>
        <div>

        </div>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta br utilizar:
        <code> &lt;strong&gt;texto enfatizado&lt;/strong&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se hace uso del html:  <code> &lt;strong&gt;Ecuador&lt;/strong&gt;</code></p>
    <p>El <strong>Ecuador</strong> es un país sudamericano.</p>
</div>`
},
{
    id: 7,
    question: 'En HTML, cuál atributo es usado para especificar que un campo de entrada debe ser llenado?',
    options: [
        'required',
        'validate',
        'formvalidate',
        'placeholder'
    ],
    indexCorrect: 1,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">El atributo required</h1>
        <p style="text-align: justify;">Se hace uso cuando necesitamos que alguno de los campos del
            formulario este rellenado por el
            visitante
            obligatoriamente.
            La versión HTML5 ha añadido este nuevo atributo, required que nos permite comprobar que el campo
            ha
            sido rellenado antes incluso de pulsar ese botón de envío, sin necesidad de más complicaciones o
            código extra. </p>
    </div>
</div>
<div class="col-12">

    <h3>Ejemplo</h3>
    <img class="img-fluid" src="assets/img1.JPG" alt="">
    </p>
    <p>En la imagen se mostró un ejemplo utilizando el atributo required en donde si no se llena el
        campo no
        puede avanzar.</p>
</div>
    `
},
{
    id: 8,
    question: '¿Cuál es el HTML correcto para hacer un área de texto?',
    options: [
        '< textarea >',
        '< input type="textbox" >',
        '< input type="textarea" >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta textarea</h1>
        <p style="text-align: justify;">
            El elemento HTML textarea representa un control para la edición mutilínea de texto sin formato.
            Las áreas de texto de esta clase son usadas para comentarios en los blogs y paginas web, o
            cualquier otro propósito que requiera un espacio extensible para introducir texto.

            Para crear un área de texto necesitaremos una etiqueta de abertura y de cierre como esta:
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta textarea utilizar:
        <code>&lt;textarea cols="30" rows="10" &gt;
            &lt;/textarea&gt;</code>
    </p>

</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se hace uso de este html: <code>&lt;textarea name="" id="" cols="30" rows="10" &gt;
        &lt;/textarea&gt;</code>
    </p>
    <textarea name="" id="" cols="30" rows="10">
    </textarea>
</div>

<div class="col-12">
    <h2>Atributos más importantes</h2>
    <table class="table-responsive-md table table-striped table-bordered">
        <thead>
            <tr>
                <th>Atributo</th>
                <th>Definición</th>
            </tr>
        </thead>


        <tr>
            <td> <strong>autocomplete</strong> </td>
            <td>Este atributo indica si el valor del control puede ser completado automáticamente por el
                navegador. Los valores posibles son: off y on.</td>
        </tr>


        <tr>
            <td> <strong>autofocus</strong> </td>
            <td>Este atributo booleano te permite especificar que un control de un formulario adquiera el
                foco cuando se carga la página, salvo que el usuario anule esto , por ejemplo tecleando en
                un control diferente. Sólo se puede especificar este atributo en los elementos asociados a
                formularios.</td>

        </tr>
        <tr>
            <td> <strong>cols</strong> </td>
            <td>La anchura visible del control de texto, en caracteres de anchura media. Si está definido
                debe ser positivo. Si no, por defecto, el valor es 20 (HTML 5).</td>

        </tr>
        <tr>
            <td> <strong>disabled</strong> </td>
            <td>Este atributo booleano indica que el usuario no puede interactuar con el control. Si el
                atributo no está definido se hereda su valor del elemento en el que está contenido, por
                ejemplo < fieldset>; Si no está dentro de un elemento contenedor con el atributo disable
                    establecido, entonces el control estará habilitado. </td>

        </tr>
        <tr>
            <td> <strong>form</strong> </td>
            <td>El formulario al cual el elemento textarea está asociado (el propietario del formulario). El
                valor del atributo debe ser un ID de un elemento formulario del mismo documento. Si no se
                especifica este atributo, el textarea debe ser un descendiente de un elemento formulario.
                Permite colocar elementos textarea en cualquier lugar dentro de un documento, no sólo como
                descendientes de formularios. </td>

        </tr>
        <tr>
            <td> <strong>readonly</strong> </td>
            <td>Este atributo booleano indica que el usuario no puede modificar el valor del control. Al
                contrario que el atributo disable, el atributo readonly no evita que el usuario haga click o
                seleccione el control. El valor del control read-only si que se envía con el formulario.
            </td>

        </tr>
    </table>
</div>
    `
},
{
    id: 9,
    question: '¿Los elementos de bloque normalmente se despliegan sin iniciar una nueva línea?',
    options: [
        'Verdadero',
        'Falso'
    ],
    indexCorrect: 2,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Los elementos bloque</h1>
        <p style="text-align: justify;">
            Un elemento en bloque ocupa todo el espacio de su elemento padre (contenedor), creando así un
            "bloque". Este artículo ayuda a explicar lo que esto significa.

            Los navegadores suelen mostrar el elemento a nivel de bloque con un salto de línea antes y
            después
            del elemento.
            Algunas de las etiquetas de bloque son: h, p, header, footer, form, ol, pre, hr.
        </p>
    </div>
</div>

<div class="col-12">
    <p>
    <h3>Ejemplo:</h3>
    <p>Se utiliza un párrafo p y un encabezado h1 las cuales se ponen en una nueva línea.</p>
    </p>
    <p>Soy un párrafo p</p>
    <h1>Soy una cabezera h1</h1>
</div>
    
    `
},
{
    id: 10,
    question: '¿Cuál caracter es el correcto para indicar una etiqueta de fin?',
    options: [
        '/',
        '^',
        '<',
        '*'
    ],
    indexCorrect: 1,
    solutionHtml: `


    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta fin</h1>
        <p style="text-align: justify;">
            Las etiquetas de HTML inician de la manera (<>), para indicar el fin de una etiqueta se utiliza
                (</>), por ello se utiliza el signo / para indicar el cierra de la misma. Sin embargo, no
            todas utilizan el signo para cerrar, hay ciertas etiquetas que no necesitan cerrar como una img
            o un br por ejemplo.
        </p>
    </div>
</div>


    `
},
{
    id: 11,
    question: '¿Cuál elemento define enlaces de navegación?',
    options: [
        '< nav >',
        '< navigate >',
        '< navigation >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta nav</h1>
        <p style="text-align: justify;">
            El elemento HTML nav representa una sección de una página cuyo propósito es proporcionar enlaces
            de navegación, ya
            sea dentro del documento actual o a otros documentos. Ejemplos comunes de secciones de
            navegación son menús, tablas de contenido e índices.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta nav utilizar:
        <code>&lt;nav &gt; Elementos de navegación
            &lt;/nav&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Código utilizado:</p>
    <img class="img-fluid" src="assets/img2.JPG" alt="Imagen">
    <nav>
        <ul>
            <li><a href="https://www.google.com/">Ir a google</a></li>
            <li><a href="https://www.facebook.com/">Ir a facebook</a></li>
            <li><a href="https://www.cinecalidad.is//">Ir a cinecalidad</a></li>
        </ul>
    </nav>
    <p>El atributo href es donde se coloca la url a donde se quiere redirigir</p>
</div>
    
    `
},
{
    id: 12,
    question: 'Gráficos definidos por SVG en qué formato están?',
    options: [
        'CSS',
        'HTML',
        'XML'
    ],
    indexCorrect: 3,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Gráficos SVG</h1>
        <p style="text-align: justify;">
            Gráficos vectoriales escalables, o gráficos vectoriales redimensionables o SVG es un formato de
            gráficos vectoriales bidimensionales, tanto estáticos como animados, <strong>en formato
                XML</strong> , cuya
            especificación es un estándar abierto desarrollado por el W3C desde 1999
        </p>
    </div>
</div>
    `
},
{
    id: 13,
    question: '¿A qué corresponden las siglas HTML?',
    options: [
        'Hyper Text Markup Language',
        'Hyperlinks and Text Markup Language',
        'Home Tool Markup Language'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Lenguaje HTML</h1>
        <p style="text-align: justify;">
            HTML, siglas en inglés de <strong>HyperText Markup Language (‘lenguaje de marcas de
                hipertexto’)</strong> , hace
            referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve
            de referencia del software que conecta con la elaboración de páginas web en sus diferentes
            versiones, define una estructura básica y un código (denominado código HTML) para la definición
            de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. Es un
            estándar a cargo del World Wide Web Consortium (W3C) o Consorcio WWW, organización dedicada a la
            estandarización de casi todas las tecnologías ligadas a la web, sobre todo en lo referente a su
            escritura e interpretación. HTML se considera el lenguaje web más importante siendo su invención
            crucial en la aparición, desarrollo y expansión de la World Wide Web (WWW). Es el estándar que
            se ha impuesto en la visualización de páginas web y es el que todos los navegadores actuales han
            adoptado
        </p>
    </div>
</div>
    `
},
{
    id: 14,
    question: '¿Cuál es el HTML correcto para hacer una lista desplegable?',
    options: [
        '< input type="list" >',
        '< list >',
        '< input type="dropdown" >',
        '< select >'
    ],
    indexCorrect: 4,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta select</h1>
        <p style="text-align: justify;">El elemento select (select) de HTML representa un control que
            muestra un menú de opciones. Las opciones contenidas en el menú son representadas por elementos
            (option), los cuales pueden ser agrupados por elementos (optgroup). La opcion puede estar
            preseleccionada por el usuario.</p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta select utilizar:
        <code>&lt;select&gt;  <code>&lt;option&gt;
            &lt;/option&gt;</code>
        &lt;/select&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Imagen del código utilizado: </p>
    <img class="img-fluid"  src="assets/img3.JPG" alt="">
    <select class="mt-3" style="display: block;">
        <option value="A">Ecuador</option>
        <option value="B">Perú</option>
        <option value="C">Colombia</option>
    </select>
    <p>El atributo value de la etiqueta option es el valor como tal que se enviará para poder tomar
        decisiones, guardar en una base de datos muy posiblemente</p>
</div>
<div class="col-12">
    <h2>Atributos más importantes</h2>
    <table class="table-responsive-md table table-striped table-bordered">
        <thead>
            <tr>
                <th>Atributo</th>
                <th>Definición</th>
            </tr>
        </thead>


        <tr>
            <td> <strong>autofocus</strong> </td>
            <td>ste atributo permite especificar un formulario de control que debería tener enfoque de
                entrada cuando se carga la página, a no ser que el usuario lo sobreescriba, por ejemplo,
                escribiendo un control diferente.</td>
        </tr>


        <tr>
            <td> <strong>disabled</strong> </td>
            <td>El atributo booleano especifica que el usuario no puede interactuar con el control. Si este
                atributo no está especificado, el control hereda los ajustes del campo que lo contiene, por
                ejemplo del fielset; si no hay elemento contenido con el atributo disabled, entonces el
                control se considera enable (activado).</td>

        </tr>
        <tr>
            <td> <strong>form</strong> </td>
            <td>El elemento formulario al cual el select está asociado (su propietario del formulario). Si
                este atributo está especificado, su valor deberá ser el ID de un formulario en el mismo
                documento. Esto te permite situar elementos en cualquier parte del documento, no solo de
                manera descendiente con respecto a su elemento formulario.</td>

        </tr>
        <tr>
            <td> <strong>multiple</strong> </td>
            <td>Este elemento booleano indica que se pueden seleccionar múltiples opciones de la lista. Si
                no está especificado, solo se podrá seleccionar una opción cada vez. </td>

        </tr>
        <tr>
            <td> <strong>size</strong> </td>
            <td>Si el control se presenta como una lista con scroll en caja, este atributo representa el
                numero de filas que la list tendrá visible la primera vez. Los navegadores no están
                requeridos a presentar un elemento select como una lista con escroll en caja. El valor por
                defecto es cero.</td>

        </tr>
    </table>
</div>
    `
},
{
    id: 15,
    question: '¿Cual es la construcción HTML correcta para crear un hiperlink?',
    options: [
        '< a >URL< /a >',
        '< a href="URL" >UTN< /a >',
        '< name="URL">UTN< /a >',
        '< a url="URL">UTN< /a >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Los hipervínculos</h1>
        <p style="text-align: justify;">
            Los hipervínculos son elementos verdaderamente importantes. Son los que hacen que la web sea
            web. En este artículo aprenderemos la sintaxis necesaria para programar un vínculo y un catálogo
            de buenas prácticas para hacerlo. <strong>En HTML para un hipervínculo básico se utiliza la
                etiqueta a.</strong>
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta a utilizar:
        <code>&lt;a href="url"&gt;  
        &lt;/a&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Código utilizado:
        <code>&lt;a href="https://www.google.com/"&gt; Ir a google 
        &lt;/a&gt;</code>
        <br>
        <a href="https://www.google.com/">Ir a google</a>
</div>

    `
},
{
    id: 16,
    question: '¿Cuál doctype es correcto para HTML5?',
    options: [
        '< !DOCTYPE html >',
        '< !DOCTYPE HTML5 >',
        '< !DOCTYPE HTML PUBLIC "-/W3C/DTD HTML 5.0/EN" "ww3 org/TR/html5/strict.dtd" >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Doctype válido</h1>
        <p style="text-align: justify;">
            Todos los documentos HTML deben comenzar con una declaración <! DOCTYPE>.

                La declaración no es una etiqueta HTML. Es una "información" para el navegador sobre qué
                tipo de documento esperar.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra una página de inicio html:
    </p>
    <img class="img-fluid" src="assets/img4.JPG">
</div>
    `
},
{
    id: 17,
    question: 'En HTML, qué define el elemento < aside >?',
    options: [
        'Contenido que está "aparte" del contenido principal de la página.',
        'Una lista de navegación que debe mostrarse en el lado izquierdo de la página.',
    ],
    indexCorrect: 1,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Elemento aside</h1>
        <p style="text-align: justify;">
            El elemento aside es un contenedor para información que se considera solo levemente relacionada
            al documento o la sección en la que es definida. En otras palabras, el contenido del elemento
            aside debe estar relacionado al contenido circundante, pero no ser completamente necesario para
            su comprensión.

            El elemento aside puede ser típicamente encontrado alrededor de enlaces de blogrolls, enlaces al
            archivo, un glosario, una lista de tweets del autor, o notas, pensamientos o ideas que se le han
            ocurrido al autor durante la producción del documento. Asimismo, puedes ver ejemplos perfectos
            de notas al margen en revistas y diarios impresos, donde se provee información adicional (pero
            no crítica) para enriquecer la experiencia del usuario. Se usa < aside > < /aside >
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra un modelo de página con aside
    </p>
    <img class="img-fluid"  src="assets/img5.png">
</div>

    `
},
{
    id: 18,
    question: 'En HTML, onblur y onfocus son:',
    options: [
        'elementos HTML',
        'atributos de evento',
        'atributos de estilo'
    ],
    indexCorrect: 2,
    solutionHtml: `   <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Los eventos onFocus y onBlur</h1>
        <p style="text-align: justify;">
            El evento onFocus detecta la entrada (focus) en un elemento del formulario, por ejemplo un text,
            textarea o window; mientras que onBlur actúa de manera contraria , es decir, detecta la perdida
            del foco.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra una entrada de texto con los eventos de perder y ganar foco
    </p>
    <p>Cuando el puntero entra en el input se ejecuta la función foco, si el puntero sale se ejecuta la
        función focoLost</p>
    <img class="img-fluid" src="assets/img6.JPG">
</div>
`

},
{
    id: 19,
    question: '¿Cómo se define una lista con viñetas?',
    options: [
        '< ol >',
        '< list >',
        '< ul >',
        '< dl >'
    ],
    indexCorrect: 3,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta ul</h1>
        <p style="text-align: justify;">
            Una etiqueta
        ul contiene a todas los elementos de la lista y dentro de ella irán los atributos que afectan a
            toda la lista en bloque. <strong>Por defecto a los elementos dentro de ul se le agrega una
                viñeta.</strong>
            </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Código utilizado</p>
    <img class="img-fluid" src="assets/img7.JPG">
    <ul>
        <li>Ecuador</li>
        <li>Pánama</li>
        <li>Chile</li>
    </ul>

</div>
    
    `
},
{
    id: 20,
    question: '¿Cuál es la forma correcta para insertar una imagen de fondo?',
    options: [
        '< body style="background-image:url(background.gif)" >',
        '< background img="background.gif" >',
        '< body bg="background.gif" >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Insertar una imagen de fondo</h1>
        <p style="text-align: justify;">
            Para inserta una imagen de fondo en un elemento web se utiliza CSS en su propiedad
            background-image: url(), en la url se asigna la dirección de la imagen en cuestión.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Para el ejemplo se coloca una imagen de fondo para una etiqueta div.</p>
    <img class="img-fluid" src="assets/img9.JPG">
    <p>Se ha colocado una imagen para el fondo</p>
    <div style="width: 200px; height: 200px; 
    background-image: url('assets/img8.jpg');"></div>
</div>
    
    `
},
{
    id: 21,
    question: 'El atributo global "contenteditable" es usado para:',
    options: [
        'Especificar el menu contextual de un elemento. El menú aparece cuando el usuario hace click derecho en el elemento.',
        'Actualizar contenido desde el servidor.',
        'Retornar a la posición de la primera ocurrencia encontrada dentro del contenido de una cadena.',
        'Especifica si el contenido de un elemento podría ser editado o no.'
    ],
    indexCorrect: 4,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Contenteditable</h1>
        <p style="text-align: justify;">
            El atributo global contenteditable es un atributo enumerado que indica si el elemento debe de
            ser editable por el usuario . Si es así, el explorador modifca su widget para permitir la
            edición . El atributo debe de tener alguno de los siguientes valores:
        <ul>
            <li>
                true o una string vacia, que indica que el elemento debe de ser editable.
            </li>
            <li>
                false, que indica que el elemento no debe ser editable.
            </li>
        </ul>
        </p>
    </div>
</div>


<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Para el ejemplo se realiza que un label sea editable por el usuario, por defecto un label no puede
        ser modificado</p>
    <img class="img-fluid" src="assets/img10.JPG">
    <p>La palabra hello esta en un label y puede editarse!</p>

    <label contenteditable="true">hello</label>


</div>

    `
},
{
    id: 22,
    question: 'Los elementos en linea (inline) son normalmente desplegados sin iniciar una nueva línea?',
    options: [
        'Verdadero',
        'Falso'
    ],
    indexCorrect: 1,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Los elementos en línea (inline)</h1>
        <p style="text-align: justify;">
            Un elemento en línea ocupa solamente el espacio necesario y no el de su padre(contenedor), creando así un
            elemento en línea. 
            Algunas de las etiquetas en línea son: button, label, textarea, input, a, code, cite, small, i.
        </p>
    </div>
</div>

<div class="col-12">
    <p>
    <h3>Ejemplo:</h3>
    <p>Se utiliza un boton button y un label las cuales se ponen en la misma línea</p>
    </p>
    <button>Soy un botón</button>
    <label>Soy un label</label>
</div>
    
    `
},
{
    id: 23,
    question: 'Los comentarios HTML inician con < !-- y terminan con -- >',
    options: [
        'Verdadero',
        'Falso'
    ],
    indexCorrect: 1,
    solutionHtml: `      <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Comentarios en HTML</h1>
        <p style="text-align: justify;">
            Los comentarios en HTML son muy fáciles de poner. Es como una etiqueta que tiene un inicio y un
            fin. Todo el texto que pongas dentro está comentado, es decir, no aparecerá en la página. Dentro
            de un comentario puedes meter texto o código HTML, como etiquetas.

            El comentario empieza por < !-- y finaliza por --> Todo lo que pongas entre esas etiquetas está
                comentado.

        </p>
    </div>
</div>


<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra una imagen de código HTML comentado</p>
    <img class="img-fluid" src="assets/img11.JPG">

</div>`
},
{
    id: 24,
    question: '¿Cuál es el HTML correcto para insertar una imagen?',
    options: [
        '< image src="image.gif" alt="unaImagen" >',
        '< img href="image.gif" alt="unaImagen" >',
        '< img alt="miImagen">image.gif </>',
        '< img src="image.gif" alt="miImagen >'
    ],
    indexCorrect: 4,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta img</h1>
        <p style="text-align: justify;">El elemento de imagen HTML img representa una imagen en el
            documento.</p>
    </div>
</div>


<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta img utilizar:
        <code>&lt;img src="url" alt="text" &gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra la imagen</p>
    <img class="img-fluid" src="assets/img5.png" alt="imagen">
</div>
<div class="col-12">
    <h2>Atributos más importantes</h2>
    <table class="table-responsive-md table table-striped table-bordered">
        <thead>
            <tr>
                <th>Atributo</th>
                <th>Definición</th>
            </tr>
        </thead>


        <tr>
            <td> <strong>alt</strong> </td>
            <td>Este atributo define el texto alternativo que describe la imagen, texto que los usuarios
                verán si la URL de la imagen es errónea o la imagen tiene un formato no soportado o si la
                imagen aún no se ha descargado.</td>
        </tr>


        <tr>
            <td> <strong>crossorigin</strong> </td>
            <td>Este atributo enumerado indica si la búsqueda de la imagen debe ser por CORS o no. Imagen
                hablidata CORS puede ser usada en el elemento < canvas> sin ser pintada.</td>

        </tr>
        <tr>
            <td> <strong>hspace</strong> </td>
            <td>El número de píxeles de espaciado a la izquierda y la derecha de la imagen.</td>

        </tr>
        <tr>
            <td> <strong>ismap</strong> </td>
            <td>Este atributo boleano indica que la imagen es parte del mapa del lado del servidor. Así que,
                se envían las coordenadas precisas de un clic. </td>

        </tr>
        <tr>
            <td> <strong>longdesc</strong> </td>
            <td>La URL como descripción de una imagen mostrada, complementa al texto de alt. </td>

        </tr>
        <tr>
            <td> <strong>src</strong> </td>
            <td>La URL de la imagen. Este atributo es obligatorio para el elemento <img>. En navegadores que
                soportan srcset, src es tratado como imagen candidata con una densidad del píxel 1x sino una
                imagen estará definida en srcset o srcset contiene ancho.</td>

        </tr>
    </table>
</div>
    
    `
},
{
    id: 25,
    question: '¿Cual de estas etiquetas son correspondientes a los elementos de una tabla?',
    options: [
        '< thead > < body> < tr >',
        '< table > < tr > < td >',
        '< table > < head > < tfoot >',
        '< table > < tr > < tt >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta table </h1>
        <p style="text-align: justify;">
            Las tablas están incluidas en HTML desde sus primeras versiones y son una forma fantástica
            de mostrar datos claramente. Además, si las construimos de forma semántica y correctamente,
            es muy sencillo darle estilos desde CSS y cambiar su diseño con unas cuantas propiedades
            CSS, puesto que mediante las etiquetas que la componen se puede hacer referencia a cada
            parte de la misma.
        </p>
    </div>
</div>


<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta table hay que utilizar:
        <img class="img-fluid" src="assets/img12.JPG" alt="img">
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se visualiza una tabla básica</p>
    <table style="border: 1px solid black;">
        <tr>
            <th>Name</th>
            <th>Lastname</th>
        </tr>
        <tr>
            <td>Kevin</td>
            <td>Catucuamba</td>
        </tr>
    </table>
    <p>Código utilizado</p>
    <img class="img-fluid" src="assets/img13.JPG" alt="imagen">
</div>

    `
},
{
    id: 26,
    question: 'Seleccione el elemento HTML correcto para enfatizar un texto',
    options: [
        '< em >',
        '< i >',
        '< italic>'
    ],
    indexCorrect: 1,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta em </h1>
        <p style="text-align: justify;">
            La etiqueta em nos permite dar un énfasis, pero menor que la etiqueta strong. Esta etiqueta
            visiblemente sea muy parecida a la cursiva ya que muchos navegadores enfatizan el texto
            poniéndolo en cursiva.
        </p>
    </div>
</div>


<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta table hay que utilizar:
        <code>&lt;em&gt; texto a enfatizar
            &lt;/em&gt;</code>
    </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se utiliza el siguiente código html: <code>&lt;p&gt; El Ecuador
         <code>&lt;em&gt; es un país sudamericano
        &lt;/em&gt;</code> y esta localizado en el centro del mundo&lt;/p&gt;</code> </p>
    <p>El ecuador <em> es un país sudamericano</em> y esta localizado en el centro del mundo</p>

</div>

    
    `
},
{
    id: 27,
    question: '¿Cuál es la opción correcta en HTML para adicionar un color de fondo?',
    options: [
        '< background > yellow < / >',
        '< body style="background-color:yellow;" >',
        '< body bg="yellow" >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Insertar un color de fondo</h1>
        <p style="text-align: justify;">
            Para inserta un color de fondo en un elemento web se utiliza CSS en su propiedad
            background-color:#color, en el #color se asigna el código del color en cuestión, entre los que
            puede estar es rgb y hexadecimal.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Para el ejemplo se coloca un color de fondo para una etiqueta div.</p>
    <img class="img-fluid" src="assets/img14.JPG">
    <p>Se ha colocado una color para el fondo</p>
    <div style="width: 200px; height: 200px; 
     background-color: blue;"></div>
</div>

    
    `
},
{
    id: 28,
    question: 'Cuál elemento es utilizado para especificar la cabecera de un documento o sección?',
    options: [
        '< top >',
        '< header >',
        '< head >',
        '< section >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta header</h1>
        <p style="text-align: justify;">
            El elemento HTML header es una etiqueta semántica, contiene al encabezado de una sección o
            documento, donde se colocan habitualmente los encabezados, los vínculos de navegación, los
            formularios de búsqueda, los logos, las tablas de contenidos, las introducciones, etc. En muchos
            casos, los contenidos del encabezado de un documento son consistentes a lo largo de todo el
            sitio.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra un modelo de página con la cabezera header.</p>
    <img class="img-fluid" src="assets/img15.png">
    <p>Generalmente un header esta al tope de la página.</p>
</div>

    
    
    `
},
{
    id: 29,
    question: '¿Cuál es el elemento HTML correcto para reproducir archivos de audio?',
    options: [
        '< audio >',
        '< mp3 >',
        '< sound >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta de audio</h1>
        <p style="text-align: justify;">
            El elemento audio incrusta recursos de audio en un documento. Es muy fácil de utilizar,
            este elemento es super adaptable, poderoso y compatible con la mayoría de los navegadores.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta audio utiliza: <code>&lt;audio src=""&gt;
        &lt;/audio&gt;</code> </p>

</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se usa el siguiente código html: </p>
    <img class="img-fluid" src="assets/img16.JPG">

    <audio class="d-block" src="assets/music.mp3" controls></audio>


</div>

<div class="col-12">
    <h2>Atributos más importantes</h2>
    <table class="table-responsive-md table table-striped table-bordered">
        <thead>
            <tr>
                <th>Atributo</th>
                <th>Definición</th>
            </tr>
        </thead>


        <tr>
            <td> <strong>src</strong> </td>
            <td>Audio a reproducir. Obligatoria si actua como etiqueta contenedora.</td>
        </tr>


        <tr>
            <td> <strong>preload</strong> </td>
            <td>Indica como realizar la precarga del audio.</td>

        </tr>
        <tr>
            <td> <strong>mediagroup</strong> </td>
            <td>Establece un nombre para un grupo de contenidos multimedia.</td>

        </tr>
        <tr>
            <td> <strong>autoplay</strong> </td>
            <td>Comienza a reproducir el audio automáticamente.</td>

        </tr>
        <tr>
            <td> <strong>loop</strong> </td>
            <td>Vuelve a iniciar el audio cuando finaliza su reproducción (bucle).</td>

        </tr>
        <tr>
            <td> <strong>muted</strong> </td>
            <td>Establece el audio sin sonido (silenciado). </td>

        </tr>
    </table>
</div>
    
    
    `
},
{
    id: 30,
    question: '¿Cuál elemento HTML define el título de un documento?',
    options: [
        '< title >',
        '< head >',
        '< meta >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta de título (title)</h1>
        <p style="text-align: justify;">
            La etiqueta title es un fragmento de código HTML en el que se incluye el título de una página
            web, que normalmente es un texto que describe lo que encontraremos dentro de esa página.

            Este fragmento de código se sitúa dentro la etiqueta

            head del código fuente, y es uno de los elementos más importantes para mejorar el
            posicionamiento de tu web.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta title utiliza en el head: <code>&lt;title &gt;My title
        &lt;/title&gt;</code> </p>

</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se usa el siguiente código html: </p>
    <img class="img-fluid" src="assets/img17.JPG">
    <p>Título de la página: </p>
    <img class="img-fluid" src="assets/img18.JPG">

</div>

    
    
    `
},
{
    id: 31,
    question: 'Seleccione el elemento HTML para el encabezado más grande posible:',
    options: [
        '< head >',
        '< heading >',
        '< h6 >',
        '< h1 >'
    ],
    indexCorrect: 4,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta de encabezados h#</h1>
        <p style="text-align: justify;">
            Las etiquetas de encabezados se utilizan para diferenciar textos o párrafos comunes de otros
            importantes. Las etiquetas de las cabeceras serian: H1, H2, H3, H4, H5 y H6. Tienen un orden
            jerárquico, en el que H1 es el de mayor importancia. Por ello H1 es la cabezera más grande
            posible, mientras que H6 es la más pequeña.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta h3 <code>&lt;h3 &gt;Encabezado H3
        &lt;/h3&gt;</code> </p>

</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se usa el siguiente código html: </p>
    <img class="img-fluid" src="assets/img19.JPG">
    <p>Resultados:</p>
    <h1>Encabezado H1</h1>
    <h2>Encabezado H2</h2>
    <h3>Encabezado H3</h3>
    <h4>Encabezado H4</h4>
    <h5>Encabezado H5</h5>
    <h6>Encabezado H6</h6>
</div>

    
    
    `
},
{
    id: 32,
    question: '¿Cuál elemento es usado para especificar el pie de un documento o sección?',
    options: [
        '< footer >',
        '< bottom >',
        '< section >'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta de pie de página (footer)</h1>
        <p style="text-align: justify;">
            Es una etiqueta semántica, el elemento footer representa al pie de una sección o documento,
            donde
            los autores habitualmente colocan firmas, información acerca del autor, información de
            licencias, documentos relacionados, etc. En muchos casos, los contenidos del pie de un documento
            son consistentes a lo largo de todo el sitio.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta footer <code>&lt;footer &gt; ..contenido HTML ...
        &lt;/footer&gt;</code> </p>

</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra un modelo de página con un footer</p>
    <img class="img-fluid" src="assets/img20.png">
</div>
    
    
    `
},
{
    id: 33,
    question: 'El elemento < canvas > es usado para:',
    options: [
        'Desplegar los registros de una base de datos.',
        'Dibujar gráficos.',
        'Manipular datos en MySQL',
        'Crear elementos que se puede arrastrar.'
    ],
    indexCorrect: 2,
    solutionHtml: `
    

    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Etiqueta canvas</h1>
        <p style="text-align: justify;">
            El elemento HTML canvas (< canvas>) se puede utilizar para dibujar gráficos a través de
                secuencias de comandos (por lo general JavaScript ). Por ejemplo, puede usarse para dibujar
                gráficos, hacer composiciones de fotos o incluso realizar animaciones.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta canvas utilizar: <code>&lt;canvas &gt; ..contenido HTML ...
        &lt;/canvas&gt;</code> </p>

</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Código html utilizado</p>
    <img class="img-fluid" src="assets/img21.JPG" alt="">
    <p>Cabe resaltar que el comportamiento se lo hace con un lenguaje de programación en este caso es
    javascript</p>
    <p>Se muestra un ejemplo de la etiqueta canvas, que se dibuja en el área con el ratón:</p>
    <img class="img-fluid" src="assets/img22.JPG" alt="">
   
</div>

    
    `
},
{
    id: 34,
    question: 'Cuál tipo de entrada define un control de desplazamiento?',
    options: [
        'search',
        'range',
        'slider',
        'controls'
    ],
    indexCorrect: 2,
    solutionHtml: `
    
    

    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Elemento input tipo range</h1>
        <p style="text-align: justify;">
            El elemento < input> del tipo "range" permite que el usuario especifique un valor numérico
                comprendido entre un valor mínimo y máximo. El valor exacto, sin embargo, no se considera
                importante. Se repesenta típicamente como un "tirador" o un control deslizante en lugar de
                un
                campo de texto como otros tipos de < input>. Como este tipo de widget es bastante
                    inmpreciso, no
                    debe utilizarse normalmente a menos que el valor exacto del control no sea importante.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta input de tipo range: <code>&lt;input type="range" &gt; </code> </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>

    <p>Se muestra la salida de un input range:</p>
    <input type="range">

</div>
    `
},
{
    id: 35,
    question: '¿Cómo se puede abrir un link en una nueva pestaña/ventana de navegador?',
    options: [
        '< a href="url" new >',
        '< a href="url" target="_blank" >',
        '< a href="url" target="new" >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Abrir el link en una nueva pestaña</h1>
        <p style="text-align: justify;">
            Para abrir el enlace en una nueva pestaña se hace uso del atributo target y se le asgina el
            valor de _blank.
        </p>
    </div>
</div>

<div class="col-12">
    <a href=""></a>
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta input de tipo range:
        <code>&lt;a href="url" target="_blank" &gt; &lt;/a&gt; </code> </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra un link que lleva a google</p>
    <a href="https://www.google.com" target="_blank">Ir a google</a>
</div>
    `
},
{
    id: 36,
    question: '¿Cual es la forma HTML correcta para hacer una casilla de verificación?',
    options: [
        '< checkbox >',
        '< check >',
        '< input type="check" >',
        '< input type="checkbox" >'
    ],
    indexCorrect: 4,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Entrada input tipo checkbox</h1>
        <p style="text-align: justify;">
            El elemento HTML input type="checkbox" es un elemento de entrada que te permite insertar un
            vector o array de valores. El atributo value es usado para definr el valor enviado por el
            checkbox. El atributo checked se usa para indicar que el elemento está seleccionado. El atributo
            indeterminate se usa para indicar que el checkbox esta en un estado indeterminado (en la mayoria
            de las plataformas, esto dibuja una linea horizontal que atraviesa el checkbox).
        </p>
    </div>
</div>

<div class="col-12">
    <a href=""></a>
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta input de tipo checkbox:
        <code>&lt;input type="checkbox" &gt; </code> </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra una casilla de verificación: </p>
    <input type="checkbox" name="" id="">

</div>
    
    
    `
},
{
    id: 37,
    question: 'En HTML, se puede insertar un elemento SVG directamente dentro de una página HTML?',
    options: [
        'Verdadero',
        'Falso'
    ],
    indexCorrect: 1,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Elemento SVG</h1>
        <p style="text-align: justify;">
            Gráficos Escalables en Formato Vectorial (Scalable Vector Graphics) es un formato que usa texto
            para definir imágenes. Cada imagen SVG se define con código similar al de HTML. <strong>El
                código SVG se
                puede incluir directamente dentro de cualquier documento de HTML.</strong> Todos los
            navegadores leen
            SVG, con excepción de Internet Explorer 8 y versiones anteriores. SVG está basado en XML, por
            consiguiente notará que los elementos que no tienen etiquetas de cierre - se auto-cierran
        </p>
    </div>
</div>


<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra el código html: </p>

    <img class="img-fluid" src="assets/img23.JPG" alt="">

    <p>Salida del elemento SVG</p>

    <p>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="170" height="165"
            viewBox="0 0 170 165">
            <polygon fill="yellow" stroke="red" stroke-width="7" points="129,150 85,119 41,150 57,104 15,66
             68,66 85,15 102,65 156,66 113,98" />
        </svg>
    </p>



</div>

    
    
    `
},
{
    id: 38,
    question: '¿Cuál atributo HTML especifica el texto alternativo para una imagen, si la imagen no puede desplegarse?',
    options: [
        'alt',
        'src',
        'longdesc',
        'title'
    ],
    indexCorrect: 1,
    solutionHtml: `
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Atributo alt del elemento img</h1>
        <p style="text-align: justify;">
            Este atributo alt ayuda a desplegar un texto cuando la imagen en cuestión no pudo cargarse
            debido a un problema, generalmente por falta de conexión o por que el archivo no se encuentra en
            su destino.
        </p>
    </div>
</div>


<div class="col-12">
    <h2>Ejemplo</h2>
    <p>En este caso se carga una imagen con la etiqueta img y se le da un ruta equivocada.</p>
    <img class="img-fluid" src="assets/img100.JPG" 
    alt="Imagen del Ecuador">
    <p class="mt-3">No se pudo mostrar la imagen pero muestra el texto que se declaró en el atributo alt.</p>
    <p>Código utilizado</p>
    <img class="img-fluid" src="assets/img24.JPG" alt="">
</div>
    
    `
},
{
    id: 39,
    question: '¿Cuál elemento HTML es usado para desplegar una medida escalar dentro de un rango?',
    options: [
        '< gauge >',
        '< meter >',
        '< range >',
        '< measure >'
    ],
    indexCorrect: 2,
    solutionHtml: `
    


    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Elemento meter</h1>
        <p style="text-align: justify;">
            La función de la etiqueta meter es la de indicar una medida dentro de un rango; es decir debe
            ser acotada, tener un inicio y un fin.
        </p>
    </div>
</div>

<div class="col-12">
    <h2>Sintaxis</h2>
    <p>Para hacer uso del elemento meter utilizar: <code>&lt;meter&gt;&lt;/meter&gt; </code> </p>
</div>

<div class="col-12">
    <h2>Atributos más importantes</h2>
    <ul>
        <li>
            <p class="text-justify">value: Un valor punto flotante que representa el valor actual de la
                medición. Este valor debe
                de estar entre el valor máximo (max) y el valor mínimo (min). </p>
        </li>
        <li>
            <p class="text-justify">min: Indica el límite inferior (cota inferior) del rango de medición; y
                por lo tanto el valor mínimo posible para el atributo value; este valor debe ser más pequeño
                que el de el atributo max; si no se especifica el valor mínimo será cero. </p>
        </li>
        <li>
            <p class="text-justify">max: Indica el límite superior (cota superior) del rango de medición; y
                por lo tanto el valor máximo posible para el atributo value; este valor debe ser más grande
                que el de el atributo min; si no se especifica el valor máximo será uno.</p>
        </li>
        <li>
            <p class="text-justify">low: Representa el límite superior de la parte baja del rango de
                medición. Esta debe ser mayor que el atributo min, pero menor que high y max (si se
                especifica). Si no se especifica, o si es menor que el valor mínimo, el bajo valor es igual
                al valor min.</p>
        </li>
        <li>
            <p class="text-justify">high: Representa el límite inferior de la parte alta del rango de
                medición. Esto debe ser menor que el atributo max, pero mayor que low y min (si se
                especifica). Si no se especifica, o si es mayor que el valor máximo, el alto valor es igual
                al valor max.</p>
        </li>
        <li>
            <p class="text-justify">optimum: Este atributo indica el valor óptimo o el mejor valor; el cual
                debe estar en el rango definido por los atributo low y min. Cuando son usados los atributos
                low y high, estos indican la zona preferida por el rango dado.</p>
        </li>
    </ul>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Código utilizado</p>
    <img class="img-fluid" src="assets/img25.JPG" alt="img">
    <p class="mt-2">Se muestra el elemento meter</p>

    <meter max="80" value="45"></meter>


</div>

    
    `
},
{
    id: 40,
    question: '¿Cuál es el HTML correcto para hacer un cuadro de texto?',
    options: [
        '< textfield >',
        '< input type="textfield" >',
        '< textinput type="text" >',
        '< input type="text" >'
    ],
    indexCorrect: 4,
    solutionHtml: `
    
    <div class="col-12">
    <div class="jumbotron mt-1">
        <h1 class="mb-3">Entrada input tipo text</h1>
        <p style="text-align: justify;">
            El elemento input, teniendo el valor "text" en su atributo type, representa a un campo de
            entrada de texto, el control asociado a este campo es una caja de texto que permite a los
            usuarios editar una sola línea de texto regular. Los controles de texto son útiles para
            recolectar líneas cortas de texto como títulos, nombres, apellidos, descripciones cortas,
            palabras clave, etiquetas, etc. Los atributos más utilizados es el placeholder que sirve para
            indicar el texto de información para que el usuario sepa que escribir, el otro es el required
            que indica si la entrada es obligatoria, cabe resaltar que son atributos globales.
        </p>
    </div>
</div>

<div class="col-12">
    <a href=""></a>
    <h2>Sintaxis básica</h2>
    <p>Para hacer uso de la etiqueta input de tipo checkbox:
        <code>&lt;input type="text" &gt; </code> </p>
</div>
<div class="col-12">
    <h2>Ejemplo</h2>
    <p>Se muestra un cuadro de texto: </p>
    <input type="text" placeholder="Put your name">

</div>
    
    
    `
}

]
export { data }