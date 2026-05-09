'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'es' | 'en' | 'pt'

export const translations = {
  es: {
    may: {
      home: { start: 'Empezar' },
      p1: {
        h1: 'Un gran cambio de corazón',
        body1: 'Los hermanos ministrantes invitaron al hermano a asistir al templo. Y eso provocó un cambio en la vida del padre y también en la vida de la hermana. El hermano terminó siendo obrero en el templo.',
        h2: 'Mi caso',
        body2: 'En el caso de mi familia, mi padre fue llamado a servir en la presencia del quórum de líderes. Y ese fue su primer llamamiento en la iglesia. El hermano Sepúlveda llegó a tener una gran influencia en la vida de mi padre. Padre platicaba de los planes que tenían para el quórum de élderes y de los desafíos que enfrentaban. Mi padre lo contaba como anécdota, yo creo que con la intención de que aprendiera lo que él estaba aprendiendo. Hoy en día la iglesia está siendo estudiada por grandes compañías e instituciones tratando de emular la organización de la iglesia para tener éxito en sus negocios. Todo radica en que cada varón aprenda su deber. Nosotros vivimos bajo principios correctos y nos gobernamos a nosotros mismos. Aquí nos podemos dar cuenta que el Señor nos está preparando no solamente para cumplir con nuestro sacerdocio, sino también para la vida en nuestros propios trabajos.',
        h3: 'Jetro',
        body3: 'Al igual que Moisés fue instruido por su suegro Jetro para administrar a los israelitas a través del desierto hacia la tierra prometida. Le dijo: nombra capitanes de 100, 50 y 10 para que te ayuden a administrar al pueblo. Hoy en día el Señor utiliza a los líderes para cubrir las necesidades de los miembros de la iglesia, aligerando las cargas del Obispo, de la Estaca y de las áreas. A cada uno de nosotros que poseemos el sacerdocio se nos ha dado la oportunidad de bendecir la vida de las personas que tenemos asignadas para visitar.',
        next: 'Siguiente',
      },
      p2: {
        h2: 'Cuando elegimos ministrar en nuestras asignaciones inspiradas estamos ayudando a bendecir al padre, a la hermana o al hijo de alguien.',
        li1: 'La iglesia capacita a adultos y jóvenes',
        li2: 'Hacemos actividades de servicio',
        li3: 'Además actividades de recreación',
        story: 'Yo recuerdo que el obispo nos enseñó a hacer vasos con botellas de cristal. Nos íbamos a nadar y pescar a los canales, eso en Sonora. Aquí sobran lugares para hacer actividades. Hacíamos kits de 24 hrs para alguna emergencia.',
        next: 'Siguiente',
      },
      p3: {
        h1: 'Ministración',
        h2: 'Brigham Young enseñó que al predicar/ministrar lo que más importa es invitar al Espíritu Santo',
        body1: 'Porque es el Espíritu Santo quien causa un gran cambio en el corazón de las personas que escuchan nuestro mensaje.',
        body2: 'Cuando ministramos ayudamos a contestar las oraciones de los demás. Es decir que el mensaje que llevamos sí es escuchado por otras personas que no son de la familia; el espíritu también contesta las oraciones de ellos y les inspirará para ser mejores en su relación con el Señor.',
        body3: 'La hermana Yee comenta que su padre estaba viviendo una etapa muy difícil en su vida cuando fue visitado por los hermanos ministrantes. Estas visitas hicieron que cambiara su actitud en cuanto a guardar los convenios del Señor y su trato con sus semejantes. Imaginen los cambios que ustedes causarán en las familias que visitan. Debemos recordar que el Señor está a cargo y que Él efectuará un potente cambio de corazón en las personas. Lo único que se necesita es que nosotros estemos presentes e invitemos la compañía del espíritu.',
        body4: 'La hermana Yee exclama que benditos sean los hermanos ministrantes por los grandes cambios que hubo en su padre y me imagino que también por los cambios que hubo en su familia. Llegando sin encontrar un amigo por la eternidad, creo que por medio de la ministración es cómo podemos encontrar a nuestro querido amigo al cual prometimos que íbamos a encontrar.',
        next: 'Siguiente',
      },
      p4: {
        body1: 'Debemos ser las manos del Salvador. No recuerdo el nombre del profeta que discursó sobre que en una guerra, las manos de una estatua de Jesucristo se perdieron en el ataque. La gente quería reconstruir las manos de la estatua, pero surgió la idea de dejarla sin manos para recordar a la gente que en realidad nosotros somos las manos del Señor.',
        body2: 'Nosotros como poseedores del sacerdocio tenemos la responsabilidad de llevar el mensaje de la expiación a las familias que tenemos asignadas y a nuestros semejantes. Debemos orar constantemente a nuestro Padre Celestial para que seamos inspirados al momento de enseñar cómo se aplica la expiación en nuestras vidas. Jesucristo siempre invocaba al Padre, se retiraba y oraba y ayunaba. Después predicaba. Los hijos de Alma también hacían lo mismo, dedicaban su tiempo a ayunar porque sabían que por medio del Espíritu Santo es como las personas llegaban a ser convertidas y ponían a prueba la palabra del Señor.',
        body3: 'Tal vez no arreglemos situaciones difíciles o desgarradoras, pero el Señor nos brindará ese rayito de luz o de inspiración que tocará nuestras vidas y la vida de las personas a las que administramos, para invitar a las personas a continuar viviendo en la senda de los convenios.',
        body4: 'Esta es la manera de amar al ministrar como lo hacía el Salvador. Él llegaba, exponía su mensaje, invitaba a las personas a que lo siguieran. Esta manera de enseñar no ha cambiado; continúa latente. Solo tenemos que llegar y hacer la invitación por medio del mensaje que el Señor nos inspirará a escoger para ministrar a nuestro hermano, a nuestro querido amigo. En este momento no recordamos que eran nuestros amigos en la vida inmortal, sin embargo, llegará el día en que lo recordaremos todo.',
        next: 'Siguiente',
      },
      p5: {
        h1: 'Ministrar es la manera del cielo',
        goBack: 'Inicio de clase',
      },
    },
    home: {
      bio: 'Gary E. Stevenson fue sostenido para servir como miembro del Cuórum de los Doce Apóstoles de La Iglesia de Jesucristo de los Santos de los Últimos Días el 3 de octubre de 2015.',
      intro: 'Todo iba bien en la actividad familiar hasta que surgió la pregunta en mí Dónde están las llaves?',
      start: 'Empezar',
    },
    p1: {
      h3: 'El auto tenía un potencial enorme pero sin las llaves solamente era un pedazo de lámina y plástico al cual no podíamos entrar',
      q1: '¿Qué decisiones en la vida diaria nos dejan en la situación de no poder usar el automóvil?',
      q2: '¿Qué herramientas tenemos para echar a andar el auto?',
      q3: 'La expiación lo hace posible',
      q4: 'Los pasos del arrepentimiento: sentir dolor, pedir perdón y no volverlo a hacer',
      next: 'Siguiente',
    },
    p2: {
      h1: 'Imposicion de manos',
      h2: 'El obispo es responsable del sacerdocio aarónico',
      q1: 'Y aquí quiero que hagan una pausa y mediten',
      q2: '¿Qué pasaría si no pudiéramos bautizarnos?',
      q3: 'Y esto va tanto para los bautismos en capillas como para los templos.',
      q4: '¿Qué pasaría sin las ordenanzas de la santa cena?',
      q5: 'Todo esto es posible por el propio modo y obtener el sacerdocio por medio de nuestros líderes.',
      next: 'Siguiente',
    },
    p3: {
      h1: 'Restauracion',
      h2: 'El obispo es responsable del sacerdocio aarónico',
      q1: 'El 15 de mayo se restauraron las llaves del sacerdocio aarónico por medio de Juan el bautista, lo cual nos permite regresar a nuestros padres celestiales por medio del bautismo. Y aquí quiero que hagan una pausa y mediten',
      q2: '¿Qué pasaría si no pudiéramos bautizarnos?',
      q3: 'Y esto va tanto para los bautismos en capillas como para los templos.',
      q4: '¿Qué pasaría sin las ordenanzas de la santa cena?',
      q5: 'Todo esto es posible por el propio modo y obtener el sacerdocio por medio de nuestros líderes.',
      next: 'Siguiente',
    },
    p4: {
      h1: 'Desafio',
      intro: 'Tres maneras de encontrar las llaves: para bendecir sus vidas y las vidas de otras personas. Porque la responsabilidad de obtener el sacerdocio es que lo usemos. Y si vamos a nuestro prójimo así como Jesucristo lo hizo en su tiempo durante la Tierra.',
      c1title: '1.- Prepárese para el servicio misional',
      c1: 'Cada día tenemos la oportunidad de compartir el evangelio aún en nuestra propia familia. Muchos ojos nos están observando y viendo cómo nos comportamos.',
      c2title: '2.- Asistan al templo',
      c2: 'Tenemos la oportunidad de redimir los muertos trabajando y alineándose en la meta de nuestro padre celestial que es llevar a cabo la inmortalidad y la vida eterna del hombre para que regresen de nuevo a su presencia con todos los convenios que el Señor nos permite hacer hoy en día.',
      c3title: '3.- Sigan adelante con fe',
      next: 'Siguiente',
    },
    p5: {
      h1: 'Tentaciones',
      q1: 'Todos los días enfrentamos diferentes tentaciones que ponen a prueba nuestro testimonio.',
      q2: 'Como dice la Biblia una tercera parte de los hijos de Dios no estuvo de acuerdo con el plan de salvación y se privaron de la oportunidad de aprender y tener experiencias con un cuerpo físico. Podemos continuar siempre fieles porque al final dice Elder Holland que ganaremos.',
      restart: 'Reiniciar',
    },
  },
  en: {
    home: {
      bio: 'Gary E. Stevenson was sustained to serve as a member of the Quorum of the Twelve Apostles of The Church of Jesus Christ of Latter-day Saints on October 3, 2015.',
      intro: 'Everything was going well at the family activity until the question arose in me: Where are the keys?',
      start: 'Start',
    },
    p1: {
      h3: 'The car had enormous potential but without the keys it was just a piece of metal and plastic we could not get into',
      q1: 'What daily decisions leave us unable to use the car?',
      q2: 'What tools do we have to start the car?',
      q3: 'The Atonement makes it possible',
      q4: 'The steps of repentance: feel sorrow, ask forgiveness, and not repeat it',
      next: 'Next',
    },
    p2: {
      h1: 'Laying on of Hands',
      h2: 'The bishop is responsible for the Aaronic priesthood',
      q1: 'And here I want you to pause and meditate',
      q2: 'What would happen if we could not be baptized?',
      q3: 'This applies to both baptisms in chapels and in temples.',
      q4: 'What would happen without the ordinances of the sacrament?',
      q5: 'All of this is possible through the proper way of obtaining the priesthood through our leaders.',
      next: 'Next',
    },
    p3: {
      h1: 'Restoration',
      h2: 'The bishop is responsible for the Aaronic priesthood',
      q1: 'On May 15 the keys of the Aaronic priesthood were restored by John the Baptist, which allows us to return to our Heavenly Father through baptism. And here I want you to pause and meditate',
      q2: 'What would happen if we could not be baptized?',
      q3: 'This applies to both baptisms in chapels and in temples.',
      q4: 'What would happen without the ordinances of the sacrament?',
      q5: 'All of this is possible through the proper way of obtaining the priesthood through our leaders.',
      next: 'Next',
    },
    p4: {
      h1: 'Challenge',
      intro: 'Three ways to find the keys: to bless your lives and the lives of others. Because the responsibility of obtaining the priesthood is that we use it. And if we go to our neighbor just as Jesus Christ did in His time on Earth.',
      c1title: '1.- Prepare for missionary service',
      c1: 'Every day we have the opportunity to share the gospel even within our own family. Many eyes are watching us and seeing how we behave.',
      c2title: '2.- Go to the temple',
      c2: 'We have the opportunity to redeem the dead by working and aligning with our Heavenly Father\'s goal, which is to bring about the immortality and eternal life of man so they can return to His presence with all the covenants the Lord allows us to make today.',
      c3title: '3.- Move forward with faith',
      next: 'Next',
    },
    p5: {
      h1: 'Temptations',
      q1: 'Every day we face different temptations that test our testimony.',
      q2: 'As the Bible says, one third of God\'s children did not agree with the plan of salvation and deprived themselves of the opportunity to learn and have experiences with a physical body. We can remain always faithful because in the end Elder Holland says we will win.',
      restart: 'Restart',
    },
    may: {
      home: { start: 'Start' },
      p1: {
        h1: 'A Great Change of Heart',
        body1: 'The ministering brothers invited a brother to attend the temple. And that brought about a change in the father\'s life and also in the sister\'s life. The brother ended up becoming a temple worker.',
        h2: 'My Case',
        body2: 'In my family\'s case, my father was called to serve in the presence of a quorum of leaders. And that was his first calling in the church. Brother Sepúlveda came to have a great influence on my father\'s life. My father would talk about the plans they had for the elders quorum and the challenges they faced. My father told it as an anecdote, I believe with the intention that I would learn what he was learning. Today the church is being studied by large companies and institutions trying to emulate the church\'s organization to succeed in their businesses. It all comes down to every man learning his duty. We live by correct principles and govern ourselves. Here we can realize that the Lord is preparing us not only to fulfill our priesthood but also for life in our own work.',
        h3: 'Jethro',
        body3: 'Just as Moses was instructed by his father-in-law Jethro to administer to the Israelites through the wilderness toward the promised land. He told him: appoint captains of 100, 50 and 10 to help you administer the people. Today the Lord uses leaders to meet the needs of church members, lightening the burdens of the Bishop, the Stake, and the areas. Each one of us who holds the priesthood has been given the opportunity to bless the lives of the people we have been assigned to visit.',
        next: 'Next',
      },
      p2: {
        h2: 'When we choose to minister in our inspired assignments we are helping to bless someone\'s father, sister, or son.',
        li1: 'The church trains adults and youth',
        li2: 'We do service activities',
        li3: 'Also recreational activities',
        story: 'I remember that the bishop taught us to make glasses from crystal bottles. We would go swimming and fishing in the canals, that was in Sonora. Here there are plenty of places to do activities. We made 24-hour emergency kits.',
        next: 'Next',
      },
      p3: {
        h1: 'Ministering',
        h2: 'Brigham Young taught that when preaching/ministering the most important thing is to invite the Holy Spirit',
        body1: 'Because it is the Holy Spirit who causes a great change in the hearts of the people who hear our message.',
        body2: 'When we minister we help answer the prayers of others. That is, the message we bring is also heard by people outside the family; the Spirit also answers their prayers and will inspire them to be better in their relationship with the Lord.',
        body3: 'Sister Yee mentions that her father was going through a very difficult stage in his life when he was visited by the ministering brothers. These visits caused a change in his attitude regarding keeping the Lord\'s covenants and his treatment of his fellow men. Imagine the changes you will cause in the families you visit. We must remember that the Lord is in charge and that He will bring about a powerful change of heart in people. All that is needed is that we be present and invite the companionship of the Spirit.',
        body4: 'Sister Yee exclaims that blessed are the ministering brothers for the great changes that occurred in her father, and I imagine also for the changes in her family. Arriving without finding a friend for eternity, I believe that through ministering is how we can find our dear friend whom we promised we would find.',
        next: 'Next',
      },
      p4: {
        body1: 'We must be the hands of the Savior. I don\'t remember the name of the prophet who spoke about how in a war, the hands of a statue of Jesus Christ were lost in the attack. People wanted to rebuild the hands of the statue, but the idea arose to leave it without hands to remind people that we are truly the Lord\'s hands.',
        body2: 'We as priesthood holders have the responsibility to bring the message of the Atonement to the families we have assigned and to our fellow men. We must pray constantly to our Heavenly Father to be inspired when teaching how the Atonement applies to our lives. Jesus Christ always invoked the Father, withdrew, and prayed and fasted. Then He preached. Alma\'s sons also did the same, dedicating their time to fasting because they knew it was through the Holy Spirit that people came to be converted and tested the word of the Lord.',
        body3: 'Perhaps we will not fix difficult or heartbreaking situations, but the Lord will provide us with that ray of light or inspiration that will touch our lives and the lives of those we administer, inviting people to continue living in the covenant path.',
        body4: 'This is the way of love in ministering as the Savior did. He came, presented His message, and invited people to follow Him. This way of teaching has not changed; it remains alive. We only have to arrive and extend the invitation through the message the Lord will inspire us to choose to minister to our brother, our dear friend. At this moment we do not remember that they were our friends in immortal life, but the day will come when we will remember everything.',
        next: 'Next',
      },
      p5: {
        h1: 'Ministering is the way of heaven',
        goBack: 'Class home',
      },
    },
  },
  pt: {
    home: {
      bio: 'Gary E. Stevenson foi sustentado para servir como membro do Quórum dos Doze Apóstolos de A Igreja de Jesus Cristo dos Santos dos Últimos Dias em 3 de outubro de 2015.',
      intro: 'Tudo ia bem na atividade familiar até que surgiu a pergunta em mim: Onde estão as chaves?',
      start: 'Começar',
    },
    p1: {
      h3: 'O carro tinha um enorme potencial, mas sem as chaves era apenas um pedaço de metal e plástico que não podíamos usar',
      q1: 'Que decisões na vida diária nos deixam sem poder usar o automóvel?',
      q2: 'Que ferramentas temos para ligar o carro?',
      q3: 'A Expiação torna isso possível',
      q4: 'Os passos do arrependimento: sentir dor, pedir perdão e não repetir',
      next: 'Próximo',
    },
    p2: {
      h1: 'Imposição de mãos',
      h2: 'O bispo é responsável pelo sacerdócio aarônico',
      q1: 'E aqui quero que façam uma pausa e meditem',
      q2: 'O que aconteceria se não pudéssemos ser batizados?',
      q3: 'Isso se aplica tanto a batismos em capelas quanto em templos.',
      q4: 'O que aconteceria sem as ordenanças da santa ceia?',
      q5: 'Tudo isso é possível pelo modo adequado de obter o sacerdócio por meio de nossos líderes.',
      next: 'Próximo',
    },
    p3: {
      h1: 'Restauração',
      h2: 'O bispo é responsável pelo sacerdócio aarônico',
      q1: 'Em 15 de maio, as chaves do sacerdócio aarônico foram restauradas por João Batista, o que nos permite retornar ao nosso Pai Celestial por meio do batismo. E aqui quero que façam uma pausa e meditem',
      q2: 'O que aconteceria se não pudéssemos ser batizados?',
      q3: 'Isso se aplica tanto a batismos em capelas quanto em templos.',
      q4: 'O que aconteceria sem as ordenanças da santa ceia?',
      q5: 'Tudo isso é possível pelo modo adequado de obter o sacerdócio por meio de nossos líderes.',
      next: 'Próximo',
    },
    p4: {
      h1: 'Desafio',
      intro: 'Três maneiras de encontrar as chaves: para abençoar suas vidas e a vida de outras pessoas. Porque a responsabilidade de obter o sacerdócio é que o usemos. E se formos ao nosso próximo assim como Jesus Cristo fez em Seu tempo na Terra.',
      c1title: '1.- Prepare-se para o serviço misional',
      c1: 'Cada dia temos a oportunidade de compartilhar o evangelho até em nossa própria família. Muitos olhos nos observam e veem como nos comportamos.',
      c2title: '2.- Vão ao templo',
      c2: 'Temos a oportunidade de remir os mortos trabalhando e alinhando-se com a meta de nosso Pai Celestial, que é realizar a imortalidade e a vida eterna do homem para que retornem à Sua presença com todos os convênios que o Senhor nos permite fazer hoje.',
      c3title: '3.- Sigam em frente com fé',
      next: 'Próximo',
    },
    p5: {
      h1: 'Tentações',
      q1: 'Todos os dias enfrentamos diferentes tentações que colocam à prova nosso testemunho.',
      q2: 'Como diz a Bíblia, um terço dos filhos de Deus não concordou com o plano de salvação e se privou da oportunidade de aprender e ter experiências com um corpo físico. Podemos permanecer sempre fiéis porque no final o Élder Holland diz que venceremos.',
      restart: 'Reiniciar',
    },
    may: {
      home: { start: 'Começar' },
      p1: {
        h1: 'Uma Grande Mudança de Coração',
        body1: 'Os irmãos ministrantes convidaram o irmão a frequentar o templo. E isso provocou uma mudança na vida do pai e também na vida da irmã. O irmão acabou se tornando um obreiro do templo.',
        h2: 'Meu Caso',
        body2: 'No caso da minha família, meu pai foi chamado para servir na presença de um quórum de líderes. E esse foi seu primeiro chamado na igreja. O Irmão Sepúlveda veio a ter uma grande influência na vida do meu pai. Meu pai falava dos planos que tinham para o quórum de élderes e dos desafios que enfrentavam. Meu pai contava como anedota, eu acredito que com a intenção de que eu aprendesse o que ele estava aprendendo. Hoje em dia a igreja está sendo estudada por grandes empresas e instituições tentando emular a organização da igreja para ter sucesso em seus negócios. Tudo se resume a que cada varão aprenda seu dever. Nós vivemos por princípios corretos e nos governamos. Aqui podemos perceber que o Senhor nos está preparando não apenas para cumprir nosso sacerdócio, mas também para a vida em nosso próprio trabalho.',
        h3: 'Jetro',
        body3: 'Assim como Moisés foi instruído por seu sogro Jetro para administrar os israelitas pelo deserto em direção à terra prometida. Ele lhe disse: nomeie capitães de 100, 50 e 10 para ajudá-lo a administrar o povo. Hoje em dia o Senhor usa os líderes para atender às necessidades dos membros da igreja, aliviando os fardos do Bispo, da Estaca e das áreas. A cada um de nós que possuímos o sacerdócio nos foi dada a oportunidade de abençoar a vida das pessoas que temos designadas para visitar.',
        next: 'Próximo',
      },
      p2: {
        h2: 'Quando escolhemos ministrar em nossas atribuições inspiradas estamos ajudando a abençoar o pai, a irmã ou o filho de alguém.',
        li1: 'A igreja capacita adultos e jovens',
        li2: 'Fazemos atividades de serviço',
        li3: 'Além de atividades de recreação',
        story: 'Eu me lembro que o bispo nos ensinou a fazer copos com garrafas de cristal. Íamos nadar e pescar nos canais, isso em Sonora. Aqui sobram lugares para fazer atividades. Fazíamos kits de 24 horas para alguma emergência.',
        next: 'Próximo',
      },
      p3: {
        h1: 'Ministração',
        h2: 'Brigham Young ensinou que ao pregar/ministrar o que mais importa é convidar o Espírito Santo',
        body1: 'Porque é o Espírito Santo quem causa uma grande mudança no coração das pessoas que ouvem nossa mensagem.',
        body2: 'Quando ministramos ajudamos a responder as orações dos outros. Ou seja, a mensagem que levamos também é ouvida por outras pessoas que não são da família; o espírito também responde às orações deles e os inspirará a melhorar em seu relacionamento com o Senhor.',
        body3: 'A irmã Yee comenta que seu pai estava passando por uma fase muito difícil em sua vida quando foi visitado pelos irmãos ministrantes. Essas visitas fizeram com que sua atitude mudasse em relação a guardar os convênios do Senhor e seu trato com seus semelhantes. Imaginem as mudanças que vocês causarão nas famílias que visitam. Devemos lembrar que o Senhor está no controle e que Ele efetuará uma poderosa mudança de coração nas pessoas. Tudo que se precisa é que estejamos presentes e convidemos a companhia do Espírito.',
        body4: 'A irmã Yee exclama que benditos sejam os irmãos ministrantes pelas grandes mudanças que houve no pai dela e imagino que também pelas mudanças que houve em sua família. Chegando sem encontrar um amigo para a eternidade, acredito que por meio da ministração é como podemos encontrar nosso querido amigo a quem prometemos que íamos encontrar.',
        next: 'Próximo',
      },
      p4: {
        body1: 'Devemos ser as mãos do Salvador. Não me lembro do nome do profeta que discursou sobre como em uma guerra, as mãos de uma estátua de Jesus Cristo foram perdidas no ataque. As pessoas queriam reconstruir as mãos da estátua, mas surgiu a ideia de deixá-la sem mãos para lembrar às pessoas que na verdade nós somos as mãos do Senhor.',
        body2: 'Nós, como portadores do sacerdócio, temos a responsabilidade de levar a mensagem da Expiação às famílias que temos designadas e aos nossos semelhantes. Devemos orar constantemente ao nosso Pai Celestial para sermos inspirados no momento de ensinar como a Expiação se aplica em nossas vidas. Jesus Cristo sempre invocava o Pai, retirava-se e orava e jejuava. Depois pregava. Os filhos de Alma também faziam o mesmo, dedicando seu tempo a jejuar porque sabiam que era por meio do Espírito Santo que as pessoas chegavam a ser convertidas e testavam a palavra do Senhor.',
        body3: 'Talvez não consertemos situações difíceis ou dolorosas, mas o Senhor nos dará aquele raio de luz ou de inspiração que tocará nossas vidas e a vida das pessoas a quem ministramos para convidar as pessoas a continuar vivendo no caminho dos convênios.',
        body4: 'Esta é a maneira de amar ao ministrar como o Salvador fazia. Ele chegava, expunha sua mensagem, convidava as pessoas a segui-Lo. Essa maneira de ensinar não mudou; continua presente. Só temos que chegar e fazer o convite por meio da mensagem que o Senhor nos inspirará a escolher para ministrar ao nosso irmão, ao nosso querido amigo. Neste momento não lembramos que eram nossos amigos na vida imortal, no entanto, chegará o dia em que vamos lembrar tudo.',
        next: 'Próximo',
      },
      p5: {
        h1: 'Ministrar é o caminho do céu',
        goBack: 'Início da aula',
      },
    },
  },
}

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof translations['es']
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && saved in translations) setLangState(saved)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
