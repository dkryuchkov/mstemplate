var Modeler = require("../Modeler.js");
var className = 'ElementItemSubstitutionReason';

var ElementItemSubstitutionReason = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemSubstitutionReason: {
      type: "TypeItemSubstitutionReasonType",
      wsdlDefinition: {
        name: "ItemSubstitutionReason",
        type: "ItemSubstitutionReasonType",
        "xsd:annotation": {
          "xsd:documentation": "The reason for substituting an item with another item."
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
	  ItemSubstitutionReason: {
      type: "TypeItemSubstitutionReasonType",
      wsdlDefinition: {
        name: "ItemSubstitutionReason",
        type: "ItemSubstitutionReasonType",
        "xsd:annotation": {
          "xsd:documentation": "The reason for substituting an item with another item."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemSubstitutionReason;
Modeler.register(ElementItemSubstitutionReason, "ElementItemSubstitutionReason");
