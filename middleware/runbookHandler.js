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
                    "progress": 67,
                    "startedAt": "12.07.2022",
                    "updatedAt": "06.08.2022"
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
                1,
                0
            ],
            "stepList": [
                [
                    {
                        "id": 1,
                        "title": "Odabir preferencija za praksu",
                        "caption": "Odabrane preferencije",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;).",
                        "action": {
                            "id": 1,
                            "title": "Odaberi preferencije",
                            "label": "Preferencije"
                        },
                        "status": "COMPLETED",
                    }
                ],
                [
                    {
                        "id": 1,
                        "title": "Alociranje na zadatak",
                        "caption": "Potvrda o alokaciji",
                        "description": "Praksu možeš prijaviti na dva načina. Ukoliko si se dogovorio/la s firmom gdje bi odrađivao/la praksu samo ju je potrebno dodati u preferencije s tablice. Naravno prije toga oni trebaju ispuniti prijavnicu za održavanje prakse ukoliko nisu. Nakon toga ideš na sljedeće korake. Ukoliko to nije slučaj, možeš pogledati izbor firmi te odabrati ono što ti se čini najzanimljivje ili najlakše - nećemo nikome reći ;), dolje u među poveznicama.",
                        "action": null,
                        "status": "ACTIVE",
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
                        "title": "Odabir preferencija za praksu",
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

const readActionByID = async (request, response) => {
    const id = parseInt(request.params.id);

    try {
        if (id === 1) {
            /**
             * PRIJAVA PODUZEĆA
             */
            response.status(200).json({
                "formConfig": {
                    "headline": "Studentska prijava na projekt prakse",
                    "subHeadline": "Student odabire prvu, drugu i treću preferenciju.",
                    "isShowHeadline": true
                },
                "sections": {
                    "section-4d9dba36-e544-44ae-8ea4-4122b0c9796e": {
                        "uniqueId": "section-4d9dba36-e544-44ae-8ea4-4122b0c9796e",
                        "headline": "",
                        "subHeadline": "",
                        "isShowHeadline": false,
                        "sortOrder": 1,
                        "type": "normal",
                        "rows": [],
                        "controls": [
                            "control-0c640bab-b63b-4a34-a4a7-ec87e96218e9",
                            "control-e31ed0a8-3702-44a0-bed3-32969f7a4f25",
                            "control-b12100b5-226d-4965-aef6-4c332c75bc8a",
                            "control-8ae887ea-59c1-46a4-81e1-3d64555a9dbf",
                            "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7",
                            "control-73d656bc-b435-4dee-a3e6-acfc944a4375",
                            "control-1a38578e-c63c-4a59-821a-0099037f1e2d",
                            "control-6f665b49-c146-413e-a28c-24e3919d25cc",
                            "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd"
                        ]
                    }
                },
                "rows": {},
                "controls": {
                    "control-0c640bab-b63b-4a34-a4a7-ec87e96218e9": {
                        "uniqueId": "control-0c640bab-b63b-4a34-a4a7-ec87e96218e9",
                        "type": "input",
                        "name": "jmbag",
                        "label": "JMBAG",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": true
                    },
                    "control-e31ed0a8-3702-44a0-bed3-32969f7a4f25": {
                        "uniqueId": "control-e31ed0a8-3702-44a0-bed3-32969f7a4f25",
                        "type": "input",
                        "name": "name",
                        "label": "Ime i prezime",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-b12100b5-226d-4965-aef6-4c332c75bc8a": {
                        "uniqueId": "control-b12100b5-226d-4965-aef6-4c332c75bc8a",
                        "type": "dropDown",
                        "name": "yearOfStudy",
                        "label": "Godina studija",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "1",
                                "text": "3. preddiplomski"
                            },
                            {
                                "value": "2",
                                "text": "1. diplomski"
                            },
                            {
                                "value": "3",
                                "text": "2. diplomski"
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-8ae887ea-59c1-46a4-81e1-3d64555a9dbf": {
                        "uniqueId": "control-8ae887ea-59c1-46a4-81e1-3d64555a9dbf",
                        "type": "dropDown",
                        "name": "firstChoice",
                        "label": "Prvi odabir",
                        "subLabel": "Odabrati ID Zadatka iz bit.ly/fipu-praksa-zadaciAdd",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "60",
                                "text": "ZADATAK 60 - PLAVA TVORNICA d.o.o."
                            },
                            {
                                "value": "110",
                                "text": "ZADATAK 110 - Speck d.o.o."
                            },
                            {
                                "value": "111",
                                "text": "ZADATAK 111 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "112",
                                "text": "ZADATAK 112 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "113",
                                "text": "ZADATAK 113 - Spectral Core d.o.o."
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7": {
                        "uniqueId": "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7",
                        "type": "dropDown",
                        "name": "secondChoice",
                        "label": "Drugi odabir",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "60",
                                "text": "ZADATAK 60 - PLAVA TVORNICA d.o.o."
                            },
                            {
                                "value": "110",
                                "text": "ZADATAK 110 - Speck d.o.o."
                            },
                            {
                                "value": "111",
                                "text": "ZADATAK 111 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "112",
                                "text": "ZADATAK 112 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "113",
                                "text": "ZADATAK 113 - Spectral Core d.o.o."
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-73d656bc-b435-4dee-a3e6-acfc944a4375": {
                        "uniqueId": "control-73d656bc-b435-4dee-a3e6-acfc944a4375",
                        "type": "dropDown",
                        "name": "thirdChoice",
                        "label": "Treći odabir",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "60",
                                "text": "ZADATAK 60 - PLAVA TVORNICA d.o.o."
                            },
                            {
                                "value": "110",
                                "text": "ZADATAK 110 - Speck d.o.o."
                            },
                            {
                                "value": "111",
                                "text": "ZADATAK 111 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "112",
                                "text": "ZADATAK 112 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "113",
                                "text": "ZADATAK 113 - Spectral Core d.o.o."
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-1a38578e-c63c-4a59-821a-0099037f1e2d": {
                        "uniqueId": "control-1a38578e-c63c-4a59-821a-0099037f1e2d",
                        "type": "text",
                        "name": "note",
                        "label": "Napomena",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": 3,
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-6f665b49-c146-413e-a28c-24e3919d25cc": {
                        "uniqueId": "control-6f665b49-c146-413e-a28c-24e3919d25cc",
                        "type": "checkbox",
                        "name": "emailCopy",
                        "label": "",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "displayMode": "line",
                        "position": "left",
                        "items": [
                            {
                                "value": "1",
                                "text": "Pošalji mi kopiju prijavnice na email"
                            }
                        ]
                    },
                    "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd": {
                        "uniqueId": "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd",
                        "type": "button",
                        "name": "submit",
                        "label": "Prijavi",
                        "subLabel": "",
                        "isShowLabel": false,
                        "placeholderText": "",
                        "containerClass": "col-md-6 md-layout-item md-size-50",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "buttonClass": "btn btn-success md-button md-raised md-success md-theme-default",
                        "buttonType": "submit",
                        "postLink": "",
                        "emitEventCode": "",
                        "emitEventData": "",
                        "isRunValidation": true
                    }
                }
            });
        } else if (id === 2) {
            /**
             * ISPUNJAVANJE PRIJAVNICE
             */
            response.status(200).json({
                "formConfig": {
                    "headline": "Prijavnica na praksu",
                    "subHeadline": "VAŽNO: Prijavnica se popunjava nakon (!) što nastavnik odobri kontakt određenom poduzeću i nakon što student s tim poduzećem dogovori praksu. Popunjenu prijavnicu šaljemo poduzeću na odobrenje i potpis.",
                    "isShowHeadline": true
                },
                "sections": {
                    "section-4d9dba36-e544-44ae-8ea4-4122b0c9796e": {
                        "uniqueId": "section-4d9dba36-e544-44ae-8ea4-4122b0c9796e",
                        "headline": "",
                        "subHeadline": "",
                        "isShowHeadline": false,
                        "sortOrder": 1,
                        "type": "normal",
                        "rows": [],
                        "controls": [
                            "control-b12100b5-226d-4965-aef6-4c332c75bc8a",
                            "control-0c640bab-b63b-4a34-a4a7-ec87e96218e9",
                            "control-e31ed0a8-3702-44a0-bed3-32969f7a4f25",
                            "control-99b4688d-34b8-442a-9164-883ff0719351",
                            "control-8ae887ea-59c1-46a4-81e1-3d64555a9dbf",
                            "control-53e51ee7-275c-465d-b843-086c60c01f7e",
                            "control-faf419af-1f76-44f2-83c1-0beff9d6fbdc",
                            "control-1a38578e-c63c-4a59-821a-0099037f1e2d",
                            "control-85a1da2c-a632-4e51-b49e-6332491d0f32",
                            "control-54ae0651-f401-4bec-a709-6315f154b82c",
                            "control-fd83cf07-2f69-469c-badd-ec1f0731bdc4",
                            "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7",
                            "control-73d656bc-b435-4dee-a3e6-acfc944a4375",
                            "control-6f665b49-c146-413e-a28c-24e3919d25cc",
                            "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd"
                        ]
                    }
                },
                "rows": {},
                "controls": {
                    "control-0c640bab-b63b-4a34-a4a7-ec87e96218e9": {
                        "uniqueId": "control-0c640bab-b63b-4a34-a4a7-ec87e96218e9",
                        "type": "input",
                        "name": "oib",
                        "label": "OIB",
                        "subLabel": "Za potrebe prijave osiguranja.",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-e31ed0a8-3702-44a0-bed3-32969f7a4f25": {
                        "uniqueId": "control-e31ed0a8-3702-44a0-bed3-32969f7a4f25",
                        "type": "input",
                        "name": "phone",
                        "label": "Broj mobitela",
                        "subLabel": "Neće se trajno pohraniti. Samo za slučajeve brzog dogovora.",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-b12100b5-226d-4965-aef6-4c332c75bc8a": {
                        "uniqueId": "control-b12100b5-226d-4965-aef6-4c332c75bc8a",
                        "type": "dropDown",
                        "name": "student",
                        "label": "Student",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "1",
                                "text": "Nikola Semjaniv"
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-8ae887ea-59c1-46a4-81e1-3d64555a9dbf": {
                        "uniqueId": "control-8ae887ea-59c1-46a4-81e1-3d64555a9dbf",
                        "type": "dropDown",
                        "name": "organization",
                        "label": "Poduzeće",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "60",
                                "text": "ZADATAK 60 - PLAVA TVORNICA d.o.o."
                            },
                            {
                                "value": "110",
                                "text": "ZADATAK 110 - Speck d.o.o."
                            },
                            {
                                "value": "111",
                                "text": "ZADATAK 111 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "112",
                                "text": "ZADATAK 112 - Lescal Digital d.o.o."
                            },
                            {
                                "value": "113",
                                "text": "ZADATAK 113 - Spectral Core d.o.o."
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-1a38578e-c63c-4a59-821a-0099037f1e2d": {
                        "uniqueId": "control-1a38578e-c63c-4a59-821a-0099037f1e2d",
                        "type": "text",
                        "name": "task",
                        "label": "Dogovoreni zadatak",
                        "subLabel": "Detaljno opisati zadatak koji će se izvršavati na praksi.",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": 3,
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-99b4688d-34b8-442a-9164-883ff0719351": {
                        "uniqueId": "control-99b4688d-34b8-442a-9164-883ff0719351",
                        "type": "input",
                        "name": "email",
                        "label": "E-mail",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-53e51ee7-275c-465d-b843-086c60c01f7e": {
                        "uniqueId": "control-53e51ee7-275c-465d-b843-086c60c01f7e",
                        "type": "input",
                        "name": "mentor",
                        "label": "Mentor",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-faf419af-1f76-44f2-83c1-0beff9d6fbdc": {
                        "uniqueId": "control-faf419af-1f76-44f2-83c1-0beff9d6fbdc",
                        "type": "input",
                        "name": "mentorEmail",
                        "label": "E-mail mentora",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false
                    },
                    "control-85a1da2c-a632-4e51-b49e-6332491d0f32": {
                        "uniqueId": "control-85a1da2c-a632-4e51-b49e-6332491d0f32",
                        "type": "number",
                        "name": "workingHours",
                        "label": "Dogovoreni broj sati",
                        "subLabel": "Detaljno opisati zadatak koji će se izvršavati na praksi.",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "isReal": false,
                        "decimalPlace": 1
                    },
                    "control-54ae0651-f401-4bec-a709-6315f154b82c": {
                        "uniqueId": "control-54ae0651-f401-4bec-a709-6315f154b82c",
                        "type": "date",
                        "name": "startDate",
                        "label": "Datum početka",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "dd/m/yyyy",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "format": "DD/MM/YYYY",
                        "firstDay": 1,
                        "numberOfMonths": 1,
                        "numberOfColumns": 1,
                        "minDate": null,
                        "maxDate": null,
                        "singleMode": true,
                        "minDays": 0,
                        "maxDays": 0,
                        "returnType": "format"
                    },
                    "control-fd83cf07-2f69-469c-badd-ec1f0731bdc4": {
                        "uniqueId": "control-fd83cf07-2f69-469c-badd-ec1f0731bdc4",
                        "type": "date",
                        "name": "endDate",
                        "label": "Datum završetka",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "dd/mm/yyyy",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "format": "DD/MM/YYYY",
                        "firstDay": 1,
                        "numberOfMonths": 1,
                        "numberOfColumns": 1,
                        "minDate": null,
                        "maxDate": null,
                        "singleMode": true,
                        "minDays": 0,
                        "maxDays": 0,
                        "returnType": "format"
                    },
                    "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7": {
                        "uniqueId": "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7",
                        "type": "checkbox",
                        "name": "infoCheck",
                        "label": "Nastavnik mi je odobrio i alocirao me na ovu tvrtku",
                        "subLabel": "Što se i vidi na https://bit.ly/fipu-praksa-alokacija",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "displayMode": "line",
                        "position": "left",
                        "items": [
                            {
                                "value": "1",
                                "text": ""
                            }
                        ]
                    },
                    "control-73d656bc-b435-4dee-a3e6-acfc944a4375": {
                        "uniqueId": "control-73d656bc-b435-4dee-a3e6-acfc944a4375",
                        "type": "checkbox",
                        "name": "orgCheck",
                        "label": "Potvrđujem da sam kontaktirao tvrtku i dogovorio detalje koji su ovdje uneseni",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "displayMode": "line",
                        "position": "left",
                        "items": [
                            {
                                "value": "1",
                                "text": ""
                            }
                        ]
                    },
                    "control-6f665b49-c146-413e-a28c-24e3919d25cc": {
                        "uniqueId": "control-6f665b49-c146-413e-a28c-24e3919d25cc",
                        "type": "checkbox",
                        "name": "emailCopy",
                        "label": "",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "displayMode": "line",
                        "position": "left",
                        "items": [
                            {
                                "value": "1",
                                "text": "Pošalji mi kopiju prijavnice na email"
                            }
                        ]
                    },
                    "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd": {
                        "uniqueId": "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd",
                        "type": "button",
                        "name": "submit",
                        "label": "Prijavi",
                        "subLabel": "",
                        "isShowLabel": false,
                        "placeholderText": "",
                        "containerClass": "col-md-6 md-layout-item md-size-50",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "buttonClass": "btn btn-success md-button md-raised md-success md-theme-default",
                        "buttonType": "submit",
                        "postLink": "",
                        "emitEventCode": "",
                        "emitEventData": "",
                        "isRunValidation": true
                    }
                }
            });
        } else {
            /**
             * DNEVNIK PRAKSE
             */
            response.status(200).json({
                "formConfig": {
                    "headline": "Predaja dnevnika prakse",
                    "subHeadline": "Template za dnevnik dostupan je na http://bit.ly/fipu-praksa-template Dnevnik je potrebno predati prije prijave ispitnoga roka.",
                    "isShowHeadline": true
                },
                "sections": {
                    "section-4d9dba36-e544-44ae-8ea4-4122b0c9796e": {
                        "uniqueId": "section-4d9dba36-e544-44ae-8ea4-4122b0c9796e",
                        "headline": "",
                        "subHeadline": "",
                        "isShowHeadline": false,
                        "sortOrder": 1,
                        "type": "normal",
                        "rows": [],
                        "controls": [
                            "control-b12100b5-226d-4965-aef6-4c332c75bc8a",
                            "control-5bc9af83-6d54-4705-851e-175583217207",
                            "control-253df9ff-f90e-4529-9535-4d58b0d3eeb3",
                            "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7",
                            "control-54ae0651-f401-4bec-a709-6315f154b82c",
                            "control-6f665b49-c146-413e-a28c-24e3919d25cc",
                            "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd"
                        ]
                    }
                },
                "rows": {},
                "controls": {
                    "control-b12100b5-226d-4965-aef6-4c332c75bc8a": {
                        "uniqueId": "control-b12100b5-226d-4965-aef6-4c332c75bc8a",
                        "type": "dropDown",
                        "name": "student",
                        "label": "Student",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": null,
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "dataMode": "list",
                        "items": [
                            {
                                "value": null,
                                "text": "Odaberi"
                            },
                            {
                                "value": "1",
                                "text": "Nikola Semjaniv"
                            }
                        ],
                        "apiURL": "",
                        "apiTextKey": "text",
                        "apiValueKey": "value"
                    },
                    "control-5bc9af83-6d54-4705-851e-175583217207": {
                        "uniqueId": "control-5bc9af83-6d54-4705-851e-175583217207",
                        "type": "fileUploader",
                        "name": "",
                        "label": "PDF dnevnika prakse",
                        "subLabel": "(obavezno PDF!)\nObrazac: http://bit.ly/fipu-praksa-template",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "postActionURL": "https://httpbin.org/post",
                        "extensions": ".pdf",
                        "maxSize": "0",
                        "isMultiple": false,
                        "maximumFiles": 1,
                        "defaultDropzoneMessage": "&#9729; Ubaci PDF ovdje"
                    },
                    "control-253df9ff-f90e-4529-9535-4d58b0d3eeb3": {
                        "uniqueId": "control-253df9ff-f90e-4529-9535-4d58b0d3eeb3",
                        "type": "fileUploader",
                        "name": "",
                        "label": "PDF sken ispunjene potvrde o obavljenoj praksi",
                        "subLabel": "(obavezno PDF!) Dostaviti tajnici ili Nikoli Tankoviću i u fizičkom obliku.",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "postActionURL": "https://httpbin.org/post",
                        "extensions": ".pdf",
                        "maxSize": "0",
                        "isMultiple": false,
                        "maximumFiles": 1,
                        "defaultDropzoneMessage": "&#9729; Ubaci PDF ovdje"
                    },
                    "control-54ae0651-f401-4bec-a709-6315f154b82c": {
                        "uniqueId": "control-54ae0651-f401-4bec-a709-6315f154b82c",
                        "type": "date",
                        "name": "deadline",
                        "label": "Prijevljen rok",
                        "subLabel": "Rok na Studomatu na kojem se unosi ocjena, mora biti prijavljen!",
                        "isShowLabel": true,
                        "placeholderText": "dd/m/yyyy",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [
                            {
                                "ruleType": "required",
                                "errorMessage": "Ovo polje je obavezno",
                                "additionalValue": ""
                            }
                        ],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "format": "DD/MM/YYYY",
                        "firstDay": 1,
                        "numberOfMonths": 1,
                        "numberOfColumns": 1,
                        "minDate": null,
                        "maxDate": null,
                        "singleMode": true,
                        "minDays": 0,
                        "maxDays": 0,
                        "returnType": "format"
                    },
                    "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7": {
                        "uniqueId": "control-987be1d6-80fd-447d-a3ac-0dbfa92faae7",
                        "type": "checkbox",
                        "name": "continueWork",
                        "label": "Označi ako nastavljaš i dalje raditi u tvrtci ili ćeš ubrzo početi raditi honorarno",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "displayMode": "line",
                        "position": "left",
                        "items": [
                            {
                                "value": "1",
                                "text": ""
                            }
                        ]
                    },
                    "control-6f665b49-c146-413e-a28c-24e3919d25cc": {
                        "uniqueId": "control-6f665b49-c146-413e-a28c-24e3919d25cc",
                        "type": "checkbox",
                        "name": "emailCopy",
                        "label": "",
                        "subLabel": "",
                        "isShowLabel": true,
                        "placeholderText": "",
                        "containerClass": "col-md-12 md-layout-item md-size-100",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "displayMode": "line",
                        "position": "left",
                        "items": [
                            {
                                "value": "1",
                                "text": "Pošalji mi kopiju prijavnice na email"
                            }
                        ]
                    },
                    "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd": {
                        "uniqueId": "control-c18e8c84-c8fa-475d-ac49-7dc1a59ebafd",
                        "type": "button",
                        "name": "submit",
                        "label": "Predaj",
                        "subLabel": "",
                        "isShowLabel": false,
                        "placeholderText": "",
                        "containerClass": "col-md-6 md-layout-item md-size-50",
                        "additionalLabelClass": "pt-3",
                        "defaultValue": "",
                        "defaultValueForAutocomplete": [],
                        "rows": [],
                        "validations": [],
                        "autocompleteLink": "",
                        "autocomplete": [],
                        "multiple": false,
                        "buttonClass": "btn btn-success md-button md-raised md-success md-theme-default",
                        "buttonType": "submit",
                        "postLink": "",
                        "emitEventCode": "",
                        "emitEventData": "",
                        "isRunValidation": true
                    }
                }
            });
        }
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports = {
    readList,
    readProcessByID,
    readActionByID
}