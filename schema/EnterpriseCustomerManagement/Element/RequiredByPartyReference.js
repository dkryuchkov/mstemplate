var Modeler = require("../Modeler.js");
var className = 'ElementRequiredByPartyReference';

var ElementRequiredByPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequiredByPartyReference: {
      type: "TypeRequiredByPartyReferenceType",
      wsdlDefinition: {
        name: "RequiredByPartyReference",
        type: "RequiredByPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The person or party that requires an item or service on a requisition"
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
	  RequiredByPartyReference: {
      type: "TypeRequiredByPartyReferenceType",
      wsdlDefinition: {
        name: "RequiredByPartyReference",
        type: "RequiredByPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The person or party that requires an item or service on a requisition"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRequiredByPartyReference;
Modeler.register(ElementRequiredByPartyReference, "ElementRequiredByPartyReference");
