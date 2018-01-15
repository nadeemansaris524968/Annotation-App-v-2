var SearchCtrl = (function () {
    var data = {
        "Major Anatomic Region": [
            {
                "name": "Bones",
                "Subanatomy": [
                    {
                        "name": "Ribs",
                        "Findings": [
                            { "name": "Fracture" },
                            { "name": "Bone Lesion" },
                            { "name": "Metal bone implant or fixation hardware" }
                        ]
                    },
                    {
                        "name": "Cervical Spine",
                        "Findings": [
                            { "name": "Fracture" },
                            { "name": "Bone Lesion" },
                            { "name": "Metal bone implant or fixation hardware" },
                            { "name": "Scoliosis" },
                            { "name": "Spinal degenerative changes" }
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
                            { "name": "findings consistent with granulomatous" },
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

    return {
        setupFindings: function (searchData) {
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    }
                },
                theme: "plate-dark"
            };

            $('#example-findings').easyAutocomplete(options);
        },
        setupSubanatomy: function (searchData) {
            console.log('Subanatomy values ', JSON.stringify(searchData, undefined, 2));
            var options = {
                data: searchData,
                getValue: "name",
                list: {
                    match: {
                        enabled: true
                    },
                    onChooseEvent: function () {
                        var subanatomy = $("#example-subanatomy").val();
                        searchData.find(function(element){
                           if (element.name === subanatomy ) {
                               var findings = element["Findings"];
                               UICtrl.setupFindings(findings);
                           } 
                        });
                    }
                },
                theme: "plate-dark"
            };

            $("#example-subanatomy").easyAutocomplete(options);
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
                        var majorAnatomy = $("#example-major-anatomy").val();

                        searchData["Major Anatomic Region"].find(function (element) {
                            if (element.name === majorAnatomy) {
                                var subanatomy = element["Subanatomy"];
                                UICtrl.setupSubanatomy(subanatomy);
                            }
                        });
                    }
                }
            };

            $("#example-major-anatomy").easyAutocomplete(options);
        }
    }
})();

var controller = (function () {

    return {
        init: function () {
            console.log('Application Started');
            var data = SearchCtrl.getSearchData();
            UICtrl.setupMajorAnatomy(data);

        }
    }
})(SearchCtrl, UICtrl);

controller.init();