// const activeList = require('../dummy-data/activeProcessList.json')
// const availableList = require('../dummy-data/availableProcessList.json')
// const archiveList = require('../dummy-data/archiveProcessList.json')
// const processItem = require('../dummy-data/process.json')

/*************************************/
/**         READ OPERATIONS         */
/***********************************/

/**
 * @desc get all user processes by default. If query params are present, query by them
 * @query *none/active* - default, return list by active status
 * @query *available* - return list by available status
 * @query *archive* - return list by archive status
 */
const readList = async (request, response) => {
    const status = request.query.status

    try {
        if (status === "available") {
            response.status(200).json([
                {
                    "id": 1,
                    "title": "Odrađivanje studentske prakse",
                    "manager": "Nikola Tanković",
                    "averageDuration": "120 sati",
                    "totalSteps": 6,
                },
                {
                    "id": 2,
                    "title": "George works on a small farm.",
                    "manager": "George Howell",
                    "averageDuration": "243 dana",
                    "totalSteps": 23,
                },
                {
                    "id": 3,
                    "title": "George works on a small farm.",
                    "manager": "George Howell",
                    "averageDuration": "243 dana",
                    "totalSteps": 23,
                }
            ]);
        } else if (status === "archive") {
            response.status(200).json([
                {
                    "id": 4,
                    "title": "Upis u prvu godinu diplomskog",
                    "manager": "UNIPU",
                    "progress": 90,
                    "startedAt": "01.10.2021",
                    "updatedAt": "05.10.2021"
                },
                {
                    "id": 5,
                    "title": "Natječaj za dodjelu stipendije",
                    "manager": "Obrazovni sustav RH",
                    "progress": 100,
                    "startedAt": "09.11.2021",
                    "updatedAt": "30.11.2021"
                },
            ]);
        } else {
            response.status(200).json([
                {
                    "id": 6,
                    "title": "Odrađivanje studentske prakse",
                    "manager": "Nikola Tanković",
                    "progress": 0,
                    "startedAt": "12.07.2022",
                    "updatedAt": "12.07.2022"
                },
            ]);
        }
    } catch (err) {
        response.status(400).json(err);
    }
};

const readProcessByID = async (_request, response) => {
    try {
        response.status(200).json({
            "id": 6,
            "info": {
                "title": "Odrađivanje studentske prakse",
                "description": "Ovdje se nalaze svi detalji vezani uz proces prijave i rješavanja prakse. Sve potrebne poveznice i kratke, ali bitne informacije o pojedinom koraku.",
                "status": "ACTIVE",
                "progress": 0,
                "timeAverage": "120 sati",
                "timeTotal": "0h",
                "stepTotal": 6,
                "stepDone": 0
            },
            "currentStep": [
                0,
                0
            ],
            "stepList": [
                [
                    {
                        "id": 1,
                        "title": "Odabir preferencija za paksu",
                        "caption": "Odabrane preferencije",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Odaberi do 3 preferencije gdje bi želio/la odrađivati praksu.",
                        "actionSummary": null,
                        "status": "ACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    }
                ],
                [
                    {
                        "id": 1,
                        "title": "Alokacija 1",
                        "caption": "Potvrda o alokaciji",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Kada budeš alociran/na za praksu, na mail ćeš primiti potvrdu zajedno s dokumentima potrebnim za prijavu prakse i pisanje dnevnika.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Alokacija 2",
                        "caption": "Alokacija na praksu",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Dodaj pismo i onda cemo te prihvatiti ispred svih ostalih.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Evaluacija studenta",
                        "caption": "Potvrda o evaluaciji",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Red je na poslodavcu da evaluira tebe kao kandidata. Ukoliko ispuniš njihova očekianja trebao/la bi primiti potvrdu na email i/ili slack. Ako te ne izaberu morati ćeš ponovno odabrati preferencije za praksu.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    }
                ],
                [
                    {
                        "id": 1,
                        "title": "Ispunjavanje prijavnice",
                        "caption": "Prijavnica ispunjena",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Prijavnica ti stiže na mail odmah nakon pozitivne evaluacije. Nju ispunjavaš i predaješ profesoru. Poveznicu možeš pronaći gore.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Odabir preferencija za paksu",
                        "caption": "Odabrane preferencije",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Odaberi do 3 preferencije gdje bi želio/la odrađivati praksu.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Odabir preferencija za paksu",
                        "caption": "Odabrane preferencije",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Odaberi do 3 preferencije gdje bi želio/la odrađivati praksu.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": [
                            0,
                            1
                        ]
                    }
                ],
                [
                    {
                        "id": 1,
                        "title": "Odabir preferencija za paksu",
                        "caption": "Odabrane preferencije",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "summary": "Odaberi do 3 preferencije gdje bi želio/la odrađivati praksu.",
                        "actionSummary": null,
                        "status": "INACTIVE",
                        "urlIndexList": []
                    }
                ]
            ],
            "urlList": [
                {
                    "title": "Pogledaj zanimljive i slobodne projekte ovdje",
                    "url": "http://www.google.com"
                },
                {
                    "title": "Prijavi se na 3 najdraža zadatka",
                    "url": "http://www.google.com"
                },
                {
                    "title": "Možeš predati projekt ovdje",
                    "url": "http://www.google.com"
                },
                {
                    "title": "Prijavi rok za obranu",
                    "url": "http://www.google.com"
                }
            ]
        });
    } catch (err) {
        response.status(400).json(err);
    }
};

const readActionByID = async (_request, response) => {
    try {
        response.status(200).json({});
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports = {
    readList,
    readProcessByID,
    readActionByID
}