var Modeler = require("../Modeler.js");
var className = 'ElementPersonPartyReference';

var ElementPersonPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonPartyReference: {
      type: "TypePersonPartyReferenceType",
      wsdlDefinition: {
        name: "PersonPartyReference",
        type: "PersonPartyReferenceType",
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
	  PersonPartyReference: {
      type: "TypePersonPartyReferenceType",
      wsdlDefinition: {
        name: "PersonPartyReference",
        type: "PersonPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonPartyReference;
Modeler.register(ElementPersonPartyReference, "ElementPersonPartyReference");
