// ANNOTATION CONTROLLER
var AnnotationCtrl = (function () {
    var cxr_template = {
        "col": [
            "Major Anatomic Regions",
            "Subanatomy",
            "Laterality Modifier",
            "Location Modifier",
            "Findings",
            "Character Modifiers",
            "Number of anomalies",
            "Size Modifiers"
        ],
        "annotation-rows": [
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "Peripheral" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "Central" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
            {
                row: [
                    { "col-title": "Major Anatomic Regions", "value": "Lungs" },
                    { "col-title": "Subanatomy", "value": "Upper lung zone" },
                    { "col-title": "Laterality Modifier", "value": "Bilateral" },
                    { "col-title": "Location Modifier", "value": "None" },
                    { "col-title": "Findings", "value": "Alveolar Opacity" },
                    { "col-title": "Character Modifiers", "value": "No, faint, moderately dense,  very dense" },
                    { "col-title": "Number of anomalies", "value": "NA" },
                    { "col-title": "Size Modifiers", "value": "Small, Medium, Large" }
                ]
            },
        ]
    };

    return {
        getColumns: function () {
            return cxr_template.col;
        },
        getRows: function () {
            return cxr_template['annotation-rows'];
        }
    }
})();

// SEARCH DATA CONTROLLER
var SearchCtrl = (function () {
    var data = {
        "Major Anatomic Region": [
            {
                "name": "Bones",
                "Subanatomy": [
                    {
                        "name": "Ribs",
                        "Findings": [
                            {
                                "name": "Fracture",
                                "Laterality Modifier": [
                                    { "name": "Left" },
                                    { "name": "Right" }
                                ],
                                "Location Modifier" : [
                                    { "name" : "1"}, 
                                    {"name": "2"}, 
                                    { "name": "3"},
                                    { "name": "4"},
                                    { "name": "5"},
                                    { "name": "6"},
                                    { "name": "7"},
                                    { "name": "8"},
                                    { "name": "9"},
                                    { "name": "10"},
                                    { "name": "11"},
                                    { "name": "12"},
                                    { "name": "Posterior"},
                                    { "name": "Lateral"},
                                    { "name": "Anterior"}
                                ],
                                "Character Modifiers": [
                                    { "name": "Non-displaced" },
                                    { "name": "Displaced" },
                                    { "name": "Comminuted" },
                                    { "name": "segmental" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "NA" }
                                ]
                            },
                            {
                                "name": "Bone Lesion",
                                "Laterality Modifier": [
                                    { "name": "Left" },
                                    { "name": "Right" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Focal Lytic" },
                                    { "name": "Focal Blastic" },
                                    { "name": "Likely Pagets" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "Small" },
                                    { "name": "Moderate" },
                                    { "name": "Large" },
                                    { "name": "Measures: " },
                                ]
                            },
                            {
                                "name": "Metal bone implant or fixation hardware",
                                "Laterality Modifier": [
                                    { "name": "Left" },
                                    { "name": "Right" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Fixation wires" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "NA" }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Cervical Spine",
                        "Findings": [
                            {
                                "name": "Fracture",
                                "Laterality Modifier": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Non-displaced" },
                                    { "name": "Moderately displaced" },
                                    { "name": "Markedly displaced" },
                                    { "name": "Mild compression" },
                                    { "name": "Moderate compression" },
                                    { "name": "Severe compression" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "NA" }
                                ]
                            },
                            {
                                "name": "Bone Lesion",
                                "Laterality Modifier": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Focal Lytic" },
                                    { "name": "Focal Blastic" },
                                    { "name": "Likely Pagets" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "Small" },
                                    { "name": "Moderate" },
                                    { "name": "Large" },
                                    { "name": "Measures:" }
                                ]
                            },
                            {
                                "name": "Metal bone implant or fixation hardware",
                                "Laterality Modifier": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Vertebroplasty" },
                                    { "name": "Fixation plate and screws" },
                                    { "name": "Disc replacement" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "NA" }
                                ]
                            },
                            {
                                "name": "Scoliosis",
                                "Laterality Modifier": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Right convex" },
                                    { "name": "Left convex" },
                                    { "name": "Mild" },
                                    { "name": "Moderate" },
                                    { "name": "Severe" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "Cobb angle measures:" }
                                ]
                            },
                            {
                                "name": "Spinal degenerative changes",
                                "Laterality Modifier": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers": [
                                    { "name": "Mild" },
                                    { "name": "Moderate" },
                                    { "name": "Severe" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers": [
                                    { "name": "NA" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Lungs",
                "Subanatomy": [
                    {
                        "name": "Upper Lung Zone",
                        "Findings": [
                            { "name": "Alveolar Opacity" },
                            { "name": "Ateletasis" },
                            { "name": "Mitral valve calcification" },
                            { "name": "Enlarged left atrium" },
                            { "name": "Enlarged right atrium" },
                            { "name": "Enlarged left ventricle" },
                            { "name": "Hyperaeration" },
                            { "name": "Thickened paratracheal stripe" },
                            { "name": "Paratracheal mass" },
                            { "name": "Azygous region enlargement" },
                            { "name": "Situs inversus" },
                            { "name": "Mitral valve annulus calcification" },
                            { "name": "Mass/Nodule" },
                            { "name": "Scattered Bilateral Nodules/Miliary disease" },
                            { "name": "Increased reticular markings" },
                            { "name": "Increased reticulonodular markings" },
                            { "name": "findings consistent with granulomatous disease" },
                            { "name": "findings consistent with granulomatous" }
                        ]
                    },
                    {
                        "name": "Lower Lung Zone",
                        "Findings": [
                            { "name": "Pulmonary artery cut-off" },
                            { "name": "Anomalous pulmonary vessel" }
                        ]
                    }
                ]
            }
        ]
    };

    return {
        getSearchData: function () {
            return data;
        }
    }
})();

var UICtrl = (function () {

    var body, table, thead, tbody, tr, td;

    var DOMStrings = {
        body: 'body',
        table: 'table',
        thead: 'thead',
        tbody: 'tbody',
        th: 'th',
        tr: 'tr',
        td: 'td',
        tableDiv: '.annotation-table',
        numberModifierInput: '#number-modifiers',
        characterInput: '#character',
        locationInput: '#location',
        lateralityInput: '#laterality',
        findingsInput: '#findings',
        subanatomyInput: '#subanatomy',
        majorAnatomyInput: '#major-anatomry',
        addAnnotation: '#addRow'
    };

    var createTblHeading = function (colNames) {
        body = document.getElementsByTagName(DOMStrings.body)[0];
        table = document.createElement(DOMStrings.table);
        thead = document.createElement(DOMStrings.thead);
        tr = document.createElement(DOMStrings.tr);

        for (var i = 0; i < colNames.length; i++) {
            var th = document.createElement(DOMStrings.th);
            var cellText = document.createTextNode(colNames[i]);
            th.appendChild(cellText);
            tr.appendChild(th);
        }

        // Delete Row Th housing delete button for each row
        var deleteRowTh = document.createElement(DOMStrings.th);
        deleteRowTh.appendChild(document.createTextNode('Delete'));
        tr.appendChild(deleteRowTh);

        thead.appendChild(tr);
        // table.appendChild(tr);
        table.appendChild(thead);
        table.id = 'annotation-table';
        table.classList.add('table');
        table.classList.add('table-bordered');
        table.classList.add('responsive');
    };

    var createTblBody = function (annotationRows) {
        tbody = document.createElement(DOMStrings.tbody);
        // tbody.id = 'myTable';

        var singleRowElements;
        for (var i = 0; i < annotationRows.length; i++) {

            singleRowElements = annotationRows[i]['row'];
            tr = document.createElement(DOMStrings.tr);

            for (var j = 0; j < singleRowElements.length; j++) {
                td = document.createElement(DOMStrings.td);
                var cellText = document.createTextNode(singleRowElements[j]['value']);

                td.appendChild(cellText);
                tr.appendChild(td);
            }

            var deleteBtnTd = document.createElement('td');
            var rowDeleteBtn = document.createElement('button');
            rowDeleteBtn.appendChild(document.createTextNode('Delete'));

            deleteBtnTd.appendChild(rowDeleteBtn);
            tr.appendChild(deleteBtnTd);
            // Adding row one by one to tbody
            tbody.appendChild(tr);
        }
        // Adding tbody to table
        table.appendChild(tbody);
        body.appendChild(table);
    };

    var createDT = function () {
        table = $(DOMStrings.table).DataTable({
            "paging": false,
            "scrollY": "400px"
        });

        // Fix for enabling vertical scroll
        $('.dataTables_scrollHeadInner').css("width", "100%");
        $('div.dataTables_scrollHeadInner > table').css("width", "100%");

        $('#annotation-table tbody').on('click', 'button', function () {
            table
                .row($(this).parents('tr'))
                .remove()
                .draw();
        });
    };

    // Trigger focus event on input field to show list of available options
    var triggerFocus = function (inputDOMString) {
        var e = jQuery.Event("keyup", { keyCode: 65, which: 65 });
        // $(inputDOMString).focus();
        $(inputDOMString).attr('value', '');
        $(inputDOMString).triggerHandler(e);
        $(inputDOMString).trigger('change');
    };

    return {
        setupNumberModifiers: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.numberModifierInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.numberModifierInput);
            });
        },
        setupCharacter: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.characterInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.characterInput);
            });
        },
        setupLocation: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.locationInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.locationInput);
            });
        },
        setupLaterality: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.lateralityInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.lateralityInput);
            });
        },
        setupFindings: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    onChooseEvent: function () {
                        var finding = $(DOMStrings.findingsInput).val();
                        searchData.find(function (element) {
                            if (element.name === finding) {
                                var laterality = element["Laterality Modifier"];
                                var location = element["Location Modifier"];
                                var character = element["Character Modifiers"];
                                var numberModifiers = element["# Modifiers"];
                                UICtrl.setupLaterality(laterality);
                                UICtrl.setupLocation(location);
                                UICtrl.setupCharacter(character);
                                UICtrl.setupNumberModifiers(numberModifiers);
                            }
                        });
                    }
                },
                theme: "plate-dark"
            };

            $(DOMStrings.findingsInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.findingsInput);
            });
        },
        setupSubanatomy: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    onChooseEvent: function () {
                        var subanatomy = $(DOMStrings.subanatomyInput).val();
                        searchData.find(function (element) {
                            if (element.name === subanatomy) {
                                var findings = element["Findings"];
                                UICtrl.setupFindings(findings);
                            }
                        });
                    }
                },
                theme: "plate-dark"
            };

            $(DOMStrings.subanatomyInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.subanatomyInput);
            });
        },
        setupMajorAnatomy: function (searchData) {

            var options = {
                data: searchData,
                listLocation: function (element) {
                    return element["Major Anatomic Region"];
                },
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    onChooseEvent: function () {
                        var majorAnatomy = $(DOMStrings.majorAnatomyInput).val();

                        searchData["Major Anatomic Region"].find(function (element) {
                            if (element.name === majorAnatomy) {
                                var subanatomy = element["Subanatomy"];
                                UICtrl.setupSubanatomy(subanatomy);
                            }
                        });
                    }
                }
            };

            $(DOMStrings.majorAnatomyInput).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.majorAnatomyInput);
            });
        },
        setupAddAnnotationRow: function () {
            $(DOMStrings.addAnnotation).on('click', function () {
                var allInputs = document.querySelectorAll('input[type="text"]');
                var rowData = [];
                
                allInputs.forEach(function (input) {
                    rowData.push(input.value);
                });
                console.log('Input values: ', JSON.stringify(rowData, undefined, 2));
            });
        },
        createTbl: function (colNames, annotationRows) {
            createTblHeading(colNames);
            createTblBody(annotationRows);
            console.log(table);
        },
        createDataTable: function () {
            createDT();
        },
        placeDT: function () {
            // Inserting data table element inside annotation-table div
            var dataTableDiv = document.querySelector('.dataTables_wrapper');
            document.querySelector('.annotation-table-div').insertAdjacentElement('beforeend', dataTableDiv);
        },
        getRows: function () {
            $("#getRows").on('click', function () {
                table.rows().every(function (rowIdx, tableLoop, rowLoop) {
                    var eachRow = this.data();

                    eachRow.forEach(function (cellData) {
                        if (!cellData.includes("Delete")) {
                            console.log(cellData);
                        }
                    });
                });
            });
        }
    }
})();

var controller = (function () {

    return {
        init: function () {
            console.log('Application Started');
            var data = SearchCtrl.getSearchData();
            UICtrl.setupMajorAnatomy(data);
            UICtrl.setupAddAnnotationRow();
            UICtrl.createTbl(AnnotationCtrl.getColumns(), AnnotationCtrl.getRows());
            UICtrl.createDataTable();
            UICtrl.placeDT();
            UICtrl.getRows();
        }
    }
})(SearchCtrl, UICtrl, AnnotationCtrl);

controller.init();