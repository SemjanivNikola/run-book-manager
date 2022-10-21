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
                    "title": "Upis u višu godinu studija",
                    "manager": "UNIPU",
                    "averageDuration": "2 dana",
                    "totalSteps": 4,
                },
                {
                    "id": 3,
                    "title": "Prijava za člana studentskog zbora",
                    "manager": "Studentski zbor",
                    "averageDuration": "20 dana",
                    "totalSteps": 3,
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
                "progress": 67,
                "timeAverage": "120 sati",
                "timeTotal": "11h",
                "stepTotal": 6,
                "stepDone": 4
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
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;).",
                        "action": {
                            "id": 1,
                            "title": "Odaberi preferencije",
                            "label": "Preferencije"
                        },
                        "status": "ACTIVE",
                    }
                ],
                [
                    {
                        "id": 1,
                        "title": "Alociranje na zadatak",
                        "caption": "Potvrda o alokaciji",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "action": null,
                        "status": "INACTIVE",
                    },
                ],
                [
                    {
                        "id": 1,
                        "title": "Evaluiranje kandidata",
                        "caption": "Povrda o evaluaciji",
                        "description": "Evaluaciju obavlja firma na koju si alociran/na.",
                        "action": null,
                        "status": "INACTIVE",
                    },
                ],
                [
                    {
                        "id": 1,
                        "title": "Odabir preferencija za paksu",
                        "caption": "Odabrane preferencije",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "action": {
                            "id": 1,
                            "title": "Odaberi preferencije",
                            "label": "Preferencije"
                        },
                        "status": "INACTIVE",
                    },
                    {
                        "id": 2,
                        "title": "Ispunjavanje prijavnice",
                        "caption": "Ispunjena Prijavnica",
                        "description": "Prijavnicu možeš ispuniti kroz aplikaciju. Samo pokreni akciju.",
                        "action": {
                            "id": 2,
                            "title": "Ispuni prijavnicu",
                            "label": "Prijavnica"
                        },
                        "status": "INACTIVE",
                    }
                ],
                [
                    {
                        "id": 1,
                        "title": "Predaja dnevnika prakse",
                        "caption": "Dnevnik prakse predan",
                        "description": "Predati dnevnik prakse možeš kroz aplikaciju.",
                        "action": {
                            "id": 3,
                            "title": "Predaj dnevnik prakse",
                            "label": "Dnevnik prakse"
                        },
                        "status": "INACTIVE",
                    },
                ],
                [
                    {
                        "id": 1,
                        "title": "Prijava ispita",
                        "caption": "Prijava ispita",
                        "description": "Ispit prijavljuješ preko sutomata.",
                        "action": "https://www.isvu.hr/studomat/hr/prijava",
                        "status": "INACTIVE",
                    }
                ]
            ],
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