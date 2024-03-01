import Link from "next/link";

export const MainESP = () => {
    return(
        <div className="flex flex-col px-5 py-5 space-y-5 text-[#272728]">

            <div>
                <p className="text-xl sm:text-3xl font-semibold text-[#272728]">
                    Long-COVID crash forecast.
                </p>
                <p><br/></p>
                <p className="font-semibold text-[#c03434] px-10">
                    El score tiene un rango de cero (es menos probable tener un &quot;crash&quot; y altos niveles de actividad) a 100 
                    (más probable tener un &quot;crash&quot; y bajos niveles de actividad)
                    <br/>
                    Atención: El score se encuentra en un estado de continuo desarrollo, por lo que su precisión en este momento puede ser baja. 
                    En caso de comentarios y sugerencias, considere dejar una reseña en el siguiente 
                    <Link href="https://forms.gle/d2fN8Yw44CUgQmUg7"  target="_blank" rel="noopener noreferrer"> enlace. </Link> 
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold ">
                    ¿Cómo Funciona? 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    El score es el promedio ponderado de la desviación estándar de seis variables ambientales relacionadas can la actividad solar 
                    (flux de rayos X, campo magnético total y en la dirección z, además de la temperatura, velocidad y densidad de los protones 
                    provenientes del viento solar). El promedio es después multiplicado por el inverso del gradiente promedio normalizado. 
                    En condiciones cercanas a gradiente cero (amanecer, medio día, anochecer), el score dependerá tanto del tiempo actual en el que 
                    se realice la estimación, así como de la actividad solar. Mientras que en periodos de tiempo distintos el score dependerá 
                    principalmente de la actividad solar.
                    <p><br/></p>
                    Aunque la selección de variables pueda parecer extraña, existe la suficiente evidencia que muestra una dependencia a la 
                    actividad solar. A continuación se presenta la hipótesis detrás del diseño del score así como el mecanismo molecular involucrado. 
                </p>
            </div>
            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    El COVID-19 y su relacion con la actividad solar 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    La relación entre el COVID-19 y la actividad solar se ha acumulado a lo largo de la pandemia, 
                    la dirección y dependencia de la latitud de las olas de 
                    <Link href="https://journals.sagepub.com/doi/10.1177/1176934321989695"  target="_blank" rel="noopener noreferrer"> COVID-19.</Link>
                    El efecto protector tanto de la 
                    <Link href="https://doi.org/10.1093/qjmed/hcac040"  target="_blank" rel="noopener noreferrer" > vitamina D </Link>
                    <Link href="https://www.sciencedirect.com/science/article/pii/S1011134422002342"  target="_blank" rel="noopener noreferrer"> la radiación infrarroja, </Link>
                    <Link href="https://doi.org/10.1177/07487304211051841"  target="_blank" rel="noopener noreferrer" > la positividad </Link>  de las pruebas de COVID-19
                    además de la eficacia de la
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10231992/"  target="_blank" rel="noopener noreferrer" > vacunación, </Link>
                    muestran una alta dependencia a la actividad solar.
                    <p><br/></p>
                    Sin embargo, lo que experimentamos diariamente como resultado de la actividad solar es una mezcla de diversos procesos que ocurren al mismo 
                    tiempo. El movimiento planetario genera los cambios diarios del ciclo día/noche, además de los cambios en la duración del día debido al 
                    movimiento de traslación. Del mismo modo, la actividad solar tiene periodos de alta y baja actividad con diversas duraciones. Esa combinación 
                    de señales es captada e interpretada por nuestro organismo para poder planear cambios fisiológicos y mantener un correcto funcionamiento.  
                    <p><br/></p>
                    Al igual que la actividad solar el genoma SARSCov2 se encuentra en constante cambio el cual parecería ser aleatorio. Sin embargo, 
                    si el genoma se analiza con el objetivo de encontrar una escala temporal que describa su cambio, se encuentra que los cambios siguen a la 
                    actividad solar. Aunque el análisis no se presenta en este sitio, se puede acceder en el siguiente enlace.
                    <Link href="https://github.com/TavoGLC/SARSCov2Solar"  target="_blank" rel="noopener noreferrer" > enlace. </Link>
                    <p><br/></p>
                    La no linearidad de la escala, así como diversos factores ambientales que confunden el análisis (nubosidad, niveles de ozono, latitud y 
                    longitud) podrían ser algunas de las razones del porqué la correlación solar no ha sido encontrada. Otras razones de tipo social también 
                    pueden existir dado que la hipótesis cada que es presentada se rechaza como si se tratara de un tipo de tema tabú (sin embargo, tal vez 
                    explicaría el creciente número de teorías de la conspiración sobre organizaciones secretas y personas organizando todo detrás del telón, 
                    tal vez todos de cierta forma lo sabíamos, solo no sabíamos como explicarlo, aun así no citen esto como prueba de lo anterior ... aún). 
                    Por el momento solo le pediré al lector que trate a la radiación solar como cualquier otra variable ambiental y que considere como la 
                    disrupción de la señal química del tiempo podría generar todos los síntomas del long-COVID.
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Ralentizando la propagacion viral.
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    Una vez que el virus entra al hospedero, el sistema inmune del mismo lo detecta y busca con el fin de eliminarlo, siendo el principal objetivo 
                    el disminuir el número de células a las cuales el virus pueda llegar. 
                    Esto se realiza utilizando dos estrategias principalmente, la primera se centra en la búsqueda activa de las partículas virales y células 
                    infectadas mediante las células del sistema inmune y los anticuerpos. 
                    La segunda estrategia se centra en la disminución de la síntesis de RNA y DNA. Esto se obtiene debido a la acción de los distintos interferones 
                    o mediante la degradación de los nucleótidos que son los componentes principales del DNA y RNA. 
                    Si la infección se vuelve persistente, entonces la segunda estrategia disminuirá el trabajo de la primera estrategia. Además de que la segunda 
                    estrategia será capaz de reducir el alcance de la infección debida fusión celular. 
                    Sin embargo, la degradación de los nucleótidos podría ser el último recurso disponible, ya que estos y varios de sus derivados químicos tienen 
                    funciones fisiológicas que al ser eliminados repercutirían en todo el organismo.
                <p><br/></p>
                    Una característica del genoma del SARSCov2, particularmente de su composición química, es que la adenina se encuentra en niveles relativamente 
                    altos en periodos de alta transmisión. 
                    Por lo que disminuir el contenido de adenina en todo el organismo ayudaría a prevenir la diseminación del virus a lo largo del mismo.   
                    Además de una alta excreción en orina, bajos niveles de adenina y sus derivados en plasma y baja biosíntesis, hay otras adaptaciones que 
                    facilitarían el bloque o embargo de adenina. 
                    Enzimas involucradas en la biosíntesis de adenina, ATP o la hidrólisis del ATP podría regularse a la baja para tener una menor producción 
                    o mantenerlo en forma de ATP. Canales y transportadores podrían regularse a la alza para tener un flujo más rápido entre compartimentos, 
                    evitando que se encuentre disponible para otros usos. 
                    Receptores y otras proteínas que respondan a la adenina y sus derivados podrían regularse a la alza para mantener el mismo tipo de 
                    funcionamiento a niveles más bajos. 
                <p><br/></p>
                    Aunque existen diversos derivados de la adenina, me enfocaré principalmente en la adenosina y como podría generar los síntomas del 
                    long-COVID mediante la regulación a la alza del receptor de adenosina ADA2R o ADORA2A.
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                Relacion entre la adenosina, la radiacion solar y el ciclo circadiano
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">

                    La adenosina funciona como el vínculo directo entre el ciclo circadiano y el estímulo 
                    <Link href="https://www.nature.com/articles/s41467-021-22179-z"  target="_blank" rel="noopener noreferrer" > lumínico </Link>
                    siguiendo un patrón similar al obtenido de la gráfica del flux solar. 
                    Esta actividad de marcapasos le permite al organismo tener una señal química que se vincula directamente el tiempo actual. 
                    La acumulación de la adenosina en el cerebro manda señales que alinean el ciclo circadiano con el patrón de actividad y sueno. Esta 
                    señal es interpretada en el cerebro por el receptor de adenosina. 
                    En condiciones normales, el ciclo circadiano tiene una duración de aproximadamente 24 horas y responde a los cambios de iluminación 
                    o radiación.
                    <p><br/></p>
                    Pero si las condiciones para un embargo/bloqueo se satisfacen, entonces la señal de adenosina podría volverse híper reactiva si varios 
                    elementes que responden a la adenosina se encuentran regulados a la alza. 
                    Esto podría permitirle a la señal de adenosina seguir estímulos de alta frecuencia como las tormentas solares.  Dado que estos eventos 
                    son de naturaleza aleatoria, los síntomas también parecerían aleatorios. 
                    Cada cambio en la actividad solar podría interpretarse como un mini ciclo circadiano, iniciando eventos fisiológicos que requieren otros 
                    componentes que no están disponibles quebrando el sistema.
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Secuelas posteriores a la fase aguda de COVID-19 o long-COVID como consecuencia de un embargo/bloqueo de adenina. 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    Una característica del long-COVID es la gran variedad de síntomas que puede generar. Por lo que para evaluarlos dentro del espectro del 
                    long-COVID los síntomas fueron obtenidos de posts y comentarios dentro del subreddit r/longhaulers. Para estos síntomas se propone un mecanismo 
                    detrás de su generación, proponiendo la disfunción del sistema de señalización dependiente de adenosina como causa principal. 
                    <p><br/></p>
                    Una alta sensibilidad a la adenosina debido a la sobre expresión del receptor de la adenosina podría ser uno de los mecanismos detrás de 
                    las disrupciones del sueño en pacientes con long-COVID. Tal disrupción podría explicar el patrón de los síntomas reportados por pacientes 
                    de long-COVID. Pacientes reportan bajos niveles de actividad o altos niveles de dolor en periodos cercanos a condiciones de gradiente 
                    cero (amanecer, medio día, anochecer). Además, durante la noche, se eliminarían los efectos aleatorios de la actividad solar, explicando 
                    en parte el estilo de vida nocturno adoptado por algunos pacientes. 
                    <p><br/></p>
                    En el cerebro, la adenosina también tiene la función de neurotransmisor. Esto mediante las propiedades de receptor de adenosina, debido 
                    a que es capaz de asociarse a otro tipo de receptores y canales regulando su actividad. Esto le permite regular la actividad de varios tipos 
                    de redes neuronales que no dependen directamente de la adenosina.
                    La adenosina regula procesos neuronales relacionados con la 
                    <Link href="https://onlinelibrary.wiley.com/doi/10.1111/jnc.14841"  target="_blank" rel="noopener noreferrer"> depresión, </Link> 
                    ya que su sobre expresión en ratas genera fenotipos de tipo depresivos. Mientras que su bloqueo genera efectos de tipo antidepresivo en 
                    varios modelos animales. Desregulación del sistema de la adenosina en el cerebro podría ser una de las razones de los síntomas de depresión 
                    reportados por los pacientes de long-COVID.
                    Condicionamiento al miedo es otro de los roles que regula la adenosina mediante su receptor; sin embargo, su efecto parece depender 
                    de su localización en el cerebro. En la actualidad se conoce que se encuentra regulando la 
                    <Link href="https://www.nature.com/articles/s41398-023-02613-0#ref-CR20"  target="_blank" rel="noopener noreferrer"> consolidación del temor, </Link>
                    por lo que podría generar temor extremo o ningún tipo de temor, síntomas también reportados por los pacientes de long-COVID.
                    Polimorfismos de nucleótido único dentro del receptor de adenosina han sido vinculados a trastornos de ansiedad como el trastorno de pánico, 
                    agorafobia, fobia a la sangre, autismo, ansiedad inducida por cafeína 
                    <Link href="https://www.intechopen.com/chapters/17570"  target="_blank" rel="noopener noreferrer"> entre otros. </Link>
                    Procesos de toma de decisiones también pueden ser afectados por el receptor de adenosina. Particularmente regulando los receptores a 
                    dopamina en el núcleo accumbens y otros 
                    <Link href="https://www.futuremedicine.com/doi/abs/10.2217/fnl.10.19"  target="_blank" rel="noopener noreferrer"> circuitos neuronales. </Link> 
                    Problemas con la toma de decisiones también son síntomas reportados por pacientes de long-COVID. 
                    La memoria a corto plazo también es otro proceso regulado por el receptor a la adenosina. Principalmente, al bloquear el efecto de 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4523339/"  target="_blank" rel="noopener noreferrer"> la escopolamina. </Link> 
                    Los problemas de memoria a corto plazo también son síntomas comunes reportados por pacientes de long-COVID. 
                    <p><br/></p>
                    La adenosina y el receptor a la adenosina también regulan la 
                    <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/ejn.12715"  target="_blank" rel="noopener noreferrer"> sensibilidad a la luz, </Link>
                    <Link href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/ejn.12715"  target="_blank" rel="noopener noreferrer"> inflamación en la retina y </Link>
                    <Link href="https://iovs.arvojournals.org/article.aspx?articleid=2182021"  target="_blank" rel="noopener noreferrer"> la presión intraocular. </Link>
                    Síntomas también reportados por pacientes de long-COVID. 
                    <p><br/></p>
                    Tinnitus y perdida de la audición también son síntomas reportados por pacientes de long-COVID. Sin embargo, hay poca información que 
                    vincula a la adenosina y su receptor. Aunque se ha vinculado con la susceptibilidad a la 
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S037859551630449X"  target="_blank" rel="noopener noreferrer"> perdida de la audición, </Link> 
                    además de estudios que asocian al tinnitus con la 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8558950/"  target="_blank" rel="noopener noreferrer"> cafeína, </Link> 
                    un antagonista del receptor a la adenosina. 
                    <p><br/></p>
                    Síntomas que impactan el sentido del olfato también han sido reportados por pacientes de long-COVID. En el bulbo olfatorio, 
                    el receptor a la adenosina ha sido vinculado a la 
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0006899321004479"  target="_blank" rel="noopener noreferrer"> discriminación de olores </Link> 
                    en ratas y ratones. 
                    <p><br/></p>
                    La percepción de los sabores también es regulada por el receptor a la adenosina, particularmente el 
                    <Link href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0030032"  target="_blank" rel="noopener noreferrer"> receptor A2B </Link> 
                    regula la percepción de sabores dulces. Otro síntoma también reportado por pacientes de long-COVID. 
                    <p><br/></p>
                    Sensibilidad en la piel a una gran variedad de estímulos también han sido reportados por pacientes de long-COVID. Particularmente el 
                    receptor a la adenosina regula la percepción del dolor y su activación incrementa dicha 
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0014299997016051"  target="_blank" rel="noopener noreferrer"> percepción. </Link> 
                    Otro síntoma relacionado con la piel es el gran número de lesiones cutáneas que se pueden presentar. Polimorfismos en el gen 
                    <Link href="https://academic.oup.com/bjd/article-abstract/163/5/977/6644091?login=false"  target="_blank" rel="noopener noreferrer"> ADORA3A </Link>
                    ,otra variante del receptor a la adenosina, está relacionada con la urticaria debida a la aspirina. Además, la modulación del receptor a 
                    la adenosina en ratones disminuye la dermatitis similar a la 
                    <Link href="https://www.sciencedirect.com/science/article/pii/S0022202X21021643"  target="_blank" rel="noopener noreferrer"> psoriasis. </Link> 
                    Usualmente se clasifica un conjunto de lesiones cutáneas como el resultado del síndrome de la activación de los mastocitos. Aunque en algunos 
                    casos esta puede ser la causa subyacente, el receptor a la adenosina también regula la activación de los 
                    <Link href="https://www.tandfonline.com/doi/abs/10.1080/sj.mn.7300101"  target="_blank" rel="noopener noreferrer"> mastocitos. </Link>
                    <p><br/></p>
                    Los mastocitos también forman parte del sistema inmune, mala regulación del sistema inmune, además de inmunodeficiencia 
                    han sido también descritas como síntomas de long-COVID. La adenosina tiene propiedades inmunosupresoras que se controlan de forma 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2753927/"  target="_blank" rel="noopener noreferrer"> local. </Link> 
                    Además de la desregulación de otros componentes de la señalización por adenosina, también se han vinculado a síndromes de 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5916829/"  target="_blank" rel="noopener noreferrer"> inmunosupresión. </Link>
                    <p><br/></p>
                    El ortostatismo, o el cambio a una posición vertical, genera un aumento en el cAMP un derivado de la 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/219012/"  target="_blank" rel="noopener noreferrer"> adenina. </Link>
                    Además, pacientes con intolerancia ortostática mostraron un aumento en la adenosina 
                    <Link href="https://www.endocrine-abstracts.org/ea/0063/ea0063p1030"  target="_blank" rel="noopener noreferrer"> plasmática. </Link>
                    La desregulación del sistema de señalización por adenosina podría ser la base del POTS. 
                    <p><br/></p>
                    La actividad física también genera un aumento en la adenosina 
                    <Link href="https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2020.00097/full"  target="_blank" rel="noopener noreferrer"> plasmática </Link> 
                    y el incremento en el flujo sanguíneo se encuentra regulado por el receptor a la 
                    <Link href="https://physoc.onlinelibrary.wiley.com/doi/10.1113/jphysiol.2007.136416"  target="_blank" rel="noopener noreferrer"> adenosina. </Link> 
                    <p><br/></p>
                    Aunque no es una lista exhaustiva, es posible observar un patrón que sugiere que la desregulación de una sola molécula y su receptor 
                    puede generar una gran variedad de síntomas. El tipo de síntoma probablemente señale el tejido u órgano que el virus ha alcanzado y el 
                    retraso en los síntomas después de la fase aguda de la infección se podría deber al tiempo de recambio celular de cada órgano. Probablemente 
                    hay algún tipo de memoria que depende del tipo de variante que infecto al paciente. Sin embargo, es posible que las opciones para tratamiento 
                    se encuentren restringidas a un número reducido de blancos.
                    <p><br/></p>
                    
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Manejo de los sintomas
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    Con la falta de un tratamiento específico para el long-COVID los pacientes han recomendado una serie de intervenciones basadas 
                    en experiencias personales. Desde intervenciones no farmacológicas hasta suplementos alimenticios, los pacientes han compartido 
                    una serie de intervenciones que alivian los síntomas. Muchos de los cuales regulan la señalización por adenosina a diferentes 
                    niveles. 
                    <p><br/></p>
                    Suplementos con minerales como el magnesio y el omega-3 han sido recomendados por pacientes. Particularmente el 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/9884987/"  target="_blank" rel="noopener noreferrer"> magnesio </Link>
                    modula la respuesta del receptor a la adenosina. Mientras que el 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/26796668/"  target="_blank" rel="noopener noreferrer"> omega-3  </Link>  
                    cambia las propiedades de la membrana, lo que le permite al receptor a la adenosina regular el receptor a la dopamina. 
                    <p><br/></p>
                    La oxigenación hiperbárica también ha sido recomendada, uno de los blancos en los que actual el tratamiento es HIF que regula los 
                    niveles extracelulares de adenosina. La oxigenación hiperbárica atenúa la acción de HIF al incrementar la concentración de 
                    <Link href="https://www.tandfonline.com/doi/full/10.2147/IJGM.S172460"  target="_blank" rel="noopener noreferrer"> oxígeno. </Link>
                    <p><br/></p>
                    La acupuntura, otro tratamiento recomendado, genera un incremento local de 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3587733/"  target="_blank" rel="noopener noreferrer"> adenosina. </Link>
                    <p><br/></p>
                    La quercetina, un suplemento alimenticio comunmente recomendado, actúa como antagonista del receptor a la 
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/20814335/"  target="_blank" rel="noopener noreferrer"> adenosina. </Link> 
                    Además de inhibir la deaminasa de adenosina en ratas. Mientras que la naltrexona regula a la alza el receptor a la 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1573935/"  target="_blank" rel="noopener noreferrer"> adenosina A1.</Link> 
                    
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Señalización purinérgica en el COVID-19 y long-COVID
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    El evaluar el efecto de la señalización por adenosina y sus derivados es algo que se continúa estudiando. Sin embargo, se utiliza 
                    el término de señalización purinérgica, dado que la adenina es un derivado de la purina. Algunas de las condiciones presentadas 
                    anteriormente para el embargo/bloque  de adenosina han sido encontradas en pacientes de COVID-19. Una alta expresión de componente 
                    de la vía de señalización purinérgica, siendo uno de ellos el receptor a la adenosina (A2AR, ADORA2A). Además, en casos de COVID-19 
                    la adenosina plasmática se encuentra correlacionada con la severidad de la 
                    <Link href="https://www.sciencedirect.com/science/article/pii/S1471489223000322#bib50"  target="_blank" rel="noopener noreferrer"> enfermedad. </Link>
                    Mientras que en pacientes con long-COVID hay una menor abundancia de metabolitos derivados de la 
                    <Link href="https://www.nature.com/articles/s41467-023-44432-3..."  target="_blank" rel="noopener noreferrer"> purina.</Link>
                    Actualmente la información relacionada con la fisiopatología del long-COVID es escasa debido al estigma asociado a la enfermedad y 
                    la falta de un criterio preciso para el diagnóstico. Y aunque parte de la información soporte la hipótesis del embargo/bloqueo esta 
                    no trata de invalidar algún otro descubrimiento relacionado con el long-COVID. Sin embargo, intenta explicar un fenómeno que podría 
                    estar pasando de forma paralela a las hipótesis actuales. Además, provee un blanco para el cual existen una gran variedad de activadores 
                    y bloqueadores, algunos ya aprobados por la FDA para otras 
                    <Link href="https://journals.physiology.org/doi/pdf/10.1152/physrev.00049.2017"  target="_blank" rel="noopener noreferrer"> enfermedades. </Link>
                    <p><br/></p>
                    Dado que el receptor a la adenosina también regula el sistema inmune, una combinación de  mupadolimab y ciforadenant estaba siendo 
                    evaluada como tratamiento para el COVID-19. Sin embargo, este ensayo clínico fue finalizado debido a la introducción de las vacunas en 2021. 
                    <p><br/></p>
                    Si un síntoma mencionado anteriormente parecería ser manejable mediante la modulación del receptor a la adenosina A2AR considere discutirlo 
                    con su médico tratante, cada caso debe de ser evaluado individualmente y actúe de forma prudente, El uso fuera de indicación no es ilegal y 
                    en algunos casos se vuelve la norma cuando no hay tratamientos 
                    <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3538391/"  target="_blank" rel="noopener noreferrer"> establecidos.</Link>
                </p>
            </div>
            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Resumiendo
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    EL SARS-Cov2 tiene una estacionalidad determinada por los cambios de radiación solar, esto se ve reflejados en cambios en su composición 
                    química. Una característica dentro de este patrón temporal es que en periodos de alta transmisión el genoma contiene adenina en niveles 
                    relativamente altos. Una vez que el virus infecta al hospedero, este inicia una serie de acciones con el fin de limitar la diseminación 
                    del virus. Estas pueden dividirse en dos estrategias: una es la búsqueda activa del virus y la segunda es la disminución en la síntesis 
                    de DNA, RNA. Si la infección comienza a diseminarse a otros tejidos entonces reducir el contenido de adenina en todo el organismo ralentizaría 
                    dicha expansión. Sin embargo, dicha adaptación repercutiría en una serie de procesos fisiológicos que dependen de los derivados de la adenina 
                    para funcionar. Para prevenir tal impacto, elementos que responden a la señalización por adenina como los transportadores y receptores se 
                    podrían sobre expresar para mantener la misma función bajo niveles limitados de adenina y sus derivados. Esta regulación a la alza podría 
                    volver al organismo hipersensible a estímulos que generan la liberación de la adenosina (un derivado de la adenina). Ejemplos de estos estímulos 
                    son la actividad física y la irradiación solar. Eventos aleatorios como las tormentas solares podrian estimular al sistema sobre reactivo 
                    de la adenosina generando los sintomas de los pacientes de long-COVID. El tipo de síntoma que experimenta cada paciente podría apuntar a 
                    órganos y tejidos infectados por el virus. Mientras que el periodo de latencia entre el término de la fase aguda y los síntomas de long-COVID 
                    podrían deberse al tiempo de recambio celular de cada tejido. Lo anterior sugiere que el receptor a la adenosina A2AR (ADORA2A) parece ser 
                    un blanco prometedor para el desarrollo de tratamientos contra el long-COVID.
                </p>
            </div>

            <div>
                <p className="text-xl sm:text-3xl font-semibold">
                    Cosas que parecen no cuadrar. 
                </p>
                <p><br/></p>
                <p className="text-lg text- sm:text-xl">
                    La estrategia del embargo/bloqueo requiere bajos niveles de adenina y, por lo tanto, sus demás derivados y un aumento en el número de 
                    elementos que responde a la adenina y sus derivados. Por lo que la estrategia en sí no debería de generar algún tipo de síntoma, por lo 
                    que si esta estrategia es usada por el organismo debería de ser de forma local o el virus regula a la alza la síntesis de nucleótidos. 
                    Por el momento, el escenario presentado es incompleto, pero intenta dar una explicación unificada a un fenómeno complejo.
                    <p><br/></p>
                    En la estrategia del embargo/bloqueo el estímulo principal de los síntomas es una infección persistente; sin embargo, es posible que no 
                    sea una infección persistente de SARS-Cov2. Pacientes de long-COVID han reportado mejorías después del tratamiento con aciclovir o derivados 
                    del mismo. Hasta el momento no hay reportes que muestren la eficacia del aciclovir contra el virus del SARSCov2; sin embargo, es eficaz 
                    contra el virus del Epstein-Barr, un virus que se activa tras la infección del SARS-Cov2. Una posibilidad es que el Epstein-Barr se 
                    recombine con el SARS-Cov2 y que se mantenga un proceso inmunológico similar al que genera la infección del SARS-Cov2. Otra posibilidad 
                    es que se dé la expresión de pequeños fragmentos subgenomicos del SARS-Cov2 con ayuda del virus del Epstein-Barr. En ambos casos parecería 
                    que es el SARS-Cov2 el que genera la persistencia viral, aunque en realidad es un proceso más complejo. Esto podría explicar por qué el 
                    Paxlovid es incapaz de generar mejoría en pacientes de long-COVID. 
                    <p><br/></p>
                    Aunque el bloqueo (antagonista) del receptor de adenosina podría parecer la opción más viable, es posible que no sea tan sencillo como se presenta. 
                    Las diferentes interacciones del receptor con otros receptores podría añadir más factores que confunden el resultado final. 
                    <p><br/></p>
                    El entendimiento actual del ciclo  circadiano sugiere la existencia de varios sistemas oscilatorios que sincronizan el ciclo circadiano. 
                    El oscilador central se controla desde el sistema nervioso central y se compone de dos osciladores controlados por cambios en temperatura 
                    e iluminación. Además, dentro de cada célula hay otro oscilador que es controlado por la iluminación y se compone de las proteínas CLOCK, 
                    Per, BMAL1. En la actualidad se ha asociado un fenotipo de long-COVID caracterizado por la fatiga a polimorfismos de nucleótido único dentro 
                    del gen CLOCK. Por lo que la disrupción de la vía de señalización del ciclo circadiano a diversos niveles podría desencadenar el mismo 
                    resultado. Por lo que tratamientos dirigidos al receptor de adenosina podrían no tener efecto si la disrupción se encuentra en el gen CLOCK 
                    y viceversa. 
                    <p><br/></p>
                    La importancia del receptor de adenosina y los diversos derivados de la adenosina podría deberse a un sesgo en la investigación. Estos 
                    derivados se encuentran dentro de los compuestos de origen biológico más estudiados debido a sus funciones de energía y segundos mensajeros. 
                    Otros derivados de nucleótidos también tienen esa función, sin embargo, han sido menos estudiados. Por lo que existe una posibilidad de que 
                    exista algo que explique aún mejor los síntomas detrás del long-COVID.
                </p>
            </div>
        </div>
    )
}