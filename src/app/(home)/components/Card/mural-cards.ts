import banner_01 from "@/assets/images/banners/Os Girassóis Pintura de Vincent - van Gogh.png";
import banner_02 from "@/assets/images/banners/Caminho nos Campos de trigo em Pourville - Claude Monet.png";
import banner_03 from "@/assets/images/banners/Marilyn Monroe portfolio - Andy Warhol.png";
import banner_04 from "@/assets/images/banners/The Scream - Edvard Munch.png";
import banner_05 from "@/assets/images/banners/o beijo - gustav klimt.png";
import banner_06 from "@/assets/images/banners/Mulher no Espelho - Pablo Picasso.png";
import banner_07 from "@/assets/images/banners/O Filho do Homem Pintura - René Magritte.png";
import banner_08 from "@/assets/images/banners/A Criação de Adão - Michelangelo Buonarroti.png";
import banner_09 from "@/assets/images/banners/A Casa Amarela - Vincent van Gogh.png";
import banner_10 from "@/assets/images/banners/O Sepultamento de Cristo Pintura - Caravaggio.png";
import banner_11 from "@/assets/images/banners/O Nascimento de Vênus - Sandro Botticelli.png";
import AppRoutes from "@/app.routes";


export const CardsContent = [
    {
        "id": 0,
        "banner": "",
        "icon": "IconMural",
        "title": "mural",
        "about": "Visualize o mural com links do Mac HUB",
        "link": AppRoutes.home,
        "target": "_self",
        "aboutBanner": "",
        "color": "black",
       
    },
    {
        "id": 1,
        "banner": banner_01,
        "icon": "IconHlightsOfTheDay",
        "title": "destaques do dia",
        "about": "Visualize o mural com os avisos mais recentes",
        "link": AppRoutes.warnings,
        "target": "_blank",
        "aboutBanner": "Os Girassóis Pintura de Vincent - Van Gogh",
        "color": "yellow",
        
    },
    {
        "id": 2,
        "banner": banner_02,
        "icon": "IconEventsCalendar",
        "title": "Calendário de Eventos",
        "about": "Visualize o calendário interno do museu.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "Caminho nos Campos de trigo em Pourville - Claude Monet",
        "color": "purple",
        
    },
    {
        "id": 3,
        "banner": banner_03,
        "icon": "IconMainDocuments",
        "title": "Principais Documentos",
        "about": "Acesse a pasta com os principais documentos do MAC.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "Marilyn Monroe portfolio - Andy Warhol",
        "color": "red",
       
    },
    {
        "id": 4,
        "banner": banner_04,
        "icon": "IconAppsMicrosoft",
        "title": "App's Microsoft",
        "about": "Acesse a launcher de aplicativos Microsoft",
        "link": AppRoutes.msApps,
        "target": "_blank",
        "aboutBanner": "O grito - Edvard Munch",
        "color": "blue"
    },
    {
        "id": 5,
        "banner": banner_05,
        "icon": "IconDocumentLibrary",
        "title": "Biblioteca de documentos",
        "about": "Acesse a pasta com todos os documentos do MAC.",
        "target": "_blank",
        "aboutBanner": "O beijo - Gustav Klimt",
        "link": AppRoutes.underConstruction,
        "color": "orange"        
    },
    {
        "id": 6,
        "banner": banner_06,
        "icon": "IconEventPlanning",
        "title": "Planejamento de eventos",
        "about": "Acesse os formulários criar um planejamento.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "Mulher no Espelho - Pablo Picasso",
        "color": "green"
    },
    {
        "id": 7,
        "banner": banner_07,
        "icon": "IconSpaceReservation",
        "title": "Reserva de espaços",
        "about": "Acesse o formulário para reservar espaços no MAC.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "O Filho do Homem Pintura - René Magritte",
        "color": "blue"        
    },
    {
        "id": 8,
        "banner": banner_08,
        "icon": "IconReportsAndMetrics",
        "title": "Relatórios e Métricas",
        "about": "Visualize os dashboards do MAC.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "A Criação de Adão - Michelangelo Buonarroti",
        "color": "purple"        
    },
    {
        "id": 9,
        "banner": banner_09,
        "icon": "IconMacGallery",
        "title": "Galeria Mac",
        "about": "Acesse a pasta de arquivos multimídia do MAC.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "A Casa Amarela - Vincent van Gogh",
        "color": "yellow"       
    },
    {
        "id": 10,
        "banner": banner_10,
        "icon": "IconEducational",
        "title": "Educativo",
        "about": "Acesse as principais pastas do educativo do MAC.",
        "link": "green",
        "target": "_blank",
        "aboutBanner": "O Sepultamento de Cristo Pintura - Caravaggio",
        "color": "green"        
    },
    {
        "id": 11,
        "banner": banner_11,
        "icon": "IconTeam",
        "title": "Equipe",
        "about": "Visualize a lista de contatos da equipe do MAC.",
        "link": AppRoutes.underConstruction,
        "target": "_blank",
        "aboutBanner": "O Nascimento de Vênus - Sandro Botticelli",
        "color": "purple"        
    }
]