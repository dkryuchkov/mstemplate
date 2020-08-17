var Modeler = require("../Modeler.js");
var className = 'ElementFaxCommunication';

var ElementFaxCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        name: "FaxCommunication",
        type: "FaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the fax number of an  organization or person, including information about how that fax number is used"
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
	  FaxCommunication: {
      type: "TypeFaxCommunicationType",
      wsdlDefinition: {
        name: "FaxCommunication",
        type: "FaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the fax number of an  organization or person, including information about how that fax number is used"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFaxCommunication;
Modeler.register(ElementFaxCommunication, "ElementFaxCommunication");
