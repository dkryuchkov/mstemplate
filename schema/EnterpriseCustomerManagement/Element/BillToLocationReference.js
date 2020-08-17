var Modeler = require("../Modeler.js");
var className = 'ElementBillToLocationReference';

var ElementBillToLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BillToLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "BillToLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference To a BillTo Location. A Bill To Location on a procurement identifies the location where the invoice is to be sent. The location within a Bill To Party is also considered to be the Bill To Location"
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
	  BillToLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "BillToLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference To a BillTo Location. A Bill To Location on a procurement identifies the location where the invoice is to be sent. The location within a Bill To Party is also considered to be the Bill To Location"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBillToLocationReference;
Modeler.register(ElementBillToLocationReference, "ElementBillToLocationReference");
