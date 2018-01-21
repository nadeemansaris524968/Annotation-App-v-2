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
                "Findings": [
                    {
                        "name": "Arthropathy",
                        "Subanatomy": [
                            {
                                "name": "Acromioclavicular Joint",
                                "Laterality Modifier": [
                                    { "name": "Left" },
                                    { "name": "Right" }
                                ],
                                "Location Modifier 1": [
                                    { "name": "NA" }
                                ],
                                "Location Modifier 2": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers 1": [
                                    { "name": "NA" }
                                ],
                                "Character Modifiers 2": [
                                    { "name": "NA" }
                                ],
                                "Severity Modifier": [
                                    { "name": "Mild" },
                                    { "name": "Moderate" },
                                    { "name": "Severe" }
                                ],
                                "# Modifiers": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers Qualitative": [
                                    { "name": "NA" }
                                ],
                                "Size Modifiers Quantitative": [
                                    { "name": "NA" }
                                ]
                            }
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
        anatomy: '#anatomy',
        subanatomy: '#subanatomy',
        findings: '#findings',
        laterality: '#laterality',
        location_1: '#location_1',
        location_2: '#location_2',
        character_1: '#character_1',
        character_2: '#character_2',
        severity: '#severity',
        numModifier: '#numModifier',
        size_1: '#size_1',
        size_2: '#size_2',
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
        setupSize_2: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.size_2).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.size_2);
            });
        },
        setupSize_1: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.size_1).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.size_1);
            });
        },
        setupNumModifier: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.numModifier).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.numModifier);
            });
        },
        setupSeverity: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.severity).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.severity);
            });
        },
        setupCharacter_2: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.character_2).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.character_2);
            });
        },
        setupCharacter_1: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.character_1).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.character_1);
            });
        },
        setupLocation_2: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.location_2).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.location_2);
            });
        },
        setupLocation_1: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                }
            };

            $(DOMStrings.location_1).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.location_1);
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

            $(DOMStrings.laterality).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.laterality);
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
                        var subanatomy = $(DOMStrings.subanatomy).val();
                        searchData.find(function (element) {
                            if (element.name === subanatomy) {
                                var laterality = element["Laterality Modifier"];
                                var location_1 = element["Location Modifier 1"];
                                var location_2 = element["Location Modifier 2"];
                                var character_1 = element["Character Modifiers 1"];
                                var character_2 = element["Character Modifiers 2"];
                                var severity = element["Severity Modifier"];
                                var numModifier = element["# Modifiers"];
                                var size_1 = element["Size Modifiers Qualitative"];
                                var size_2 = element["Size Modifiers Quantitative"];
                                UICtrl.setupLaterality(laterality);
                                UICtrl.setupLocation_1(location_1);
                                UICtrl.setupLocation_2(location_2);
                                UICtrl.setupCharacter_1(character_1);
                                UICtrl.setupCharacter_2(character_2);
                                UICtrl.setupSeverity(severity);
                                UICtrl.setupNumModifier(numModifier);
                                UICtrl.setupSize_1(size_1);
                                UICtrl.setupSize_2(size_2);
                            }
                        });
                    }
                },
                theme: "plate-dark"
            };

            $(DOMStrings.subanatomy).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.subanatomy);
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
                        var finding = $(DOMStrings.findings).val();
                        searchData.find(function (element) {
                            if (element.name === finding) {
                                var subanatomy = element["Subanatomy"];
                                UICtrl.setupSubanatomy(subanatomy);
                            }
                        });
                    }
                },
                theme: "plate-dark"
            };

            $(DOMStrings.findings).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.findings);
            });
        },
        setupAnatomy: function (searchData) {

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
                        var majorAnatomy = $(DOMStrings.anatomy).val();

                        searchData["Major Anatomic Region"].find(function (element) {
                            if (element.name === majorAnatomy) {
                                var findings = element["Findings"];
                                UICtrl.setupFindings(findings);
                            }
                        });
                    }
                }
            };

            $(DOMStrings.anatomy).easyAutocomplete(options).focus(function () {
                triggerFocus(DOMStrings.anatomy);
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
            UICtrl.setupAnatomy(data);
            UICtrl.setupAddAnnotationRow();
            UICtrl.createTbl(AnnotationCtrl.getColumns(), AnnotationCtrl.getRows());
            UICtrl.createDataTable();
            UICtrl.placeDT();
            UICtrl.getRows();
        }
    }
})(SearchCtrl, UICtrl, AnnotationCtrl);

controller.init();