var Modeler = require("../Modeler.js");
var className = 'ElementAdjusterPartyReference';

var ElementAdjusterPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AdjusterPartyReference: {
      type: "TypeAdjusterPartyReferenceType",
      wsdlDefinition: {
        name: "AdjusterPartyReference",
        type: "AdjusterPartyReferenceType",
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
	  AdjusterPartyReference: {
      type: "TypeAdjusterPartyReferenceType",
      wsdlDefinition: {
        name: "AdjusterPartyReference",
        type: "AdjusterPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAdjusterPartyReference;
Modeler.register(ElementAdjusterPartyReference, "ElementAdjusterPartyReference");
