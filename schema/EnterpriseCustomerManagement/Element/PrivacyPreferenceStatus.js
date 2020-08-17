var Modeler = require("../Modeler.js");
var className = 'ElementPrivacyPreferenceStatus';

var ElementPrivacyPreferenceStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrivacyPreferenceStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "PrivacyPreferenceStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status for the privacy setting e.g. OUT (i.e., don't share), IN (i.e., share), PEND (i.e., pending or not yet decided) etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PrivacyPreferenceStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "PrivacyPreferenceStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status for the privacy setting e.g. OUT (i.e., don't share), IN (i.e., share), PEND (i.e., pending or not yet decided) etc."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrivacyPreferenceStatus;
Modeler.register(ElementPrivacyPreferenceStatus, "ElementPrivacyPreferenceStatus");
