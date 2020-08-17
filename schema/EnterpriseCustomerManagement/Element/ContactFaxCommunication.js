var Modeler = require("../Modeler.js");
var className = 'ElementContactFaxCommunication';

var ElementContactFaxCommunication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContactFaxCommunication: {
      type: "TypeContactFaxCommunicationType",
      wsdlDefinition: {
        name: "ContactFaxCommunication",
        type: "ContactFaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Fax Numbers associated with a Contact"
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
	  ContactFaxCommunication: {
      type: "TypeContactFaxCommunicationType",
      wsdlDefinition: {
        name: "ContactFaxCommunication",
        type: "ContactFaxCommunicationType",
        "xsd:annotation": {
          "xsd:documentation": "Fax Numbers associated with a Contact"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContactFaxCommunication;
Modeler.register(ElementContactFaxCommunication, "ElementContactFaxCommunication");
