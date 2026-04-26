'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Lang = 'es' | 'en' | 'pt'

export const translations = {
  es: {
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
